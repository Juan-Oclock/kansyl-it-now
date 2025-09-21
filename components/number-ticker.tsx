"use client"

import { useEffect, useRef, useState } from "react"

export function NumberTicker({ end, duration = 1200, prefix = "", suffix = "" }: { end: number; duration?: number; prefix?: string; suffix?: string }) {
  const [value, setValue] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    let frame: number
    const start = performance.now()
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / duration)
      const eased = 1 - Math.pow(1 - p, 3)
      setValue(Math.floor(eased * end))
      if (p < 1) frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [end, duration])

  return (
    <span ref={ref} aria-live="polite" aria-atomic>
      {prefix}
      {value.toLocaleString()}
      {suffix}
    </span>
  )
}