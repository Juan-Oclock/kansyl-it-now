"use client"

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { ReactNode, useRef } from "react"

interface FloatingFeatureCardProps {
  title: string
  description: string
  icon?: ReactNode
  className?: string
  delay?: number
}

export function FloatingFeatureCard({ 
  title, 
  description, 
  icon, 
  className,
  delay = 0 
}: FloatingFeatureCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  
  const mouseXSpring = useSpring(x)
  const mouseYSpring = useSpring(y)
  
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7.5deg", "-7.5deg"])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7.5deg", "7.5deg"])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return
    
    const rect = ref.current.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    
    const mouseX = (e.clientX - rect.left - width / 2) / width
    const mouseY = (e.clientY - rect.top - height / 2) / height
    
    x.set(mouseX)
    y.set(mouseY)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.6, 
        delay,
        ease: [0.21, 1.11, 0.81, 0.99]
      }}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d"
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ 
        z: 100,
        transition: { duration: 0.3 }
      }}
      className={cn("perspective-1000 group", className)}
    >
      <Card className="h-full relative overflow-hidden bg-card/50 backdrop-blur-sm border-border/50 hover:border-border transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10">
        {/* Gradient overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        <CardHeader>
          <div className="flex items-start gap-4">
            {icon && (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: delay + 0.1 }}
                className="text-primary flex-shrink-0 mt-1"
                whileHover={{ scale: 1.1, rotate: 5 }}
                style={{ transformStyle: "preserve-3d", transform: "translateZ(50px)" }}
              >
                {icon}
              </motion.div>
            )}
            <div className="space-y-2">
              <CardTitle 
                className="text-lg font-semibold group-hover:text-primary transition-colors duration-300"
                style={{ transformStyle: "preserve-3d", transform: "translateZ(30px)" }}
              >
                {title}
              </CardTitle>
              <CardDescription 
                className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300"
                style={{ transformStyle: "preserve-3d", transform: "translateZ(20px)" }}
              >
                {description}
              </CardDescription>
            </div>
          </div>
        </CardHeader>
      </Card>
    </motion.div>
  )
}

interface FloatingFeatureGridProps {
  children: ReactNode
  className?: string
}

export function FloatingFeatureGrid({ children, className }: FloatingFeatureGridProps) {
  return (
    <div className={cn("grid gap-6 sm:grid-cols-2 lg:grid-cols-3", className)}>
      {children}
    </div>
  )
}