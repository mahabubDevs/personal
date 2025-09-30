import { Navigation } from "@/components/navigation"
import { ServiceHero } from "@/components/service-hero"
import { ServiceProcess } from "@/components/service-process"
import { ServiceFeatures } from "@/components/service-features"
import { Button } from "@/components/ui/button"
import { Code, ArrowRight } from "lucide-react"
import { Footer } from "@/components/footer"
import Link from "next/link"

export default function WebDevelopmentPage() {
  const processSteps = [
    {
      title: "Discovery & Planning",
      description:
        "We analyze your requirements, target audience, and business goals to create a comprehensive project roadmap.",
      duration: "1-2 weeks",
    },
    {
      title: "Design & Prototyping",
      description: "Our designers create wireframes and interactive prototypes to visualize the user experience.",
      duration: "2-3 weeks",
    },
    {
      title: "Development & Testing",
      description: "We build your application using MERN stack with rigorous testing at every stage.",
      duration: "4-8 weeks",
    },
    {
      title: "Deployment & Support",
      description: "We deploy your application and provide ongoing maintenance and support services.",
      duration: "1 week + ongoing",
    },
  ]

  const features = [
    {
      title: "Frontend Development",
      description: "Modern, responsive user interfaces built with React and Next.js for optimal performance.",
      technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    },
    {
      title: "Backend Development",
      description: "Scalable server-side applications with robust APIs and database integration.",
      technologies: ["Node.js", "Express", "MongoDB", "PostgreSQL"],
    },
    {
      title: "E-commerce Solutions",
      description: "Complete online stores with payment processing, inventory management, and analytics.",
      technologies: ["Stripe", "PayPal", "Shopify API", "WooCommerce"],
    },
    {
      title: "CMS Development",
      description: "Custom content management systems for easy website administration and content updates.",
      technologies: ["Headless CMS", "Strapi", "Sanity", "WordPress"],
    },
    {
      title: "API Integration",
      description: "Seamless integration with third-party services and APIs for enhanced functionality.",
      technologies: ["REST APIs", "GraphQL", "Webhooks", "OAuth"],
    },
    {
      title: "Performance Optimization",
      description: "Speed optimization, SEO enhancement, and scalability improvements for better user experience.",
      technologies: ["Lighthouse", "Core Web Vitals", "CDN", "Caching"],
    },
  ]

  return (
    <main className="min-h-screen">
      <Navigation />

      <ServiceHero
        title="Web Development"
        description="Build powerful, scalable web applications with our MERN stack expertise. From concept to deployment, we create digital experiences that drive business growth."
        icon={Code}
        backgroundImage="/futuristic-web-development-coding.jpg"
      />

      <ServiceProcess title="Our Development Process" steps={processSteps} />

      <ServiceFeatures title="What We Offer" features={features} />

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Web Project?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss your requirements and create a web solution that exceeds your expectations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/contact">
                Get Free Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/portfolio">View Our Work</Link>
            </Button>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
