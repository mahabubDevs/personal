import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface ProcessStep {
  title: string
  description: string
  duration: string
}

interface ServiceProcessProps {
  title: string
  steps: ProcessStep[]
}

export function ServiceProcess({ title, steps }: ServiceProcessProps) {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our proven methodology ensures successful project delivery from concept to launch.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="relative hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div className="h-12 w-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                    {index + 1}
                  </div>
                  <span className="text-sm text-muted-foreground">{step.duration}</span>
                </div>
                <CardTitle className="text-xl">{step.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{step.description}</p>
              </CardContent>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <div className="w-8 h-0.5 bg-border"></div>
                </div>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
