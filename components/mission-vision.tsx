import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Target, Eye, Heart, Zap } from "lucide-react"

export function MissionVision() {
  const values = [
    {
      icon: Target,
      title: "Mission",
      description:
        "To empower businesses with simple yet powerful Full Stack and Flutter solutions that drive real growth, efficiency, and innovation — Simple Solutions, Real Results.",
    },
    {
      icon: Eye,
      title: "Vision",
      description:
        "To be the leading technology partner that transforms ideas into reality, creating digital experiences that make a lasting impact.",
    },
    {
      icon: Heart,
      title: "Values",
      description:
        "We believe in transparency, quality, and building long-term relationships with our clients through exceptional service and results.",
    },
    {
      icon: Zap,
      title: "Innovation",
      description:
        "We stay ahead of technology trends, continuously learning and adapting to deliver the most advanced solutions to our clients.",
    },
  ]

  return (
    <section className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Foundation</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Built on strong principles and driven by innovation, we're committed to delivering excellence in every
            project.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <value.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-xl">{value.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
