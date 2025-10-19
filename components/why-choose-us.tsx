import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Clock, Users, Award, Shield, Lightbulb } from "lucide-react"

export function WhyChooseUs() {
  const reasons = [
    {
      icon: CheckCircle,
      title: "Proven Track Record",
      description: "Successfully delivered 200+ projects with 98% client satisfaction rate",
    },
    {
      icon: Clock,
      title: "On-Time Delivery",
      description: "We respect deadlines and deliver projects on schedule without compromising quality",
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Skilled professionals with 5+ years of experience in their respective domains",
    },
    {
      icon: Award,
      title: "Quality Assurance",
      description: "Rigorous testing and quality control processes ensure bug-free deliverables",
    },
    {
      icon: Shield,
      title: "24/7 Support",
      description: "Round-the-clock technical support and maintenance for all our solutions",
    },
    {
      icon: Lightbulb,
      title: "Innovation Focus",
      description: "We stay updated with latest technologies to provide cutting-edge solutions",
    },
  ]

  return (
    <section className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose MrBitX?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            At MrBitX, we combine deep technical expertise with real-world business understanding to deliver Simple Solutions, Real Results — ensuring every project achieves measurable success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <reason.icon className="h-12 w-12 text-[#8A2BE2] mb-4" />
                <CardTitle className="text-xl">{reason.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{reason.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
