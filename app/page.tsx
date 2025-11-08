"use client"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Hero3D } from "@/components/3d-hero"
import Portfolio from "./portfolio/page"
import Blog from "./blog/page"
import About from "./about/page"
import Services from "./services/page"

export default function Home() {
  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute top-1/2 left-1/2 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <div className="mb-8 inline-block">
            <div className="px-4 py-2 rounded-full border border-secondary/50 text-secondary text-sm font-medium">
              ✨ Welcome to the Future of Digital Innovation
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-float">
            Building the Future
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            with Smart Digital Solutions
          </p>

          <p className="text-lg text-foreground/80 mb-8 max-w-2xl mx-auto">
            Cutting-edge software development, AI solutions, and digital transformation services for modern businesses.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/contact"
              className="px-8 py-4 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-full font-semibold hover:shadow-[0_0_40px_rgba(138,43,226,0.7)] transition-all transform hover:scale-105"
            >
              Get Started
            </Link>
            <Link
              href="/services"
              className="px-8 py-4 border-2 border-secondary text-secondary rounded-full font-semibold hover:bg-secondary/10 transition-all"
            >
              Explore Services
            </Link>
          </div>
        </div>

        {/* 3D Hero Component */}
        <Hero3D />
      </section>

      {/* Featured Services Preview */}
      {/* <section className="relative py-20 px-4 bg-gradient-to-b from-background via-card/30 to-background">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-foreground">Our Core Services</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Web Development", description: "Modern, scalable web applications" },
              { title: "App Development", description: "Native and cross-platform solutions" },
              { title: "AI Solutions", description: "Intelligent systems and automation" },
            ].map((service, idx) => (
              <div
                key={idx}
                className="p-6 rounded-lg bg-card/50 border border-border neon-border hover:neon-border-blue transition-all hover:shadow-[0_0_30px_rgba(0,191,255,0.3)] group cursor-pointer"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-primary to-secondary mb-4 group-hover:scale-110 transition-transform"></div>
                <h3 className="text-xl font-semibold mb-2 text-foreground group-hover:text-secondary transition-colors">
                  {service.title}
                </h3>
                <p className="text-foreground/60">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-secondary hover:text-accent font-semibold"
            >
              View All Services <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section> */}



        {/* <Services /> */}
       {/* <Portfolio /> */}
      {/* <Blog /> */}
      {/* <About /> */}
    </main>
  )
}
