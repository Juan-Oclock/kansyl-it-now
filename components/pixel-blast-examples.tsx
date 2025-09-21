"use client"

// Component inspired by github.com/zavalit/bayer-dithering-webgl-demo

import PixelBlast from './pixel-blast-full';

export function PixelBlastExample1() {
  // Your exact sample usage configuration
  return (
    <div style={{ width: '100%', height: '600px', position: 'relative' }}>
      <PixelBlast
        variant="circle"
        pixelSize={6}
        color="#B19EEF"
        patternScale={3}
        patternDensity={1.2}
        pixelSizeJitter={0.5}
        enableRipples
        rippleSpeed={0.4}
        rippleThickness={0.12}
        rippleIntensityScale={1.5}
        liquid
        liquidStrength={0.12}
        liquidRadius={1.2}
        liquidWobbleSpeed={5}
        speed={0.6}
        edgeFade={0.25}
        transparent
      />
    </div>
  );
}

export function PixelBlastExample2() {
  // Configuration matching your UI screenshot (Square variant, no liquid)
  return (
    <div style={{ width: '100%', height: '600px', position: 'relative' }}>
      <PixelBlast
        variant="square"
        pixelSize={4}
        color="#8B5CF6"
        patternScale={2}
        patternDensity={1}
        pixelSizeJitter={0}
        enableRipples={true}
        rippleSpeed={0.3}
        rippleThickness={0.1}
        rippleIntensityScale={1}
        liquid={false}
        speed={0.5}
        edgeFade={0.25}
        transparent={true}
      />
    </div>
  );
}

export function PixelBlastExample3() {
  // Diamond variant with subtle effects
  return (
    <div style={{ width: '100%', height: '400px', position: 'relative' }}>
      <PixelBlast
        variant="diamond"
        pixelSize={8}
        color="#56B4E9"
        patternScale={4}
        patternDensity={0.8}
        pixelSizeJitter={0.2}
        enableRipples={true}
        rippleSpeed={0.2}
        rippleThickness={0.15}
        rippleIntensityScale={0.8}
        liquid={false}
        speed={0.3}
        edgeFade={0.4}
        transparent={true}
        noiseAmount={0.02}
      />
    </div>
  );
}

export function PixelBlastExample4() {
  // Triangle variant with liquid effect
  return (
    <div style={{ width: '100%', height: '500px', position: 'relative' }}>
      <PixelBlast
        variant="triangle"
        pixelSize={5}
        color="#E69F00"
        patternScale={2.5}
        patternDensity={1.5}
        pixelSizeJitter={0.3}
        enableRipples={true}
        rippleSpeed={0.5}
        rippleThickness={0.08}
        rippleIntensityScale={2}
        liquid={true}
        liquidStrength={0.15}
        liquidRadius={1.5}
        liquidWobbleSpeed={3}
        speed={0.8}
        edgeFade={0.3}
        transparent={true}
      />
    </div>
  );
}

// Minimal usage - relies on defaults
export function PixelBlastMinimal() {
  return (
    <div style={{ width: '100%', height: '400px', position: 'relative' }}>
      <PixelBlast />
    </div>
  );
}

// Interactive demo component that can be toggled
export function PixelBlastInteractiveDemo() {
  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-semibold mb-4">Circle Variant with Liquid Effect (Your Sample)</h3>
        <PixelBlastExample1 />
      </div>
      
      <div>
        <h3 className="text-lg font-semibold mb-4">Square Variant (UI Settings)</h3>
        <PixelBlastExample2 />
      </div>
      
      <div>
        <h3 className="text-lg font-semibold mb-4">Diamond Variant with Noise</h3>
        <PixelBlastExample3 />
      </div>
      
      <div>
        <h3 className="text-lg font-semibold mb-4">Triangle Variant with Liquid</h3>
        <PixelBlastExample4 />
      </div>
    </div>
  );
}