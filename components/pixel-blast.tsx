"use client"

/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useRef } from "react"
import * as THREE from "three"
import { EffectComposer, EffectPass, RenderPass, Effect } from "postprocessing"

// PixelBlast with customization matching the UI settings
export function PixelBlastHero({ className }: { className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const threeRef = useRef<any>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const applyFallback = () => {
      // graceful CSS fallback background
      container.style.background =
        "radial-gradient(800px circle at 20% 40%, rgba(139,92,246,0.08), transparent 50%)," +
        "radial-gradient(800px circle at 80% 60%, rgba(56,189,248,0.06), transparent 50%)"
    }

    // Feature detect WebGL2
    const canWebGL2 = (() => {
      try {
        const c = document.createElement("canvas")
        const gl = c.getContext("webgl2", { alpha: true })
        return !!gl
      } catch {
        return false
      }
    })()

    if (!canWebGL2) {
      applyFallback()
      return
    }

    // Ensure container has size
    const width = Math.max(1, container.clientWidth)
    const height = Math.max(1, container.clientHeight)

    let renderer: THREE.WebGLRenderer | null = null
    try {
      const canvas = document.createElement("canvas")
      const gl = canvas.getContext("webgl2", { alpha: true, antialias: false })
      if (!gl) {
        applyFallback()
        return
      }

      renderer = new THREE.WebGLRenderer({ canvas, context: gl, alpha: true, antialias: false })
      renderer.setPixelRatio(1) // maximum compatibility
      renderer.setSize(width, height, false)
    } catch (e) {
      applyFallback()
      return
    }

    // Scene
    const scene = new THREE.Scene()
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1)

    // Advanced pixel shader with customization from the UI
    const VERT = `
      void main() {
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `

    const FRAG = `
      precision highp float;
      uniform vec2  uResolution;
      uniform float uTime;
      uniform vec3  uColor;
      uniform float uPixelSize;     // 4.0
      uniform float uPatternScale;   // 2.0  
      uniform float uPatternDensity; // 1.0
      uniform float uPixelJitter;    // 0.0
      uniform float uSpeed;          // 0.5
      uniform float uEdgeFade;       // 0.25
      uniform float uRipples;        // enabled
      uniform float uLiquid;         // disabled
      
      // Pseudo-random function
      float random(vec2 st) {
        return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453123);
      }
      
      // Noise function for organic movement
      float noise(vec2 st) {
        vec2 i = floor(st);
        vec2 f = fract(st);
        
        float a = random(i);
        float b = random(i + vec2(1.0, 0.0));
        float c = random(i + vec2(0.0, 1.0));
        float d = random(i + vec2(1.0, 1.0));
        
        vec2 u = f * f * (3.0 - 2.0 * f);
        return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
      }
      
      void main(){
        vec2 uv = gl_FragCoord.xy / uResolution;
        vec2 pixelatedUV = uv;
        
        // Apply pixelation (Pixel Size = 4)
        if (uPixelSize > 1.0) {
          vec2 pixelSize = vec2(uPixelSize) / uResolution;
          pixelatedUV = floor(uv / pixelSize) * pixelSize + pixelSize * 0.5;
        }
        
        // Apply pattern scale and movement
        vec2 patternUV = pixelatedUV * uPatternScale;
        float t = uTime * uSpeed;
        
        // Square variant pattern
        float pattern = 0.0;
        
        // Create ripple effect when enabled
        if (uRipples > 0.5) {
          vec2 center = vec2(0.5, 0.5);
          float dist = distance(pixelatedUV, center);
          pattern += sin(dist * 20.0 - t * 2.0) * 0.3;
        }
        
        // Base square grid pattern
        vec2 grid = fract(patternUV * uPatternDensity);
        float squarePattern = step(0.5, grid.x) * step(0.5, grid.y);
        pattern += squarePattern;
        
        // Animated noise layer
        float n = noise(patternUV + vec2(t * 0.2, t * 0.3));
        pattern += n * 0.5;
        
        // Apply edge fade
        float edgeDist = min(
          min(pixelatedUV.x, 1.0 - pixelatedUV.x),
          min(pixelatedUV.y, 1.0 - pixelatedUV.y)
        );
        float fade = smoothstep(0.0, uEdgeFade, edgeDist);
        
        // Final color mixing
        float intensity = pattern * fade * 0.15;
        vec3 finalColor = uColor * intensity;
        
        // Add subtle color variation
        finalColor += vec3(
          sin(t + pixelatedUV.x * 10.0) * 0.02,
          cos(t + pixelatedUV.y * 10.0) * 0.02,
          sin(t * 0.7) * 0.01
        );
        
        gl_FragColor = vec4(finalColor, intensity * 2.0);
      }
    `

    const uniforms: any = {
      uResolution: { value: new THREE.Vector2(renderer.domElement.width, renderer.domElement.height) },
      uTime: { value: 0 },
      uColor: { value: new THREE.Color("#8B5CF6") }, // Purple color as shown
      uPixelSize: { value: 4.0 },      // Pixel Size: 4
      uPatternScale: { value: 2.0 },   // Pattern Scale: 2
      uPatternDensity: { value: 1.0 }, // Pattern Density: 1
      uPixelJitter: { value: 0.0 },    // Pixel Jitter: 0
      uSpeed: { value: 0.5 },          // Speed: 0.5
      uEdgeFade: { value: 0.25 },      // Edge Fade: 0.25
      uRipples: { value: 1.0 },        // Ripples: enabled
      uLiquid: { value: 0.0 },         // Liquid: disabled
    }

    const material = new THREE.ShaderMaterial({
      vertexShader: VERT,
      fragmentShader: FRAG,
      uniforms,
      transparent: true,
      depthTest: false,
      depthWrite: false,
    })

    const quad = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), material)
    scene.add(quad)

    // RenderPass/postprocessing removed for stability; render scene directly

    container.appendChild(renderer.domElement)

    const clock = new THREE.Clock()

    const setSize = () => {
      if (!container || !renderer) return
      const w = Math.max(1, container.clientWidth)
      const h = Math.max(1, container.clientHeight)
      renderer.setSize(w, h, false)
      uniforms.uResolution.value.set(renderer.domElement.width, renderer.domElement.height)
    }
    setSize()
    const ro = new ResizeObserver(setSize)
    ro.observe(container)

    let raf = 0
    const animate = () => {
      uniforms.uTime.value = clock.getElapsedTime()
      renderer!.render(scene, camera)
      raf = requestAnimationFrame(animate)
    }
    raf = requestAnimationFrame(animate)

    threeRef.current = { renderer, scene, camera, material, quad, raf, ro }

    return () => {
      const t = threeRef.current
      if (!t) return
      cancelAnimationFrame(t.raf)
      t.ro?.disconnect()
      t.quad?.geometry?.dispose?.()
      t.material?.dispose?.()
      t.renderer?.dispose?.()
      if (t.renderer?.domElement?.parentElement === container) {
        container.removeChild(t.renderer.domElement)
      }
      threeRef.current = null
    }
  }, [])

  return <div ref={containerRef} className={className} aria-label="Pixel Blast" />
}
