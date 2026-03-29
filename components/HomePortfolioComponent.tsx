"use client"

import Link from "next/link"
import Image from "next/image"

export default function HomePortfolioPreview() {
  const projects = [
    {
      title: "E-Commerce Platform",
      category: "Web Development",
      description:
        "AI-powered e-commerce platform with real-time inventory, secure checkout, and scalable architecture for online businesses.",
      technologies: ["Next.js", "TypeScript", "PostgreSQL", "Stripe"],
      image: "/e-commerce-platform.png",
      featured: true,
    },
    {
      title: "Mobile Fitness App",
      category: "App Development",
      description:
        "Cross-platform fitness app with personalized workouts, social engagement, and performance tracking for iOS and Android users.",
      technologies: ["React Native", "Firebase", "Machine Learning"],
      image: "/mobile-fitness-app.jpg",
    },
    {
      title: "AI Content Generator",
      category: "AI Solutions",
      description:
        "Intelligent content generator using NLP and machine learning to create SEO-friendly blog posts, marketing copy, and social media content.",
      technologies: ["Python", "TensorFlow", "React"],
      image: "/ai-content-generator.png",
    },
  ]

  const featured = projects.find((p) => p.featured)
  const others = projects.filter((p) => !p.featured)

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-primary/10 blur-3xl rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Real products we’ve built to help businesses scale faster.
          </p>
        </div>

        {/* 🔥 Featured Project (Hero Style) */}
        {featured && (
          <div className="mb-12 group">
            <div className="grid md:grid-cols-2 gap-8 items-center rounded-2xl border border-border bg-card/60 backdrop-blur-xl overflow-hidden hover:shadow-[0_0_60px_rgba(0,191,255,0.25)] transition-all">
              
              {/* Image */}
              <div className="relative h-72 md:h-full overflow-hidden">
                <Image
                  src={featured.image}
                  alt={featured.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-8">
                <span className="text-xs font-semibold text-secondary bg-secondary/10 px-3 py-1 rounded-full">
                  {featured.category}
                </span>

                <h3 className="text-2xl md:text-3xl font-bold mt-4 mb-3 group-hover:text-secondary transition">
                  {featured.title}
                </h3>

                <p className="text-foreground/70 mb-5">
                  {featured.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {featured.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1 bg-muted/40 rounded-full text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <Link
                  href="/case"
                  className="inline-block px-6 py-2 bg-gradient-to-r from-primary to-secondary text-white rounded-full text-sm font-medium hover:opacity-90 transition"
                >
                  View Case Study →
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Other Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {others.map((project, idx) => (
            <div
              key={idx}
              className="group rounded-xl overflow-hidden border border-border bg-card/60 backdrop-blur-md hover:border-secondary hover:-translate-y-1 hover:shadow-xl transition-all"
            >
              {/* Image */}
              <div className="h-52 relative overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <span className="text-xs font-semibold text-secondary bg-secondary/10 px-3 py-1 rounded-full">
                  {project.category}
                </span>

                <h3 className="text-lg font-semibold mt-3 mb-2 group-hover:text-secondary transition">
                  {project.title}
                </h3>

                <p className="text-sm text-foreground/70 mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs px-2 py-1 bg-muted/40 rounded text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
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