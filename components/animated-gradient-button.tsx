"use client"

import { motion } from "framer-motion"
import { Button, ButtonProps } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { forwardRef } from "react"

interface AnimatedGradientButtonProps extends ButtonProps {
  gradientColor?: "primary" | "success" | "danger" | "warning"
}

const AnimatedGradientButton = forwardRef<HTMLButtonElement, AnimatedGradientButtonProps>(
  ({ className, children, gradientColor = "primary", ...props }, ref) => {
    const gradientClasses = {
      primary: "bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 hover:from-blue-500 hover:via-cyan-500 hover:to-blue-600",
      success: "bg-gradient-to-r from-green-600 via-emerald-500 to-teal-500 hover:from-green-500 hover:via-teal-500 hover:to-green-600",
      danger: "bg-gradient-to-r from-red-600 via-pink-500 to-rose-500 hover:from-red-500 hover:via-rose-500 hover:to-red-600",
      warning: "bg-gradient-to-r from-yellow-600 via-orange-500 to-amber-500 hover:from-yellow-500 hover:via-amber-500 hover:to-yellow-600"
    }

    return (
      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="relative group"
      >
        <Button
          ref={ref}
          className={cn(
            "relative overflow-hidden text-white border-0 shadow-lg transition-all duration-500",
            gradientClasses[gradientColor],
            "before:absolute before:inset-0 before:bg-white/20 before:translate-x-[-100%] before:transition-transform before:duration-700 hover:before:translate-x-[100%]",
            "after:absolute after:inset-0 after:bg-gradient-to-r after:from-transparent after:via-white/10 after:to-transparent after:translate-x-[-100%] after:transition-transform after:duration-1000 hover:after:translate-x-[100%]",
            className
          )}
          {...props}
        >
          <span className="relative z-10 font-medium">{children}</span>
          
          {/* Animated border glow */}
          <div className="absolute inset-0 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className="absolute inset-[-2px] bg-gradient-to-r from-white/20 to-white/20 rounded-md blur-sm" />
          </div>
        </Button>
      </motion.div>
    )
  }
)

AnimatedGradientButton.displayName = "AnimatedGradientButton"

export { AnimatedGradientButton }