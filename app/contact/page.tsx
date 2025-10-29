import { Navigation } from "@/components/navigation"
import { ContactForm } from "@/components/contact-form"
import { ContactMethods } from "@/components/contact-methods"
import { FAQSection } from "@/components/faq-section"
import { Footer } from "@/components/footer"

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-balance mb-6">
            Get your Full Stack website or Flutter app <br></br> built with MrBitX 

          </h1>
          <p className="text-xl text-muted-foreground text-balance mb-8 max-w-3xl mx-auto">
            Ready to transform your ideas into reality? Get in touch with our team and let's discuss how we can help
            your business grow.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ContactForm />
            <ContactMethods />
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Visit Our Office</h2>
            <p className="text-lg text-muted-foreground">
              Located in the heart of San Francisco's tech district, we're always happy to meet in person.
            </p>
          </div>

          <div className="aspect-video rounded-lg overflow-hidden bg-muted">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0197327470443!2d-122.39492668468177!3d37.78808797975647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085807c3c3c3c3c%3A0x3c3c3c3c3c3c3c3c!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1234567890123"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="MrBitX Office Location"
            />
          </div>
        </div>
      </section>

      <FAQSection />
      <Footer />
    </main>
  )
}
