# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

Kansyl Landing is a high-performance, accessible, production-ready landing site for the iOS app "Kansyl". It's built with Next.js 15 (App Router), TypeScript, Tailwind CSS, shadcn/ui, and Framer Motion, with advanced WebGL animations from React Bits integration.

## Common Commands

### Development
```bash
# Start development server with Turbopack
npm run dev

# Build for production
npm run build

# Start production server
npm run start

# Lint code
npm run lint
```

### Testing Single Components
Since this is a single-page landing site, you can test individual components by temporarily rendering them in `app/page.tsx` or creating a temporary test page.

## Architecture Overview

### Tech Stack
- **Framework**: Next.js 15 with App Router and Turbopack
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS with custom animations
- **UI Components**: shadcn/ui (Radix UI primitives)
- **Animations**: Framer Motion + GSAP + custom WebGL effects
- **3D Graphics**: Three.js with postprocessing for WebGL effects

### File Structure Patterns
```
app/
├── page.tsx          # Single-page landing with all sections
├── layout.tsx        # Global layout, fonts, metadata
└── globals.css       # Global styles with CSS variables

components/
├── ui/               # shadcn/ui primitives (Button, Card, etc.)
├── *-examples.tsx    # Example/demo components for testing
├── animated-*.tsx    # Animation components (text, buttons)
├── dot-grid-*.tsx    # Interactive dot grid backgrounds
├── pixel-blast-*.tsx # WebGL pixel effects (React Bits)
├── floating-*.tsx    # Interactive feature cards
├── phone-*.tsx       # iPhone mockup components
└── reveal.tsx        # Scroll-triggered reveal animations
```

### Component Architecture Patterns

#### Animation Components
The project uses a layered animation approach:

1. **Framer Motion Components**: High-level declarative animations
   - `AnimatedText`: Text animations (fadeInUp, typewriter, stagger, etc.)
   - `AnimatedGradientButton`: Gradient hover effects
   - `Reveal`: Scroll-triggered animations with Intersection Observer

2. **GSAP Components**: Complex timeline-based animations
   - Used in dot grid interactions and physics-based effects
   - Performance-optimized with throttling and requestAnimationFrame

3. **WebGL/Three.js Effects**: Hardware-accelerated graphics
   - `PixelBlast`: Advanced pixel-based background effects with shaders
   - Custom GLSL shaders for interactive distortion effects

#### React Bits Integration
The project manually integrates React Bits components (due to npm issues):
- Complex WebGL effects with Three.js and postprocessing
- Custom shader implementations with GLSL3
- Performance optimizations (auto-pause offscreen, pixel ratio limiting)
- Graceful fallbacks for non-WebGL browsers

#### shadcn/ui Integration
- Components configured in `components.json` with "new-york" style
- Custom CSS variables in `globals.css` for theming
- Tailwind plugin `tailwindcss-animate` for additional animations

### State Management Patterns
- Minimal client-side state (mostly UI state like mobile menu)
- Heavy use of `useRef` for direct DOM manipulation in animation components
- `useMemo` and `useCallback` for performance optimization in complex components

### Performance Optimizations

#### Animation Performance
- `requestAnimationFrame` loops for smooth 60fps animations
- Throttling for mouse/scroll event handlers
- GPU acceleration via `transform3d` and WebGL
- Conditional animation based on `prefers-reduced-motion`

#### Bundle Optimization
- Dynamic imports for heavy WebGL components (if needed)
- Turbopack for fast development builds
- Next.js automatic code splitting

#### Responsive Design
- Mobile-first approach with Tailwind breakpoints
- `ResizeObserver` for responsive canvas sizing
- Device pixel ratio handling for high-DPI displays

## Development Guidelines

### Adding New Animations
1. **Simple animations**: Use Framer Motion with predefined variants
2. **Complex interactions**: Use GSAP with proper cleanup in `useEffect`
3. **WebGL effects**: Follow React Bits patterns with feature detection
4. **Always add**: Reduced motion fallbacks via `prefers-reduced-motion`

### Component Development
- Use TypeScript interfaces for all component props
- Follow shadcn/ui patterns for form/input components
- Add proper keyboard navigation and ARIA labels for accessibility
- Test on mobile devices for touch interactions

### WebGL Component Guidelines
- Always check WebGL2 availability before rendering
- Implement proper cleanup in `useEffect` return functions
- Use absolute positioning with explicit parent dimensions
- Add fallback styles for non-WebGL browsers
- Limit pixel ratio to 2 for performance on high-DPI displays

### Styling Conventions
- Use Tailwind utility classes for most styling
- CSS variables defined in `globals.css` for theme colors
- Custom animations defined in `tailwind.config.ts`
- Component-scoped styles only when necessary

### Performance Considerations
- Lazy load heavy components below the fold
- Use `next/image` for all images with proper `alt` attributes
- Minimize layout shifts during animations
- Test on lower-end devices for smooth performance

## Important Implementation Notes

### Metadata Configuration
- Update `metadataBase` in `app/layout.tsx` before deploying to production
- Current placeholder URL: `https://kansyl.app`

### Animation Dependencies
The project uses multiple animation libraries that must work together:
- **Framer Motion**: For React component animations
- **GSAP**: For complex timeline animations and physics
- **Three.js + postprocessing**: For WebGL effects
- **Tailwind Animate**: For utility-based CSS animations

### Browser Support
- Modern browsers with ES6+ support
- WebGL2 for advanced effects (with fallbacks)
- iOS 15+ Safari compatibility (target audience)
- Reduced motion support for accessibility

### Mobile Optimization
- Touch-friendly interactive elements (44px minimum)
- Optimized animation performance on mobile
- Responsive typography and spacing
- iOS-specific considerations for the target app audience

This architecture supports both rapid development and production performance while maintaining accessibility and smooth animations across devices.