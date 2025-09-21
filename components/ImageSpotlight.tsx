"use client"

import { useRef, useState } from 'react';
import Image from 'next/image';

interface ImageSpotlightProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  spotlightColor?: string;
}

const ImageSpotlight = ({ 
  src, 
  alt, 
  width, 
  height, 
  className = '', 
  spotlightColor = 'rgba(0, 229, 255, 0.2)' 
}: ImageSpotlightProps) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!divRef.current || isFocused) return;

    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => {
    setIsFocused(true);
    setOpacity(0.6);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setOpacity(0);
  };

  const handleMouseEnter = () => {
    setOpacity(0.6);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    <div 
      className={`relative inline-block ${className}`}
      style={{ 
        borderRadius: '30px',
        overflow: 'hidden',
        clipPath: 'inset(0 round 30px)'
      }}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="rounded-xl shadow-lg"
      />
      <div
        ref={divRef}
        onMouseMove={handleMouseMove}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="absolute pointer-events-auto"
        style={{
          top: '15px',
          left: '15px',
          right: '15px', 
          bottom: '15px',
          borderRadius: '16px',
          overflow: 'hidden',
          backgroundColor: 'transparent'
        }}
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 ease-in-out"
          style={{
            opacity,
            background: `radial-gradient(circle at ${position.x - 15}px ${position.y - 15}px, ${spotlightColor}, transparent 60%)`,
            borderRadius: '16px'
          }}
        />
      </div>
    </div>
  );
};

export default ImageSpotlight;