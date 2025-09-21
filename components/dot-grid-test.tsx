"use client"

import { useEffect, useRef } from 'react';

export function DotGridTest({ className }: { className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    console.log('DotGridTest: Starting initialization');

    // Set canvas size
    const updateSize = () => {
      const rect = container.getBoundingClientRect();
      canvas.width = rect.width * window.devicePixelRatio;
      canvas.height = rect.height * window.devicePixelRatio;
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
      console.log('Canvas size:', rect.width, rect.height);
    };

    updateSize();

    // Simple dots array
    const dots: Array<{ x: number; y: number }> = [];
    const gap = 30;
    const cols = Math.ceil(container.clientWidth / gap);
    const rows = Math.ceil(container.clientHeight / gap);
    
    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        dots.push({
          x: i * gap,
          y: j * gap
        });
      }
    }
    
    console.log('Generated', dots.length, 'test dots');

    // Mouse tracking
    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      };
    };

    const handleClick = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      console.log('Test click at:', x, y);
    };

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('click', handleClick);

    // Simple animation
    const animate = () => {
      ctx.clearRect(0, 0, container.clientWidth, container.clientHeight);
      
      dots.forEach(dot => {
        const distance = Math.sqrt(
          Math.pow(dot.x - mouseRef.current.x, 2) + 
          Math.pow(dot.y - mouseRef.current.y, 2)
        );
        
        const isNear = distance < 100;
        ctx.fillStyle = isNear ? '#3B82F6' : '#666666';
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, 3, 0, Math.PI * 2);
        ctx.fill();
      });
      
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={className}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: '100%',
        height: '100%'
      }}
    >
      <canvas
        ref={canvasRef}
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  );
}