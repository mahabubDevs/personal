"use client"

import { useState } from "react"
import { ExternalLink } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Portfolio() {
  const projects = [
    {
      title: "E-Commerce Platform",
      caseStudyTitle: "Scaling an E-Commerce Platform to Increase Revenue by 45%",
      slug: "ecommerce-platform",
      category: "Web Development",
      description:
        "Full-featured e-commerce platform with real-time inventory management and AI-powered recommendations.",
      technologies: ["Next.js", "TypeScript", "PostgreSQL", "Stripe"],
      image: "/e-commerce-platform.png",
    },
    {
      title: "Mobile Fitness App",
      caseStudyTitle: "Building a High Engagement Fitness App with Social Features",
      slug: "mobile-fitness-app",
      category: "App Development",
      description:
        "Cross-platform fitness tracking application with social features and personalized workout plans.",
      technologies: ["React Native", "Firebase", "Machine Learning"],
      image: "/mobile-fitness-app.jpg",
    },
    {
      title: "AI Content Generator",
      caseStudyTitle: "AI Content System that Reduced Content Creation Time by 60%",
      slug: "ai-content-generator",
      category: "AI Solutions",
      description:
        "Intelligent content generation tool using advanced NLP for blog posts, social media, and marketing copy.",
      technologies: ["Python", "TensorFlow", "API Development", "React"],
      image: "/ai-content-generator.png",
    },
    {
      title: "3D Game Engine",
      caseStudyTitle: "Developing a Real-Time Multiplayer 3D Game Engine",
      slug: "3d-game-engine",
      category: "Game Development",
      description:
        "Immersive multiplayer game with real-time graphics and advanced physics simulation.",
      technologies: ["Unity", "C#", "WebGL", "Photon"],
      image: "/3d-game-engine.jpg",
    },
    {
      title: "Analytics Dashboard",
      caseStudyTitle: "Real-Time Analytics Dashboard for Business Intelligence",
      slug: "analytics-dashboard",
      category: "Web Development",
      description:
        "Real-time analytics dashboard for tracking business metrics and generating insights.",
      technologies: ["React", "D3.js", "Node.js", "MongoDB"],
      image: "/analytics-dashboard.png",
    },
    {
      title: "Predictive Analytics",
      caseStudyTitle: "Predicting Customer Behavior with Machine Learning",
      slug: "predictive-analytics",
      category: "AI Solutions",
      description:
        "Machine learning models for predicting market trends and customer behavior.",
      technologies: ["Python", "Scikit-learn", "FastAPI", "PostgreSQL"],
      image: "/predictive-analytics-concept.png",
    },
  ]

  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const categories = ["All", ...Array.from(new Set(projects.map((p) => p.category)))]

  const filteredProjects =
    selectedCategory && selectedCategory !== "All"
      ? projects.filter((p) => p.category === selectedCategory)
      : projects

  return (
    <main className="min-h-screen pt-24 pb-12">
      <div className="max-w-6xl mx-auto px-4">

        {/* HEADER */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Our Work & Case Studies
          </h1>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
            Explore how we solve real business problems and deliver measurable results through technology.
          </p>
        </div>

        {/* FILTER */}
        <div className="flex flex-wrap gap-3 mb-12 justify-center">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category === "All" ? null : category)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                (category === "All" && !selectedCategory) ||
                (category !== "All" && selectedCategory === category)
                  ? "bg-gradient-to-r from-primary to-secondary text-primary-foreground shadow-[0_0_30px_rgba(138,43,226,0.4)]"
                  : "bg-card border border-border text-foreground hover:border-secondary"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => (
            <div
              key={idx}
              className="group rounded-lg overflow-hidden bg-card/50 border border-border hover:border-secondary transition-all hover:shadow-[0_0_40px_rgba(0,191,255,0.2)] flex flex-col"
            >

              {/* IMAGE */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* CONTENT */}
              <div className="p-6 flex flex-col flex-1">

                <span className="text-xs font-semibold text-secondary bg-secondary/10 px-3 py-1 rounded-full w-fit mb-3">
                  {project.category}
                </span>

                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-secondary transition-colors">
                  {project.caseStudyTitle}
                </h3>

                <p className="text-foreground/70 text-sm mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs px-2 py-1 bg-muted/40 text-muted-foreground rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* BUTTON (FIXED ROUTE) */}
                <div className="mt-auto">
                  <Link href={`/case/${project.slug}`}>
                    <button className="w-full px-4 py-2 bg-primary/20 hover:bg-primary/30 text-secondary rounded font-medium transition-colors flex items-center justify-center gap-2">
                      <ExternalLink size={16} />
                      View Case Study
                    </button>
                  </Link>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* EMPTY STATE */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-foreground/60 text-lg">
              No projects found in this category.
            </p>
          </div>
        )}

      </div>
    </main>
  )
}