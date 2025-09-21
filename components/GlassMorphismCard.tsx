"use client"

import { useRef, useState } from 'react';
import Image from 'next/image';

interface GlassMorphismCardProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
}

export default function GlassMorphismCard({ 
  src, 
  alt, 
  width, 
  height, 
  className = '' 
}: GlassMorphismCardProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    
    setMousePosition({ x, y });
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => {
    setIsHovered(false);
    setMousePosition({ x: 50, y: 50 });
  };

  return (
    <div 
      ref={containerRef}
      className={`relative overflow-hidden rounded-xl ${className}`}
      style={{ width: `${width}px`, height: `${height}px` }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Base Image */}
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="w-full h-full object-cover"
      />
      
      {/* Glass Morphism Overlay */}
      <div 
        className="absolute inset-0 pointer-events-none transition-opacity duration-300"
        style={{
          opacity: isHovered ? 1 : 0,
        }}
      >
        {/* Distortion effect */}
        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, 
              rgba(0, 229, 255, 0.15) 0%, 
              transparent 40%)`,
            backdropFilter: 'blur(0.5px)',
            WebkitBackdropFilter: 'blur(0.5px)',
          }}
        />
        
        {/* Glass refraction effect */}
        <div
          className="absolute inset-0 mix-blend-overlay"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, 
              rgba(255, 255, 255, 0.2) 0%, 
              rgba(255, 255, 255, 0.1) 20%,
              transparent 50%)`,
          }}
        />
        
        {/* Chromatic aberration simulation */}
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(circle at ${mousePosition.x - 1}% ${mousePosition.y}%, 
                rgba(255, 0, 0, 0.05) 0%, transparent 30%),
              radial-gradient(circle at ${mousePosition.x + 1}% ${mousePosition.y}%, 
                rgba(0, 255, 0, 0.05) 0%, transparent 30%),
              radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y - 1}%, 
                rgba(0, 0, 255, 0.05) 0%, transparent 30%)
            `,
            mixBlendMode: 'screen',
          }}
        />
        
        {/* Light refraction */}
        <div
          className="absolute inset-0"
          style={{
            background: `conic-gradient(from ${mousePosition.x * 3.6}deg at ${mousePosition.x}% ${mousePosition.y}%, 
              transparent, 
              rgba(0, 229, 255, 0.1) 10%, 
              transparent 20%, 
              rgba(0, 229, 255, 0.05) 30%, 
              transparent)`,
            opacity: 0.5,
          }}
        />
      </div>
      
      {/* Glass edge highlight */}
      <div 
        className="absolute inset-0 rounded-xl pointer-events-none"
        style={{
          border: '1px solid rgba(255, 255, 255, 0.1)',
          boxShadow: isHovered ? 
            'inset 0 1px 2px rgba(255, 255, 255, 0.1), 0 4px 16px rgba(0, 229, 255, 0.1)' : 
            'none',
          transition: 'box-shadow 0.3s ease',
        }}
      />
    </div>
  );
}