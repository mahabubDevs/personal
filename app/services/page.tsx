import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Code, Smartphone, Gamepad2, Brain, TrendingUp, ArrowRight } from "lucide-react"
import { Footer } from "@/components/footer"
import Link from "next/link"

export default function ServicesPage() {
  const services = [
    {
      icon: Code,
      title: "Web Development",
      description: "Full-stack MERN applications with modern UI/UX design and robust backend architecture.",
      features: ["Responsive Design", "API Integration", "Database Management", "Performance Optimization"],
      href: "/services/web-development",
    },
    {
      icon: Smartphone,
      title: "App Development",
      description: "Cross-platform mobile applications using Flutter for iOS and Android platforms.",
      features: ["Cross-Platform", "Native Performance", "Push Notifications", "Offline Support"],
      href: "/services/app-development",
    },
    {
      icon: Gamepad2,
      title: "Game Development",
      description: "Engaging games for multiple platforms using Unity and Unreal Engine.",
      features: ["2D/3D Games", "Multi-Platform", "Monetization", "Analytics Integration"],
      href: "/services/game-development",
    },
    {
      icon: Brain,
      title: "AI Solutions",
      description: "Intelligent automation and machine learning solutions for business optimization.",
      features: ["Machine Learning", "Natural Language Processing", "Computer Vision", "Predictive Analytics"],
      href: "/services/ai-solutions",
    },
    {
      icon: TrendingUp,
      title: "Digital Marketing",
      description: "Data-driven marketing strategies to boost your online presence and conversions.",
      features: ["SEO Optimization", "Social Media Marketing", "Content Strategy", "Analytics & Reporting"],
      href: "/services/digital-marketing",
    },
  ]

  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-balance mb-6">
            Our <span className="text-primary">Services</span>
          </h1>
          <p className="text-xl text-muted-foreground text-balance mb-8 max-w-3xl mx-auto">
            We offer comprehensive technology solutions to help your business grow and succeed in the digital landscape.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <service.icon className="h-12 w-12 text-primary mb-4" />
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm">
                        <div className="h-2 w-2 rounded-full bg-primary mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="w-full">
                    <Link href={service.href}>
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
