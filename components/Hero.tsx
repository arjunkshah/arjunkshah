
import React, { useState, useEffect } from 'react';

const Hero: React.FC<{ mode?: 'demon' | 'zen' }> = ({ mode = 'demon' }) => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const isZen = mode === 'zen';
  
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      setPos({ x: (e.clientX / window.innerWidth) - 0.5, y: (e.clientY / window.innerHeight) - 0.5 });
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  if (isZen) {
    return (
      <section className="relative h-screen flex flex-col items-center justify-center p-4 pt-40 bg-transparent overflow-hidden">
        <div className="z-10 text-center space-y-16 max-w-4xl animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <p className="text-[10px] tracking-[1.2em] text-white/20 uppercase">Curating the future from San Francisco</p>
          <h1 className="text-[12vw] font-light tracking-tighter leading-none text-white/90">
            Arjun Shah.
          </h1>
          <p className="text-2xl font-light text-white/40 max-w-xl mx-auto leading-relaxed">
            Building software at the intersection of speed and simplicity. 13 years of intensity.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="relative h-screen bg-black overflow-hidden flex flex-col items-center justify-center p-4">
      {/* Background Reactive Mesh */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div 
          className="w-full h-full bg-[radial-gradient(circle,rgba(255,255,255,0.2)_1px,transparent_1px)] bg-[length:40px_40px] transition-transform duration-100 ease-out"
          style={{ transform: `translate(${pos.x * 50}px, ${pos.y * 50}px) scale(1.1)` }}
        />
      </div>

      {/* Floating Image with glitch frame */}
      <div className="absolute top-20 right-10 md:right-40 w-48 h-64 md:w-64 md:h-80 border-4 border-white shadow-[15px_15px_0px_0px_rgba(255,0,0,1)] z-20 overflow-hidden transform rotate-6 hover:rotate-0 transition-all duration-500">
        <img 
          src="https://res.cloudinary.com/dnhv7jexy/image/upload/v1740037803/arjun_photo.png" 
          alt="Arjun Shah" 
          className="w-full h-full object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-700"
        />
        <div className="absolute bottom-0 left-0 bg-white text-black text-[10px] font-black px-2 py-1 mono">FOUNDER_ID: 001</div>
      </div>

      <div className="z-10 text-center space-y-8 select-none">
        <div className="flex gap-4 justify-center items-center text-xs mono tracking-[1em] text-white/40 uppercase mb-4">
           <span>SF_RESIDENT</span><span>•</span><span>LISA_WINNER</span><span>•</span><span>13YO_GENIUS</span>
        </div>
        
        <div className="relative group">
          <h1 className="text-[25vw] leading-[0.7] syne font-black italic transform -rotate-3 transition-transform duration-500 group-hover:rotate-0">
             ARJUN
          </h1>
          <h1 className="text-[25vw] leading-[0.7] syne font-black text-void absolute top-0 left-0 transform translate-x-2 translate-y-2 opacity-50">
             ARJUN
          </h1>
        </div>

        <div className="relative group">
           <h1 className="text-[25vw] leading-[0.7] syne font-black tracking-tighter transform rotate-3 transition-transform duration-500 group-hover:rotate-0">
             SHAH
           </h1>
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white text-black px-12 py-6 text-6xl font-black italic syne -rotate-12 group-hover:rotate-0 transition-transform">
              OVERLORD
           </div>
        </div>
      </div>

      <div className="absolute bottom-20 left-10 flex flex-col gap-2 opacity-30 mono text-[10px]">
         <div>UPLINK: SF_CA_PRIME</div>
         <div>EGO_LOAD: 120%</div>
         <div>BIRTH_SYNC: 03.12.2025</div>
      </div>

      <div className="absolute bottom-20 right-10 flex items-center gap-10">
         <div className="w-40 h-px bg-white/20" />
         <button className="text-white font-black uppercase tracking-widest text-xs hover:text-red-500 transition-colors">INITIATE_VOID</button>
      </div>
    </section>
  );
};

export default Hero;
