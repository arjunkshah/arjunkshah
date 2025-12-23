
import React, { useEffect, useState, useRef } from 'react';

const CustomCursor: React.FC<{ mode?: 'demon' | 'zen' }> = ({ mode = 'demon' }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [trail, setTrail] = useState<{ x: number; y: number }[]>([]);
  const speedRef = useRef(0);
  const lastPosRef = useRef({ x: 0, y: 0 });
  const isZen = mode === 'zen';

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const dx = e.clientX - lastPosRef.current.x;
      const dy = e.clientY - lastPosRef.current.y;
      speedRef.current = Math.sqrt(dx * dx + dy * dy);
      
      setPosition({ x: e.clientX, y: e.clientY });
      lastPosRef.current = { x: e.clientX, y: e.clientY };

      const target = e.target as HTMLElement;
      setIsPointer(
        window.getComputedStyle(target).cursor === 'pointer' || 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON'
      );

      // Add trail
      setTrail(prev => [...prev.slice(-10), { x: e.clientX, y: e.clientY }]);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  if (isZen) {
    return (
      <div 
        className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-[999999] transition-transform duration-300 ease-out flex items-center justify-center"
        style={{ 
          transform: `translate(${position.x - 16}px, ${position.y - 16}px) scale(${isPointer ? 0.5 : 1})`,
        }}
      >
        {/* Soft Ring */}
        <div className="absolute inset-0 border border-white/20 rounded-full" />
        {/* Center Dot */}
        <div className={`w-1 h-1 bg-white rounded-full transition-all duration-500 ${isPointer ? 'scale-150' : ''}`} />
      </div>
    );
  }

  return (
    <>
      {/* Glitched Trail */}
      {trail.map((t, i) => (
        <div 
          key={i}
          className="fixed top-0 left-0 w-1 h-1 bg-cyan-400/20 pointer-events-none z-[999999]"
          style={{ 
            transform: `translate(${t.x}px, ${t.y}px)`,
            opacity: i / 10
          }}
        />
      ))}

      {/* Main Cursor */}
      <div 
        className={`fixed top-0 left-0 w-12 h-12 pointer-events-none z-[999999] transition-transform duration-75 ease-out mix-blend-difference flex items-center justify-center`}
        style={{ 
          transform: `translate(${position.x - 24}px, ${position.y - 24}px) scale(${isPointer ? 1.5 : 1}) rotate(${speedRef.current}deg)`,
        }}
      >
        {/* Crosshair effect */}
        <div className="absolute w-full h-px bg-white/50" />
        <div className="absolute h-full w-px bg-white/50" />
        <div className={`w-4 h-4 border-2 border-white rounded-full ${isPointer ? 'bg-white' : ''} transition-all`} />
        
        {isPointer && (
          <span className="absolute -top-6 text-[8px] text-white font-black uppercase tracking-widest whitespace-nowrap animate-pulse">
            EXE_LINK_ENGAGED
          </span>
        )}
      </div>
    </>
  );
};

export default CustomCursor;
