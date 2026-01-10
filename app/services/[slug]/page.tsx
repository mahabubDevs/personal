"use client"

import Link from "next/link"
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react"
import { Code2, Smartphone, Gamepad2, Brain, Zap } from "lucide-react"
import { useParams } from "next/navigation"

const serviceDetails: Record<
  string,
  {
    title: string
    shortDescription: string
    longDescription: string
    icon: any
    features: string[]
    benefits: string[]
    technologies: string[]
    caseStudies: Array<{ title: string; result: string }>
  }
> = {
  web: {
    title: "Web Development",
    shortDescription: "Modern, scalable web applications built with cutting-edge technologies",
    longDescription:
      "Our web development services combine cutting-edge technologies with proven design principles to create web applications that drive business growth. From simple websites to complex enterprise solutions, we deliver high-performance, user-friendly applications.",
    icon: Code2,
    features: [
      "Responsive Design",
      "Progressive Web Apps",
      "Real-time Applications",
      "API Development",
      "Database Optimization",
      "Performance Tuning",
      "Security Implementation",
      "SEO Optimization",
    ],
    benefits: [
      "Faster time to market",
      "Improved user engagement",
      "Better search rankings",
      "Reduced maintenance costs",
      "Scalable architecture",
    ],
    technologies: ["React", "Next.js", "Node.js", "TypeScript", "Tailwind CSS", "PostgreSQL", "Redis", "Docker"],
    caseStudies: [
      { title: "E-Commerce Platform", result: "300% increase in online sales" },
      { title: "SaaS Application", result: "10,000+ active users in first month" },
    ],
  },
  app: {
    title: "App Development",
    shortDescription: "Native and cross-platform mobile applications for iOS and Android",
    longDescription:
      "Create powerful mobile applications that reach your users wherever they are. We develop both native and cross-platform apps with exceptional user experiences and robust performance.",
    icon: Smartphone,
    features: [
      "iOS Development",
      "Android Development",
      "Cross-Platform Solutions",
      "Native Performance",
      "Push Notifications",
      "Offline Functionality",
      "App Store Optimization",
      "Analytics Integration",
    ],
    benefits: [
      "Reach millions of users",
      "High performance and speed",
      "Native platform features",
      "Better user retention",
      "Monetization opportunities",
    ],
    technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase", "Realm", "Redux"],
    caseStudies: [
      { title: "Social Network App", result: "2M+ downloads" },
      { title: "Fitness Tracking App", result: "4.8-star rating on app stores" },
    ],
  },
  game: {
    title: "Game Development",
    shortDescription: "Engaging games and interactive experiences for multiple platforms",
    longDescription:
      "From mobile games to immersive 3D experiences, we create games that captivate and engage players. Our team has expertise in both 2D and 3D game development across all major platforms.",
    icon: Gamepad2,
    features: [
      "2D Game Development",
      "3D Game Development",
      "VR Experiences",
      "AR Experiences",
      "Multiplayer Implementation",
      "Game Physics",
      "AI Opponents",
      "Cross-Platform Publishing",
    ],
    benefits: [
      "Immersive user engagement",
      "Viral growth potential",
      "Multiple revenue streams",
      "Strong community building",
      "Brand awareness",
    ],
    technologies: ["Unity", "Unreal Engine", "C#", "C++", "Blender", "Photon", "PlayFab"],
    caseStudies: [
      { title: "Casual Mobile Game", result: "50M+ total downloads" },
      { title: "VR Adventure Game", result: "Industry award winner" },
    ],
  },
  ai: {
    title: "AI Solutions",
    shortDescription: "Intelligent systems powered by machine learning and artificial intelligence",
    longDescription:
      "Harness the power of artificial intelligence to automate processes, gain insights, and create intelligent applications. Our AI expertise spans machine learning, natural language processing, and computer vision.",
    icon: Brain,
    features: [
      "Machine Learning Models",
      "Natural Language Processing",
      "Computer Vision",
      "Predictive Analytics",
      "Recommendation Systems",
      "Chatbot Development",
      "Data Processing",
      "Model Training & Optimization",
    ],
    benefits: [
      "Increased efficiency",
      "Better decision making",
      "Personalized experiences",
      "Cost reduction",
      "Competitive advantage",
    ],
    technologies: ["TensorFlow", "PyTorch", "Scikit-learn", "OpenAI API", "Hugging Face", "LangChain", "Python"],
    caseStudies: [
      { title: "Predictive Analytics Platform", result: "95% accuracy rate" },
      { title: "AI Chatbot System", result: "70% support ticket automation" },
    ],
  },
  marketing: {
    title: "Digital Marketing",
    shortDescription: "Strategic marketing services to boost your online presence and growth",
    longDescription:
      "Drive measurable results with our comprehensive digital marketing services. From SEO to social media strategy, we help brands reach the right audience and achieve their business objectives.",
    icon: Zap,
    features: [
      "Search Engine Optimization",
      "Content Marketing",
      "Social Media Strategy",
      "Email Marketing",
      "Paid Advertising",
      "Analytics & Reporting",
      "Brand Strategy",
      "Conversion Optimization",
    ],
    benefits: [
      "Increased online visibility",
      "Higher conversion rates",
      "Better ROI",
      "Brand loyalty",
      "Data-driven decisions",
    ],
    technologies: ["Google Analytics", "SEMrush", "HubSpot", "Mailchimp", "Meta Business", "Tableau"],
    caseStudies: [
      { title: "B2B Lead Generation", result: "250% increase in qualified leads" },
      { title: "E-Commerce Growth", result: "$5M revenue increase in 12 months" },
    ],
  },
}

export default function ServiceDetail() {
  const params = useParams()
  const slug = params?.slug as string
  const service = serviceDetails[slug] || serviceDetails.web
  const Icon = service.icon

  const allSlugs = Object.keys(serviceDetails)
  const currentIndex = allSlugs.indexOf(slug)
  const prevSlug = currentIndex > 0 ? allSlugs[currentIndex - 1] : null
  const nextSlug = currentIndex < allSlugs.length - 1 ? allSlugs[currentIndex + 1] : null

 return (
  <main className="min-h-screen pt-20 md:pt-24 pb-10 md:pb-12">
    <div className="max-w-4xl mx-auto px-4">
      
      {/* Back Link */}
      <Link
        href="/services"
        className="flex items-center gap-2 text-secondary hover:text-accent mb-6 md:mb-8 transition-colors"
      >
        <ArrowLeft size={18} /> Back to Services
      </Link>

      {/* Hero Section */}
      <div className="mb-10 md:mb-12">
        <div className="flex flex-col md:flex-row items-start gap-4 md:gap-6">
          
          <div className="p-3 md:p-4 rounded-lg bg-gradient-to-br from-primary to-secondary">
            <Icon className="w-8 h-8 md:w-10 md:h-10 text-primary-foreground" />
          </div>

          <div>
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-foreground mb-3 md:mb-4">
              {service.title}
            </h1>
            <p className="text-base md:text-xl text-foreground/80">
              {service.longDescription}
            </p>
          </div>
        </div>
      </div>

      {/* Features + Benefits */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-10 md:mb-12">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">Key Features</h2>
          <ul className="space-y-3">
            {service.features.map((feature, idx) => (
              <li key={idx} className="flex gap-3">
                <CheckCircle2 size={18} className="text-secondary mt-1" />
                <span className="text-sm md:text-base text-foreground/80">
                  {feature}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">Benefits</h2>
          <ul className="space-y-3">
            {service.benefits.map((benefit, idx) => (
              <li key={idx} className="flex gap-3">
                <CheckCircle2 size={18} className="text-accent mt-1" />
                <span className="text-sm md:text-base text-foreground/80">
                  {benefit}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Technologies */}
      <div className="p-5 md:p-8 rounded-lg bg-card/50 border mb-10 md:mb-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">
          Technologies We Use
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {service.technologies.map((tech, idx) => (
            <div
              key={idx}
              className="px-3 py-2 rounded-lg bg-card border text-center text-sm"
            >
              {tech}
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="rounded-lg p-6 md:p-8 text-center bg-gradient-to-r from-primary/20 to-secondary/20 border mb-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-3">
          Ready to Get Started?
        </h2>
        <p className="text-sm md:text-base mb-5 text-foreground/80">
          Let's discuss how {service.title.toLowerCase()} can transform your business.
        </p>

        <Link
          href="/contact"
          className="block md:inline-block w-full md:w-auto px-6 py-3 md:px-8 md:py-4 rounded-full font-semibold bg-gradient-to-r from-primary to-accent text-primary-foreground"
        >
          Schedule a Consultation
        </Link>
      </div>

      {/* Navigation */}
      <div className="flex flex-col sm:flex-row justify-between gap-4 pt-6 border-t">
        {prevSlug ? (
          <Link href={`/services/${prevSlug}`} className="flex gap-2 text-secondary">
            <ArrowLeft size={18} /> Previous Service
          </Link>
        ) : <div />}

        {nextSlug ? (
          <Link href={`/services/${nextSlug}`} className="flex gap-2 text-secondary">
            Next Service <ArrowRight size={18} />
          </Link>
        ) : <div />}
      </div>

    </div>
  </main>
)

}
