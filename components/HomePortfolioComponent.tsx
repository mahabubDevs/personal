"use client"

import Link from "next/link"
import { ExternalLink, Github } from "lucide-react"

export default function HomePortfolioPreview() {
  const projects = [
    {
      title: "E-Commerce Platform",
      category: "Web Development",
      description:
        "Full-featured e-commerce platform with real-time inventory management and AI-powered recommendations.",
      technologies: ["Next.js", "TypeScript", "PostgreSQL", "Stripe"],
      image: "/e-commerce-platform.png",
    },
    {
      title: "Mobile Fitness App",
      category: "App Development",
      description: "Cross-platform fitness tracking app with social features and personalized workout plans.",
      technologies: ["React Native", "Firebase", "Machine Learning"],
      image: "/mobile-fitness-app.jpg",
    },
    {
      title: "AI Content Generator",
      category: "AI Solutions",
      description:
        "Intelligent content generator using advanced NLP for blog posts, social media, and marketing copy.",
      technologies: ["Python", "TensorFlow", "React"],
      image: "/ai-content-generator.png",
    },
  ]

  return (
    <section className="relative py-20 overflow-hidden">
      {/* 🔵 Animated Blobs Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute top-1/2 right-1/3 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            A glimpse of the innovative solutions we've built for our clients.
          </p>
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group rounded-lg overflow-hidden bg-card/60 border border-border hover:border-secondary transition-all hover:shadow-[0_0_40px_rgba(0,191,255,0.2)] backdrop-blur-sm"
            >
              <div className="h-48 bg-gradient-to-br from-primary/20 to-secondary/20 relative overflow-hidden">
                <div className="w-full h-full bg-muted/20 group-hover:scale-110 transition-transform duration-300"></div>
              </div>

              <div className="p-6">
                <div className="mb-3">
                  <span className="text-xs font-semibold text-secondary bg-secondary/10 px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-secondary transition-colors">
                  {project.title}
                </h3>
                <p className="text-foreground/70 text-sm mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="text-xs px-2 py-1 bg-muted/40 text-muted-foreground rounded">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <button className="flex-1 px-4 py-2 bg-primary/20 hover:bg-primary/30 text-secondary rounded font-medium transition-colors flex items-center justify-center gap-2">
                    <ExternalLink size={16} /> View
                  </button>
                  <button className="flex-1 px-4 py-2 border border-border hover:border-secondary rounded font-medium transition-colors flex items-center justify-center gap-2">
                    <Github size={16} /> Code
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12 relative z-10">
          <Link
            href="/portfolio"
            className="inline-block px-8 py-3 bg-gradient-to-r from-primary to-secondary text-white font-medium rounded-full shadow-lg hover:opacity-90 transition-all"
          >
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  )
}
