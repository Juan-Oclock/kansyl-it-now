"use client"

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

interface DotGridProps {
  className?: string;
  style?: React.CSSProperties;
  dotSize?: number;
  gap?: number;
  baseColor?: string;
  activeColor?: string;
  proximity?: number;
  speedTrigger?: number;
  shockRadius?: number;
  shockStrength?: number;
  maxSpeed?: number;
  resistance?: number;
  returnDuration?: number;
}

const DotGrid: React.FC<DotGridProps> = ({
  className = '',
  style = {},
  dotSize = 16,
  gap = 32,
  baseColor = '#5227FF',
  activeColor = '#5227FF',
  proximity = 150,
  speedTrigger = 100,
  shockRadius = 250,
  shockStrength = 5,
  maxSpeed = 5000,
  resistance = 750,
  returnDuration = 1.5
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const mouseRef = useRef({ x: -1000, y: -1000, prevX: -1000, prevY: -1000, speed: 0 });
  const dotsRef = useRef<Array<{
    x: number;
    y: number;
    originalX: number;
    originalY: number;
    vx: number;
    vy: number;
    isActive: boolean;
  }>>([]);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set up canvas dimensions
    const updateDimensions = () => {
      const rect = container.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;
      
      canvas.width = width * window.devicePixelRatio;
      canvas.height = height * window.devicePixelRatio;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
      setDimensions({ width, height });
      
      // Regenerate dots when dimensions change
      generateDots(width, height);
    };

    // Generate dot grid
    const generateDots = (width: number, height: number) => {
      const dots: typeof dotsRef.current = [];
      const cols = Math.ceil(width / gap) + 1;
      const rows = Math.ceil(height / gap) + 1;
      
      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const x = i * gap;
          const y = j * gap;
          dots.push({
            x,
            y,
            originalX: x,
            originalY: y,
            vx: 0,
            vy: 0,
            isActive: false
          });
        }
      }
      
      dotsRef.current = dots;
    };

    updateDimensions();

    // Mouse/touch tracking with speed calculation
    const updateMousePosition = (clientX: number, clientY: number) => {
      const rect = container.getBoundingClientRect();
      const newX = clientX - rect.left;
      const newY = clientY - rect.top;
      
      const prevMouse = mouseRef.current;
      const dx = newX - prevMouse.x;
      const dy = newY - prevMouse.y;
      const speed = Math.sqrt(dx * dx + dy * dy);
      
      mouseRef.current = {
        x: newX,
        y: newY,
        prevX: prevMouse.x,
        prevY: prevMouse.y,
        speed
      };
      
      // Trigger inertia effect if speed threshold is met
      if (speed > speedTrigger) {
        applyInertiaEffect(newX, newY, speed);
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      updateMousePosition(e.clientX, e.clientY);
    };

    const handleTouchMove = (e: TouchEvent) => {
      e.preventDefault();
      const touch = e.touches[0];
      updateMousePosition(touch.clientX, touch.clientY);
    };

    const handleClick = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const clickY = e.clientY - rect.top;
      console.log('Click detected at:', clickX, clickY);
      applyShockWave(clickX, clickY);
    };

    // Apply inertia effect to nearby dots
    const applyInertiaEffect = (mouseX: number, mouseY: number, speed: number) => {
      dotsRef.current.forEach(dot => {
        const distance = Math.sqrt(
          Math.pow(dot.x - mouseX, 2) + Math.pow(dot.y - mouseY, 2)
        );
        
        if (distance < proximity) {
          const force = Math.min(speed / maxSpeed, 1) * (1 - distance / proximity);
          const angle = Math.atan2(dot.y - mouseY, dot.x - mouseX);
          
          dot.vx += Math.cos(angle) * force * shockStrength;
          dot.vy += Math.sin(angle) * force * shockStrength;
          dot.isActive = true;
        }
      });
    };

    // Apply shock wave effect on click
    const applyShockWave = (clickX: number, clickY: number) => {
      dotsRef.current.forEach(dot => {
        const distance = Math.sqrt(
          Math.pow(dot.x - clickX, 2) + Math.pow(dot.y - clickY, 2)
        );
        
        if (distance < shockRadius) {
          const force = (1 - distance / shockRadius) * shockStrength;
          const angle = Math.atan2(dot.y - clickY, dot.x - clickX);
          
          dot.vx += Math.cos(angle) * force;
          dot.vy += Math.sin(angle) * force;
          dot.isActive = true;
        }
      });
    };

    // Animation loop with physics
    const animate = () => {
      if (!ctx || !canvas) return;

      // Clear canvas
      ctx.clearRect(0, 0, dimensions.width, dimensions.height);

      dotsRef.current.forEach(dot => {
        // Apply physics
        if (dot.isActive) {
          // Apply resistance
          dot.vx *= (1 - resistance / 10000);
          dot.vy *= (1 - resistance / 10000);
          
          // Update position
          dot.x += dot.vx;
          dot.y += dot.vy;
          
          // Return to original position
          const returnForceX = (dot.originalX - dot.x) * (1 / returnDuration) * 0.1;
          const returnForceY = (dot.originalY - dot.y) * (1 / returnDuration) * 0.1;
          
          dot.vx += returnForceX;
          dot.vy += returnForceY;
          
          // Stop if velocity is very low
          if (Math.abs(dot.vx) < 0.01 && Math.abs(dot.vy) < 0.01) {
            dot.vx = 0;
            dot.vy = 0;
            
            // Animate back to original position with GSAP
            gsap.to(dot, {
              x: dot.originalX,
              y: dot.originalY,
              duration: returnDuration,
              ease: "power2.out",
              onComplete: () => {
                dot.isActive = false;
              }
            });
          }
        }
        
        // Determine dot color based on proximity and activity
        const distance = Math.sqrt(
          Math.pow(dot.x - mouseRef.current.x, 2) + 
          Math.pow(dot.y - mouseRef.current.y, 2)
        );
        
        const isNearMouse = distance < proximity;
        const color = (isNearMouse || dot.isActive) ? activeColor : baseColor;
        
        // Draw dot
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dotSize / 2, 0, Math.PI * 2);
        ctx.fill();
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();
    
    // Add event listeners
    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('touchmove', handleTouchMove, { passive: false });
    container.addEventListener('click', handleClick);

    // Handle resize
    const resizeObserver = new ResizeObserver(updateDimensions);
    resizeObserver.observe(container);

    // Cleanup
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('touchmove', handleTouchMove);
      container.removeEventListener('click', handleClick);
      resizeObserver.disconnect();
      
      // Kill any active GSAP animations
      gsap.killTweensOf(dotsRef.current);
    };
  }, [dotSize, gap, baseColor, activeColor, proximity, speedTrigger, shockRadius, shockStrength, maxSpeed, resistance, returnDuration, dimensions.width, dimensions.height]);

  return (
    <div
      ref={containerRef}
      className={`relative ${className}`}
      style={{
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        ...style
      }}
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0"
        style={{
          width: '100%',
          height: '100%',
        }}
      />
    </div>
  );
};

// Configured wrapper for hero section
export function DotGridHero({ className }: { className?: string }) {
  return (
    <DotGrid
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
      dotSize={5}            // From customization panel
      gap={15}               // From customization panel
      baseColor="rgba(100, 100, 100, 0.6)"    // Gray base color (more visible)
      activeColor="#3B82F6"  // Blue active color (from toggle)
      proximity={120}        // From customization panel
      speedTrigger={10}      // Lower threshold for easier testing
      shockRadius={250}      // From customization panel
      shockStrength={5}      // From customization panel
      maxSpeed={5000}        // Keep default
      resistance={750}       // From customization panel (Resistance Inertia)
      returnDuration={1.5}   // From customization panel (Return Duration Inertia)
    />
  );
}

export default DotGrid;