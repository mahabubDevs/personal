import { Navigation } from "@/components/navigation"
import { ServiceHero } from "@/components/service-hero"
import { ServiceProcess } from "@/components/service-process"
import { ServiceFeatures } from "@/components/service-features"
import { Button } from "@/components/ui/button"
import { Brain, ArrowRight } from "lucide-react"
import Link from "next/link"
import { Footer } from "@/components/footer"

export default function AISolutionsPage() {
  const processSteps = [
    {
      title: "Problem Analysis",
      description: "We identify automation opportunities and define AI use cases that align with your business goals.",
      duration: "1-2 weeks",
    },
    {
      title: "Data Assessment",
      description: "Evaluate your data quality, availability, and requirements for training AI models.",
      duration: "1-2 weeks",
    },
    {
      title: "Model Development",
      description: "Design, train, and optimize AI models using cutting-edge machine learning techniques.",
      duration: "4-8 weeks",
    },
    {
      title: "Integration & Deployment",
      description: "Seamlessly integrate AI solutions into your existing systems with ongoing monitoring.",
      duration: "2-4 weeks",
    },
  ]

  const features = [
    {
      title: "Machine Learning Models",
      description: "Custom ML models for prediction, classification, and pattern recognition tailored to your needs.",
      technologies: ["TensorFlow", "PyTorch", "Scikit-learn", "XGBoost"],
    },
    {
      title: "Natural Language Processing",
      description: "Text analysis, sentiment analysis, chatbots, and language understanding solutions.",
      technologies: ["NLTK", "spaCy", "Transformers", "OpenAI GPT"],
    },
    {
      title: "Computer Vision",
      description: "Image recognition, object detection, and visual analysis for automated decision making.",
      technologies: ["OpenCV", "YOLO", "TensorFlow Vision", "PIL"],
    },
    {
      title: "Predictive Analytics",
      description: "Forecast trends, customer behavior, and business outcomes using advanced analytics.",
      technologies: ["Time Series Analysis", "Statistical Models", "Deep Learning"],
    },
    {
      title: "Automation Solutions",
      description: "Intelligent process automation to streamline operations and reduce manual work.",
      technologies: ["RPA Tools", "Workflow Automation", "API Integration"],
    },
    {
      title: "AI Consulting",
      description: "Strategic guidance on AI adoption, implementation roadmaps, and technology selection.",
      technologies: ["AI Strategy", "Technology Assessment", "ROI Analysis"],
    },
  ]

  return (
    <main className="min-h-screen">
      <Navigation />

      <ServiceHero
        title="AI Solutions"
        description="Harness the power of artificial intelligence to automate processes, gain insights, and drive innovation in your business operations."
        icon={Brain}
        backgroundImage="/ai-business-integration-dashboard.jpg"
      />

      <ServiceProcess title="Our AI Development Process" steps={processSteps} />

      <ServiceFeatures title="AI Capabilities" features={features} />

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Embrace AI?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's explore how artificial intelligence can transform your business processes and drive growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/contact">
                Discuss AI Solutions
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/portfolio">View AI Projects</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
