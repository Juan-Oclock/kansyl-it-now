"use client"

import { useRef, useState } from 'react';

interface TransparentSpotlightCardProps {
  children: React.ReactNode;
  className?: string;
  spotlightColor?: string;
}

const TransparentSpotlightCard = ({ 
  children, 
  className = '', 
  spotlightColor = 'rgba(0, 229, 255, 0.2)' 
}: TransparentSpotlightCardProps) => {
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
      className={`relative rounded-xl overflow-hidden ${className}`}
      style={{
        // Very subtle dark background to contain spotlight
        padding: '2px',
        background: 'rgba(0, 0, 0, 0.1)',
        borderRadius: '0.75rem'
      }}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 ease-in-out"
        style={{
          opacity,
          background: `radial-gradient(circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 80%)`,
          borderRadius: '0.75rem',
          zIndex: 10
        }}
      />
      <div className="relative z-0 rounded-xl overflow-hidden">
        {children}
      </div>
    </div>
  );
};

export default TransparentSpotlightCard;