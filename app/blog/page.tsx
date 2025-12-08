"use client"

import { Clock, User, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"  

export default function Blog() {
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
      excerpt: "A beginner-friendly introduction to machine learning concepts and practical implementation.",
      author: "Sarah Johnson",
      date: "Nov 1, 2024",
      readTime: "10 min",
      category: "Machine Learning",
      image: "/machine-learning-concept.png",
    },
    {
      id: 5,
      title: "Cloud Infrastructure Best Practices",
      excerpt: "Learn how to optimize your cloud infrastructure for cost, performance, and reliability.",
      author: "Alex Chen",
      date: "Oct 28, 2024",
      readTime: "9 min",
      category: "Cloud",
      image: "/cloud-infrastructure.png",
    },
    {
      id: 6,
      title: "Cybersecurity in Modern Applications",
      excerpt: "Essential security practices to protect your applications and user data from modern threats.",
      author: "Marcus Rodriguez",
      date: "Oct 20, 2024",
      readTime: "11 min",
      category: "Security",
      image: "/cybersecurity-network.png",
    },
  ]

  return (
    <main className="min-h-screen pt-24 pb-12">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Our Blog
          </h1>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
            Insights, tutorials, and best practices from our team of experts.
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {articles.map((article) => (
            <article
              key={article.id}
              className="group rounded-lg overflow-hidden bg-card/50 border border-border hover:border-secondary transition-all hover:shadow-[0_0_40px_rgba(0,191,255,0.2)]"
            >
              {/* Article Image */}
               <div className="relative h-48 overflow-hidden">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Article Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-semibold text-secondary bg-secondary/10 px-3 py-1 rounded-full">
                    {article.category}
                  </span>
                </div>

                <h2 className="text-xl font-bold text-foreground mb-3 group-hover:text-secondary transition-colors line-clamp-2">
                  {article.title}
                </h2>

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
      </div>
    </main>
  )
}
