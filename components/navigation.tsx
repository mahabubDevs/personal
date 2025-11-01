"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/blog", label: "Blog" },
    { href: "/careers", label: "Careers" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border neon-border-blue">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent hover:scale-110 transition-transform"
        >
          MrBitX
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-foreground hover:text-secondary transition-colors hover:glow-blue"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Get Started Button */}
        <Link
          href="/contact"
          className="hidden md:block px-6 py-2 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-full font-medium hover:shadow-[0_0_30px_rgba(138,43,226,0.6)] transition-all"
        >
          Get Started
        </Link>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 hover:bg-card rounded-lg transition-colors">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-card border-t border-border">
          <div className="flex flex-col gap-4 p-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-foreground hover:text-secondary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="px-4 py-2 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-full font-medium text-center hover:shadow-[0_0_30px_rgba(138,43,226,0.6)] transition-all"
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
