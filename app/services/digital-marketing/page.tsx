import { Navigation } from "@/components/navigation"
import { ServiceHero } from "@/components/service-hero"
import { ServiceProcess } from "@/components/service-process"
import { ServiceFeatures } from "@/components/service-features"
import { Button } from "@/components/ui/button"
import { TrendingUp, ArrowRight } from "lucide-react"
import Link from "next/link"
import { Footer } from "@/components/footer"

export default function DigitalMarketingPage() {
  const processSteps = [
    {
      title: "Market Research",
      description:
        "Analyze your target audience, competitors, and market opportunities to create effective strategies.",
      duration: "1-2 weeks",
    },
    {
      title: "Strategy Development",
      description: "Create comprehensive digital marketing strategies aligned with your business objectives.",
      duration: "1-2 weeks",
    },
    {
      title: "Campaign Execution",
      description: "Implement multi-channel marketing campaigns with continuous optimization and monitoring.",
      duration: "Ongoing",
    },
    {
      title: "Analytics & Reporting",
      description: "Track performance metrics and provide detailed reports with actionable insights.",
      duration: "Monthly",
    },
  ]

  const features = [
    {
      title: "Search Engine Optimization",
      description: "Improve your website's visibility and ranking on search engines for increased organic traffic.",
      technologies: ["Google Analytics", "SEMrush", "Ahrefs", "Technical SEO"],
    },
    {
      title: "Social Media Marketing",
      description: "Build brand awareness and engage with your audience across all major social platforms.",
      technologies: ["Facebook Ads", "Instagram", "LinkedIn", "Twitter"],
    },
    {
      title: "Content Marketing",
      description: "Create compelling content that attracts, engages, and converts your target audience.",
      technologies: ["Content Strategy", "Copywriting", "Video Marketing", "Blogging"],
    },
    {
      title: "Pay-Per-Click Advertising",
      description: "Drive immediate traffic and conversions through targeted paid advertising campaigns.",
      technologies: ["Google Ads", "Facebook Ads", "LinkedIn Ads", "Display Advertising"],
    },
    {
      title: "Email Marketing",
      description: "Nurture leads and maintain customer relationships through personalized email campaigns.",
      technologies: ["Mailchimp", "ConvertKit", "Automation", "Segmentation"],
    },
    {
      title: "Analytics & Reporting",
      description: "Comprehensive tracking and analysis of marketing performance with actionable insights.",
      technologies: ["Google Analytics", "Data Studio", "Conversion Tracking", "ROI Analysis"],
    },
  ]

  return (
    <main className="min-h-screen">
      <Navigation />

      <ServiceHero
        title="Digital Marketing"
        description="Boost your online presence and drive business growth with data-driven digital marketing strategies that deliver measurable results."
        icon={TrendingUp}
      />

      <ServiceProcess title="Our Marketing Process" steps={processSteps} />

      <ServiceFeatures title="Marketing Services" features={features} />

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Grow Your Business?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's create a digital marketing strategy that drives traffic, generates leads, and increases conversions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/contact">
                Get Marketing Audit
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/portfolio">See Results</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
