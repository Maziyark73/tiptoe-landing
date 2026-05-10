"use client"

export function Footer() {
  return (
    <footer className="relative py-12 px-6 border-t border-border">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
            <span className="text-white font-bold text-sm">T</span>
          </div>
          <span className="font-[family-name:var(--font-syne)] font-semibold text-foreground">
            Tiptoe
          </span>
        </div>

        {/* Copyright */}
        <p className="text-sm text-muted-foreground">
          © 2026 Tiptoe Social LLC
        </p>
      </div>
    </footer>
  )
}
