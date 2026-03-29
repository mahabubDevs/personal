"use client"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Hero3D } from "@/components/3d-hero"
import Portfolio from "./portfolio/page"
import Blog from "./blog/page"
import About from "./about/page"
import Services from "./services/page"
import HomeBlogSection from "@/components/HomeBlogComponent"
import HomeServicesSection from "@/components/HomeServiceComponent"
import HomePortfolioSection from "@/components/HomePortfolioComponent"
import HomeAboutPreview from "@/components/HomeAboutCompoent"
import HomePortfolioPreview from "@/components/HomePortfolioComponent"
import HomeWhoWeHelp from "@/components/HomeWhoWeHelp"
import HomeStats from "@/components/HomeStats"
import HomeProcess from "@/components/HomeProcess"
import HomeCTA from "@/components/HomeCTA"

export default function Home() {
  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[95vh] flex items-center justify-center overflow-hidden bg-gray-900">
  {/* Subtle Background Gradients */}
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute top-16 left-16 w-80 h-80 bg-primary/20 rounded-full blur-3xl animate-slow-pulse"></div>
    <div className="absolute bottom-20 right-16 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-slow-pulse delay-500"></div>
    <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-slow-pulse delay-1000"></div>
  </div>

  <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

    {/* LEFT SIDE - Clear, readable text */}
    <div className="space-y-6 md:space-y-8 text-center md:text-left">
      {/* Badge */}
      <div className="inline-block px-4 py-2 rounded-full border border-secondary/40 text-secondary text-sm backdrop-blur-sm bg-white/5 font-medium">
         Trusted by startups in US, UK & Australia
      </div>

      {/* Headline */}
      <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight text-white">
        <span className="block">
          We build{" "}
          <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            scalable SaaS & web platforms
          </span>
        </span>
        <span className="block mt-2 text-white/80">
          that grow your business
        </span>
      </h1>

      {/* Subtext */}
      <p className="text-lg md:text-xl text-white/70 max-w-md mx-auto md:mx-0">
        Launch your MVP in 2–4 weeks using MERN, AI & modern tech. Optimized for speed, scalability, and maximum growth.
      </p>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mt-4">
        <Link
          href="/contact"
          className="px-8 py-4 rounded-full bg-gradient-to-r from-primary to-accent text-white font-semibold shadow-lg hover:scale-105 transition-transform duration-300"
        >
          Book Free Consultation
        </Link>
        <Link
          href="/services"
          className="px-8 py-4 rounded-full border border-secondary text-secondary hover:bg-secondary/10 transition-colors"
        >
          Explore Services →
        </Link>
      </div>
    </div>

    {/* RIGHT SIDE - Visual */}
    <div className="relative flex justify-center md:justify-end items-center">
      {/* Glass Card Stats */}
      <div className="relative p-6 md:p-8 rounded-3xl border border-white/10 backdrop-blur-xl bg-white/5 shadow-[0_0_60px_rgba(0,0,0,0.3)] max-w-sm w-full space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-center">
            <h3 className="text-2xl font-bold text-primary">50+</h3>
            <p className="text-sm text-white/70">Projects Delivered</p>
          </div>
          <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-center">
            <h3 className="text-2xl font-bold text-secondary">2–4 Weeks</h3>
            <p className="text-sm text-white/70">MVP Delivery</p>
          </div>
          <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-center">
            <h3 className="text-2xl font-bold text-accent">99%</h3>
            <p className="text-sm text-white/70">Client Satisfaction</p>
          </div>
          <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-center">
            <h3 className="text-2xl font-bold text-primary">24/7</h3>
            <p className="text-sm text-white/70">Support</p>
          </div>
        </div>
      </div>

      {/* Optional 3D Hero */}
      <div className="absolute inset-0 -z-10">
        {/* <Hero3D /> */}
      </div>
    </div>
  </div>
</section>

     

        <HomeWhoWeHelp />
        <HomeStats />
        <HomeServicesSection />
        <HomePortfolioPreview />
        <HomeProcess />
        {/* <HomeBlogSection /> */}
        <HomeAboutPreview />
        <HomeCTA />
       {/* <Portfolio /> */}
      {/* <Blog /> */}
      {/* <About /> */}
    </main>
  )
}
