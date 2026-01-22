"use client"

import { Code2, Smartphone, Gamepad2, Brain, Zap } from "lucide-react"
import Link from "next/link"

export default function HomeServicesSection() {
  const services = [
  {
    icon: Code2,
    title: "Web Development",
    slug: "web",
    description:
      "Secure, scalable, high-performance web applications for startups and enterprises. From modern UI to robust backend systems.",
    features: [
      "React & Next.js",
      "Backend & API Development",
      "Scalable Architecture",
      "E-Commerce Solutions",
    ],
  },
  {
    icon: Smartphone,
    title: "App Development",
    slug: "app",
    description:
      "Custom mobile applications for iOS and Android, designed for performance, scalability, and seamless user experience.",
    features: [
      "React Native",
      "Flutter Apps",
      "Native iOS & Android",
      "App Performance Optimization",
    ],
  },
  {
    icon: Brain,
    title: "AI Solutions",
    slug: "ai",
    description:
      "AI-powered solutions that help businesses automate workflows, analyze data, and make smarter decisions.",
    features: [
      "Machine Learning Models",
      "Natural Language Processing",
      "Computer Vision",
      "AI System Integration",
    ],
  },
  {
    icon: Gamepad2,
    title: "Game Development",
    slug: "game",
    description:
      "High-quality 2D and 3D game development for mobile and desktop platforms using modern game engines.",
    features: [
      "Unity Game Development",
      "Unreal Engine",
      "Mobile Games",
      "3D Interactive Experiences",
    ],
  },
]


  return (
    <section className="py-16 bg-background">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Software Development Services
          </h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            End-to-end software development services designed to help businesses in the US and UK build, scale, and succeed.
          </p>

        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {services.map((service, idx) => {
            const Icon = service.icon
            return (
              <Link href={`/services/${service.slug}`} key={idx}>
                <div className="p-8 rounded-lg bg-card/50 border border-border hover:border-secondary transition-all group hover:shadow-[0_0_40px_rgba(0,191,255,0.2)] cursor-pointer">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 rounded-lg bg-gradient-to-br from-primary to-secondary group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-foreground group-hover:text-secondary transition-colors">
                        {service.title}
                      </h3>
                    </div>
                  </div>
                  <p className="text-foreground/80 mb-6 leading-relaxed">{service.description}</p>
                  <div className="space-y-2">
                    <p className="text-sm font-semibold text-secondary">Key Features:</p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {service.features.map((feature, i) => (
                        <li key={i} className="text-sm text-foreground/70 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>

        {/* See More Button */}
        <div className="text-center">
          <Link
            href="/services"
            className="inline-block px-8 py-3 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-full font-semibold hover:shadow-[0_0_40px_rgba(138,43,226,0.7)] transition-all"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  )
}
