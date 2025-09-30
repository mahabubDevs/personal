import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Smartphone, Brain, Gamepad2, TrendingUp } from "lucide-react"

export function TechStack() {
  const technologies = [
    {
      icon: Code,
      title: "Web Development",
      description: "Full-stack web applications with modern frameworks",
      technologies: ["React", "Next.js", "Node.js", "Express", "MongoDB", "PostgreSQL", "TypeScript", "Tailwind CSS"],
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "Cross-platform mobile apps with native performance",
      technologies: ["Flutter", "Dart", "Firebase", "React Native", "iOS", "Android", "SQLite"],
    },
    {
      icon: Brain,
      title: "AI & Machine Learning",
      description: "Intelligent solutions powered by cutting-edge AI",
      technologies: ["Python", "TensorFlow", "PyTorch", "OpenAI", "Hugging Face", "Computer Vision", "NLP"],
    },
    {
      icon: Gamepad2,
      title: "Game Development",
      description: "Engaging games across multiple platforms",
      technologies: ["Unity", "Unreal Engine", "C#", "C++", "Blender", "2D/3D Graphics"],
    },
    {
      icon: TrendingUp,
      title: "Digital Marketing",
      description: "Data-driven marketing strategies and automation",
      technologies: ["Google Analytics", "SEO Tools", "Social Media APIs", "Email Marketing", "A/B Testing"],
    },
  ]

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Technology Stack</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We leverage the latest technologies and frameworks to build robust, scalable, and innovative solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {technologies.map((tech, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <tech.icon className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="text-xl">{tech.title}</CardTitle>
                <p className="text-muted-foreground">{tech.description}</p>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {tech.technologies.map((technology, techIndex) => (
                    <Badge key={techIndex} variant="outline" className="text-xs">
                      {technology}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
