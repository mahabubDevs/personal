// components/HomeBlogSection.tsx

"use client"

import Link from "next/link"
import { Clock, User, ArrowRight } from "lucide-react"

export default function HomeBlogSection() {
  const articles = [
    {
      id: 1,
      title: "The Future of AI in Web Development",
      excerpt: "Exploring how artificial intelligence is revolutionizing the way we build web applications.",
      author: "Alex Chen",
      date: "Nov 15, 2024",
      readTime: "8 min",
      category: "AI & Technology",
      image: "/ai-web-development.png",
    },
    {
      id: 2,
      title: "Mobile-First Design: Best Practices for 2024",
      excerpt: "A comprehensive guide to designing mobile-first applications that work seamlessly across devices.",
      author: "Marcus Rodriguez",
      date: "Nov 12, 2024",
      readTime: "6 min",
      category: "Design",
      image: "/modern-mobile-app-interface.png",
    },
    {
      id: 3,
      title: "Building Scalable Backend Systems",
      excerpt: "Deep dive into architecture patterns and best practices for building scalable backend systems.",
      author: "Elena Petrov",
      date: "Nov 8, 2024",
      readTime: "12 min",
      category: "Backend",
      image: "/backend-architecture.jpg",
    },
    {
      id: 4,
      title: "Intro to Machine Learning for Developers",
      excerpt: "A beginner-friendly introduction to machine learning concepts and practical implementation",
      author: "Sarah Johnson",
      date: "Nov 1, 2024",
      readTime: "10 min",
      category: "Machine Learning",
      image: "/machine-learning-concept.png",
    },
  ]

  return (
    <section className="py-16 bg-background">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Latest Blog Posts
          </h2>
          <p className="text-foreground/80 text-lg">Stay updated with our latest insights and tutorials.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {articles.slice(0, 4).map((article) => (
            <article
              key={article.id}
              className="group rounded-lg overflow-hidden bg-card/50 border border-border hover:border-secondary transition-all hover:shadow-[0_0_40px_rgba(0,191,255,0.2)]"
            >
              <div className="h-48 bg-gradient-to-br from-primary/20 to-secondary/20 overflow-hidden relative">
                <div className="w-full h-full bg-muted/20 group-hover:scale-110 transition-transform duration-300"></div>
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
                >
                  Read Article <ArrowRight size={16} />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/blog"
            className="inline-block px-8 py-3 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-full font-semibold hover:shadow-[0_0_40px_rgba(138,43,226,0.7)] transition-all"
          >
            See More
          </Link>
        </div>
      </div>
    </section>
  )
}
