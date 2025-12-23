
import React, { useRef, useEffect, useState } from 'react';
import { 
  Terminal, Database, Cpu, Zap, Activity, Ghost, Orbit, Radiation, 
  Brain, Eye, Skull, Globe, Command, Box, Lock, ShieldX, UserMinus, 
  Flame, Crosshair, Cpu as Chip, Zap as Bolt, Award, Trophy, Timer,
  TrendingUp, BarChart3, Fingerprint, Layers, Workflow, Code
} from 'lucide-react';
import { LineChart, Line, ResponsiveContainer, XAxis, YAxis, Tooltip as RechartsTooltip } from 'recharts';

// Component providing a technical HUD overlay in the top left.
export const HUD = () => {
  const [data, setData] = useState<string[]>([]);
  useEffect(() => {
    const interval = setInterval(() => {
      const bits = Math.random().toString(2).slice(2, 10);
      const loc = Math.random() > 0.8 ? "LOC: SF_CA" : `NODE_${bits}: STABLE`;
      setData(prev => [...prev.slice(-10), loc]);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed top-10 left-10 z-[500] mono text-[10px] text-white/40 space-y-1 pointer-events-none hidden lg:block">
      <div className="flex gap-2 items-center text-white font-bold">
        <div className="w-2 h-2 bg-red-600 rounded-full animate-pulse" />
        SYSTEM_OVERRIDE_ACTIVE // ARJUN_ROOT
      </div>
      {data.map((d, i) => <div key={i}>{d}</div>)}
    </div>
  );
};

// Component creating a background matrix-style code rain effect.
export const CodeRain = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const columns = Math.floor(canvas.width / 20);
    const drops = new Array(columns).fill(1);

    const draw = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = '#111';
      ctx.font = '15px Courier';
      for (let i = 0; i < drops.length; i++) {
        const text = String.fromCharCode(Math.random() * 128);
        ctx.fillText(text, i * 20, drops[i] * 20);
        if (drops[i] * 20 > canvas.height && Math.random() > 0.975) drops[i] = 0;
        drops[i]++;
      }
    };
    const interval = setInterval(draw, 33);
    return () => clearInterval(interval);
  }, []);
  return <canvas ref={canvasRef} className="fixed inset-0 z-0 opacity-20 pointer-events-none" />;
};

// Component visualizing MRR growth trajectory using a line chart.
export const MRRTrajectory = ({ mode = 'demon' }: { mode?: 'demon' | 'zen' }) => {
  const isZen = mode === 'zen';
  const data = [
    { month: 'Jan', mrr: 1200 },
    { month: 'Feb', mrr: 2800 },
    { month: 'Mar', mrr: 5600 },
    { month: 'Apr', mrr: 12000 },
    { month: 'May', mrr: 24000 },
    { month: 'Jun', mrr: 48000 },
    { month: 'Jul', mrr: 82000 },
    { month: 'Aug', mrr: 100000 },
  ];

  if (isZen) {
    return (
      <section className="py-80 px-4 bg-transparent transition-all duration-1000">
        <div className="max-w-4xl mx-auto space-y-20">
          <div className="text-center space-y-6">
            <h2 className="text-6xl font-light tracking-tighter">Growth Metrics.</h2>
            <p className="text-white/40 max-w-md mx-auto">Scaling with deliberate intensity. $100K MRR target.</p>
          </div>
          <div className="flex justify-center gap-20 opacity-20">
             <div className="text-center">
                <div className="text-4xl font-light">$1.2k</div>
                <div className="text-[10px] tracking-widest uppercase mt-2">JAN</div>
             </div>
             <div className="text-center">
                <div className="text-4xl font-light">$100k</div>
                <div className="text-[10px] tracking-widest uppercase mt-2">TARGET</div>
             </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-60 px-4 bg-white text-black relative z-10 border-y-[40px] border-black">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div>
          <h2 className="text-[10vw] font-black syne leading-[0.7] tracking-tighter uppercase mb-10 italic">
            ROADMAP<br/>TO 100K.
          </h2>
          <p className="text-3xl font-bold uppercase italic mb-8">
            Documenting the journey from 0 to 100k MRR with Ideatr. No fluff, just pure distribution.
          </p>
          <div className="flex gap-10">
            <div className="p-8 bg-black text-white -rotate-3 hover:rotate-0 transition-transform cursor-crosshair">
              <TrendingUp size={48} className="mb-4 text-cyan-400" />
              <div className="text-5xl font-black">EXPONENTIAL</div>
              <p className="mono text-xs opacity-50">GROWTH_MODE_ENABLED</p>
            </div>
            <div className="p-8 border-4 border-black rotate-2 hover:rotate-0 transition-transform cursor-crosshair">
              <BarChart3 size={48} className="mb-4 text-red-600" />
              <div className="text-5xl font-black">UNSTOPPABLE</div>
              <p className="mono text-xs opacity-50">DISTRIBUTION_ACTIVE</p>
            </div>
          </div>
        </div>
        <div className="h-[500px] border-[10px] border-black p-8 relative overflow-hidden group">
          <div className="absolute inset-0 bg-red-600/5 group-hover:bg-red-600/10 transition-colors pointer-events-none" />
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <XAxis dataKey="month" hide />
              <YAxis hide />
              <RechartsTooltip 
                contentStyle={{ backgroundColor: '#000', border: 'none', color: '#fff', fontFamily: 'Fira Code', fontWeight: 'bold' }} 
                itemStyle={{ color: '#00ff41' }}
              />
              <Line 
                type="monotone" 
                dataKey="mrr" 
                stroke="#000" 
                strokeWidth={8} 
                dot={{ r: 8, fill: '#000' }} 
                activeDot={{ r: 12, fill: '#ff0000' }} 
              />
            </LineChart>
          </ResponsiveContainer>
          <div className="absolute bottom-10 right-10 text-9xl font-black opacity-10 pointer-events-none syne">$100K</div>
        </div>
      </div>
    </section>
  );
};

// Component showcasing technical stack with interactive icons.
export const TechArsenal = ({ mode = 'demon' }: { mode?: 'demon' | 'zen' }) => {
  const isZen = mode === 'zen';
  const stack = [
    { name: 'NEXT.JS', icon: Globe },
    { name: 'TYPESCRIPT', icon: Code },
    { name: 'GEMINI_AI', icon: Brain },
    { name: 'RUST', icon: Radiation },
    { name: 'TAILWIND', icon: Flame },
    { name: 'SUPABASE', icon: Database },
    { name: 'FRAMER', icon: Box },
    { name: 'VERCEL', icon: Zap },
  ];

  if (isZen) {
    return (
      <section className="py-80 bg-transparent text-white transition-all duration-1000">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-4xl font-light tracking-tighter mb-20 text-center opacity-40">Arsenal.</h2>
          <div className="flex flex-wrap justify-center gap-x-20 gap-y-12">
            {stack.map((s, i) => (
              <div key={i} className="group flex flex-col items-center gap-4 opacity-40 hover:opacity-100 transition-opacity">
                <s.icon size={24} strokeWidth={1} />
                <span className="text-[10px] tracking-[0.5em]">{s.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-60 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-[8vw] font-black syne italic uppercase tracking-tighter mb-20 text-center">THE_ARS_STACK</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stack.map((s, i) => (
            <div key={i} className="group relative aspect-square border-4 border-white p-10 flex flex-col items-center justify-center hover:bg-white hover:text-black transition-all cursor-none overflow-hidden">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity"><s.icon size={200} /></div>
              <s.icon size={64} className="mb-6 group-hover:scale-125 transition-transform" />
              <span className="text-2xl font-black syne italic uppercase">{s.name}</span>
              <div className="absolute top-4 right-4 text-[10px] mono opacity-50 group-hover:opacity-100">0x{i}F</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Component displaying a scrolling marquee of "hater" comments.
export const HaterFeed = () => (
  <div className="bg-red-600 py-10 overflow-hidden border-y-8 border-black">
    <div className="flex whitespace-nowrap animate-marquee-reverse">
      {[...Array(10)].map((_, i) => (
        <span key={i} className="mx-10 text-4xl font-black text-white italic syne uppercase">
          "YOU'RE TOO YOUNG" // "THIS WON'T WORK" // "AI IS A BUBBLE" // "ARJUN IS JUST A KID" // WATCH ME. //
        </span>
      ))}
    </div>
    <style>{`
      @keyframes marquee-reverse { 0% { transform: translateX(-50%); } 100% { transform: translateX(0); } }
      .animate-marquee-reverse { animation: marquee-reverse 20s linear infinite; }
    `}</style>
  </div>
);

// Component celebrating Stanford GSB LISA incubator success.
export const StanfordGlory = ({ mode = 'demon' }: { mode?: 'demon' | 'zen' }) => {
  const isZen = mode === 'zen';
  if (isZen) {
    return (
      <section className="py-80 bg-transparent relative transition-all duration-1000">
        <div className="max-w-3xl mx-auto px-4 text-center space-y-12">
          <p className="text-xs tracking-[0.8em] text-white/20 uppercase">Validation at Scale</p>
          <h2 className="text-7xl font-light tracking-tighter">Stanford LISA</h2>
          <p className="text-xl font-light text-white/40 leading-relaxed">
            Youngest winner in history. Incubated at the edge of genius.
          </p>
          <div className="pt-10">
            <span className="text-xs border border-white/10 px-6 py-2 rounded-full opacity-30 uppercase tracking-widest">GSB // THE_ROOTED</span>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-80 bg-black overflow-hidden relative border-y-[20px] border-white">
      <div className="absolute inset-0 opacity-5 grayscale bg-[url('https://images.unsplash.com/photo-1541339907198-e08756ebafe1?q=80&w=2070&auto=format&fit=crop')] bg-cover" />
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row gap-20 items-center">
          <div className="flex-1 space-y-10">
            <div className="inline-flex items-center gap-4 bg-white text-black px-6 py-2 font-black uppercase italic">
              <Trophy size={24} /> STANFORD GSB LISA WINNER
            </div>
            <h2 className="text-[10vw] font-black syne leading-[0.8] tracking-tighter uppercase italic">
              YOUNGEST<br/>EVER.
            </h2>
            <p className="text-4xl font-light text-white/50 leading-tight">
              I didn't just participate. I dominated. Incubation at the highest level while most kids were doing homework.
            </p>
            <div className="p-8 border-4 border-white bg-white/5 backdrop-blur-md">
              <p className="mono text-xl">PROJECT: <span className="text-white font-black underline">THEROOTED.AI</span></p>
              <p className="mono text-sm text-gray-400 mt-2">STATUS: VALIDATED // INCUBATED // DISRUPTIVE</p>
            </div>
          </div>
          <div className="flex-1 w-full flex justify-center">
            <div className="w-80 h-80 bg-white rounded-full flex items-center justify-center animate-[spin_10s_linear_infinite] p-4">
               <div className="w-full h-full border-8 border-dashed border-black rounded-full flex items-center justify-center">
                  <Skull size={120} className="text-black" />
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Component illustrating high-velocity shipping protocol.
export const VelocityProtocol = ({ mode = 'demon' }: { mode?: 'demon' | 'zen' }) => {
  const isZen = mode === 'zen';
  if (isZen) {
    return (
      <section className="py-80 bg-transparent transition-all duration-1000">
        <div className="max-w-4xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
          <div className="space-y-8">
            <h2 className="text-6xl font-light tracking-tighter">7 Days. 10 Apps.</h2>
            <p className="text-xl font-light text-white/40 leading-relaxed">
              Velocity is the only metric that matters. Shipping at the speed of thought.
            </p>
          </div>
          <div className="space-y-4 opacity-30">
            {["Idea to Code in 6hrs", "Automated Scalability", "Market Infiltration"].map((txt, i) => (
              <div key={i} className="text-sm tracking-widest uppercase py-4 border-b border-white/10">{txt}</div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-60 px-4 bg-red-600 text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle,rgba(0,0,0,0.1)_1px,transparent_1px)] bg-[length:20px_20px]" />
      <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
       <div>
         <h2 className="text-[12vw] font-black syne leading-[0.7] mb-10 tracking-tighter uppercase italic">
           7 DAYS.<br/>10 APPS.
         </h2>
         <p className="text-3xl font-black uppercase italic mb-10 bg-black text-white p-4 inline-block -rotate-2">BUILD FAST SHIP FAST</p>
         <div className="space-y-6">
           {[
             "Phase 1: Concept to Code in < 6hrs",
             "Phase 2: Deployment via GitHub actions",
             "Phase 3: Automated Growth Triggers",
             "Phase 4: Scale to the moon"
           ].map((p, i) => (
             <div key={i} className="flex items-center gap-6 border-b-2 border-white/20 pb-4">
                <Timer className="shrink-0" size={32} />
                <span className="text-2xl font-bold uppercase">{p}</span>
             </div>
           ))}
         </div>
       </div>
       <div className="grid grid-cols-2 gap-4">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="aspect-square bg-black border-4 border-white flex flex-col items-center justify-center gap-4 hover:invert transition-all">
               <Zap size={64} className="text-red-600" />
               <span className="mono text-xs">APP_NODE_{i+1}</span>
            </div>
          ))}
       </div>
      </div>
    </section>
  );
};

// Component providing a 3D grid layout for core projects.
export const TheVoidGrid = ({ mode = 'demon' }: { mode?: 'demon' | 'zen' }) => {
  const isZen = mode === 'zen';
  if (isZen) {
    return (
      <section className="py-80 bg-transparent transition-all duration-1000">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            { title: "IDEATR.DEV", desc: "Apps at the speed of thought." },
            { title: "LISA_STARTUP", desc: "Stanford validated excellence." },
            { title: "7_DAYS_10_APPS", desc: "Pure velocity." }
          ].map((card, i) => (
            <div key={i} className="space-y-6 group opacity-40 hover:opacity-100 transition-opacity">
              <h4 className="text-2xl font-light tracking-tighter">{card.title}</h4>
              <p className="text-sm font-light text-white/60">{card.desc}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-black py-40 perspective-3000 overflow-hidden relative">
      <div className="absolute inset-0 opacity-10 grid grid-cols-12 gap-1 pointer-events-none transform rotate-x-45 -translate-y-40">
        {[...Array(144)].map((_, i) => (
          <div key={i} className="aspect-square border border-white/20 hover:bg-white transition-colors duration-100" />
        ))}
      </div>
      <div className="relative z-10 w-full max-w-[95vw] lg:max-w-[1400px] mx-auto px-4 lg:px-10">
        <div className="flex flex-col items-center">
          <h2 className="text-[15vw] syne font-black mb-20 text-void animate-pulse tracking-tighter">SF_PRIME</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-16 w-full items-stretch">
            {[
              { icon: Lock, title: "IDEATR.DEV", desc: "Apps at the speed of thought. Built for builders who don't have time to wait." },
              { icon: ShieldX, title: "LISA_STARTUP", desc: "Youngest winner ever. Validated by Stanford GSB. Built the impossible." },
              { icon: UserMinus, title: "7_DAYS_10_APPS", desc: "Pure velocity. Build fast, ship fast. No cap, just shipping." }
            ].map((card, i) => (
              <div key={i} className="bg-white/5 border border-white/10 p-10 lg:p-14 hover:bg-white hover:text-black transition-all group cursor-none flex flex-col justify-between h-full min-h-[420px] overflow-hidden">
                <div className="w-full">
                  <card.icon size={64} className="mb-10 group-hover:scale-110 transition-transform shrink-0" />
                  <h4 className="text-[clamp(2rem,5vw,3.5rem)] font-black syne mb-8 uppercase italic tracking-tight leading-[0.8] break-words whitespace-normal">
                    {card.title}
                  </h4>
                  <p className="text-xl xl:text-2xl font-light opacity-60 group-hover:opacity-100 uppercase italic leading-tight">
                    "{card.desc}"
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Component rendering a massive scrolling marquee.
export const MassiveMarquee = () => (
  <div className="bg-white py-20 border-y-[10px] border-black overflow-hidden -rotate-2 scale-110">
    <div className="flex whitespace-nowrap animate-marquee uppercase italic">
      {[...Array(10)].map((_, i) => (
        <span key={i} className="mx-10 text-9xl font-black text-black italic syne uppercase">
          ARJUN SHAH // IDEATR.DEV // STANFORD LISA // BUILD FAST SHIP FAST //
        </span>
      ))}
    </div>
    <style>{`
      @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
      .animate-marquee { animation: marquee 30s linear infinite; }
    `}</style>
  </div>
);

// Component simulating an aggressive terminal with live scrolling logs.
export const TerminalAggressive = () => {
  const [lines, setLines] = useState<string[]>([]);
  useEffect(() => {
    const logs = [
      "BREACHING CLOUD_INFRA...", "IDEATR_V2_DEPLOYING...", "LISA_INCUBATOR_VALIDATED",
      "SUCCESS: ARJUN_ROOT_INITIATED", "10_APPS_IN_7_DAYS_COMPLETED", "OPTIMIZING_MRR_TO_100K",
      "WARN: EXCESSIVE_SPEED_DETECTED", "PATCHING_REALITY_WITH_CODE", "STATUS: ASCENDED_SF"
    ];
    let i = 0;
    const interval = setInterval(() => {
      setLines(prev => [...prev.slice(-15), `>> ${logs[i % logs.length]}`]);
      i++;
    }, 400);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-black border-[10px] border-white p-10 mono text-white text-lg h-[600px] overflow-hidden relative shadow-[0_0_100px_rgba(255,255,255,0.1)]">
      <div className="absolute top-0 right-0 p-4 opacity-10"><Terminal size={200} /></div>
      <div className="flex gap-4 mb-8 border-b-2 border-white pb-4">
        <div className="w-4 h-4 bg-red-600" /><div className="w-4 h-4 bg-yellow-600" /><div className="w-4 h-4 bg-green-600" />
      </div>
      {lines.map((l, i) => <div key={i} className="mb-2 last:bg-white last:text-black uppercase italic">{l}</div>)}
    </div>
  );
};
