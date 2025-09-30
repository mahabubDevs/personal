"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { BlogCard } from "@/components/blog-card"
import { BlogCategories } from "@/components/blog-categories"
import { NewsletterSignup } from "@/components/newsletter-signup"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import { Footer } from "@/components/footer"

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")

  const categories = ["all", "web development", "app development", "ai solutions", "digital marketing", "tutorials"]

  const blogPosts = [
    {
      slug: "future-web-development-trends-2025",
      title: "The Future of Web Development: Trends to Watch in 2025",
      excerpt:
        "Explore the latest trends shaping web development, from AI integration to progressive web apps and beyond. Discover what technologies will dominate the landscape.",
      content: "Full article content here...",
      image: "/futuristic-web-development-coding.jpg",
      category: "Web Development",
      author: "Alex Johnson",
      publishedAt: "2025-03-15",
      readTime: "5 min read",
      tags: ["Web Development", "Trends", "AI", "PWA"],
    },
    {
      slug: "scalable-mobile-apps-flutter",
      title: "Building Scalable Mobile Apps with Flutter",
      excerpt:
        "Learn best practices for creating high-performance, scalable mobile applications using Flutter framework. From architecture to deployment strategies.",
      content: "Full article content here...",
      image: "/flutter-mobile-app-development.png",
      category: "App Development",
      author: "Sarah Chen",
      publishedAt: "2025-03-10",
      readTime: "7 min read",
      tags: ["Flutter", "Mobile", "Scalability", "Performance"],
    },
    {
      slug: "ai-integration-business-guide",
      title: "AI Integration in Business: A Practical Guide",
      excerpt:
        "Discover how businesses can leverage AI technologies to improve efficiency and drive innovation. Real-world examples and implementation strategies.",
      content: "Full article content here...",
      image: "/ai-business-integration-dashboard.jpg",
      category: "AI Solutions",
      author: "Michael Rodriguez",
      publishedAt: "2025-03-05",
      readTime: "6 min read",
      tags: ["AI", "Business", "Automation", "Strategy"],
    },
    {
      slug: "seo-optimization-2025",
      title: "SEO Optimization Strategies for 2025",
      excerpt:
        "Master the latest SEO techniques and strategies to improve your website's search engine rankings and drive organic traffic.",
      content: "Full article content here...",
      image: "/placeholder.svg?height=400&width=600&text=SEO+Strategies",
      category: "Digital Marketing",
      author: "Emily Davis",
      publishedAt: "2025-02-28",
      readTime: "8 min read",
      tags: ["SEO", "Marketing", "Search", "Traffic"],
    },
    {
      slug: "react-performance-optimization",
      title: "React Performance Optimization: Advanced Techniques",
      excerpt:
        "Deep dive into advanced React optimization techniques including code splitting, memoization, and virtual DOM optimization.",
      content: "Full article content here...",
      image: "/placeholder.svg?height=400&width=600&text=React+Performance",
      category: "Tutorials",
      author: "Alex Johnson",
      publishedAt: "2025-02-20",
      readTime: "10 min read",
      tags: ["React", "Performance", "Optimization", "JavaScript"],
    },
    {
      slug: "nodejs-microservices-architecture",
      title: "Building Microservices with Node.js: Complete Guide",
      excerpt:
        "Learn how to design and implement scalable microservices architecture using Node.js, Docker, and modern deployment strategies.",
      content: "Full article content here...",
      image: "/placeholder.svg?height=400&width=600&text=Node.js+Microservices",
      category: "Web Development",
      author: "Alex Johnson",
      publishedAt: "2025-02-15",
      readTime: "12 min read",
      tags: ["Node.js", "Microservices", "Architecture", "Docker"],
    },
  ]

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = activeCategory === "all" || post.category.toLowerCase() === activeCategory.toLowerCase()
    const matchesSearch =
      searchQuery === "" ||
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))

    return matchesCategory && matchesSearch
  })

  const featuredPost = filteredPosts[0]
  const regularPosts = filteredPosts.slice(1)

  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-balance mb-6">
            Tech <span className="text-primary">Insights</span>
          </h1>
          <p className="text-xl text-muted-foreground text-balance mb-8 max-w-3xl mx-auto">
            Stay updated with the latest trends, tutorials, and insights from our team of technology experts.
          </p>

          {/* Search Bar */}
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-10 px-4">
        <div className="container mx-auto">
          <BlogCategories
            categories={categories}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-10 px-4 bg-secondary/30">
        <div className="container mx-auto">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-20">
              <h3 className="text-2xl font-semibold mb-4">No articles found</h3>
              <p className="text-muted-foreground">Try adjusting your search or category filter.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredPost && <BlogCard post={featuredPost} featured />}
              {regularPosts.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-2xl">
          <NewsletterSignup />
        </div>
      </section>
      <Footer />
    </main>
  )
}
