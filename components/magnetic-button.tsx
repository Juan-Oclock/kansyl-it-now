"use client"

import { motion, useMotionValue, useTransform } from "framer-motion"
import { Button, ButtonProps } from "@/components/ui/button"
import { useRef } from "react"

export function MagneticButton({ children, ...props }: ButtonProps) {
  const ref = useRef<HTMLButtonElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useTransform(y, [50, -50], [5, -5])
  const rotateY = useTransform(x, [-50, 50], [-5, 5])

  return (
    <motion.div
      onMouseMove={(e) => {
        const rect = ref.current?.getBoundingClientRect()
        if (!rect) return
        const relX = e.clientX - rect.left - rect.width / 2
        const relY = e.clientY - rect.top - rect.height / 2
        x.set(Math.max(-50, Math.min(50, relX)))
        y.set(Math.max(-50, Math.min(50, relY)))
      }}
      onMouseLeave={() => {
        x.set(0)
        y.set(0)
      }}
      style={{ perspective: 600 }}
    >
      <motion.div style={{ rotateX, rotateY }}>
        <Button ref={ref} {...props}>
          {children}
        </Button>
      </motion.div>
    </motion.div>
  )
}