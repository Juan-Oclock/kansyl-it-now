"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"

export function BentoGrid({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={cn("grid gap-4 sm:grid-cols-2 lg:grid-cols-3", className)}>{children}</div>
  )
}

export function FeatureCard({ title, description, icon, className }: { title: string; description: string; icon?: React.ReactNode; className?: string }) {
  return (
    <motion.div
      whileHover={{ rotateX: -2, rotateY: 2, scale: 1.01 }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
      className="[transform-style:preserve-3d]"
    >
      <Card className={cn("h-full", className)}>
        <CardHeader>
          <div className="flex items-center gap-2 text-primary">
            {icon}
            <CardTitle>{title}</CardTitle>
          </div>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-16" />
        </CardContent>
      </Card>
    </motion.div>
  )
}