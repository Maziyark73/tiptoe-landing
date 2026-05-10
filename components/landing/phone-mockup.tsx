"use client"

import { ReactNode } from "react"

interface PhoneMockupProps {
  children: ReactNode
  rotation?: number
  className?: string
}

export function PhoneMockup({ children, rotation = 0, className = "" }: PhoneMockupProps) {
  return (
    <div 
      className={`phone-glow ${className}`}
      style={{ transform: `rotate(${rotation}deg)` }}
    >
      <div className="relative w-[280px] md:w-[320px] h-[560px] md:h-[640px] bg-[#1a1a1a] rounded-[3rem] p-3 shadow-2xl border border-[#333]">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-[#1a1a1a] rounded-b-2xl z-10" />
        
        {/* Screen */}
        <div className="relative w-full h-full rounded-[2.3rem] overflow-hidden bg-background">
          {children}
        </div>
        
        {/* Home indicator */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-white/30 rounded-full" />
      </div>
    </div>
  )
}
