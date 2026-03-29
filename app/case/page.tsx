"use client"

import Image from "next/image"
import { ArrowRight, Calendar, Users, Layers } from "lucide-react"
import Link from "next/link"

export default function CaseStudyPage() {
  const project = {
    title: "E-Commerce Platform",
    client: "Fashion Retailer - US",
    duration: "12 Weeks",
    teamSize: "5 Developers",
    role: "Full Stack Development",
    overview:
      "We built a scalable AI-powered e-commerce platform for a fashion retailer. The platform includes real-time inventory management, secure checkout, and personalized product recommendations.",
    challenges: [
      "Integrate real-time inventory across multiple warehouses",
      "Ensure secure and fast checkout experience",
      "Create a scalable architecture to handle peak traffic",
    ],
    solutions: [
      "Developed backend with Node.js & MongoDB for scalable APIs",
      "Built frontend with Next.js and Tailwind CSS for responsive UX",
      "Implemented AI recommendation engine for personalized shopping",
    ],
    results: [
      "Reduced checkout errors by 40%",
      "Increased average session time by 25%",
      "Platform capable of handling 5x traffic spikes without downtime",
    ],
    technologies: ["Next.js", "React", "Node.js", "MongoDB", "Tailwind CSS", "Stripe API", "AI Recommendation Engine"],
    image: "/e-commerce-platform.png",
  }

  return (
    <main className="min-h-screen pt-24 pb-12 bg-background">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            {project.title}
          </h1>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Case Study: How we helped {project.client} launch a high-performance, scalable digital platform.
          </p>
        </div>

        {/* Project Snapshot */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="p-6 rounded-lg bg-card/50 border border-border flex flex-col items-center gap-2">
            <Calendar className="text-secondary w-6 h-6" />
            <h3 className="font-bold text-foreground">{project.duration}</h3>
            <p className="text-sm text-foreground/70">Project Duration</p>
          </div>
          <div className="p-6 rounded-lg bg-card/50 border border-border flex flex-col items-center gap-2">
            <Users className="text-secondary w-6 h-6" />
            <h3 className="font-bold text-foreground">{project.teamSize}</h3>
            <p className="text-sm text-foreground/70">Team Size</p>
          </div>
          <div className="p-6 rounded-lg bg-card/50 border border-border flex flex-col items-center gap-2">
            <Layers className="text-secondary w-6 h-6" />
            <h3 className="font-bold text-foreground">{project.role}</h3>
            <p className="text-sm text-foreground/70">Role</p>
          </div>
        </div>

        {/* Project Image */}
        <div className="mb-12 rounded-lg overflow-hidden border border-border bg-card/50">
          <Image
            src={project.image}
            alt={`${project.title} screenshot`}
            width={1200}
            height={600}
            className="object-cover w-full h-full"
            priority
          />
        </div>

        {/* Overview */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-4 text-foreground">Project Overview</h2>
          <p className="text-foreground/80 leading-relaxed">{project.overview}</p>
        </div>

        {/* Challenges */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-4 text-foreground">Challenges</h2>
          <ul className="list-disc pl-6 space-y-2 text-foreground/80">
            {project.challenges.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Solutions */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-4 text-foreground">Our Solutions</h2>
          <ul className="list-disc pl-6 space-y-2 text-foreground/80">
            {project.solutions.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Results */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-4 text-foreground">Results</h2>
          <ul className="list-disc pl-6 space-y-2 text-foreground/80">
            {project.results.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Technologies Used */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-4 text-foreground">Technologies Used</h2>
          <div className="flex flex-wrap gap-3">
            {project.technologies.map((tech, idx) => (
              <span key={idx} className="px-3 py-1 bg-primary/20 text-secondary text-xs rounded-full">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-primary to-accent text-primary-foreground font-medium rounded-full hover:shadow-[0_0_40px_rgba(138,43,226,0.7)] transition-all"
          >
            Start Your Project <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </main>
  )
}