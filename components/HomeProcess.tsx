"use client"

export default function HomeProcess() {
  const steps = [
    {
      title: "Discovery",
      desc: "We understand your idea, goals, and business needs.",
    },
    {
      title: "Planning",
      desc: "We design system architecture and define timeline.",
    },
    {
      title: "Development",
      desc: "We build your product using scalable technologies.",
    },
    {
      title: "Launch",
      desc: "We deploy, optimize, and help you scale.",
    },
  ]

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-secondary/10 blur-3xl rounded-full"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 text-center">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Our{" "}
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Proven Process
          </span>
        </h2>

        <p className="text-foreground/70 mb-16 max-w-2xl mx-auto">
          A clear, structured approach to transform your idea into a scalable, production-ready product.
        </p>

        {/* Timeline Line */}
        <div className="relative">
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-[2px] bg-border"></div>

          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 relative z-10">
            {steps.map((step, i) => (
              <div key={i} className="group relative">
                {/* Step Number Circle */}
                <div className="mx-auto mb-6 w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-r from-primary to-secondary text-white font-bold text-lg shadow-lg group-hover:scale-110 transition">
                  {i + 1}
                </div>

                {/* Card */}
                <div className="p-6 rounded-xl border border-border bg-card/60 backdrop-blur-md 
                hover:border-secondary hover:shadow-xl transition-all duration-300">
                  
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-secondary transition">
                    {step.title}
                  </h3>

                  <p className="text-sm text-foreground/70 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Trust Line */}
        <div className="mt-16 text-sm text-foreground/60">
           Fast delivery • Transparent communication • Scalable architecture
        </div>
      </div>
    </section>
  )
}