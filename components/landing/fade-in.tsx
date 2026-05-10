"use client"

import { useEffect, useRef, ReactNode } from "react"

interface FadeInProps {
  children: ReactNode
  delay?: number
  direction?: "up" | "down" | "left" | "right"
  className?: string
}

export function FadeIn({ children, delay = 0, direction = "up", className = "" }: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = "1"
          el.style.transform = "translate(0, 0)"
          observer.disconnect()
        }
      },
      { rootMargin: "200px", threshold: 0 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const initial: Record<string, string> = {
    up: "translateY(16px)",
    down: "translateY(-16px)",
    left: "translateX(16px)",
    right: "translateX(-16px)",
  }

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: 0,
        transform: initial[direction],
        transition: "opacity 0.3s ease-out, transform 0.3s ease-out",
        transitionDelay: `${delay * 0.1}s`,
        willChange: "opacity, transform",
      }}
    >
      {children}
    </div>
  )
}
