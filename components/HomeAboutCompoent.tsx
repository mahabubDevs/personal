"use client"

import Link from "next/link"

export default function HomeAboutPreview() {
  const shortTimeline = [
    {
      year: "2020",
      title: "Founded MrBitX",
      description:
        "MrBitX was founded with a clear vision to build scalable, secure, and high-quality digital solutions for modern businesses.",
    },
    {
      year: "2022",
      title: "AI Division Launch",
      description:
        "Launched our AI and machine learning division to help businesses automate processes and gain data-driven insights.",
    },
    {
      year: "2024",
      title: "Industry Recognition",
      description:
        "Recognized for innovation, technical excellence, and delivering reliable software solutions across industries.",
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          About MrBitX
        </h2>
        <p className="text-lg text-foreground/80 max-w-2xl mx-auto mb-12">
          MrBitX is a software development company delivering scalable web, mobile, and AI-powered digital solutions for
          startups and enterprises worldwide.
        </p>

        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="p-6 rounded-lg bg-card/50 border border-border hover:border-secondary transition-all">
            <h3 className="text-2xl font-bold text-secondary mb-3">Our Vision</h3>
            <p className="text-foreground/70">
              To become a trusted global technology partner by building innovative, future-ready software solutions that
              drive business growth.
            </p>
          </div>
          <div className="p-6 rounded-lg bg-card/50 border border-border hover:border-accent transition-all">
            <h3 className="text-2xl font-bold text-accent mb-3">Our Mission</h3>
            <p className="text-foreground/70">
              Our mission is to deliver secure, scalable, and high-performance software through deep technical expertise,
              collaboration, and continuous innovation.
            </p>
          </div>
        </div>

        {/* Small Timeline Preview */}
        <div className="space-y-6 mb-10">
          {shortTimeline.map((item, idx) => (
            <div
              key={idx}
              className="p-4 bg-card/50 border border-border rounded-lg hover:border-secondary transition-all"
            >
              <div className="text-secondary font-semibold">{item.year}</div>
              <h4 className="text-lg font-bold text-foreground">{item.title}</h4>
              <p className="text-foreground/70">{item.description}</p>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <Link
          href="/about"
          className="inline-block mt-4 px-6 py-3 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-medium hover:opacity-90 transition"
          aria-label="Learn more about MrBitX company"
        >
          View Full Story
        </Link>
      </div>
    </section>
  )
}
