
import React from 'react';
import { BarChart, Bar, ResponsiveContainer, XAxis, YAxis, Tooltip } from 'recharts';
import { STATS, PROJECTS } from '../constants';
import { Terminal, Github, Twitter, ExternalLink, Zap, MapPin } from 'lucide-react';

const BentoSection: React.FC<{ mode?: 'demon' | 'zen' }> = ({ mode = 'demon' }) => {
  const isZen = mode === 'zen';

  if (isZen) {
    return (
      <section className="px-4 py-80 max-w-4xl mx-auto space-y-40 transition-all duration-1000">
        <div className="text-center space-y-8">
          <p className="text-xs tracking-[0.8em] text-white/20 uppercase">Origins</p>
          <h3 className="text-6xl font-light tracking-tighter">Born in Chaos. Raised in SF.</h3>
          <p className="text-xl font-light text-white/40 leading-relaxed max-w-xl mx-auto">
            A biological age that doesn't define output. March 12, 2025 marks the starting line.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 opacity-40">
           {PROJECTS.map(p => (
             <div key={p.id} className="space-y-4 group transition-opacity">
                <h5 className="text-lg font-light tracking-widest">{p.title}</h5>
                <p className="text-xs font-light leading-relaxed">{p.description}</p>
             </div>
           ))}
        </div>
      </section>
    );
  }

  return (
    <section className="px-4 py-20 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-4">
      {/* Neo-brutalist Bio */}
      <div className="md:col-span-2 p-8 bg-yellow-400 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-black flex flex-col justify-between">
        <div>
          <h3 className="syne font-black text-5xl mb-4 italic uppercase">SINGULARITY_BORN</h3>
          <p className="text-xl font-bold leading-tight mb-4">
            Born March 12, 2025 in <span className="underline decoration-black decoration-4">San Francisco</span>.
          </p>
          <p className="text-lg font-bold leading-tight mb-4 opacity-90">
            Youngest ever winner of Stanford GSB's LISA Startup Incubator with therooted.ai. Currently scaling ideatr.dev to the moon.
          </p>
          <div className="flex items-center gap-2 text-sm font-black uppercase tracking-tighter bg-black text-white p-2 inline-block">
             <MapPin size={14} /> SF, CALIFORNIA // HUB OF CHAOS
          </div>
        </div>
        <div className="flex gap-4 mt-8 flex-wrap">
          <a href="mailto:arjunkshah21@gmail.com" className="bg-black text-white px-6 py-2 font-bold uppercase hover:translate-x-1 hover:-translate-y-1 transition-transform border-2 border-black">Email Me</a>
          <div className="flex gap-2">
            <a href="https://x.com/arjunkshah21" target="_blank" className="w-10 h-10 bg-black text-white flex items-center justify-center hover:scale-110 transition-transform"><Twitter size={20} /></a>
            <a href="https://github.com/arjunkshah" target="_blank" className="w-10 h-10 bg-black text-white flex items-center justify-center hover:scale-110 transition-transform"><Github size={20} /></a>
            <a href="https://arjuns-blog.framer.website" target="_blank" className="w-10 h-10 bg-white text-black border-2 border-black flex items-center justify-center font-black text-xs hover:invert transition-all">BLOG</a>
          </div>
        </div>
      </div>

      {/* Neumorphic Metric Card */}
      <div className="md:col-span-1 p-6 neu-dark rounded-[40px] flex flex-col items-center justify-center gap-4 text-center">
        <div className="w-20 h-20 rounded-full bg-[#1a1a1a] shadow-[inset_10px_10px_20px_#0e0e0e,inset_-10px_-10px_20px_#262626] flex items-center justify-center">
          <Zap className="text-yellow-400" size={32} />
        </div>
        <span className="text-4xl font-black syne italic">000YR</span>
        <span className="text-xs uppercase tracking-widest text-gray-400">Biological Age (Mar 2025)</span>
        <span className="text-xl font-bold text-cyan-400">PRE-NATAL HACKING</span>
        <span className="text-xs uppercase tracking-widest text-gray-400">Skill Level: TRANSCENDENT</span>
      </div>

      {/* Glassmorphic Chart */}
      <div className="md:col-span-1 p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl">
        <h4 className="text-xs font-bold uppercase tracking-widest mb-4 flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-pink-500 animate-pulse" />
          Neural Metrics
        </h4>
        <div className="h-48">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={STATS}>
              <XAxis dataKey="name" hide />
              <YAxis hide />
              <Tooltip 
                contentStyle={{ backgroundColor: 'rgba(0,0,0,0.8)', border: 'none', borderRadius: '12px', fontSize: '12px' }}
                cursor={{ fill: 'rgba(255,255,255,0.1)' }}
              />
              <Bar dataKey="value" fill="#ff00ff" radius={[10, 10, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <p className="text-[10px] text-gray-500 mt-2 uppercase">Telemetery: Stanford Winner // LISA // 100k Goal</p>
      </div>

      {/* Horizontal Projects Ticker (Bento style) */}
      <div className="md:col-span-4 bg-gradient-to-r from-cyan-500 to-blue-700 p-1 rounded-3xl">
        <div className="bg-black/90 backdrop-blur-3xl rounded-[22px] overflow-hidden">
          <div className="flex animate-marquee whitespace-nowrap py-4 border-b border-white/10 uppercase italic">
            {[...Array(10)].map((_, i) => (
              <span key={i} className="mx-8 text-2xl syne font-black text-white/50">IDEATR.DEV • STANFORD LISA WINNER • BUILD FAST SHIP FAST •</span>
            ))}
          </div>
          <div className="p-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            {PROJECTS.map(p => (
              <a href={p.id === '1' ? 'https://ideatr.dev' : p.id === '2' ? 'https://therooted.ai' : '#'} target="_blank" key={p.id} className="group cursor-none">
                <div className="relative overflow-hidden rounded-xl aspect-video mb-4 border border-white/10">
                  <img src={p.image} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" alt={p.title} />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <ExternalLink className="text-white" size={32} />
                  </div>
                </div>
                <h5 className="text-xl font-black syne italic flex items-center gap-2 group-hover:text-cyan-400 transition-colors uppercase">
                  {p.title} <ExternalLink size={14} />
                </h5>
                <p className="text-sm text-gray-400 mt-2">{p.description}</p>
                <div className="flex gap-2 mt-4">
                  {p.tags.map(t => <span key={t} className="text-[10px] border border-white/20 px-2 py-1 rounded-full uppercase mono">{t}</span>)}
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BentoSection;
