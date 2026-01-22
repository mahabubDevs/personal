"use client"

import Link from "next/link"
import { Clock, User, ArrowRight } from "lucide-react"
import Image from "next/image"

export default function HomeBlogSection() {
  const articles = [
    {
      id: 1,
      title: "The Future of AI in Web Development",
      excerpt:
        "Discover how AI is transforming web development with automation, intelligent coding, and smarter user experiences.",
      author: "Alex Chen",
      date: "Nov 15, 2024",
      readTime: "8 min",
      category: "AI & Technology",
      image: "/ai-web-development.png",
    },
    {
      id: 2,
      title: "Mobile-First Design Best Practices 2024",
      excerpt:
        "Learn how to create responsive, mobile-first applications that boost usability, engagement, and conversions.",
      author: "Marcus Rodriguez",
      date: "Nov 12, 2024",
      readTime: "6 min",
      category: "Design",
      image: "/modern-mobile-app-interface.png",
    },
    {
      id: 3,
      title: "Building Scalable Backend Systems",
      excerpt:
        "Master architecture patterns, cloud solutions, and best practices to build highly scalable backend systems.",
      author: "Elena Petrov",
      date: "Nov 8, 2024",
      readTime: "12 min",
      category: "Backend Development",
      image: "/backend-architecture.jpg",
    },
    {
      id: 4,
      title: "Machine Learning for Developers: A Beginner's Guide",
      excerpt:
        "Get started with machine learning concepts, frameworks, and practical examples for real-world applications.",
      author: "Sarah Johnson",
      date: "Nov 1, 2024",
      readTime: "10 min",
      category: "Machine Learning",
      image: "/machine-learning-concept.png",
    },
  ]

  return (
    <section className="relative py-20 overflow-hidden">
      {/* 🌈 Animated Background Blobs */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute top-1/2 right-1/3 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Latest Insights & Tutorials
          </h2>
          <p className="text-foreground/80 text-lg max-w-2xl mx-auto">
            Stay ahead in web, mobile, and AI technology with our expert guides, trends, and practical tutorials.
          </p>
        </div>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {articles.slice(0, 4).map((article) => (
            <article
              key={article.id}
              className="group rounded-lg overflow-hidden bg-card/60 border border-border hover:border-secondary transition-all hover:shadow-[0_0_40px_rgba(0,191,255,0.2)] backdrop-blur-sm"
            >
              <div className="h-48 relative overflow-hidden">
                <Image
                  src={article.image}
                  alt={`${article.title} thumbnail for blog article`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                  priority={article.id === 1}
                />
              </div>

              <div className="p-6">
                <span className="text-xs font-semibold text-secondary bg-secondary/10 px-3 py-1 rounded-full mb-3 inline-block">
                  {article.category}
                </span>

                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-secondary transition-colors line-clamp-2">
                  {article.title}
                </h3>

                <p className="text-foreground/70 text-sm mb-4 line-clamp-2">{article.excerpt}</p>

                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4 border-t border-border pt-4">
                  <div className="flex items-center gap-1">
                    <User size={14} />
                    {article.author}
                  </div>
                  <span>•</span>
                  <div className="flex items-center gap-1">
                    <Clock size={14} />
                    {article.readTime}
                  </div>
                  <span>•</span>
                  <span>{article.date}</span>
                </div>

                <Link
                  href={`/blog/${article.id}`}
                  className="inline-flex items-center gap-2 text-secondary hover:text-accent font-semibold transition-colors"
                  aria-label={`Read full article: ${article.title}`}
                >
                  Read Article <ArrowRight size={16} />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link
            href="/blog"
            className="inline-block px-8 py-3 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-full font-semibold hover:shadow-[0_0_40px_rgba(138,43,226,0.7)] transition-all"
            aria-label="See all blog articles"
          >
            See More
          </Link>
        </div>
      </div>
    </section>
  )
}
