"use client"

import { useRef, useState } from 'react';
import Image from 'next/image';

interface IPhoneMockupProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  spotlightColor?: string;
}

const IPhoneMockup = ({
  src, 
  alt, 
  width, 
  height, 
  className = '', 
  spotlightColor = 'rgba(0, 229, 255, 0.2)' 
}: IPhoneMockupProps) => {
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
      className={`relative ${className}`}
      style={{ width: `${width}px`, height: `${height}px` }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Image with no frame */}
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="w-full h-full object-cover rounded-xl"
      />
      
      {/* Spotlight Overlay - exactly matching image size */}
      <div
        className="pointer-events-none absolute inset-0 rounded-xl"
        style={{
          opacity,
          background: `radial-gradient(circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 80%)`,
          clipPath: 'inset(0 round 0.75rem)' // Ensures spotlight matches image bounds exactly
        }}
      />
    </div>
  );
};

export default IPhoneMockup;
