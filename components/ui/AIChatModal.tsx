
import React, { useState, useRef, useEffect } from 'react';
import { X, Sparkles, Search, Loader2, ArrowRight, CornerDownLeft } from 'lucide-react';
import { sendMessageStream, resetChat } from '@/services/geminiService';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface AIChatModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AIChatModal: React.FC<AIChatModalProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Auto-focus input when opened
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
      // Reset state when opening
      setQuery('');
      setResponse(null);
    }
  }, [isOpen]);

  // Auto-scroll to bottom when response updates
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [response, isLoading]);

  const handleSearch = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!query.trim() || isLoading) return;

    setIsLoading(true);
    setResponse(null); // Clear previous response for Spotlight feel

    const currentQuery = query;
    setQuery("");

    try {
      const streamResult = await sendMessageStream(currentQuery);
      let fullText = "";

      for await (const chunk of streamResult) {
        if (chunk.text) {
          fullText += chunk.text;
          setResponse(fullText);
        }
      }
    } catch (error) {
      setResponse("Protocol Error: Unable to reach knowledge base.");
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-start justify-center pt-[15vh] px-4 bg-black/40 backdrop-blur-md animate-in fade-in duration-300"
      onClick={onClose}
    >
      <div 
        className="w-full max-w-2xl bg-[#0a0a0a]/90 backdrop-blur-3xl border border-white/10 rounded-2xl shadow-[0_0_50px_rgba(0,0,0,0.5),0_0_1px_rgba(255,255,255,0.1)] overflow-hidden transition-all duration-500 ease-out"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Input Bar */}
        <div className="relative flex items-center p-5 gap-4">
          <Search size={22} className="text-white/20 ml-2" />
          <form onSubmit={handleSearch} className="flex-1">
            <input 
              ref={inputRef}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Ask anything about my experience or stack..."
              className="w-full bg-transparent code-text border-none outline-none text-xl text-white placeholder:text-white/10 font-light"
            />
          </form>
          <div className="flex items-center gap-2 pr-2">
            {!isLoading && query && (
               <div className="flex items-center gap-1.5 px-2 py-1 rounded bg-white/5 border border-white/10 text-[10px] text-white/40 font-mono">
                  <CornerDownLeft size={10} />
                  <span>SEARCH</span>
               </div>
            )}
            <button 
              onClick={onClose}
              className="p-1.5 rounded-lg hover:bg-white/5 text-white/20 hover:text-white transition-colors"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Dynamic Result Area */}
        {(isLoading || response) && (
          <div className="border-t border-white/5 animate-in slide-in-from-top-4 duration-500">
            {/* Thinking Shimmer */}
            {isLoading && (
              <div className="h-0.5 w-full overflow-hidden relative bg-white/5">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[hsl(var(--hero-glow))] to-transparent w-1/2 animate-[shimmer_1.5s_infinite]" />
              </div>
            )}

            <div ref={scrollRef} className="p-8 space-y-6 max-h-[60vh] overflow-y-auto custom-scrollbar">
              {isLoading ? (
                <div className="flex items-center gap-3 text-white/20 font-mono text-[11px] uppercase tracking-[0.3em]">
                  <Loader2 size={14} className="animate-spin" />
                  <span>Synthesizing Response...</span>
                </div>
              ) : (
                <div className="space-y-4 animate-in fade-in slide-in-from-bottom-2 duration-700">
                   <div className="flex items-center gap-2 mb-2">
                      <Sparkles size={14} className="text-[hsl(var(--hero-glow))]" />
                      <span className="text-[10px] font-black text-white/30 uppercase tracking-[0.2em]">Architect Query Result</span>
                   </div>
                   <div className="text-white/80 text-lg leading-relaxed font-light prose prose-invert max-w-none code-text">
                     <ReactMarkdown remarkPlugins={[remarkGfm]}>
                       {response || ''}
                     </ReactMarkdown>
                   </div>
                   
                   {/* Suggestion / Footer */}
                   <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                         <span className="text-[9px] font-mono text-white/20 uppercase">Source: Project Dossier 1.0</span>
                      </div>
                      <button 
                        onClick={() => { 
                          setQuery(''); 
                          setResponse(null); 
                          resetChat();
                          inputRef.current?.focus(); 
                        }}
                        className="text-[10px] font-bold text-[hsl(var(--hero-accent))] hover:text-white transition-colors uppercase tracking-widest flex items-center gap-2"
                      >
                         New Query <ArrowRight size={12} />
                      </button>
                   </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Command Palette Footer */}
        {!response && !isLoading && (
          <div className="px-6 py-4 border-t border-white/5 bg-white/[0.01] flex items-center gap-6">
            <div className="flex items-center gap-2">
               <span className="px-1.5 py-0.5 rounded bg-white/10 text-[9px] font-mono text-white/60">ESC</span>
               <span className="text-[9px] font-mono text-white/30 uppercase tracking-widest">To Close</span>
            </div>
            <div className="flex items-center gap-2">
               <span className="px-1.5 py-0.5 rounded bg-white/10 text-[9px] font-mono text-white/60">ENTER</span>
               <span className="text-[9px] font-mono text-white/30 uppercase tracking-widest">To Execute</span>
            </div>
            <div className="ml-auto flex items-center gap-2">
               <div className="w-1.5 h-1.5 rounded-full bg-[hsl(var(--hero-accent))]" />
               <span className="text-[9px] font-mono text-white/30 uppercase tracking-widest">Systems Ready</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AIChatModal;
