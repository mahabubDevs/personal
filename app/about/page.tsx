import { Navigation } from "@/components/navigation"
import { MissionVision } from "@/components/mission-vision"
import { TeamSection } from "@/components/team-section"
import { TechStack } from "@/components/tech-stack"
import { WhyChooseUs } from "@/components/why-choose-us"
import { Footer } from "@/components/footer"

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-balance mb-6">
            About <span className="text-primary">MrBitX</span>
          </h1>
          <p className="text-xl text-muted-foreground text-balance mb-8 max-w-3xl mx-auto">
            At MrBitX, we create Simple Solutions that deliver Real Results.
Our team of passionate developers, designers, and innovators is dedicated to helping businesses grow with modern Full Stack web and Flutter app solutions.
          </p>
        </div>
      </section>

      <MissionVision />
      <WhyChooseUs />
      <TechStack />
      <TeamSection />
      <Footer />
    </main>
  )
}
