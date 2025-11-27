import Link from "next/link"
import { Mail, Phone, Linkedin, Twitter, Github } from "lucide-react"

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
              A next-generation software company specializing in digital innovation, 3D experiences, and AI-powered
              solutions.
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
                  <Link href={link.href} className="text-sm text-foreground/60 hover:text-secondary transition-colors">
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
                  <Link href={link.href} className="text-sm text-foreground/60 hover:text-secondary transition-colors">
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
                href="mailto:hello@mrbitx.com"
                className="flex items-center gap-2 text-sm text-foreground/60 hover:text-secondary transition-colors"
              >
                <Mail size={16} /> info@mrbitx.com
              </a>
              <a
                href="tel:+1234567890"
                className="flex items-center gap-2 text-sm text-foreground/60 hover:text-secondary transition-colors"
              >
                <Phone size={16} /> +880 1346 810 082
              </a>
              <div className="flex gap-3 pt-2">
                <a href="#" className="text-secondary hover:text-accent transition-colors">
                  <Linkedin size={18} />
                </a>
                <a href="#" className="text-secondary hover:text-accent transition-colors">
                  <Twitter size={18} />
                </a>
                <a href="#" className="text-secondary hover:text-accent transition-colors">
                  <Github size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border pt-8">
          <p className="text-center text-sm text-foreground/40">© 2025 MrBitX. All Right Reserved.</p>
        </div>
      </div>
    </footer>
  )
}
