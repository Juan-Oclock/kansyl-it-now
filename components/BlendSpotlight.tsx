"use client"

import { useRef, useState } from 'react';
import Image from 'next/image';

interface BlendSpotlightProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  spotlightColor?: string;
}

const BlendSpotlight = ({ 
  src, 
  alt, 
  width, 
  height, 
  className = '', 
  spotlightColor = 'rgba(0, 229, 255, 0.3)' 
}: BlendSpotlightProps) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!divRef.current) return;

    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div 
      ref={divRef}
      className={`relative ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="rounded-xl shadow-lg"
      />
      <div
        className="absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300 pointer-events-none"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(200px circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 70%)`,
          mixBlendMode: 'overlay'
        }}
      />
    </div>
  );
};

export default BlendSpotlight;