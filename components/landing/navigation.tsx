"use client"

import { useState, useEffect } from "react"

export function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      style={{
        opacity: mounted ? 1 : 0,
        transition: "opacity 0.3s ease, background 0.3s ease",
      }}
      className={`fixed top-0 left-0 right-0 z-50 ${
        scrolled ? "frosted-glass border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
            <span className="text-white font-bold text-lg">T</span>
          </div>
          <span className="font-[family-name:var(--font-syne)] font-bold text-xl text-foreground">
            Tiptoe
          </span>
        </div>
        <a
          href="#invite"
          className="px-6 py-2.5 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-medium text-sm hover:opacity-90 transition-opacity"
        >
          Get your invite
        </a>
      </div>
    </nav>
  )
}
