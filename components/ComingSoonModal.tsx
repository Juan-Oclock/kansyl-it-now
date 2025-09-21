'use client'

import React from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Sparkles } from 'lucide-react'

interface ComingSoonModalProps {
  isOpen: boolean
  onClose: () => void
}

export function ComingSoonModal({ isOpen, onClose }: ComingSoonModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-sm border-muted/50">
        <DialogHeader className="space-y-3">
          <div className="mx-auto">
            <div className="relative">
              <div className="absolute inset-0 blur-xl bg-gradient-to-r from-primary/20 to-accent/20 rounded-full" />
              <Sparkles className="h-10 w-10 text-primary relative" />
            </div>
          </div>
          
          <DialogTitle className="text-xl font-medium text-center">
            Coming Soon
          </DialogTitle>
          
          <DialogDescription className="text-center text-sm leading-relaxed px-2">
            Like your Netflix trial, we promise this won&apos;t expire before launch. Kansyl is almost here.
          </DialogDescription>
        </DialogHeader>
        
        <div className="mt-6 space-y-4">
          <div className="text-center">
            <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">
              Expected Launch
            </p>
            <p className="text-sm font-semibold mt-1" style={{ color: '#A8DE28' }}>
              Early October 2025
            </p>
          </div>
          
          <Button 
            variant="outline" 
            onClick={onClose}
            className="w-full h-10 text-sm border-muted-foreground/20 hover:bg-muted/50 hover:text-[#A8DE28] transition-colors"
          >
            Got it
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
