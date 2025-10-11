import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  ArrowRight,
  Code,
  Smartphone,
  Gamepad2,
  Brain,
  TrendingUp,
  MessageCircle,
  Facebook,
  Linkedin,
  Phone,
} from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  const services = [
    {
      icon: Code,
      title: "Web Development",
      description: "MERN Stack solutions for modern web applications",
    },
    {
      icon: Smartphone,
      title: "App Development",
      description: "Flutter-based mobile apps for iOS and Android",
    },
    {
      icon: Gamepad2,
      title: "Game Development",
      description: "Engaging games with cutting-edge technology",
    },
    {
      icon: Brain,
      title: "AI Solutions",
      description: "Intelligent automation and machine learning",
    },
    {
      icon: TrendingUp,
      title: "Digital Marketing",
      description: "SEO, social media, and targeted advertising",
    },
  ]

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        {/* Hero Content */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-balance mb-6">
            Grow your business with <span className="text-primary">Web & App</span> solutions
          </h1>
          <p className="text-xl text-muted-foreground text-balance mb-8 max-w-3xl mx-auto">
            We deliver cutting-edge web development, mobile apps, AI solutions, and digital marketing services to help
            your business thrive in the digital world.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" asChild>
              <Link href="/contact">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/portfolio">See Our Work</Link>
            </Button>
          </div>

          {/* Contact Action Buttons */}
          <div className="flex flex-wrap gap-3 justify-center">
            <Button variant="outline" size="sm" asChild>
              <a href="https://wa.me/+8801346810082" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-4 w-4 mr-2" />
                WhatsApp
              </a>
            </Button>
            <Button variant="outline" size="sm" asChild>
              <a href="https://m.me/yourpage" target="_blank" rel="noopener noreferrer">
                <Facebook className="h-4 w-4 mr-2" />
                Messenger
              </a>
            </Button>
            <Button variant="outline" size="sm" asChild>
              <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-4 w-4 mr-2" />
                LinkedIn
              </a>
            </Button>
            <Button variant="outline" size="sm" asChild>
              <a href="tel:+8801346810082">
                <Phone className="h-4 w-4 mr-2" />
                Call Now
              </a>
            </Button>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <service.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
