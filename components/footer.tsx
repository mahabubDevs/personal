"use client"

import Link from "next/link"
import { Mail, Phone, Linkedin, Twitter, Github, Facebook, Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-background to-card/50 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          {/* About */}
          <div>
            <h3 className="text-lg font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4">
              MrBitX
            </h3>
            <p className="text-foreground/60 text-sm leading-relaxed">
              A next-generation software company specializing in digital innovation, 
              scalable web platforms, and AI-powered solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { label: "Home", href: "/" },
                { label: "About", href: "/about" },
                { label: "Services", href: "/services" },
                { label: "Portfolio", href: "/portfolio" },
                { label: "Blog", href: "/blog" },
                { label: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-foreground/60 hover:text-secondary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Services</h4>
            <ul className="space-y-2">
              {[
                { label: "Web Development", href: "/services/web" },
                { label: "App Development", href: "/services/app" },
                { label: "Game Development", href: "/services/game" },
                { label: "AI Solutions", href: "/services/ai" },
                { label: "Digital Marketing", href: "/services/marketing" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-foreground/60 hover:text-secondary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Contact</h4>
            <div className="space-y-3">
              
              <a
                href="mailto:info@mrbitx.com"
                className="flex items-center gap-2 text-sm text-foreground/60 hover:text-secondary transition-colors"
              >
                <Mail size={16} /> info@mrbitx.com
              </a>

              <a
                href="tel:+8801346810082"
                className="flex items-center gap-2 text-sm text-foreground/60 hover:text-secondary transition-colors"
              >
                <Phone size={16} /> +880 1346 810 082
              </a>

              <div className="flex gap-3 pt-2">
                <a href="https://www.linkedin.com/company/mrbitx" className="text-secondary hover:text-accent transition-colors">
                  <Linkedin size={18} />
                </a>
                <a href="https://www.facebook.com/mrbitx/" className="text-secondary hover:text-accent transition-colors">
                  <Facebook size={18} />
                </a>
                <a href="https://www.instagram.com/mrbitx0" className="text-secondary hover:text-accent transition-colors">
                  <Instagram size={18} />
                </a>
              </div>

            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Copyright */}
          <p className="text-sm text-foreground/40 text-center md:text-left">
            © {new Date().getFullYear()} MrBitX. All Rights Reserved.
          </p>

          {/* Legal Links */}
          <div className="flex items-center gap-4 text-sm text-foreground/60">
            <Link href="/termsandcondaton" className="hover:text-secondary transition">
              Terms & Conditions
            </Link>
            <span className="text-foreground/30">•</span>
            <Link href="/privacypolicy" className="hover:text-secondary transition">
              Privacy Policy
            </Link>
          </div>

        </div>

      </div>
    </footer>
  )
}