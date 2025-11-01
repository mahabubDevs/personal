"use client"

export default function About() {
  const timelineEvents = [
    {
      year: "2020",
      title: "Founded MrBitX",
      description:
        "Started with a vision to revolutionize digital innovation with a small team of passionate developers.",
    },
    {
      year: "2021",
      title: "First Major Project",
      description:
        "Delivered cutting-edge web platform for Fortune 500 client, establishing our reputation in the market.",
    },
    {
      year: "2022",
      title: "AI Division Launch",
      description: "Expanded into AI and machine learning solutions, bringing intelligent automation to our clients.",
    },
    {
      year: "2023",
      title: "Global Expansion",
      description: "Opened offices in 3 new countries, growing our team to over 50 talented professionals.",
    },
    {
      year: "2024",
      title: "Industry Recognition",
      description: "Received 5 major tech industry awards for innovation and excellence in digital solutions.",
    },
    {
      year: "2025",
      title: "Next Generation",
      description: "Launching revolutionary 3D web technologies and AI-powered development tools for the future.",
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
          <p className="text-xl text-foreground/80">
            We're a team of passionate developers, designers, and innovators dedicated to transforming businesses
            through cutting-edge technology.
          </p>
        </div>

        {/* Vision and Mission */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="p-8 rounded-lg bg-card/50 border border-border neon-border hover:neon-border-blue transition-all">
            <h2 className="text-3xl font-bold mb-4 text-secondary">Our Vision</h2>
            <p className="text-foreground/80 leading-relaxed">
              To empower businesses worldwide by delivering innovative digital solutions that bridge the gap between
              technology and human potential, creating a future where technology works for everyone.
            </p>
          </div>

          <div className="p-8 rounded-lg bg-card/50 border border-border neon-border hover:neon-border-blue transition-all">
            <h2 className="text-3xl font-bold mb-4 text-accent">Our Mission</h2>
            <p className="text-foreground/80 leading-relaxed">
              To deliver exceptional digital solutions through innovation, expertise, and collaboration, helping our
              clients achieve their goals and stay ahead in the rapidly evolving digital landscape.
            </p>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-4xl font-bold mb-12 text-center text-foreground">Our Journey</h2>
          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary via-secondary to-accent"></div>

            {/* Timeline events */}
            <div className="space-y-8 md:space-y-12">
              {timelineEvents.map((event, idx) => (
                <div
                  key={idx}
                  className={`flex items-center gap-8 ${idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  {/* Content */}
                  <div className="flex-1">
                    <div
                      className={`p-6 rounded-lg ${idx % 2 === 0 ? "md:text-right" : ""} bg-card/50 border border-border hover:border-secondary transition-all group`}
                    >
                      <div className="text-lg font-bold text-secondary mb-2">{event.year}</div>
                      <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                        {event.title}
                      </h3>
                      <p className="text-foreground/70">{event.description}</p>
                    </div>
                  </div>

                  {/* Timeline dot */}
                  <div className="flex-shrink-0 hidden md:block">
                    <div className="w-4 h-4 rounded-full bg-gradient-to-r from-primary to-secondary ring-4 ring-card"></div>
                  </div>

                  {/* Mobile timeline indicator */}
                  <div className="flex-shrink-0 md:hidden">
                    <div className="w-3 h-3 rounded-full bg-secondary"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold mb-12 text-center text-foreground">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Alex Chen", role: "CEO & Founder", specialty: "Full-Stack Development" },
              { name: "Sarah Johnson", role: "CTO", specialty: "Cloud Architecture" },
              { name: "Marcus Rodriguez", role: "Lead Designer", specialty: "UI/UX Design" },
              { name: "Elena Petrov", role: "AI Lead", specialty: "Machine Learning" },
            ].map((member, idx) => (
              <div
                key={idx}
                className="p-6 rounded-lg bg-gradient-to-br from-card to-card/50 border border-border hover:border-secondary transition-all group"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-primary to-secondary mb-4 group-hover:scale-110 transition-transform"></div>
                <h3 className="text-lg font-semibold text-foreground mb-1">{member.name}</h3>
                <p className="text-secondary font-medium text-sm mb-2">{member.role}</p>
                <p className="text-foreground/60 text-sm">{member.specialty}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Values */}
        <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-12 border border-border mb-16">
          <h2 className="text-3xl font-bold mb-8 text-foreground">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Innovation", desc: "Constantly pushing boundaries and exploring new technologies" },
              { title: "Excellence", desc: "Delivering high-quality solutions that exceed expectations" },
              { title: "Collaboration", desc: "Working closely with clients to achieve shared goals" },
            ].map((value, idx) => (
              <div key={idx}>
                <h3 className="text-xl font-bold text-secondary mb-3">{value.title}</h3>
                <p className="text-foreground/70">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
