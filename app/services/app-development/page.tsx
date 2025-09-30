import { Navigation } from "@/components/navigation"
import { ServiceHero } from "@/components/service-hero"
import { ServiceProcess } from "@/components/service-process"
import { ServiceFeatures } from "@/components/service-features"
import { Button } from "@/components/ui/button"
import { Smartphone, ArrowRight } from "lucide-react"
import Link from "next/link"
import { Footer } from "@/components/footer"

export default function AppDevelopmentPage() {
  const processSteps = [
    {
      title: "Concept & Strategy",
      description: "We define your app's core features, target audience, and platform strategy for maximum impact.",
      duration: "1-2 weeks",
    },
    {
      title: "UI/UX Design",
      description: "Create intuitive, engaging user interfaces that provide exceptional mobile experiences.",
      duration: "2-4 weeks",
    },
    {
      title: "Development & Testing",
      description: "Build your app using Flutter for cross-platform compatibility with native performance.",
      duration: "6-12 weeks",
    },
    {
      title: "Launch & Optimization",
      description: "Deploy to app stores and continuously optimize based on user feedback and analytics.",
      duration: "2 weeks + ongoing",
    },
  ]

  const features = [
    {
      title: "Cross-Platform Development",
      description: "Single codebase for both iOS and Android platforms, reducing development time and costs.",
      technologies: ["Flutter", "Dart", "iOS", "Android"],
    },
    {
      title: "Native Performance",
      description: "Achieve native-like performance and user experience across all supported platforms.",
      technologies: ["Flutter Engine", "Skia Graphics", "Platform Channels"],
    },
    {
      title: "Backend Integration",
      description: "Seamless integration with cloud services, databases, and third-party APIs.",
      technologies: ["Firebase", "AWS", "REST APIs", "GraphQL"],
    },
    {
      title: "Real-time Features",
      description: "Push notifications, real-time messaging, and live data synchronization capabilities.",
      technologies: ["Firebase Cloud Messaging", "WebSockets", "Socket.io"],
    },
    {
      title: "Offline Support",
      description: "Robust offline functionality with data synchronization when connectivity is restored.",
      technologies: ["SQLite", "Hive", "Shared Preferences", "Sync Algorithms"],
    },
    {
      title: "App Store Optimization",
      description: "Complete app store submission process and optimization for better visibility and downloads.",
      technologies: ["App Store Connect", "Google Play Console", "ASO Tools"],
    },
  ]

  return (
    <main className="min-h-screen">
      <Navigation />

      <ServiceHero
        title="App Development"
        description="Create stunning mobile applications that engage users and drive business growth. Our Flutter expertise ensures your app works perfectly on both iOS and Android."
        icon={Smartphone}
        backgroundImage="/flutter-mobile-app-development.png"
      />

      <ServiceProcess title="Our App Development Process" steps={processSteps} />

      <ServiceFeatures title="Mobile App Solutions" features={features} />

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Build Your Mobile App?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Transform your idea into a powerful mobile application that users love and businesses rely on.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/contact">
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/portfolio">See Our Apps</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
