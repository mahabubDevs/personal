"use client"

import { Code2, Smartphone, Gamepad2, Brain } from "lucide-react"
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
      featured: true,
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

  const featured = services.find((s) => s.featured)
  const others = services.filter((s) => !s.featured)

  return (
    <section className="py-20 relative overflow-hidden bg-background">
      {/* Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-primary/10 blur-3xl rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Core Services
            </span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            We specialize in building scalable web platforms while offering full-stack digital solutions.
          </p>
        </div>

        {/* 🔥 Featured Web Development */}
        {featured && (
          <Link href={`/services/${featured.slug}`}>
            <div className="mb-10 p-10 rounded-2xl border border-secondary bg-gradient-to-br from-primary/10 to-secondary/10 backdrop-blur-xl hover:shadow-[0_0_60px_rgba(0,191,255,0.3)] transition-all group cursor-pointer">
              <div className="flex items-start gap-6">
                <div className="p-4 rounded-xl bg-gradient-to-br from-primary to-secondary group-hover:scale-110 transition">
                  <featured.icon className="w-8 h-8 text-primary-foreground" />
                </div>

                <div>
                  <div className="mb-2 text-xs text-secondary font-semibold uppercase tracking-wide">
                    Core Expertise
                  </div>

                  <h3 className="text-3xl font-bold mb-3 group-hover:text-secondary transition">
                    {featured.title}
                  </h3>

                  <p className="text-foreground/80 mb-6 max-w-2xl">
                    {featured.description}
                  </p>

                  <ul className="grid grid-cols-2 gap-3">
                    {featured.features.map((f, i) => (
                      <li key={i} className="text-sm text-foreground/70 flex items-center gap-2">
                        <span className="w-2 h-2 bg-accent rounded-full"></span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </Link>
        )}

        {/* Other Services */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {others.map((service, idx) => {
            const Icon = service.icon
            return (
              <Link href={`/services/${service.slug}`} key={idx}>
                <div className="p-6 rounded-xl border border-border bg-card/60 backdrop-blur-md hover:border-secondary hover:-translate-y-1 hover:shadow-xl transition-all group cursor-pointer">
                  <div className="mb-4 w-12 h-12 flex items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary/20 transition">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>

                  <h3 className="text-lg font-semibold mb-2 group-hover:text-secondary transition">
                    {service.title}
                  </h3>

                  <p className="text-sm text-foreground/70 line-clamp-3">
                    {service.description}
                  </p>
                </div>
              </Link>
            )
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            href="/services"
            className="inline-block px-8 py-3 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-full font-semibold hover:shadow-[0_0_40px_rgba(138,43,226,0.6)] transition-all"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  )
}