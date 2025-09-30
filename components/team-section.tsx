import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Linkedin, Github, Twitter } from "lucide-react"

export function TeamSection() {
  const team = [
    {
      name: "Alex Johnson",
      role: "CEO & Full-Stack Developer",
      image: "/professional-male-developer.jpg",
      bio: "10+ years of experience in MERN stack development and team leadership.",
      skills: ["React", "Node.js", "MongoDB", "Leadership"],
      social: {
        linkedin: "#",
        github: "#",
        twitter: "#",
      },
    },
    {
      name: "Sarah Chen",
      role: "Mobile App Developer",
      image: "/professional-female-developer.jpg",
      bio: "Flutter expert with 8+ years in mobile development and UI/UX design.",
      skills: ["Flutter", "Dart", "Firebase", "UI/UX"],
      social: {
        linkedin: "#",
        github: "#",
        twitter: "#",
      },
    },
    {
      name: "Michael Rodriguez",
      role: "AI Solutions Architect",
      image: "/professional-male-ai-engineer.jpg",
      bio: "Machine learning specialist with expertise in NLP and computer vision.",
      skills: ["Python", "TensorFlow", "PyTorch", "NLP"],
      social: {
        linkedin: "#",
        github: "#",
        twitter: "#",
      },
    },
    {
      name: "Emily Davis",
      role: "Digital Marketing Lead",
      image: "/professional-female-marketer.png",
      bio: "Digital marketing strategist with proven track record in SEO and social media.",
      skills: ["SEO", "Social Media", "Analytics", "Content"],
      social: {
        linkedin: "#",
        github: "#",
        twitter: "#",
      },
    },
  ]

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Team</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our diverse team of experts brings together years of experience in technology and innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-square overflow-hidden">
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-1">{member.name}</h3>
                <p className="text-primary font-medium mb-3">{member.role}</p>
                <p className="text-sm text-muted-foreground mb-4">{member.bio}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {member.skills.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-3">
                  <a
                    href={member.social.linkedin}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>
                  <a href={member.social.github} className="text-muted-foreground hover:text-primary transition-colors">
                    <Github className="h-4 w-4" />
                  </a>
                  <a
                    href={member.social.twitter}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Twitter className="h-4 w-4" />
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
