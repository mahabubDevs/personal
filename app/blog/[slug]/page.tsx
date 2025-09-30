import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { NewsletterSignup } from "@/components/newsletter-signup"
import { Calendar, Clock, User, ArrowLeft, MessageCircle, Facebook, Linkedin, Twitter } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Footer } from "@/components/footer"

// This would typically come from a CMS or database
const getBlogPost = (slug: string) => {
  const posts = [
    {
      slug: "future-web-development-trends-2025",
      title: "The Future of Web Development: Trends to Watch in 2025",
      excerpt:
        "Explore the latest trends shaping web development, from AI integration to progressive web apps and beyond.",
      content: `
        <h2>Introduction</h2>
        <p>The web development landscape is constantly evolving, and 2025 promises to bring exciting new trends and technologies that will reshape how we build and interact with web applications.</p>
        
        <h2>AI-Powered Development</h2>
        <p>Artificial Intelligence is revolutionizing web development in unprecedented ways. From AI-assisted coding to intelligent user interfaces, developers are leveraging machine learning to create more efficient and personalized web experiences.</p>
        
        <h3>Key AI Trends:</h3>
        <ul>
          <li>AI-powered code generation and completion</li>
          <li>Intelligent chatbots and virtual assistants</li>
          <li>Personalized user experiences through machine learning</li>
          <li>Automated testing and quality assurance</li>
        </ul>
        
        <h2>Progressive Web Apps (PWAs)</h2>
        <p>Progressive Web Apps continue to gain traction as they bridge the gap between web and native mobile applications. PWAs offer offline functionality, push notifications, and app-like experiences while maintaining the accessibility of web applications.</p>
        
        <h2>WebAssembly and Performance</h2>
        <p>WebAssembly (WASM) is enabling high-performance applications in the browser, allowing developers to run code written in languages like C++, Rust, and Go at near-native speeds.</p>
        
        <h2>Conclusion</h2>
        <p>As we move forward into 2025, these trends will continue to shape the future of web development. Staying updated with these technologies will be crucial for developers looking to build cutting-edge web applications.</p>
      `,
      image: "/futuristic-web-development-coding.jpg",
      category: "Web Development",
      author: "Alex Johnson",
      publishedAt: "2025-03-15",
      readTime: "5 min read",
      tags: ["Web Development", "Trends", "AI", "PWA"],
    },
    // Add more posts here...
  ]

  return posts.find((post) => post.slug === slug)
}

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getBlogPost(params.slug)

  if (!post) {
    notFound()
  }

  const shareUrl = `${typeof window !== "undefined" ? window.location.origin : ""}/blog/${post.slug}`
  const shareText = `Check out this article: ${post.title}`

  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Article Header */}
      <article className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-8">
            <Button variant="ghost" asChild className="mb-6">
              <Link href="/blog">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Blog
              </Link>
            </Button>

            <div className="flex items-center gap-4 mb-4">
              <Badge variant="secondary">{post.category}</Badge>
              <div className="flex items-center text-sm text-muted-foreground">
                <Calendar className="h-4 w-4 mr-1" />
                {new Date(post.publishedAt).toLocaleDateString()}
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <Clock className="h-4 w-4 mr-1" />
                {post.readTime}
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-balance mb-6">{post.title}</h1>

            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-2">
                <User className="h-5 w-5 text-muted-foreground" />
                <span className="font-medium">{post.author}</span>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground mr-2">Share:</span>
                <Button variant="ghost" size="sm" asChild>
                  <a
                    href={`https://wa.me/?text=${encodeURIComponent(`${shareText} ${shareUrl}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="h-4 w-4" />
                  </a>
                </Button>
                <Button variant="ghost" size="sm" asChild>
                  <a
                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Facebook className="h-4 w-4" />
                  </a>
                </Button>
                <Button variant="ghost" size="sm" asChild>
                  <a
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>
                </Button>
                <Button variant="ghost" size="sm" asChild>
                  <a
                    href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Twitter className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Featured Image */}
          <div className="aspect-video overflow-hidden rounded-lg mb-8">
            <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-full object-cover" />
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none mb-12" dangerouslySetInnerHTML={{ __html: post.content }} />

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {post.tags.map((tag, index) => (
              <Badge key={index} variant="outline">
                {tag}
              </Badge>
            ))}
          </div>

          {/* Author Bio */}
          <Card className="mb-12">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <User className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">{post.author}</h3>
                  <p className="text-muted-foreground">
                    Senior developer and technology enthusiast with over 10 years of experience in web development and
                    emerging technologies.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Newsletter Signup */}
          <NewsletterSignup />
        </div>
      </article>
      <Footer />
    </main>
  )
}
