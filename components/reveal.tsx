"use client"

import { motion, useAnimation, useInView } from "framer-motion"
import { useEffect, useRef } from "react"

export function Reveal({ children, delay = 0, className }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const controls = useAnimation()
  const inView = useInView(ref, { once: true, margin: "-50px" })

  useEffect(() => {
    if (inView) controls.start("visible")
  }, [inView, controls])

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 16 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}