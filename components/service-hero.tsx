import type React from "react"
interface ServiceHeroProps {
  title: string
  description: string
  icon: React.ComponentType<{ className?: string }>
  backgroundImage?: string
}

export function ServiceHero({ title, description, icon: Icon, backgroundImage }: ServiceHeroProps) {
  return (
    <section className="py-20 px-4 bg-secondary/30 relative overflow-hidden">
      {backgroundImage && (
        <div className="absolute inset-0 opacity-10">
          <img src={backgroundImage || "/placeholder.svg"} alt="" className="w-full h-full object-cover" />
        </div>
      )}
      <div className="container mx-auto text-center relative z-10">
        <Icon className="h-16 w-16 text-primary mx-auto mb-6" />
        <h1 className="text-4xl md:text-6xl font-bold text-balance mb-6">{title}</h1>
        <p className="text-xl text-muted-foreground text-balance max-w-3xl mx-auto">{description}</p>
      </div>
    </section>
  )
}
