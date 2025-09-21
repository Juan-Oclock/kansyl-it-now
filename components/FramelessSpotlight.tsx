"use client"

import { useRef, useState } from 'react';

interface FramelessSpotlightProps {
  children: React.ReactNode;
  className?: string;
  spotlightColor?: string;
}

const FramelessSpotlight = ({ 
  children, 
  className = '', 
  spotlightColor = 'rgba(0, 229, 255, 0.2)' 
}: FramelessSpotlightProps) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!divRef.current) return;

    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleMouseEnter = () => {
    setOpacity(0.6);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative inline-block ${className}`}
      style={{
        borderRadius: '0.75rem',
        overflow: 'hidden'
      }}
    >
      {/* Image container with strict clipping */}
      <div className="relative" style={{ lineHeight: 0 }}>
        {children}
        {/* Spotlight with mask */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            opacity,
            background: `radial-gradient(circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 80%)`,
            transition: 'opacity 500ms ease-in-out',
            borderRadius: '0.75rem',
            maskImage: 'radial-gradient(white, white)',
            maskSize: '100% 100%',
            maskRepeat: 'no-repeat',
            WebkitMaskImage: 'radial-gradient(white, white)',
            WebkitMaskSize: '100% 100%',
            WebkitMaskRepeat: 'no-repeat'
          }}
        />
      </div>
    </div>
  );
};

export default FramelessSpotlight;