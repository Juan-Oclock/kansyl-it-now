"use client"

import { useRef, useState } from 'react';
import Image from 'next/image';
import * as THREE from 'three';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useGLTF, MeshTransmissionMaterial } from '@react-three/drei';
import { easing } from 'maath';

interface FluidGlassCardProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
}

function GlassLens() {
  const ref = useRef<THREE.Mesh>(null);
  const { nodes } = useGLTF('/assets/3d/lens.glb');
  const { viewport, pointer } = useThree();
  
  useFrame((state, delta) => {
    if (!ref.current) return;
    
    // Follow mouse pointer
    const v = viewport.getCurrentViewport(state.camera, [0, 0, 5]);
    const destX = (pointer.x * v.width) / 4;
    const destY = (pointer.y * v.height) / 4;
    
    easing.damp3(
      ref.current.position, 
      [destX, destY, 0], 
      0.15, 
      delta
    );
    
    // Scale based on viewport
    const scale = Math.min(0.5, v.width / 10);
    ref.current.scale.setScalar(scale);
  });

  return (
    <mesh 
      ref={ref} 
      rotation-x={Math.PI / 2} 
      geometry={(nodes.Cylinder as THREE.Mesh)?.geometry}
    >
      <MeshTransmissionMaterial
        backside
        samples={4}
        transmission={1}
        thickness={3}
        chromaticAberration={0.05}
        anisotropy={0.1}
        distortion={0.1}
        distortionScale={0.1}
        temporalDistortion={0.2}
        ior={1.25}
        color="#ffffff"
      />
    </mesh>
  );
}

// ImagePlane component removed as it's not being used

export default function FluidGlassCard({ 
  src, 
  alt, 
  width, 
  height, 
  className = '' 
}: FluidGlassCardProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <div 
      className={`relative ${className}`}
      style={{ width: `${width}px`, height: `${height}px` }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Base Image */}
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="rounded-xl w-full h-full object-cover"
      />
      
      {/* Fluid Glass Overlay (only on hover) */}
      {hovered && (
        <div className="absolute inset-0 rounded-xl overflow-hidden pointer-events-none">
          <Canvas 
            camera={{ position: [0, 0, 5], fov: 25 }} 
            gl={{ alpha: true, antialias: true }}
            style={{ width: '100%', height: '100%' }}
          >
            <ambientLight intensity={1} />
            <GlassLens />
          </Canvas>
        </div>
      )}
    </div>
  );
}