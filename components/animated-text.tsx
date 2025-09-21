"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import React from "react"

interface AnimatedTextProps {
  children: string
  className?: string
  delay?: number
  duration?: number
  animation?: "fadeInUp" | "typewriter" | "wavyText" | "gradientWipe" | "stagger"
}

export function AnimatedText({ 
  children, 
  className, 
  delay = 0, 
  duration = 0.8,
  animation = "fadeInUp"
}: AnimatedTextProps) {
  const words = children.split(" ")
  const characters = children.split("")

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: animation === "typewriter" ? 0.05 : 0.1,
        delayChildren: delay,
      },
    },
  }

  const transitionSettings = {
    duration: duration,
    ease: [0.4, 0, 0.2, 1] as const
  }

  const fadeInUpVariants = {
    hidden: { 
      opacity: 0, 
      y: 20,
      filter: "blur(4px)"
    },
    visible: { 
      opacity: 1, 
      y: 0,
      filter: "blur(0px)"
    },
  }

  const typewriterVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        duration: 0.05
      }
    },
  }

  const wavyVariants = {
    hidden: { 
      opacity: 0,
      y: 10
    },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        repeat: Infinity,
        repeatType: "reverse" as const,
        repeatDelay: 2
      }
    })
  }

  const staggerVariants = {
    hidden: { 
      opacity: 0, 
      x: -20,
      rotateX: -90
    },
    visible: { 
      opacity: 1, 
      x: 0,
      rotateX: 0
    },
  }

  if (animation === "gradientWipe") {
    return (
      <motion.div
        initial={{ backgroundPosition: "0% 50%" }}
        animate={{ backgroundPosition: "100% 50%" }}
        transition={{ 
          duration: duration,
          delay,
          ease: "easeInOut"
        }}
        className={cn(
          "inline-block bg-gradient-to-r from-foreground via-primary to-accent bg-[length:200%_100%] bg-clip-text text-transparent",
          className
        )}
      >
        {children}
      </motion.div>
    )
  }

  if (animation === "typewriter") {
    return (
      <motion.span
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className={cn("inline-block", className)}
      >
        {characters.map((char, index) => (
          <motion.span
            key={index}
            variants={typewriterVariants}
            className="inline-block"
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: [1, 0] }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            repeatType: "reverse",
            delay: characters.length * 0.05 + delay
          }}
          className="inline-block w-[2px] h-[1em] bg-primary ml-1"
        />
      </motion.span>
    )
  }

  if (animation === "wavyText") {
    return (
      <motion.span
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className={cn("inline-block", className)}
      >
        {characters.map((char, index) => (
          <motion.span
            key={index}
            variants={wavyVariants}
            custom={index}
            className="inline-block"
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </motion.span>
    )
  }

  const variants = animation === "stagger" ? staggerVariants : fadeInUpVariants

  return (
    <motion.span
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className={cn("inline-block", className)}
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          variants={variants}
          transition={transitionSettings}
          className="inline-block mr-2 last:mr-0"
        >
          {word}
        </motion.span>
      ))}
    </motion.span>
  )
}

interface GlitchTextProps {
  children: string
  className?: string
  intensity?: "low" | "medium" | "high"
}

export function GlitchText({ children, className, intensity = "medium" }: GlitchTextProps) {
  const intensitySettings = {
    low: { x: [-1, 1], duration: 0.1, repeatDelay: 3 },
    medium: { x: [-2, 2], duration: 0.15, repeatDelay: 2 },
    high: { x: [-4, 4], duration: 0.2, repeatDelay: 1 }
  }

  const settings = intensitySettings[intensity]

  return (
    <motion.span
      className={cn("inline-block relative", className)}
      whileHover={{
        x: settings.x,
        textShadow: [
          "0 0 0 transparent",
          "2px 0 #ff0000, -2px 0 #00ffff",
          "0 0 0 transparent"
        ],
        transition: {
          duration: settings.duration,
          repeat: 3,
          repeatType: "mirror"
        }
      }}
    >
      {children}
      <motion.span
        className="absolute inset-0 text-red-500 opacity-0"
        style={{ clipPath: "inset(0 0 50% 0)" }}
        whileHover={{
          opacity: [0, 0.7, 0],
          x: [0, 2, 0],
          transition: {
            duration: settings.duration,
            repeat: 3,
            repeatType: "mirror"
          }
        }}
      >
        {children}
      </motion.span>
      <motion.span
        className="absolute inset-0 text-cyan-500 opacity-0"
        style={{ clipPath: "inset(50% 0 0 0)" }}
        whileHover={{
          opacity: [0, 0.7, 0],
          x: [0, -2, 0],
          transition: {
            duration: settings.duration,
            repeat: 3,
            repeatType: "mirror"
          }
        }}
      >
        {children}
      </motion.span>
    </motion.span>
  )
}