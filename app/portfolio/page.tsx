"use client"

import { useState } from "react"
import { ExternalLink, Github } from "lucide-react"

export default function Portfolio() {
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
      description: "Cross-platform fitness tracking application with social features and personalized workout plans.",
      technologies: ["React Native", "Firebase", "Machine Learning"],
      image: "/mobile-fitness-app.jpg",
    },
    {
      title: "AI Content Generator",
      category: "AI Solutions",
      description:
        "Intelligent content generation tool using advanced NLP for blog posts, social media, and marketing copy.",
      technologies: ["Python", "TensorFlow", "API Development", "React"],
      image: "/ai-content-generator.png",
    },
    {
      title: "3D Game Engine",
      category: "Game Development",
      description: "Immersive multiplayer game with real-time graphics and advanced physics simulation.",
      technologies: ["Unity", "C#", "WebGL", "Photon"],
      image: "/3d-game-engine.jpg",
    },
    {
      title: "Analytics Dashboard",
      category: "Web Development",
      description: "Real-time analytics dashboard for tracking business metrics and generating insights.",
      technologies: ["React", "D3.js", "Node.js", "MongoDB"],
      image: "/analytics-dashboard.png",
    },
    {
      title: "Predictive Analytics",
      category: "AI Solutions",
      description: "Machine learning models for predicting market trends and customer behavior.",
      technologies: ["Python", "Scikit-learn", "FastAPI", "PostgreSQL"],
      image: "/predictive-analytics-concept.png",
    },
  ]

  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  // Get unique categories
  const categories = ["All", ...Array.from(new Set(projects.map((p) => p.category)))]

  // Filter projects based on selected category
  const filteredProjects =
    selectedCategory && selectedCategory !== "All" ? projects.filter((p) => p.category === selectedCategory) : projects

  return (
    <main className="min-h-screen pt-24 pb-12">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Our Portfolio
          </h1>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
            Showcase of projects that demonstrate our expertise and commitment to excellence.
          </p>
        </div>

        <div className="flex flex-wrap gap-3 mb-12 justify-center">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category === "All" ? null : category)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                (category === "All" && !selectedCategory) || (category !== "All" && selectedCategory === category)
                  ? "bg-gradient-to-r from-primary to-secondary text-primary-foreground shadow-[0_0_30px_rgba(138,43,226,0.4)]"
                  : "bg-card border border-border text-foreground hover:border-secondary"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => (
            <div
              key={idx}
              className="group rounded-lg overflow-hidden bg-card/50 border border-border hover:border-secondary transition-all hover:shadow-[0_0_40px_rgba(0,191,255,0.2)]"
            >
              {/* Project Image */}
              <div className="h-48 bg-gradient-to-br from-primary/20 to-secondary/20 overflow-hidden relative">
                <div className="w-full h-full bg-muted/20 group-hover:scale-110 transition-transform duration-300"></div>
              </div>

              {/* Project Info */}
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

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-foreground/60 text-lg">No projects found in this category.</p>
          </div>
        )}
      </div>
    </main>
  )
}
