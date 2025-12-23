
import React from 'react';

interface ModePickerProps {
  onPick: (mode: 'demon' | 'zen') => void;
}

const ModePicker: React.FC<ModePickerProps> = ({ onPick }) => {
  return (
    <div className="fixed inset-0 z-[1000] flex overflow-hidden">
      {/* Zen Side */}
      <button 
        onClick={() => onPick('zen')}
        className="group relative flex-1 bg-[#0a0a0a] transition-all duration-700 hover:flex-[1.5] flex flex-col items-center justify-center cursor-none"
      >
        <div className="opacity-40 group-hover:opacity-100 transition-opacity space-y-4">
          <p className="text-[10px] tracking-[1.5em] uppercase text-white/40">The stillness</p>
          <h2 className="text-6xl font-light tracking-tighter text-white">Zen.</h2>
        </div>
      </button>

      {/* Demon Side */}
      <button 
        onClick={() => onPick('demon')}
        className="group relative flex-1 bg-[#050505] transition-all duration-700 hover:flex-[1.5] flex flex-col items-center justify-center cursor-none"
      >
        <div className="opacity-40 group-hover:opacity-100 transition-opacity space-y-4">
          <p className="text-[10px] tracking-[1.2em] uppercase text-red-600 font-black">The chaos</p>
          <h2 className="text-6xl syne font-black italic text-white uppercase tracking-tighter">Demon.</h2>
        </div>
      </button>

      {/* Sticky Note Instruction */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[1010] pointer-events-none">
        <div className="bg-yellow-400 border-4 border-black p-6 shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] -rotate-3 w-64 transform transition-transform hover:rotate-0">
          <h3 className="font-black syne text-black text-xl mb-2">CHOOSE ENTRY</h3>
          <p className="text-xs font-bold text-black leading-tight">
            Select your starting frequency. 
            Don't worry, the toggle is always active. 
            Choose wisely.
          </p>
          <div className="mt-4 flex justify-between items-center opacity-30">
            <span className="text-[8px] font-black">ARJUN_SHAH.EXE</span>
            <div className="w-4 h-4 rounded-full bg-black" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModePicker;
