"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQSection() {
  const faqs = [
    {
      question: "How long does a typical project take?",
      answer:
        "Project timelines vary depending on complexity and scope. A simple website typically takes 2-4 weeks, while complex web applications or mobile apps can take 2-6 months. We provide detailed timelines during our initial consultation.",
    },
    {
      question: "Do you provide ongoing support and maintenance?",
      answer:
        "Yes, we offer comprehensive support and maintenance packages. This includes regular updates, security patches, performance monitoring, and technical support. We have different tiers available based on your needs.",
    },
    {
      question: "What technologies do you specialize in?",
      answer:
        "We specialize in modern web technologies including React, Next.js, Node.js, and MongoDB for web development. For mobile apps, we use Flutter. We also work with AI/ML technologies like Python, TensorFlow, and various cloud platforms.",
    },
    {
      question: "Can you work with our existing team?",
      answer:
        "We're experienced in collaborating with in-house teams and can integrate seamlessly into your existing workflow. We can work as an extension of your team or lead specific project components.",
    },
    {
      question: "Do you offer fixed-price or hourly billing?",
      answer:
        "We offer both options depending on the project type. For well-defined projects, we prefer fixed-price contracts. For ongoing development or projects with evolving requirements, hourly billing might be more suitable. We'll discuss the best approach during consultation.",
    },
    {
      question: "What's included in your web development service?",
      answer:
        "Our web development service includes UI/UX design, frontend and backend development, database setup, API integration, testing, deployment, and basic SEO optimization. We also provide training and documentation for your team.",
    },
    {
      question: "Do you sign NDAs and confidentiality agreements?",
      answer:
        "Yes, we take confidentiality very seriously. We're happy to sign NDAs and confidentiality agreements before discussing your project details. Your intellectual property and business information are always protected.",
    },
    {
      question: "Can you help with digital marketing for our new application?",
      answer:
        "Yes, we offer comprehensive digital marketing services including SEO, social media marketing, content strategy, and paid advertising. We can help you launch and promote your application effectively.",
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
