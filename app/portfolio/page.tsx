"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { PortfolioFilter } from "@/components/portfolio-filter"
import { PortfolioGrid } from "@/components/portfolio-grid"
import { Footer } from "@/components/footer"

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("all")

  const categories = ["all", "web", "app", "ai", "game", "marketing"]

  const projects = [
    {
      id: "1",
      title: "E-Commerce Platform",
      description: "Full-stack MERN application with payment integration, inventory management, and admin dashboard.",
      longDescription:
        "A comprehensive e-commerce solution built for a growing retail business. The platform handles everything from product catalog management to order processing and customer support.",
      image: "/modern-ecommerce-dashboard.png",
      category: "Web",
      tags: ["React", "Node.js", "MongoDB", "Stripe", "Express", "JWT"],
      demoUrl: "https://demo-ecommerce.example.com",
      githubUrl: "https://github.com/example/ecommerce",
      challenge:
        "The client needed a scalable e-commerce platform that could handle high traffic during sales events while maintaining fast loading times and secure payment processing.",
      solution:
        "We implemented a microservices architecture with Redis caching, optimized database queries, and integrated multiple payment gateways for global reach.",
      results: [
        "40% increase in conversion rates",
        "60% faster page load times",
        "99.9% uptime during peak sales",
        "Supports 10,000+ concurrent users",
      ],
      duration: "3 months",
      teamSize: "4 developers",
      client: "RetailCorp Inc.",
    },
    {
      id: "2",
      title: "Fitness Tracking App",
      description: "Flutter mobile app with workout tracking, progress analytics, and social features.",
      longDescription:
        "A comprehensive fitness application that helps users track workouts, monitor progress, and connect with a community of fitness enthusiasts.",
      image: "/fitness-app-interface.png",
      category: "App",
      tags: ["Flutter", "Firebase", "Dart", "Cloud Functions", "Analytics"],
      demoUrl: "https://play.google.com/store/apps/details?id=com.example.fitness",
      githubUrl: "https://github.com/example/fitness-app",
      challenge:
        "Creating an engaging fitness app that motivates users to maintain consistent workout routines while providing accurate progress tracking.",
      solution:
        "We developed gamification features, social challenges, and AI-powered workout recommendations based on user preferences and progress.",
      results: ["50,000+ active users", "4.8/5 app store rating", "85% user retention rate", "Featured in App Store"],
      duration: "4 months",
      teamSize: "3 developers",
      client: "FitLife Solutions",
    },
    {
      id: "3",
      title: "AI Chatbot Solution",
      description: "Intelligent customer service chatbot with natural language processing and learning capabilities.",
      longDescription:
        "An advanced AI chatbot system that provides 24/7 customer support with natural language understanding and continuous learning capabilities.",
      image: "/ai-chatbot-dashboard.png",
      category: "AI",
      tags: ["Python", "TensorFlow", "NLP", "FastAPI", "Docker", "AWS"],
      demoUrl: "https://chatbot-demo.example.com",
      githubUrl: "https://github.com/example/ai-chatbot",
      challenge:
        "Building an AI system that could understand complex customer queries and provide accurate, contextual responses while learning from interactions.",
      solution:
        "We implemented a transformer-based NLP model with continuous learning capabilities and integrated it with the client's existing CRM system.",
      results: [
        "70% reduction in support tickets",
        "95% query resolution accuracy",
        "24/7 availability",
        "Multilingual support",
      ],
      duration: "5 months",
      teamSize: "2 AI engineers",
      client: "TechSupport Pro",
    },
    {
      id: "4",
      title: "Inventory Management System",
      description: "Real-time inventory tracking system with predictive analytics and automated reordering.",
      longDescription:
        "A sophisticated inventory management system that uses AI to predict demand and automate supply chain operations.",
      image: "/placeholder.svg?height=400&width=600&text=Inventory+System",
      category: "Web",
      tags: ["React", "Python", "PostgreSQL", "Machine Learning", "REST API"],
      demoUrl: "https://inventory-demo.example.com",
      githubUrl: "https://github.com/example/inventory-system",
      challenge:
        "Managing complex inventory across multiple warehouses with accurate demand forecasting and automated reordering.",
      solution:
        "We built a real-time system with ML-powered demand prediction and automated workflows for purchase orders and stock transfers.",
      results: [
        "30% reduction in stockouts",
        "25% decrease in holding costs",
        "Real-time inventory visibility",
        "Automated reorder system",
      ],
      duration: "6 months",
      teamSize: "5 developers",
      client: "LogisticsCorp",
    },
    {
      id: "5",
      title: "Racing Game Mobile",
      description: "High-performance 3D racing game with multiplayer support and customizable vehicles.",
      longDescription:
        "An adrenaline-pumping mobile racing game featuring realistic physics, stunning graphics, and competitive multiplayer gameplay.",
      image: "/placeholder.svg?height=400&width=600&text=Racing+Game",
      category: "Game",
      tags: ["Unity", "C#", "Photon", "3D Graphics", "Mobile Optimization"],
      demoUrl: "https://play.google.com/store/apps/details?id=com.example.racing",
      githubUrl: "https://github.com/example/racing-game",
      challenge:
        "Creating a visually stunning racing game that runs smoothly on various mobile devices while supporting real-time multiplayer.",
      solution:
        "We optimized graphics rendering, implemented efficient networking, and created adaptive quality settings for different device capabilities.",
      results: ["1M+ downloads", "4.6/5 user rating", "Featured in Play Store", "Active esports community"],
      duration: "8 months",
      teamSize: "6 developers",
      client: "GameStudio Inc.",
    },
    {
      id: "6",
      title: "Social Media Analytics",
      description: "Comprehensive social media analytics platform with sentiment analysis and competitor tracking.",
      longDescription:
        "A powerful analytics platform that helps businesses understand their social media performance and audience engagement across multiple platforms.",
      image: "/placeholder.svg?height=400&width=600&text=Analytics+Dashboard",
      category: "Marketing",
      tags: ["React", "Python", "Social APIs", "Data Visualization", "Machine Learning"],
      demoUrl: "https://analytics-demo.example.com",
      githubUrl: "https://github.com/example/social-analytics",
      challenge:
        "Aggregating data from multiple social platforms and providing actionable insights through advanced analytics and visualization.",
      solution:
        "We integrated with major social media APIs, implemented sentiment analysis, and created intuitive dashboards with real-time data updates.",
      results: [
        "500+ business clients",
        "Real-time data processing",
        "Advanced sentiment analysis",
        "Competitor benchmarking",
      ],
      duration: "4 months",
      teamSize: "4 developers",
      client: "MarketingPro Agency",
    },
  ]

  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-balance mb-6">
            Our <span className="text-primary">Portfolio</span>
          </h1>
          <p className="text-xl text-muted-foreground text-balance mb-8 max-w-3xl mx-auto">
            Explore our diverse collection of successful projects across web development, mobile apps, AI solutions,
            games, and digital marketing.
          </p>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto">
          <PortfolioFilter
            categories={categories}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />
          <PortfolioGrid projects={projects} activeCategory={activeCategory} />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">200+</div>
              <div className="text-muted-foreground">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">150+</div>
              <div className="text-muted-foreground">Happy Clients</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">98%</div>
              <div className="text-muted-foreground">Success Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">5+</div>
              <div className="text-muted-foreground">Years Experience</div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
