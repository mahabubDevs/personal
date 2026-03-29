"use client"

import Link from "next/link"

export default function HomeCTA() {
  return (
    <section className="py-20 text-center relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-primary/20 blur-3xl rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Have a project in mind?
        </h2>

        <p className="text-lg text-foreground/80 mb-10">
          Let’s build your SaaS or web platform together with scalable architecture and modern technologies.
        </p>

        <Link
          href="/contact"
          className="px-8 py-4 bg-gradient-to-r from-primary to-accent text-white rounded-full font-semibold hover:scale-105 transition-all"
        >
          Book Free Consultation
        </Link>
      </div>
    </section>
  )
}