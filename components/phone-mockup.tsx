"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export function PhoneMockup() {
  return (
    <motion.div
      className="relative mx-auto"
      animate={{ y: [0, -8, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      aria-hidden
    >
      <Image
        src="/images/screens/kansyl sub.png"
        alt="Kansyl app screenshot"
        width={320}
        height={640}
        priority
        className="rounded-[36px] shadow-2xl"
      />
    </motion.div>
  )
}
