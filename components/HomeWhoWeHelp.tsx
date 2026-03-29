"use client"

import { Rocket, Layers, Briefcase, Building2 } from "lucide-react"

export default function HomeWhoWeHelp() {
  const items = [
    {
      title: "Startup Founders",
      desc: "Launch and scale your product faster with a strong tech foundation.",
      icon: <Rocket className="w-6 h-6 text-primary" />,
    },
    {
      title: "SaaS Businesses",
      desc: "Build scalable, secure and high-performance SaaS platforms.",
      icon: <Layers className="w-6 h-6 text-primary" />,
    },
    {
      title: "Digital Agencies",
      desc: "Partner with us to deliver high-quality development to your clients.",
      icon: <Briefcase className="w-6 h-6 text-primary" />,
    },
    {
      title: "Small & Medium Businesses",
      desc: "Digitize and grow your business with custom web solutions.",
      icon: <Building2 className="w-6 h-6 text-primary" />,
    },
  ]

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-primary/10 blur-3xl rounded-full"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 text-center">
        {/* Badge */}
        <div className="inline-block mb-4 px-4 py-1 text-sm rounded-full bg-primary/10 text-primary border border-primary/20">
          Who We Help
        </div>

        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          We Work With{" "}
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Growing Businesses
          </span>
        </h2>

        {/* Description */}
        <p className="text-foreground/70 max-w-2xl mx-auto mb-12">
          We partner with businesses that want to build scalable, high-performance digital products.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {items.map((item, i) => (
            <div
              key={i}
              className="group p-6 rounded-xl border border-border bg-card/60 backdrop-blur-md hover:border-secondary hover:shadow-xl transition-all duration-300 text-left"
            >
              {/* Icon */}
              <div className="mb-4 w-12 h-12 flex items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary/20 transition">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-foreground/70">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}