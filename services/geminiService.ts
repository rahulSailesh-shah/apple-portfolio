// Generate a unique session ID for this browser session
let sessionId = "";
if (typeof window !== "undefined") {
  sessionId = sessionStorage.getItem("chatSessionId") || "";
  if (!sessionId) {
    sessionId = `session_${Date.now()}_${Math.random()
      .toString(36)
      .substr(2, 9)}`;
    sessionStorage.setItem("chatSessionId", sessionId);
  }
}

export const sendMessageStream = async (message: string) => {
  const response = await fetch("/api/chat", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      message,
      sessionId,
    }),
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  // Parse the streaming response
  const reader = response.body?.getReader();
  const decoder = new TextDecoder();

  if (!reader) {
    throw new Error("No response body");
  }

  // Create an async iterable that matches the expected format
  return {
    async *[Symbol.asyncIterator]() {
      try {
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;

          const chunk = decoder.decode(value, { stream: true });
          const lines = chunk.split("\n").filter((line) => line.trim());

          for (const line of lines) {
            try {
              const data = JSON.parse(line);
              if (data.text) {
                yield { text: data.text };
              }
            } catch (e) {
              // Skip invalid JSON lines
              console.warn("Failed to parse chunk:", line);
            }
          }
        }
      } finally {
        reader.releaseLock();
      }
    },
  };
};

export const resetChat = async () => {
  try {
    await fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        action: "reset",
        sessionId,
      }),
    });

    // Generate a new session ID
    if (typeof window !== "undefined") {
      sessionId = `session_${Date.now()}_${Math.random()
        .toString(36)
        .substr(2, 9)}`;
      sessionStorage.setItem("chatSessionId", sessionId);
    }
  } catch (error) {
    console.error("Failed to reset chat:", error);
  }
};
