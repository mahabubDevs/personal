"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import Image from "next/image"

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
   <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border shadow-sm">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
    
    {/* Logo */}
    <Link href="/" className="flex items-center gap-2">
      <Image src="/logo.png" alt="MrBitX Logo" width={36} height={36} priority />
      <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
        MrBitX
      </span>
    </Link>

    {/* Desktop Navigation */}
    <div className="hidden md:flex items-center gap-6 lg:gap-8">
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="relative text-sm font-medium text-foreground hover:text-secondary transition-all after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-primary after:to-accent after:transition-all hover:after:w-full"
        >
          {item.label}
        </Link>
      ))}
    </div>

    {/* Desktop CTA */}
    <Link
      href="/contact"
      className="hidden md:inline-flex items-center justify-center px-5 py-2 rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground text-sm font-medium shadow-md hover:shadow-[0_0_25px_rgba(138,43,226,0.5)] hover:scale-105 transition-all duration-300"
    >
      Get Started
    </Link>

    {/* Mobile Button */}
    <button
      onClick={() => setIsOpen(!isOpen)}
      className="md:hidden p-2 rounded-md hover:bg-card/40 transition"
      aria-label="Toggle Menu"
    >
      {isOpen ? <X size={22} /> : <Menu size={22} />}
    </button>
  </div>

  {/* Mobile Menu */}
  <div
    className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
      isOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
    }`}
  >
    <div className="px-6 pb-4 pt-2 bg-card/95 backdrop-blur-lg border-t border-border flex flex-col gap-3">
      
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="text-sm font-medium text-foreground hover:text-secondary transition py-2"
          onClick={() => setIsOpen(false)}
        >
          {item.label}
        </Link>
      ))}

      <Link
        href="/contact"
        className="mt-2 px-4 py-2 text-center rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground text-sm font-medium shadow-md"
        onClick={() => setIsOpen(false)}
      >
        Get Started
      </Link>
    </div>
  </div>
</nav>
  )
}