"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQSection() {
  const faqs = [
    {
      question: "What technologies does MrBitX specialize in?",
      answer:
        "At MrBitX, we specialize in modern Full Stack web development and cross-platform Flutter app development. Our web stack includes React, Next.js, Node.js, Express, MongoDB, PostgreSQL, TypeScript, and Tailwind CSS. For mobile apps, we leverage Flutter, Dart, Firebase, and React Native to build high-performance, scalable applications for iOS and Android.",
    },
    {
      question: "How can MrBitX help my business with Full Stack web development?",
      answer:
        "MrBitX delivers end-to-end Full Stack solutions, from responsive front-end design to robust back-end infrastructure. We focus on creating web applications that are fast, secure, and scalable. Our expertise in MERN stack and modern web frameworks ensures your business gets a feature-rich and maintainable website that drives growth and engagement.",
    },
    {
      question: "Can MrBitX develop a cross-platform Flutter app for my project?",
      answer:
        "Yes! Our team builds high-quality Flutter apps that run seamlessly on both iOS and Android. We ensure your app is visually appealing, fast, and fully functional. From UI/UX design to backend integration with Firebase or custom APIs, MrBitX provides complete Flutter solutions to meet your business needs.",
    },
    {
      question: "Do you provide ongoing support and maintenance?",
      answer:
        "Absolutely! MrBitX offers 24/7 technical support and maintenance for all web and mobile applications. We ensure your project stays up-to-date, secure, and optimized for performance, so your business can run smoothly without interruptions.",
    },
    {
      question: "How long does a typical project take?",
      answer:
        "Project timelines depend on complexity and requirements. Typically, a Full Stack web application takes 4–12 weeks, and a Flutter mobile app takes 6–14 weeks. MrBitX provides a detailed project plan with milestones to ensure timely delivery without compromising quality.",
    },
    {
      question: "Can you work with our existing team?",
      answer:
        "Yes, MrBitX collaborates seamlessly with your internal team. We adapt to your development workflow, communicate effectively, and provide expert guidance to complement your in-house capabilities.",
    },
    {
      question: "Do you sign NDAs and confidentiality agreements?",
      answer:
        "Yes, we prioritize your privacy and intellectual property. MrBitX signs NDAs and confidentiality agreements to ensure your project details remain secure at all times.",
    },
  ]

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-muted-foreground">
            Find answers to common questions about our services and process.
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6">
              <AccordionTrigger className="text-left hover:no-underline">
                <span className="font-medium">{faq.question}</span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pt-2 pb-4">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
