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

export default function Home() {
  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute top-1/2 left-1/2 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <div className="mb-8 inline-block">
            <div className="px-4 py-2 rounded-full border border-secondary/50 text-secondary text-sm font-medium">
               Welcome to the Future of Digital Innovation
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-float">
            Building the Future
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            with Smart Digital Solutions
          </p>

          <p className="text-lg text-foreground/80 mb-8 max-w-2xl mx-auto">
            Cutting-edge software development, AI solutions, and digital transformation services for modern businesses.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/contact"
              className="px-8 py-4 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-full font-semibold hover:shadow-[0_0_40px_rgba(138,43,226,0.7)] transition-all transform hover:scale-105"
            >
              Get Started
            </Link>
            <Link
              href="/services"
              className="px-8 py-4 border-2 border-secondary text-secondary rounded-full font-semibold hover:bg-secondary/10 transition-all"
            >
              Explore Services
            </Link>
          </div>
        </div>

        {/* 3D Hero Component */}
        <Hero3D />
      </section>

     


        <HomeServicesSection />
        <HomePortfolioPreview />
        <HomeBlogSection />
        <HomeAboutPreview />
       {/* <Portfolio /> */}
      {/* <Blog /> */}
      {/* <About /> */}
    </main>
  )
}
