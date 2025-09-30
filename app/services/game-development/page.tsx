import { Navigation } from "@/components/navigation"
import { ServiceHero } from "@/components/service-hero"
import { ServiceProcess } from "@/components/service-process"
import { ServiceFeatures } from "@/components/service-features"
import { Button } from "@/components/ui/button"
import { Gamepad2, ArrowRight } from "lucide-react"
import Link from "next/link"
import { Footer } from "@/components/footer"

export default function GameDevelopmentPage() {
  const processSteps = [
    {
      title: "Concept & Design",
      description: "Define game mechanics, storyline, and visual style to create an engaging player experience.",
      duration: "2-4 weeks",
    },
    {
      title: "Prototyping",
      description: "Build playable prototypes to test core gameplay mechanics and user interactions.",
      duration: "3-6 weeks",
    },
    {
      title: "Development & Art",
      description: "Full game development with programming, 3D modeling, animation, and sound design.",
      duration: "8-16 weeks",
    },
    {
      title: "Testing & Launch",
      description: "Comprehensive testing, optimization, and deployment across target platforms.",
      duration: "2-4 weeks",
    },
  ]

  const features = [
    {
      title: "2D & 3D Game Development",
      description: "Create immersive games with stunning visuals and smooth gameplay across multiple platforms.",
      technologies: ["Unity", "Unreal Engine", "C#", "C++"],
    },
    {
      title: "Mobile Game Development",
      description: "Engaging mobile games optimized for iOS and Android with touch-friendly controls.",
      technologies: ["Unity Mobile", "Flutter Games", "iOS", "Android"],
    },
    {
      title: "Multiplayer Games",
      description: "Real-time multiplayer experiences with robust networking and matchmaking systems.",
      technologies: ["Photon", "Mirror Networking", "WebRTC", "Dedicated Servers"],
    },
    {
      title: "Game Art & Animation",
      description: "Professional 2D/3D art, character design, and smooth animations that bring games to life.",
      technologies: ["Blender", "Maya", "Photoshop", "Spine 2D"],
    },
    {
      title: "Game Monetization",
      description: "Implement effective monetization strategies including in-app purchases and advertising.",
      technologies: ["Unity Ads", "AdMob", "In-App Purchases", "Analytics"],
    },
    {
      title: "Platform Deployment",
      description: "Deploy games across multiple platforms including PC, mobile, and web browsers.",
      technologies: ["Steam", "App Stores", "WebGL", "Console Platforms"],
    },
  ]

  return (
    <main className="min-h-screen">
      <Navigation />

      <ServiceHero
        title="Game Development"
        description="Create captivating games that entertain, engage, and inspire players across multiple platforms with cutting-edge technology and creative storytelling."
        icon={Gamepad2}
      />

      <ServiceProcess title="Our Game Development Process" steps={processSteps} />

      <ServiceFeatures title="Game Development Services" features={features} />

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Create Your Game?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Turn your game idea into reality with our experienced development team and cutting-edge technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/contact">
                Start Game Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/portfolio">Play Our Games</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
