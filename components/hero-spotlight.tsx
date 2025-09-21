"use client"

import { useEffect, useRef } from "react"
import { cn } from "@/lib/utils"

export function HeroSpotlight({ className }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const handle = (e: MouseEvent) => {
      const { left, top } = el.getBoundingClientRect()
      const x = e.clientX - left
      const y = e.clientY - top
      el.style.setProperty("--x", `${x}px`)
      el.style.setProperty("--y", `${y}px`)
    }
    el.addEventListener("mousemove", handle)
    return () => el.removeEventListener("mousemove", handle)
  }, [])

  return (
    <div
      ref={ref}
      aria-hidden
      className={cn("absolute inset-0 bg-hero-gradient pointer-events-none", className)}
    />
  )
}