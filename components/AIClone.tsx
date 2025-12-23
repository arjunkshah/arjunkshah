
import React, { useState, useRef, useEffect } from 'react';
import { askArjunAI } from '../services/geminiService';
import { Send, Bot, User, Cpu, Sparkles } from 'lucide-react';

const AIClone: React.FC<{ mode?: 'demon' | 'zen' }> = ({ mode = 'demon' }) => {
  const isZen = mode === 'zen';
  const [messages, setMessages] = useState<{ role: 'user' | 'bot'; text: string }[]>([
    { role: 'bot', text: isZen ? "How can I assist your vision today?" : "Yo! I'm Arjun's digital twin. Ask me about quantum startups or why your code sucks. No cap." }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const isFirstRender = useRef(true);

  const handleSend = async () => {
    if (!input.trim() || loading) return;
    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setLoading(true);

    const response = await askArjunAI(userMsg);
    setMessages(prev => [...prev, { role: 'bot', text: response }]);
    setLoading(false);
  };

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    
    if (messages.length > 1 && scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({
        top: scrollContainerRef.current.scrollHeight,
        behavior: 'smooth'
      });
    }
  }, [messages]);

  if (isZen) {
    return (
      <section className="py-40 px-4 transition-all duration-1000">
        <div className="max-w-xl mx-auto space-y-12">
          <div className="text-center opacity-40">
            <h3 className="text-xs tracking-[1em] uppercase">The Oracle</h3>
          </div>
          <div 
            ref={scrollContainerRef}
            className="h-[400px] overflow-y-auto space-y-8 scrollbar-hide pr-4"
          >
            {messages.map((m, i) => (
              <div key={i} className="space-y-2">
                <p className={`text-[10px] tracking-widest uppercase opacity-20 ${m.role === 'user' ? 'text-right' : 'text-left'}`}>
                  {m.role === 'user' ? 'GUEST' : 'ARJUN'}
                </p>
                <p className={`text-sm font-light leading-relaxed ${m.role === 'user' ? 'text-right' : 'text-left text-white/60'}`}>
                  {m.text}
                </p>
              </div>
            ))}
          </div>
          <div className="flex gap-4 border-b border-white/10 pb-4">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Speak..."
              className="flex-1 bg-transparent text-white focus:outline-none font-light tracking-wide cursor-text"
            />
            <button onClick={handleSend} className="opacity-20 hover:opacity-100 transition-opacity"><Send size={18} /></button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-black to-blue-900/20 relative">
      <div className="max-w-4xl mx-auto border-2 border-white/20 rounded-3xl overflow-hidden bg-black/40 backdrop-blur-3xl shadow-2xl">
        <div className="bg-white/10 p-6 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-cyan-400 to-pink-500 flex items-center justify-center p-1">
              <div className="w-full h-full rounded-full bg-black flex items-center justify-center overflow-hidden">
                <img src="https://picsum.photos/100/100?u=arjun" alt="Arjun Clone" />
              </div>
            </div>
            <div>
              <h3 className="font-black syne text-xl">ARJUN_CLONE.EXE</h3>
              <p className="text-[10px] text-cyan-400 font-mono flex items-center gap-1">
                <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
                NEURAL UPLINK ACTIVE
              </p>
            </div>
          </div>
          <Cpu className="text-white/20" size={32} />
        </div>

        <div 
          ref={scrollContainerRef}
          className="h-[500px] overflow-y-auto p-6 space-y-6 scrollbar-hide scroll-smooth"
        >
          {messages.map((m, i) => (
            <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[80%] p-4 rounded-2xl flex gap-3 ${
                m.role === 'user' 
                ? 'bg-cyan-500 text-black font-bold rounded-tr-none' 
                : 'bg-white/5 border border-white/10 text-white rounded-tl-none'
              }`}>
                {m.role === 'bot' && <Sparkles size={16} className="text-pink-400 shrink-0 mt-1" />}
                <p className="text-sm md:text-base leading-relaxed">{m.text}</p>
              </div>
            </div>
          ))}
          {loading && (
            <div className="flex justify-start">
              <div className="bg-white/5 p-4 rounded-2xl rounded-tl-none border border-white/10 flex gap-2">
                <div className="w-2 h-2 bg-white/20 rounded-full animate-bounce" />
                <div className="w-2 h-2 bg-white/20 rounded-full animate-bounce [animation-delay:0.2s]" />
                <div className="w-2 h-2 bg-white/20 rounded-full animate-bounce [animation-delay:0.4s]" />
              </div>
            </div>
          )}
        </div>

        <div className="p-6 bg-white/5 border-t border-white/10">
          <div className="flex gap-4">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask me something crazy..."
              className="flex-1 bg-white/10 border border-white/20 rounded-xl px-6 py-4 focus:outline-none focus:border-cyan-400 transition-colors cursor-text"
            />
            <button 
              onClick={handleSend}
              className="w-14 h-14 bg-white text-black rounded-xl flex items-center justify-center hover:bg-cyan-400 transition-colors"
            >
              <Send size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIClone;
