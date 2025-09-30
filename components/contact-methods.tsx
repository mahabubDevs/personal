import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MessageCircle, Facebook, Linkedin, Phone, Mail, MapPin, Clock } from "lucide-react"

export function ContactMethods() {
  const contactMethods = [
    {
      icon: MessageCircle,
      title: "WhatsApp",
      description: "Get instant responses",
      action: "Chat Now",
      href: "https://wa.me/1234567890",
      color: "text-green-600",
    },
    {
      icon: Facebook,
      title: "Facebook Messenger",
      description: "Message us directly",
      action: "Send Message",
      href: "https://m.me/yourpage",
      color: "text-blue-600",
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      description: "Connect professionally",
      action: "Connect",
      href: "https://linkedin.com/in/yourprofile",
      color: "text-blue-700",
    },
    {
      icon: Phone,
      title: "Phone Call",
      description: "Speak directly with us",
      action: "Call Now",
      href: "tel:+1234567890",
      color: "text-primary",
    },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-4">Get in Touch Instantly</h2>
        <p className="text-muted-foreground mb-6">
          Choose your preferred way to contact us. We're available across multiple platforms to serve you better.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {contactMethods.map((method, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardHeader className="pb-3">
              <div className="flex items-center gap-3">
                <method.icon className={`h-6 w-6 ${method.color}`} />
                <CardTitle className="text-lg">{method.title}</CardTitle>
              </div>
              <p className="text-sm text-muted-foreground">{method.description}</p>
            </CardHeader>
            <CardContent className="pt-0">
              <Button asChild className="w-full">
                <a href={method.href} target="_blank" rel="noopener noreferrer">
                  {method.action}
                </a>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Contact Information */}
      <Card className="bg-secondary/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Mail className="h-5 w-5" />
            Contact Information
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-start gap-3">
            <MapPin className="h-5 w-5 text-muted-foreground mt-0.5" />
            <div>
              <p className="font-medium">Office Address</p>
              <p className="text-muted-foreground">
                123 Tech Street, Suite 456
                <br />
                San Francisco, CA 94105
                <br />
                United States
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Phone className="h-5 w-5 text-muted-foreground mt-0.5" />
            <div>
              <p className="font-medium">Phone</p>
              <p className="text-muted-foreground">+1 (555) 123-4567</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Mail className="h-5 w-5 text-muted-foreground mt-0.5" />
            <div>
              <p className="font-medium">Email</p>
              <p className="text-muted-foreground">hello@techcorp.com</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Clock className="h-5 w-5 text-muted-foreground mt-0.5" />
            <div>
              <p className="font-medium">Business Hours</p>
              <p className="text-muted-foreground">
                Monday - Friday: 9:00 AM - 6:00 PM PST
                <br />
                Saturday: 10:00 AM - 4:00 PM PST
                <br />
                Sunday: Closed
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
