# React Bits Integration Guide

This document explains how to integrate React Bits animated background components into a Next.js project, specifically focusing on the PixelBlast effect implementation.

## Overview

React Bits provides over 110 animated React components compatible with Next.js, Tailwind CSS, Framer Motion, and TypeScript. This guide covers the manual integration approach when npm installation encounters issues.

## Project Structure

```
components/
├── pixel-blast-full.tsx          # Complete PixelBlast implementation
├── pixel-blast-examples.tsx      # PixelBlast usage examples
├── pixel-blast.tsx              # Original simplified version (deprecated)
├── dot-grid.tsx                 # Dot Grid background implementation
└── dot-grid-examples.tsx        # Dot Grid usage examples
```

## PixelBlast Implementation

### Core Dependencies

```json
{
  "three": "^0.170.0",
  "postprocessing": "^6.36.0",
  "@types/three": "^0.170.0",
  "gsap": "^3.12.5"
}
```

### Component Architecture

The PixelBlast component consists of several key parts:

#### 1. Touch Texture System
```typescript
const createTouchTexture = () => {
  // Creates a 64x64 canvas for liquid distortion effects
  // Tracks mouse/touch interactions with trail effects
  // Used for liquid wobble animations
}
```

#### 2. Liquid Effect (PostProcessing)
```typescript
const createLiquidEffect = (texture, opts) => {
  // WebGL shader effect for liquid distortion
  // Uses touch texture for interactive deformation
  // Optional - can be disabled for performance
}
```

#### 3. Advanced Shaders
```glsl
// Vertex Shader (GLSL3)
void main() {
  gl_Position = vec4(position, 1.0);
}

// Fragment Shader with features:
// - Bayer dithering for pixelation
// - Fractal Brownian Motion (FBM) for organic patterns  
// - Multiple shape variants (square, circle, triangle, diamond)
// - Interactive ripple effects from clicks
// - Edge fading for smooth boundaries
```

## Dot Grid Implementation

### Component Architecture

The Dot Grid component uses HTML5 Canvas for rendering and provides:

#### 1. Canvas-based Rendering
```typescript
const DotGrid = ({
  dotSize = 2,           // Size of each dot
  dotColor = 'rgba(255, 255, 255, 0.5)', // Dot color with opacity
  spacing = 20,          // Distance between dots
  fadeDistance = 100,    // Mouse interaction radius
  interactive = true,    // Enable mouse/touch interaction
  glowEffect = false,    // Add glow to bright dots
  pulseAnimation = false // Animate dots with sine wave
}) => {
  // Canvas rendering with requestAnimationFrame
  // Mouse/touch tracking for interactive effects
  // ResizeObserver for responsive sizing
}
```

#### 2. Interactive Effects
- **Mouse Tracking**: Dots brighten when cursor approaches
- **Touch Support**: Mobile-friendly touch interactions
- **Glow Effects**: Optional radial gradients for enhanced dots
- **Pulse Animation**: Sine wave-based animation cycles

#### 3. Performance Features
- Canvas 2D rendering with device pixel ratio support
- RequestAnimationFrame for smooth 60fps animation
- ResizeObserver for efficient responsive updates
- Event cleanup and memory management

### Dot Grid Configuration

```typescript
<DotGrid
  dotSize={2}                    // Dot radius in pixels
  dotColor="rgba(139, 92, 246, 0.6)" // RGBA color string
  backgroundColor="transparent"   // Background color
  spacing={24}                   // Grid spacing in pixels
  fadeDistance={120}             // Mouse interaction radius
  animationSpeed={0.8}          // Animation speed multiplier
  interactive={true}            // Enable interactivity
  glowEffect={true}            // Add glow effects
  pulseAnimation={false}       // Enable pulse animation
/>
```

## Configuration Options

### Basic Configuration
```typescript
<PixelBlast
  variant="square"              // square | circle | triangle | diamond
  pixelSize={4}                 // Size of individual pixels
  color="#8B5CF6"              // Hex color for the effect
  patternScale={2}             // Scale of noise pattern
  patternDensity={1}           // Density of the grid pattern
/>
```

### Animation Settings
```typescript
<PixelBlast
  speed={0.5}                  // Animation speed multiplier
  enableRipples={true}         // Click ripple effects
  rippleSpeed={0.3}           // Speed of ripple propagation
  rippleThickness={0.1}       // Thickness of ripple waves
  rippleIntensityScale={1}    // Intensity of ripples
  edgeFade={0.25}             // Fade amount at edges
/>
```

### Advanced Features
```typescript
<PixelBlast
  liquid={true}                // Enable liquid distortion
  liquidStrength={0.12}       // Strength of liquid effect
  liquidRadius={1.2}          // Touch interaction radius
  liquidWobbleSpeed={5}       // Wobble frequency
  pixelSizeJitter={0.5}       // Random pixel size variation
  noiseAmount={0.02}          // Film grain noise
  transparent={true}          // Transparent background
  autoPauseOffscreen={true}   // Performance optimization
/>
```

## Integration Steps

### Step 1: Component Implementation

Create `components/pixel-blast-full.tsx` with the complete implementation:

```typescript
"use client"

import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { EffectComposer, EffectPass, RenderPass, Effect } from 'postprocessing';

// [Complete implementation as shown in pixel-blast-full.tsx]
```

### Step 2: Wrapper Component

Create a configured wrapper for your specific use case:

```typescript
export function PixelBlastHero({ className }: { className?: string }) {
  return (
    <PixelBlast
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
      variant="square"
      pixelSize={4}
      color="#8B5CF6"
      patternScale={2}
      patternDensity={1}
      pixelSizeJitter={0}
      speed={0.5}
      edgeFade={0.25}
      enableRipples={true}
      liquid={false}
      transparent={true}
    />
  );
}
```

### Step 3: Page Integration

Use as background in your sections:

```typescript
export default function Home() {
  return (
    <main>
      <section className="relative overflow-hidden min-h-[600px] md:min-h-[700px]">
        <PixelBlastHero className="-z-10" />
        <div className="container relative z-10 grid items-center gap-10 py-16 md:grid-cols-2 md:py-24">
          {/* Your content here */}
        </div>
      </section>
    </main>
  );
}
```

## Key Implementation Details

### WebGL2 Requirements
- Component requires WebGL2 support
- Falls back gracefully if WebGL2 is unavailable
- Uses GLSL3 shaders for advanced effects

### Performance Optimizations
- Pixel ratio limited to max 2 for performance
- Auto-pause when element is offscreen
- Efficient shader compilation and cleanup
- ResizeObserver for responsive sizing

### Positioning Considerations
- Use `position: absolute` with `inset-0` for background positioning
- Ensure parent has `position: relative` 
- Parent needs explicit `min-height` for proper sizing
- Remove conflicting `background-color` from parent

### Common Issues and Solutions

#### Issue: Canvas has 0 height
**Solution:** Ensure parent container has explicit dimensions
```css
.parent {
  position: relative;
  min-height: 600px; /* Required for absolute positioning */
}
```

#### Issue: Effect not visible
**Solution:** Check z-index and background colors
```typescript
// Correct positioning
<PixelBlastHero className="-z-10" />

// Remove conflicting backgrounds
<section className="relative"> {/* No bg-background */}
```

#### Issue: WebGL errors
**Solution:** Add feature detection and fallbacks
```typescript
const canWebGL2 = (() => {
  try {
    const c = document.createElement("canvas")
    const gl = c.getContext("webgl2", { alpha: true })
    return !!gl
  } catch {
    return false
  }
})()
```

## Usage Examples

### Minimal Usage
```typescript
<div style={{ width: '100%', height: '600px', position: 'relative' }}>
  <PixelBlast />
</div>
```

### Full Customization (Sample from React Bits)
```typescript
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
```

## Extending to Other React Bits Components

### General Pattern
1. **Identify the component** from React Bits documentation
2. **Check dependencies** (Three.js, postprocessing, etc.)
3. **Copy the shader code** and adapt if needed
4. **Create TypeScript interfaces** for props
5. **Add WebGL feature detection**
6. **Implement proper cleanup** in useEffect
7. **Add responsive sizing** with ResizeObserver
8. **Create wrapper components** for specific use cases

### Other Potential Components
- **Particle Systems:** Similar WebGL approach
- **Mesh Gradients:** Three.js materials and geometries  
- **Animated Backgrounds:** CSS/SVG based components
- **Interactive Elements:** Mouse/touch event handling

### Best Practices
- Always add fallback styles for non-WebGL browsers
- Use `"use client"` directive for client-side rendering
- Implement proper error boundaries
- Add loading states for complex effects
- Test on different devices and browsers
- Consider performance impact on mobile devices

## Troubleshooting Checklist

- [ ] WebGL2 is available in browser
- [ ] Container has proper dimensions (not 0x0)
- [ ] Parent has `position: relative`
- [ ] No conflicting background colors
- [ ] Proper z-index layering
- [ ] Canvas is appended to DOM
- [ ] Animation loop is running
- [ ] No shader compilation errors
- [ ] Proper cleanup on unmount

## Resources

- [React Bits Official Site](https://reactbits.dev/)
- [Three.js Documentation](https://threejs.org/docs/)
- [WebGL Reference](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API)
- [Postprocessing Library](https://github.com/pmndrs/postprocessing)

---

**Note:** This implementation was created through manual integration due to npm installation issues. For future projects, try the official React Bits CLI first:

```bash
npx reactbits-cli@latest add pixel-blast
```