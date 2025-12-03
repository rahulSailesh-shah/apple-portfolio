import { NextRequest, NextResponse } from "next/server";
import { GoogleGenAI } from "@google/genai";
import { SYSTEM_PROMPT } from "@/constants";

// Initialize the Gemini Client on the server side
const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY || "",
});

// Store chat sessions with timestamp
interface SessionData {
  chatSession: any;
  lastAccessed: number;
}

const chatSessions = new Map<string, SessionData>();

// Configuration
const SESSION_TIMEOUT = 0.5 * 60 * 1000; // 30 minutes
const MAX_SESSIONS = 100; // Maximum concurrent sessions
const CLEANUP_INTERVAL = 0.5 * 60 * 1000; // Cleanup every 5 minutes

// Cleanup expired sessions
function cleanupExpiredSessions() {
  const now = Date.now();
  const expiredKeys: string[] = [];

  chatSessions.forEach((session, sessionId) => {
    if (now - session.lastAccessed > SESSION_TIMEOUT) {
      expiredKeys.push(sessionId);
    }
  });

  expiredKeys.forEach((key) => chatSessions.delete(key));
}

// Remove oldest sessions if limit exceeded
function enforceSessionLimit() {
  if (chatSessions.size <= MAX_SESSIONS) return;

  const sessions = Array.from(chatSessions.entries()).sort(
    (a, b) => a[1].lastAccessed - b[1].lastAccessed
  );

  const toRemove = sessions.slice(0, chatSessions.size - MAX_SESSIONS);
  toRemove.forEach(([sessionId]) => chatSessions.delete(sessionId));
}

// Run cleanup periodically
let cleanupTimer: NodeJS.Timeout | null = null;
if (!cleanupTimer) {
  cleanupTimer = setInterval(() => {
    cleanupExpiredSessions();
  }, CLEANUP_INTERVAL);
}

export async function POST(request: NextRequest) {
  try {
    const { message, sessionId, action } = await request.json();

    // Validate API key
    if (!process.env.GEMINI_API_KEY) {
      return NextResponse.json(
        { error: "API key not configured" },
        { status: 500 }
      );
    }

    // Handle reset action
    if (action === "reset") {
      chatSessions.delete(sessionId);
      return NextResponse.json({ success: true });
    }

    // Validate message
    if (!message || typeof message !== "string") {
      return NextResponse.json(
        { error: "Message is required" },
        { status: 400 }
      );
    }

    // Get or create chat session
    let sessionData = chatSessions.get(sessionId);

    if (!sessionData) {
      // Enforce session limit before creating new session
      enforceSessionLimit();

      const chatSession = ai.chats.create({
        model: "gemini-2.5-flash",
        config: {
          systemInstruction: SYSTEM_PROMPT,
        },
      });

      sessionData = {
        chatSession,
        lastAccessed: Date.now(),
      };

      chatSessions.set(sessionId, sessionData);
    } else {
      // Update last accessed time
      sessionData.lastAccessed = Date.now();
    }

    // Send message and stream response
    const streamResult = await sessionData.chatSession.sendMessageStream({
      message,
    });

    // Create a readable stream for the response
    const encoder = new TextEncoder();
    const stream = new ReadableStream({
      async start(controller) {
        try {
          for await (const chunk of streamResult) {
            if (chunk.text) {
              const data = JSON.stringify({ text: chunk.text }) + "\n";
              controller.enqueue(encoder.encode(data));
            }
          }
          controller.close();
        } catch (error) {
          controller.error(error);
        }
      },
    });

    return new Response(stream, {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Cache-Control": "no-cache",
        Connection: "keep-alive",
      },
    });
  } catch (error) {
    console.error("Chat API error:", error);
    return NextResponse.json(
      { error: "Failed to process chat request" },
      { status: 500 }
    );
  }
}
