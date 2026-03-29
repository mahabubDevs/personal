"use client"

export default function HomeStats() {
  const stats = [
    { value: "20+", label: "Projects Delivered" },
    { value: "10+", label: "Happy Clients" },
    { value: "2-4 Weeks", label: "MVP Delivery" },
    { value: "Scalable", label: "Architecture" },
  ]

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-secondary/10 blur-3xl rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold">
            Trusted by{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Growing Businesses
            </span>
          </h2>
          <p className="text-foreground/70 mt-4 max-w-xl mx-auto">
            We deliver fast, scalable, and reliable digital solutions.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="group p-6 rounded-xl border border-border bg-card/60 backdrop-blur-md text-center 
              hover:border-secondary hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              {/* Value */}
              <h3 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
                {stat.value}
              </h3>

              {/* Divider */}
              <div className="w-8 h-[2px] bg-secondary/40 mx-auto my-3 group-hover:w-12 transition-all"></div>

              {/* Label */}
              <p className="text-sm text-foreground/70">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}