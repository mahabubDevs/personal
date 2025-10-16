import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import {
  MessageCircle,
  Facebook,
  Linkedin,
  Twitter,
  Instagram,
  Github,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const services = [
    { name: "Web Development", href: "/services/web-development" },
    { name: "App Development", href: "/services/app-development" },
    { name: "AI Solutions", href: "/services/ai-solutions" },
    { name: "Game Development", href: "/services/game-development" },
    { name: "Digital Marketing", href: "/services/digital-marketing" },
  ]

  const company = [
    { name: "About Us", href: "/about" },
    { name: "Our Team", href: "/about#team" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact" },
    { name: "Blog", href: "/blog" },
  ]

  const resources = [
    { name: "Portfolio", href: "/portfolio" },
    { name: "Case Studies", href: "/portfolio" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Support", href: "/support" },
  ]

  return (
    <footer className="bg-[#ffffff] border-t">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <Link href="/" className="flex items-center space-x-2 mb-6">
                <div className="h-8 w-8 rounded bg-primary flex items-center justify-center">
                  {/* <span className="text-primary-foreground font-bold text-lg">T</span> */}
                  <Image
                    src="/logo.png"
                    alt="MrBitX Logo"
                    width={150}
                    height={150}
                    className="object-contain"
                  />
                </div>
                <span className="font-bold text-xl text-primary">MrBitX</span>
              </Link>
              <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                MrBitX
                We build powerful Full Stack web and Flutter app solutions — helping businesses grow with Simple Solutions and Real Results.
              </p>
              <div className="flex space-x-3">
                <Button variant="ghost" size="sm" asChild>
                  <a href="https://facebook.com/techcorp" target="_blank" rel="noopener noreferrer">
                    <Facebook className="h-4 w-4" />
                  </a>
                </Button>
                <Button variant="ghost" size="sm" asChild>
                  <a href="https://twitter.com/techcorp" target="_blank" rel="noopener noreferrer">
                    <Twitter className="h-4 w-4" />
                  </a>
                </Button>
                <Button variant="ghost" size="sm" asChild>
                  <a href="https://linkedin.com/company/techcorp" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-4 w-4" />
                  </a>
                </Button>
                <Button variant="ghost" size="sm" asChild>
                  <a href="https://instagram.com/techcorp" target="_blank" rel="noopener noreferrer">
                    <Instagram className="h-4 w-4" />
                  </a>
                </Button>
                <Button variant="ghost" size="sm" asChild>
                  <a href="https://github.com/techcorp" target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Services</h3>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service.name}>
                    <Link
                      href={service.href}
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Company</h3>
              <ul className="space-y-3">
                {company.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Stay Updated</h3>
              <p className="text-muted-foreground mb-4 text-sm">
                Subscribe to our newsletter for the latest tech insights and updates.
              </p>
              <div className="flex gap-2 mb-4">
                <Input type="email" placeholder="Enter your email" className="text-sm" />
                <Button size="sm">
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
              <p className="text-xs text-muted-foreground">
                By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
              </p>
            </div>
          </div>
        </div>

        <Separator />

        {/* Contact Info Bar */}
        <div className="py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center gap-3">
              <MapPin className="h-5 w-5 text-primary" />
              <div>
                <p className="font-medium text-sm">Visit Us</p>
                <p className="text-muted-foreground text-xs">123 Tech Street, San Francisco, CA</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-primary" />
              <div>
                <p className="font-medium text-sm">Call Us</p>
                <p className="text-muted-foreground text-xs">+1 (555) 123-4567</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-primary" />
              <div>
                <p className="font-medium text-sm">Email Us</p>
                <p className="text-muted-foreground text-xs">hello@techcorp.com</p>
              </div>
            </div>
          </div>
        </div>

        <Separator />

        {/* Quick Contact Actions */}
        <div className="py-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-center sm:text-left">
              <h3 className="font-semibold text-lg mb-2">Ready to Start Your Project?</h3>
              <p className="text-muted-foreground text-sm">Get in touch with us today for a free consultation.</p>
            </div>
            <div className="flex flex-wrap gap-2">
              <Button variant="outline" size="sm" asChild>
                <a href="https://wa.me/+8801346810082" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  WhatsApp
                </a>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <a href="https://m.me/yourpage" target="_blank" rel="noopener noreferrer">
                  <Facebook className="h-4 w-4 mr-2" />
                  Messenger
                </a>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-4 w-4 mr-2" />
                  LinkedIn
                </a>
              </Button>
              <Button size="sm" asChild>
                <Link href="/contact">Get Quote</Link>
              </Button>
            </div>
          </div>
        </div>

        <Separator />

        {/* Bottom Bar */}
        <div className="py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-muted-foreground text-sm">
              © {currentYear} MrBitX. Simple Solutions, Real Results.
            </p>
            <div className="flex items-center gap-6">
              <Link href="/privacy" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Terms of Service
              </Link>
              <Link href="/sitemap" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
