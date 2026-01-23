"use client"
import Image from "next/image"

export default function About() {
  const timelineEvents = [
    {
      year: "2020",
      title: "Founded MrBitX",
      description:
        "MrBitX was founded with a clear mission to deliver secure, scalable, and high-quality software solutions for modern businesses.",
    },
    {
      year: "2021",
      title: "First Enterprise Project",
      description:
        "Successfully delivered a high-performance web platform, proving our expertise in building enterprise-grade applications.",
    },
    {
      year: "2022",
      title: "AI & Machine Learning Division",
      description:
        "Launched our AI division to help businesses automate workflows, analyze data, and make smarter decisions.",
    },
    {
      year: "2023",
      title: "Global Client Expansion",
      description:
        "Expanded our global reach by working with international clients across multiple industries and time zones.",
    },
    {
      year: "2024",
      title: "Industry Recognition",
      description:
        "Recognized for innovation, performance, and engineering excellence in web, mobile, and AI-driven solutions.",
    },
    {
      year: "2025",
      title: "Next-Generation Technology",
      description:
        "Adopted modern architectures, cloud-native systems, and AI-assisted development to future-proof client products.",
    },
    {
      year: "2026",
      title: "Future-Ready Digital Solutions",
      description:
        "Focused on building long-term, future-ready digital products using AI, scalable systems, and next-generation web technologies.",
    },
  ]

  const team = [
    {
      name: "Md Mahabub Rahman",
      role: "CEO & Founder",
      specialty: "Full-Stack & Backend Engineering",
      image: "/team/mahabub.jpg",
    },
    {
      name: "Sarah Johnson",
      role: "CTO",
      specialty: "Cloud & System Architecture",
      image: "/team/sarah.jpg",
    },
    {
      name: "Marcus Rodriguez",
      role: "Lead Designer",
      specialty: "UI/UX & Product Design",
      image: "/team/marcus.jpg",
    },
    {
      name: "Elena Petrov",
      role: "AI Lead",
      specialty: "Machine Learning & Data Science",
      image: "/team/elena.jpg",
    },
  ]

  return (
    <main className="min-h-screen pt-24 pb-12">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            About MrBitX
          </h1>
          <p className="text-xl text-foreground/80 max-w-3xl">
            MrBitX is a software development company specializing in scalable web applications, mobile solutions, and
            AI-powered systems that help businesses grow, innovate, and succeed globally.
          </p>
        </div>

        {/* Vision and Mission */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="p-8 rounded-lg bg-card/50 border border-border neon-border hover:neon-border-blue transition-all">
            <h2 className="text-3xl font-bold mb-4 text-secondary">Our Vision</h2>
            <p className="text-foreground/80 leading-relaxed">
              To become a trusted global technology partner by delivering innovative, secure, and future-ready digital
              solutions that empower businesses worldwide.
            </p>
          </div>

          <div className="p-8 rounded-lg bg-card/50 border border-border neon-border hover:neon-border-blue transition-all">
            <h2 className="text-3xl font-bold mb-4 text-accent">Our Mission</h2>
            <p className="text-foreground/80 leading-relaxed">
              Our mission is to build high-performance software solutions through deep technical expertise,
              collaboration, and continuous innovation—helping clients stay competitive in a rapidly evolving digital
              world.
            </p>
          </div>
        </div>

        {/* Journey */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold mb-12 text-center text-foreground">
            Our Journey
          </h2>

          <div className="relative">
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary via-secondary to-accent"></div>

            <div className="space-y-8 md:space-y-12">
              {timelineEvents.map((event, idx) => (
                <div
                  key={idx}
                  className={`flex items-center gap-8 ${idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  <div className="flex-1">
                    <div
                      className={`p-6 rounded-lg ${idx % 2 === 0 ? "md:text-right" : ""} bg-card/50 border border-border hover:border-secondary transition-all group`}
                    >
                      <div className="text-lg font-bold text-secondary mb-2">
                        {event.year}
                      </div>
                      <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                        {event.title}
                      </h3>
                      <p className="text-foreground/70">{event.description}</p>
                    </div>
                  </div>

                  <div className="flex-shrink-0 hidden md:block">
                    <div className="w-4 h-4 rounded-full bg-gradient-to-r from-primary to-secondary ring-4 ring-card"></div>
                  </div>

                  <div className="flex-shrink-0 md:hidden">
                    <div className="w-3 h-3 rounded-full bg-secondary"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Team */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
            Meet Our Team
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, idx) => (
              <div
                key={idx}
                className="p-6 rounded-lg bg-gradient-to-br from-card to-card/50 border border-border hover:border-secondary transition-all group text-center"
              >
                <div className="relative w-20 h-20 mx-auto mb-4">
                  <Image
                    src={member.image}
                    alt={`${member.name} - ${member.role} at MrBitX`}
                    fill
                    className="rounded-full object-cover group-hover:scale-110 transition-transform"
                  />
                </div>

                <h3 className="text-lg font-semibold mb-1">{member.name}</h3>
                <p className="text-secondary font-medium text-sm mb-2">
                  {member.role}
                </p>
                <p className="text-foreground/60 text-sm">
                  {member.specialty}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Values */}
        <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-12 border border-border mb-16">
          <h2 className="text-3xl font-bold mb-8 text-foreground">
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Innovation",
                desc: "We continuously explore new technologies to deliver modern and future-ready digital solutions.",
              },
              {
                title: "Excellence",
                desc: "We focus on quality, performance, and long-term reliability in every project we build.",
              },
              {
                title: "Collaboration",
                desc: "We work closely with our clients as long-term partners to achieve meaningful results.",
              },
            ].map((value, idx) => (
              <div key={idx}>
                <h3 className="text-xl font-bold text-secondary mb-3">
                  {value.title}
                </h3>
                <p className="text-foreground/70">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
