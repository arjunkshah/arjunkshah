
import React, { useEffect, useState, useRef } from 'react';
import Hero from './components/Hero';
import BentoSection from './components/BentoSection';
import AIClone from './components/AIClone';
import CustomCursor from './components/CustomCursor';
import ModePicker from './components/ModePicker';
import { 
    HUD,
    CodeRain,
    TheVoidGrid,
    MassiveMarquee,
    TerminalAggressive,
    StanfordGlory,
    VelocityProtocol,
    MRRTrajectory,
    TechArsenal,
    HaterFeed
} from './components/SensoryOverload';
import { NAVIGATION } from './constants';

const App: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);
  const [viewMode, setViewMode] = useState<'demon' | 'zen'>('demon');
  const [hasPicked, setHasPicked] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handlePick = (mode: 'demon' | 'zen') => {
    setViewMode(mode);
    setHasPicked(true);
  };

  const isZen = viewMode === 'zen';

  if (!hasPicked) {
    return (
      <>
        <ModePicker onPick={handlePick} />
        <CustomCursor mode="zen" />
      </>
    );
  }

  return (
    <div className={`transition-colors duration-1000 ${isZen ? 'bg-[#0a0a0a] text-white' : 'bg-black text-white'}`}>
      {/* Side Mode Toggle - Clearer Labels */}
      <div className="fixed left-6 top-1/2 -translate-y-1/2 z-[500] flex flex-col items-center gap-6 group">
        <div className="flex flex-col gap-3 bg-white/10 backdrop-blur-2xl p-2 rounded-2xl border border-white/20 shadow-2xl">
          <button 
            onClick={() => setViewMode('demon')}
            className={`w-14 h-24 rounded-xl flex items-center justify-center transition-all relative overflow-hidden ${!isZen ? 'bg-red-600 text-white shadow-[0_0_20px_rgba(220,38,38,0.6)]' : 'text-white/30 hover:text-white hover:bg-white/5'}`}
          >
            <span className="text-[10px] font-black rotate-90 whitespace-nowrap tracking-widest">DEMON</span>
            {!isZen && <div className="absolute inset-0 bg-white/10 animate-pulse pointer-events-none" />}
          </button>
          <button 
            onClick={() => setViewMode('zen')}
            className={`w-14 h-24 rounded-xl flex items-center justify-center transition-all relative overflow-hidden ${isZen ? 'bg-white text-black shadow-[0_0_20px_rgba(255,255,255,0.4)]' : 'text-white/30 hover:text-white hover:bg-white/5'}`}
          >
            <span className="text-[10px] font-black rotate-90 whitespace-nowrap tracking-widest">ZEN</span>
          </button>
        </div>
        {!isZen && <div className="h-20 w-px bg-gradient-to-b from-white/40 to-transparent" />}
      </div>

      <main className={`relative selection:bg-red-600 selection:text-white overflow-x-hidden ${!isZen ? 'distort-active' : ''}`}>
        {!isZen && <CodeRain />}
        {!isZen && <HUD />}
        
        {/* Navigation - Pushed down slightly more to avoid overlap */}
        <nav className={`fixed left-1/2 -translate-x-1/2 z-[300] flex transition-all duration-700 ${
          isZen 
          ? 'top-14 bg-transparent border-none shadow-none gap-10' 
          : 'top-10 bg-white border-[8px] border-black p-0 shadow-[15px_15px_0px_0px_rgba(255,0,0,1)]'
        }`}>
          {NAVIGATION.map((item) => (
            <a 
              key={item.name}
              href={item.link}
              target={item.name === 'HOME' ? '_self' : '_blank'}
              className={`flex items-center gap-4 transition-all group cursor-none ${
                isZen 
                ? 'px-0 py-2 border-none text-white/30 hover:text-white' 
                : 'px-10 py-6 bg-white hover:bg-black hover:text-white border-r-[8px] last:border-r-0 border-black'
              }`}
            >
              <span className={`${isZen ? 'scale-75' : 'text-black group-hover:text-white group-hover:rotate-12'} transition-all`}>{item.icon}</span>
              <span className={`text-[10px] font-black tracking-widest hidden md:block uppercase ${isZen ? 'font-light tracking-[0.4em] opacity-50 group-hover:opacity-100' : 'text-black group-hover:text-white'}`}>{item.name}</span>
            </a>
          ))}
        </nav>

        <Hero mode={viewMode} />
        
        <div className={`transition-all duration-700 ${isZen ? 'py-0 h-0 overflow-hidden opacity-0' : 'bg-black py-40'}`}>
          <MassiveMarquee />
        </div>

        {!isZen && <HaterFeed />}

        <section className={`max-w-7xl mx-auto px-4 transition-all duration-1000 ${
          isZen ? 'py-80 text-center' : 'py-60 grid grid-cols-1 lg:grid-cols-2 gap-40 items-center'
        }`}>
          <div className={`space-y-12 ${isZen ? 'max-w-2xl mx-auto' : ''}`}>
             <h2 className={`font-black syne italic leading-none uppercase transition-all duration-1000 ${
               isZen ? 'text-6xl font-light normal-case not-italic tracking-tighter' : 'text-8xl'
             }`}>
               {isZen ? 'The art of building.' : <>You talk.<br/><span className="text-void">I ship.</span></>}
             </h2>
             <p className={`font-light leading-relaxed uppercase transition-all duration-1000 ${
               isZen ? 'text-xl text-white/40 normal-case' : 'text-3xl text-white/60'
             }`}>
               Youngest ever winner of Stanford LISA Incubator. Building <span className={`${isZen ? 'text-white' : 'text-white font-black underline'}`}>ideatr.dev</span>. Build fast, ship fast.
             </p>
             <div className={`flex gap-10 ${isZen ? 'justify-center opacity-30' : ''}`}>
                <div className="flex flex-col"><span className={`${isZen ? 'text-3xl font-light' : 'text-5xl font-black'}`}>10 Apps</span><span className="text-xs opacity-40 uppercase">In 7 Days</span></div>
                <div className="flex flex-col"><span className={`${isZen ? 'text-3xl font-light' : 'text-5xl font-black'}`}>100k</span><span className="text-xs opacity-40 uppercase">MRR Goal</span></div>
             </div>
          </div>
          {!isZen && <TerminalAggressive />}
        </section>

        <StanfordGlory mode={viewMode} />

        <VelocityProtocol mode={viewMode} />

        <MRRTrajectory mode={viewMode} />

        <TechArsenal mode={viewMode} />

        <TheVoidGrid mode={viewMode} />

        <div className={`relative transition-all duration-700 ${isZen ? 'py-20 opacity-40 grayscale' : 'py-40 bg-black'}`}>
            <BentoSection mode={viewMode} />
        </div>

        <AIClone mode={viewMode} />

        <footer className={`transition-all duration-1000 ${
          isZen 
          ? 'py-40 bg-transparent text-white border-none' 
          : 'py-80 bg-white text-black border-t-[40px] border-black'
        } relative overflow-hidden`}>
          <div className={`max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-20 items-end ${isZen ? 'text-center md:text-left' : ''}`}>
            <div>
               <h2 className={`leading-[0.7] syne font-black italic uppercase mb-20 tracking-tighter transition-all duration-1000 ${
                 isZen ? 'text-[8vw] font-light normal-case not-italic' : 'text-[15vw]'
               }`}>
                 {isZen ? 'Finito.' : <>THE<br/>END.</>}
               </h2>
               <div className={`space-y-2 mb-10 ${isZen ? 'opacity-40' : ''}`}>
                  <p className="text-2xl font-black uppercase">Arjun Shah // Founding General</p>
                  <p className="text-lg font-bold">San Francisco, CA</p>
                  <a href="mailto:arjunkshah21@gmail.com" className={`block transition-all w-fit ${isZen ? 'text-2xl' : 'text-4xl font-black hover:bg-black hover:text-white px-2'}`}>arjunkshah21@gmail.com</a>
                  <p className="text-3xl font-black">+1 408 422 3929</p>
               </div>
               <p className="text-xl font-bold max-w-lg uppercase opacity-40">This session has been optimized. Now build something that matters.</p>
            </div>
            <div className={`flex flex-col gap-10 ${isZen ? 'items-center md:items-end' : 'items-end'}`}>
               <div className="flex flex-wrap justify-end gap-4">
                  {['X.COM', 'GITHUB', 'BLOG'].map(label => (
                    <a 
                      key={label}
                      href="#" 
                      className={`transition-all cursor-none ${
                        isZen 
                        ? 'text-sm tracking-[0.5em] text-white/40 hover:text-white px-4' 
                        : 'px-10 py-6 border-[8px] border-black text-2xl font-black uppercase italic hover:bg-black hover:text-white'
                      }`}
                    >
                      {label}
                    </a>
                  ))}
               </div>
               <p className="text-xs mono opacity-40 tracking-widest text-right uppercase">© 2025 ARJUN SHAH // ALL DIMENSIONS RECLAIMED</p>
            </div>
          </div>
        </footer>

        {/* Extreme Progress Bar - Hidden in Zen mode */}
        {!isZen && (
          <div 
            className="fixed bottom-0 left-0 h-6 z-[500] transition-all duration-500 bg-red-600"
            style={{ width: `${(scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100}%` }}
          />
        )}
      </main>
      <CustomCursor mode={viewMode} />
    </div>
  );
};

export default App;
