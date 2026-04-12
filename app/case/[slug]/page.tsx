import Image from "next/image"
import { notFound } from "next/navigation"

const caseStudies: any = {
  "ecommerce-platform": {
    title: "Scaling an E-Commerce Platform to Increase Revenue by 45%",
    client: "Fashion Retailer - US",
    duration: "12 Weeks",
    teamSize: "5 Developers",
    role: "Full Stack Development",

    overview:
      "We developed a high-performance e-commerce platform designed to handle large-scale traffic, improve conversion rate, and enable real-time inventory synchronization across multiple warehouses.",

    challenges: [
      "Managing real-time inventory across multiple warehouses",
      "Reducing cart abandonment during checkout",
      "Handling high traffic during seasonal sales",
    ],

    solutions: [
      "Built scalable Node.js + MongoDB backend architecture",
      "Implemented Stripe optimized checkout flow",
      "Added AI-based product recommendation engine",
    ],

    results: [
      "Revenue increased by 45%",
      "Cart abandonment reduced by 38%",
      "Handled 5x traffic spikes without downtime",
    ],

    technologies: ["Next.js", "Node.js", "MongoDB", "Stripe", "Redis", "AI Engine"],
    image: "/e-commerce-platform.png",
  },

  "mobile-fitness-app": {
    title: "Building a High Engagement Fitness App with Social Features",
    client: "Fitness Startup - UK",
    duration: "10 Weeks",
    teamSize: "4 Developers",
    role: "Mobile App Development",

    overview:
      "A cross-platform fitness application designed to increase user engagement through social interaction, gamification, and AI-based workout recommendations.",

    challenges: [
      "Low user engagement and retention",
      "Lack of community features",
      "Difficulty tracking user progress",
    ],

    solutions: [
      "Built React Native cross-platform app",
      "Added leaderboard and social challenges",
      "Integrated AI workout personalization",
    ],

    results: [
      "User engagement increased by 60%",
      "Retention improved by 42%",
      "Daily active users doubled",
    ],

    technologies: ["React Native", "Firebase", "Node.js", "AI Models"],
    image: "/mobile-fitness-app.jpg",
  },

  "ai-content-generator": {
    title: "AI Content Generator That Reduced Writing Time by 60%",
    client: "Marketing Agency - Canada",
    duration: "8 Weeks",
    teamSize: "3 Developers",
    role: "AI + Web Development",

    overview:
      "An AI-powered content generation platform that helps marketing teams create blogs, ads, and social media content in seconds.",

    challenges: [
      "Manual content creation was time-consuming",
      "High cost of hiring content writers",
      "Inconsistent content quality",
    ],

    solutions: [
      "Integrated OpenAI-based NLP system",
      "Built smart content templates",
      "Developed admin dashboard for content control",
    ],

    results: [
      "60% faster content production",
      "Reduced operational cost by 35%",
      "Improved content consistency",
    ],

    technologies: ["Python", "OpenAI API", "Next.js", "PostgreSQL"],
    image: "/ai-content-generator.png",
  },

  "3d-game-engine": {
    title: "Real-Time Multiplayer 3D Game Engine Development",
    client: "Gaming Studio - Australia",
    duration: "16 Weeks",
    teamSize: "6 Developers",
    role: "Game Development",

    overview:
      "A real-time multiplayer 3D game engine with advanced physics, low latency networking, and immersive gameplay mechanics.",

    challenges: [
      "Real-time synchronization between players",
      "High rendering performance requirement",
      "Network latency issues",
    ],

    solutions: [
      "Implemented Photon multiplayer system",
      "Optimized rendering pipeline using WebGL",
      "Built low-latency architecture",
    ],

    results: [
      "Smooth multiplayer experience",
      "Stable 60 FPS performance",
      "Reduced latency by 55%",
    ],

    technologies: ["Unity", "C#", "Photon", "WebGL"],
    image: "/3d-game-engine.jpg",
  },

  "analytics-dashboard": {
    title: "Real-Time Business Analytics Dashboard System",
    client: "SaaS Company - US",
    duration: "6 Weeks",
    teamSize: "3 Developers",
    role: "Full Stack Development",

    overview:
      "A real-time analytics dashboard that visualizes business performance metrics and helps decision-making through data insights.",

    challenges: [
      "No centralized data system",
      "Slow reporting process",
      "Lack of real-time insights",
    ],

    solutions: [
      "Built centralized data pipeline",
      "Integrated D3.js visual analytics",
      "Optimized backend performance",
    ],

    results: [
      "Faster decision-making process",
      "Improved data visibility",
      "Reduced reporting time by 70%",
    ],

    technologies: ["React", "Node.js", "D3.js", "MongoDB"],
    image: "/analytics-dashboard.png",
  },

  "predictive-analytics": {
    title: "Predictive Analytics for Customer Behavior & Sales Forecasting",
    client: "E-commerce Brand - Germany",
    duration: "9 Weeks",
    teamSize: "4 Developers",
    role: "AI Development",

    overview:
      "A machine learning system designed to predict customer behavior and improve sales forecasting accuracy.",

    challenges: [
      "No predictive insights for sales",
      "Poor marketing targeting",
      "Unstructured customer data",
    ],

    solutions: [
      "Built ML models using Scikit-learn",
      "Integrated FastAPI backend",
      "Structured customer data pipeline",
    ],

    results: [
      "Improved sales prediction accuracy by 48%",
      "Better marketing ROI",
      "Increased conversion rate",
    ],

    technologies: ["Python", "Scikit-learn", "FastAPI", "PostgreSQL"],
    image: "/predictive-analytics-concept.png",
  },
}

export default async function Page({ params }: any) {
  const { slug } = await params

  const project = caseStudies[slug]

  if (!project) return notFound()

  return (
    <main className="min-h-screen pt-24 pb-12 bg-background">
      <div className="max-w-5xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-14">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            {project.title}
          </h1>
          <p className="text-foreground/70 mt-4">
            Case Study • {project.client}
          </p>
        </div>

        {/* IMAGE */}
        <div className="rounded-xl overflow-hidden border mb-12">
          <Image
            src={project.image}
            alt={project.title}
            width={1200}
            height={600}
            className="w-full object-cover"
          />
        </div>

        {/* OVERVIEW */}
        <Section title="Overview" text={project.overview} />

        {/* CHALLENGES */}
        <List title="Challenges" items={project.challenges} />

        {/* SOLUTIONS */}
        <List title="Solutions" items={project.solutions} />

        {/* RESULTS */}
        <List title="Results" items={project.results} />

        {/* TECH */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Technologies Used</h2>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((t: string, i: number) => (
              <span
                key={i}
                className="px-3 py-1 text-xs rounded-full bg-primary/20 text-secondary"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

      </div>
    </main>
  )
}

/* ---------- UI COMPONENTS ---------- */

function Section({ title, text }: any) {
  return (
    <div className="mb-10">
      <h2 className="text-3xl font-bold mb-3">{title}</h2>
      <p className="text-foreground/80 leading-relaxed">{text}</p>
    </div>
  )
}

function List({ title, items }: any) {
  return (
    <div className="mb-10">
      <h2 className="text-3xl font-bold mb-3">{title}</h2>
      <ul className="list-disc pl-6 space-y-2 text-foreground/80">
        {items.map((item: string, i: number) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  )
}