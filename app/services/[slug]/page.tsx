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
    shortDescription:
      "Secure, scalable, and high-performance web applications for modern businesses",
    longDescription:
      "We build modern web applications that are fast, secure, and scalable. Our web development services cover everything from responsive frontends to enterprise-grade backend systems. Whether you're a startup or a growing business, we create web solutions that improve user experience, performance, and long-term scalability.",
    icon: Code2,
    features: [
      "Responsive & Mobile-First Design",
      "Progressive Web Applications (PWA)",
      "Custom API Development",
      "Database Design & Optimization",
      "High Performance Optimization",
      "Security Best Practices",
      "SEO-Friendly Architecture",
      "Scalable Cloud Deployment",
    ],
    benefits: [
      "Faster loading websites",
      "Improved search engine rankings",
      "Better user engagement",
      "Scalable systems for future growth",
      "Lower long-term maintenance cost",
    ],
    technologies: [
      "React",
      "Next.js",
      "Node.js",
      "TypeScript",
      "Tailwind CSS",
      "PostgreSQL",
      "Redis",
      "Docker",
    ],
    caseStudies: [
      { title: "E-Commerce Platform", result: "3x increase in conversion rate" },
      { title: "SaaS Web Application", result: "12,000+ active users in 60 days" },
    ],
  },

  app: {
    title: "App Development",
    shortDescription:
      "Custom iOS and Android applications with seamless user experience",
    longDescription:
      "Our mobile app development services focus on performance, usability, and scalability. We build native and cross-platform applications that deliver smooth user experiences, strong security, and long-term reliability across iOS and Android devices.",
    icon: Smartphone,
    features: [
      "iOS & Android App Development",
      "Cross-Platform Solutions",
      "High-Performance UI/UX",
      "Offline Support",
      "Push Notifications",
      "Secure Authentication",
      "App Store Deployment",
      "Analytics & Monitoring",
    ],
    benefits: [
      "Reach mobile-first users",
      "Faster development cycles",
      "High app performance",
      "Improved user retention",
      "Monetization-ready solutions",
    ],
    technologies: [
      "React Native",
      "Flutter",
      "Swift",
      "Kotlin",
      "Firebase",
      "Redux",
      "REST & GraphQL APIs",
    ],
    caseStudies: [
      { title: "Fitness Mobile App", result: "4.9★ average app store rating" },
      { title: "Business Productivity App", result: "500k+ downloads" },
    ],
  },

  game: {
    title: "Game Development",
    shortDescription:
      "High-quality 2D and 3D games for mobile, desktop, and immersive platforms",
    longDescription:
      "We create engaging games and interactive experiences using modern game engines and industry best practices. From casual mobile games to complex 3D and multiplayer experiences, our team delivers performance-driven and visually stunning games.",
    icon: Gamepad2,
    features: [
      "2D & 3D Game Development",
      "Mobile & Desktop Games",
      "Multiplayer Systems",
      "Game Physics & Mechanics",
      "AI-Based Gameplay",
      "Cross-Platform Publishing",
      "Performance Optimization",
      "Live Game Support",
    ],
    benefits: [
      "High player engagement",
      "Strong monetization potential",
      "Cross-platform reach",
      "Scalable game architecture",
      "Long-term player retention",
    ],
    technologies: [
      "Unity",
      "Unreal Engine",
      "C#",
      "C++",
      "Blender",
      "Photon",
      "PlayFab",
    ],
    caseStudies: [
      { title: "Mobile Casual Game", result: "10M+ total installs" },
      { title: "3D Adventure Game", result: "Featured on app stores" },
    ],
  },

  ai: {
    title: "AI Solutions",
    shortDescription:
      "AI-powered systems that automate processes and drive smarter decisions",
    longDescription:
      "Our AI solutions help businesses leverage machine learning and artificial intelligence to automate workflows, analyze data, and build intelligent products. From predictive analytics to AI chatbots, we deliver scalable and production-ready AI systems.",
    icon: Brain,
    features: [
      "Machine Learning Model Development",
      "Natural Language Processing (NLP)",
      "Computer Vision Solutions",
      "Predictive Analytics",
      "AI Chatbots & Assistants",
      "Recommendation Engines",
      "Data Processing Pipelines",
      "Model Deployment & Optimization",
    ],
    benefits: [
      "Automated business processes",
      "Improved decision making",
      "Personalized user experiences",
      "Operational cost reduction",
      "Competitive business advantage",
    ],
    technologies: [
      "Python",
      "TensorFlow",
      "PyTorch",
      "Scikit-learn",
      "OpenAI API",
      "Hugging Face",
      "LangChain",
    ],
    caseStudies: [
      { title: "AI Analytics Platform", result: "94% prediction accuracy" },
      { title: "Customer Support AI Bot", result: "65% reduction in support workload" },
    ],
  },

  marketing: {
    title: "Digital Marketing",
    shortDescription:
      "Data-driven digital marketing strategies for sustainable business growth",
    longDescription:
      "Our digital marketing services focus on long-term growth through SEO, content, and performance marketing. We help brands increase visibility, generate qualified leads, and convert traffic into real business results.",
    icon: Zap,
    features: [
      "Search Engine Optimization (SEO)",
      "Content Marketing Strategy",
      "Social Media Marketing",
      "Paid Advertising Campaigns",
      "Email Marketing",
      "Conversion Rate Optimization",
      "Analytics & Performance Tracking",
      "Brand Positioning",
    ],
    benefits: [
      "Higher search engine rankings",
      "Increased qualified traffic",
      "Better conversion rates",
      "Measurable ROI",
      "Stronger brand presence",
    ],
    technologies: [
      "Google Analytics",
      "Google Search Console",
      "SEMrush",
      "Ahrefs",
      "Meta Business Suite",
      "HubSpot",
    ],
    caseStudies: [
      { title: "Startup SEO Growth", result: "320% organic traffic increase" },
      { title: "E-Commerce Marketing", result: "4x monthly revenue growth" },
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
