"use client"

import DotGrid from './dot-grid';

export function DotGridExample1() {
  // Customization panel configuration (black base, blue active)
  return (
    <div style={{ width: '100%', height: '600px', position: 'relative' }}>
      <DotGrid
        dotSize={5}
        gap={15}
        baseColor="#000000"
        activeColor="#3B82F6"
        proximity={120}
        shockRadius={250}
        shockStrength={5}
        resistance={750}
        returnDuration={1.5}
      />
    </div>
  );
}

export function DotGridExample2() {
  // Large dots with stronger effects
  return (
    <div style={{ width: '100%', height: '600px', position: 'relative' }}>
      <DotGrid
        dotSize={8}
        gap={25}
        baseColor="rgba(59, 130, 246, 0.4)"
        activeColor="#3B82F6"
        proximity={150}
        shockRadius={300}
        shockStrength={8}
        resistance={600}
        returnDuration={2.0}
      />
    </div>
  );
}

export function DotGridExample3() {
  // Dense grid (green accent)
  return (
    <div style={{ width: '100%', height: '400px', position: 'relative' }}>
      <DotGrid
        dotSize={3}
        gap={12}
        baseColor="rgba(34, 197, 94, 0.3)"
        activeColor="#22C55E"
        proximity={80}
        shockRadius={150}
        shockStrength={4}
        resistance={900}
        returnDuration={1.0}
      />
    </div>
  );
}

export function DotGridExample4() {
  // Large spaced dots (orange theme)
  return (
    <div style={{ width: '100%', height: '500px', position: 'relative' }}>
      <DotGrid
        dotSize={10}
        gap={40}
        baseColor="rgba(249, 115, 22, 0.4)"
        activeColor="#F97316"
        proximity={200}
        shockRadius={400}
        shockStrength={10}
        resistance={500}
        returnDuration={2.5}
      />
    </div>
  );
}

// Static grid (minimal interactions)
export function DotGridStatic() {
  return (
    <div style={{ width: '100%', height: '400px', position: 'relative' }}>
      <DotGrid
        dotSize={2}
        gap={20}
        baseColor="rgba(156, 163, 175, 0.4)"
        activeColor="rgba(156, 163, 175, 0.8)"
        proximity={50}
        shockRadius={100}
        shockStrength={2}
        resistance={950}
        returnDuration={0.8}
      />
    </div>
  );
}

// Interactive demo component
export function DotGridInteractiveDemo() {
  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-semibold mb-4">Hero Grid (Purple Theme)</h3>
        <DotGridExample1 />
      </div>
      
      <div>
        <h3 className="text-lg font-semibold mb-4">Pulsing Grid (Blue Theme)</h3>
        <DotGridExample2 />
      </div>
      
      <div>
        <h3 className="text-lg font-semibold mb-4">Dense Grid with Glow (Green)</h3>
        <DotGridExample3 />
      </div>
      
      <div>
        <h3 className="text-lg font-semibold mb-4">Large Pulsing Dots (Orange)</h3>
        <DotGridExample4 />
      </div>
      
      <div>
        <h3 className="text-lg font-semibold mb-4">Static Grid (No Animation)</h3>
        <DotGridStatic />
      </div>
    </div>
  );
}