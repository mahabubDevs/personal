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
  // 🌐 Web Development (10)
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
    slug: "nodejs-microservices-architecture",
    title: "Building Microservices with Node.js: Complete Guide",
    excerpt:
      "Learn how to design and implement scalable microservices architecture using Node.js, Docker, and modern deployment strategies.",
    content: "Full article content here...",
    image: "/placeholder.svg?text=Node.js+Microservices",
    category: "Web Development",
    author: "Alex Johnson",
    publishedAt: "2025-02-15",
    readTime: "12 min read",
    tags: ["Node.js", "Microservices", "Architecture", "Docker"],
  },
  {
    slug: "nextjs-performance-optimization",
    title: "Next.js Performance Optimization Techniques",
    excerpt: "Improve your Next.js app with image optimization, caching, and SSR tuning techniques.",
    content: "Full article content here...",
    image: "/placeholder.svg?text=Next.js+Performance",
    category: "Web Development",
    author: "Sarah Lee",
    publishedAt: "2025-03-05",
    readTime: "6 min read",
    tags: ["Next.js", "Performance", "Optimization"],
  },
  {
    slug: "web3-integration-for-developers",
    title: "Integrating Web3 into Modern Web Apps",
    excerpt: "Learn how to use Web3 libraries to connect blockchain features into your web app.",
    content: "Full article content here...",
    image: "/placeholder.svg?text=Web3+Integration",
    category: "Web Development",
    author: "Michael Rodriguez",
    publishedAt: "2025-02-05",
    readTime: "8 min read",
    tags: ["Web3", "Blockchain", "JavaScript"],
  },
  {
    slug: "responsive-design-2025",
    title: "Responsive Design Strategies for 2025",
    excerpt: "Modern CSS techniques to ensure perfect layouts on every screen size.",
    content: "Full article content here...",
    image: "/placeholder.svg?text=Responsive+Design",
    category: "Web Development",
    author: "Emily Davis",
    publishedAt: "2025-01-30",
    readTime: "5 min read",
    tags: ["CSS", "Responsive", "Design"],
  },
  {
    slug: "typescript-in-large-projects",
    title: "Using TypeScript for Large Scale Projects",
    excerpt: "Best practices for structuring, scaling, and maintaining large TypeScript codebases.",
    content: "Full article content here...",
    image: "/placeholder.svg?text=TypeScript+Projects",
    category: "Web Development",
    author: "Alex Johnson",
    publishedAt: "2025-01-25",
    readTime: "9 min read",
    tags: ["TypeScript", "JavaScript", "Architecture"],
  },
  {
    slug: "frontend-ci-cd-automation",
    title: "Automating Frontend Deployments with CI/CD",
    excerpt: "A practical guide to continuous integration and deployment for web apps.",
    content: "Full article content here...",
    image: "/placeholder.svg?text=CI-CD+Automation",
    category: "Web Development",
    author: "Sarah Chen",
    publishedAt: "2025-03-18",
    readTime: "7 min read",
    tags: ["CI/CD", "Frontend", "Deployment"],
  },
  {
    slug: "serverless-web-architecture",
    title: "Serverless Architecture for Modern Web Apps",
    excerpt: "Learn how to build scalable apps using AWS Lambda and serverless databases.",
    content: "Full article content here...",
    image: "/placeholder.svg?text=Serverless+Architecture",
    category: "Web Development",
    author: "Emily Davis",
    publishedAt: "2025-02-12",
    readTime: "8 min read",
    tags: ["Serverless", "AWS", "Architecture"],
  },
  {
    slug: "css-container-queries",
    title: "Mastering CSS Container Queries",
    excerpt: "Understand how container queries revolutionize responsive layouts.",
    content: "Full article content here...",
    image: "/placeholder.svg?text=CSS+Container+Queries",
    category: "Web Development",
    author: "Michael Rodriguez",
    publishedAt: "2025-03-01",
    readTime: "4 min read",
    tags: ["CSS", "Web Design", "Frontend"],
  },
  {
    slug: "modern-rest-api-design",
    title: "Designing Modern REST APIs in 2025",
    excerpt: "Best RESTful practices with Node.js, Express, and OpenAPI.",
    content: "Full article content here...",
    image: "/placeholder.svg?text=REST+API+Design",
    category: "Web Development",
    author: "Alex Johnson",
    publishedAt: "2025-02-10",
    readTime: "10 min read",
    tags: ["API", "REST", "Node.js"],
  },

  // 📱 App Development (10)
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
    slug: "kotlin-multiplatform-guide",
    title: "Kotlin Multiplatform: One Codebase for All",
    excerpt: "Discover how Kotlin Multiplatform simplifies cross-platform mobile development.",
    content: "Full article content here...",
    image: "/placeholder.svg?text=Kotlin+Multiplatform",
    category: "App Development",
    author: "Emily Davis",
    publishedAt: "2025-02-21",
    readTime: "6 min read",
    tags: ["Kotlin", "Cross-Platform", "Mobile"],
  },
  {
    slug: "react-native-performance-boost",
    title: "React Native: Boosting App Performance",
    excerpt: "Optimize your React Native apps with advanced profiling and memory management.",
    content: "Full article content here...",
    image: "/placeholder.svg?text=React+Native+Performance",
    category: "App Development",
    author: "Michael Rodriguez",
    publishedAt: "2025-02-28",
    readTime: "7 min read",
    tags: ["React Native", "Optimization", "Mobile"],
  },
  {
    slug: "flutter-animations",
    title: "Beautiful Animations in Flutter",
    excerpt: "Learn how to create stunning and smooth animations in Flutter.",
    content: "Full article content here...",
    image: "/placeholder.svg?text=Flutter+Animations",
    category: "App Development",
    author: "Sarah Chen",
    publishedAt: "2025-03-02",
    readTime: "5 min read",
    tags: ["Flutter", "Animations", "UI"],
  },
  {
    slug: "swiftui-tutorial-beginners",
    title: "SwiftUI for Beginners: Full Guide",
    excerpt: "Learn SwiftUI fundamentals and start building iOS apps quickly.",
    content: "Full article content here...",
    image: "/placeholder.svg?text=SwiftUI+Guide",
    category: "App Development",
    author: "Alex Johnson",
    publishedAt: "2025-01-18",
    readTime: "9 min read",
    tags: ["Swift", "iOS", "Mobile"],
  },
  {
    slug: "mobile-app-testing-automation",
    title: "Mobile App Testing Automation with Appium",
    excerpt: "How to automate end-to-end mobile testing for Android and iOS.",
    content: "Full article content here...",
    image: "/placeholder.svg?text=Appium+Testing",
    category: "App Development",
    author: "Emily Davis",
    publishedAt: "2025-02-10",
    readTime: "6 min read",
    tags: ["Testing", "Appium", "QA"],
  },
  {
    slug: "cross-platform-ui-frameworks",
    title: "Top Cross-Platform UI Frameworks in 2025",
    excerpt: "Comparing Flutter, React Native, and Xamarin for multi-platform apps.",
    content: "Full article content here...",
    image: "/placeholder.svg?text=Cross+Platform+UI",
    category: "App Development",
    author: "Sarah Chen",
    publishedAt: "2025-02-24",
    readTime: "8 min read",
    tags: ["Flutter", "React Native", "Xamarin"],
  },
  {
    slug: "push-notifications-best-practices",
    title: "Implementing Push Notifications Effectively",
    excerpt: "Best practices to design engaging push notification systems.",
    content: "Full article content here...",
    image: "/placeholder.svg?text=Push+Notifications",
    category: "App Development",
    author: "Michael Rodriguez",
    publishedAt: "2025-03-11",
    readTime: "5 min read",
    tags: ["Push", "Firebase", "Mobile"],
  },
  {
    slug: "mobile-security-best-practices",
    title: "Securing Mobile Apps: Best Practices for 2025",
    excerpt: "Learn essential techniques for keeping your apps secure.",
    content: "Full article content here...",
    image: "/placeholder.svg?text=Mobile+Security",
    category: "App Development",
    author: "Alex Johnson",
    publishedAt: "2025-01-15",
    readTime: "10 min read",
    tags: ["Security", "Mobile", "Encryption"],
  },
  {
    slug: "offline-first-mobile-apps",
    title: "Building Offline-First Mobile Apps",
    excerpt: "Techniques to make mobile apps work seamlessly without internet.",
    content: "Full article content here...",
    image: "/placeholder.svg?text=Offline+Apps",
    category: "App Development",
    author: "Sarah Chen",
    publishedAt: "2025-02-14",
    readTime: "6 min read",
    tags: ["Offline", "Mobile", "Caching"],
  },

  // 🤖 AI Solutions (10)
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
    slug: "nlp-trends-2025",
    title: "Natural Language Processing Trends in 2025",
    excerpt: "What's new in NLP and conversational AI this year.",
    content: "Full article content here...",
    image: "/placeholder.svg?text=NLP+Trends",
    category: "AI Solutions",
    author: "Emily Davis",
    publishedAt: "2025-02-12",
    readTime: "7 min read",
    tags: ["AI", "NLP", "Chatbots"],
  },
  {
    slug: "mlops-for-developers",
    title: "MLOps: Streamlining Machine Learning Development",
    excerpt: "Learn how to deploy, monitor, and scale ML models efficiently.",
    content: "Full article content here...",
    image: "/placeholder.svg?text=MLOps+Pipeline",
    category: "AI Solutions",
    author: "Sarah Chen",
    publishedAt: "2025-01-25",
    readTime: "8 min read",
    tags: ["AI", "MLOps", "DevOps"],
  },
  {
    slug: "ai-image-generation-tools",
    title: "Top AI Image Generation Tools of 2025",
    excerpt: "A roundup of the most powerful AI art and image tools available today.",
    content: "Full article content here...",
    image: "/placeholder.svg?text=AI+Image+Tools",
    category: "AI Solutions",
    author: "Alex Johnson",
    publishedAt: "2025-03-09",
    readTime: "5 min read",
    tags: ["AI", "Generative", "Tools"],
  },
  {
    slug: "ai-customer-service-chatbots",
    title: "AI Chatbots for Customer Service in 2025",
    excerpt: "How AI chatbots are improving customer support experiences.",
    content: "Full article content here...",
    image: "/placeholder.svg?text=AI+Chatbots",
    category: "AI Solutions",
    author: "Michael Rodriguez",
    publishedAt: "2025-02-02",
    readTime: "6 min read",
    tags: ["Chatbot", "AI", "Support"],
  },
  {
    slug: "ai-ethics-and-bias",
    title: "AI Ethics and Bias: What Developers Must Know",
    excerpt: "A practical overview of fairness, bias, and transparency in AI systems.",
    content: "Full article content here...",
    image: "/placeholder.svg?text=AI+Ethics",
    category: "AI Solutions",
    author: "Emily Davis",
    publishedAt: "2025-01-29",
    readTime: "9 min read",
    tags: ["AI", "Ethics", "Machine Learning"],
  },
  {
    slug: "ai-driven-analytics",
    title: "Using AI for Predictive Analytics",
    excerpt: "Harness AI to make better data-driven business decisions.",
    content: "Full article content here...",
    image: "/placeholder.svg?text=AI+Analytics",
    category: "AI Solutions",
    author: "Sarah Chen",
    publishedAt: "2025-03-01",
    readTime: "7 min read",
    tags: ["AI", "Analytics", "Data"],
  },
  {
    slug: "ai-in-healthcare",
    title: "AI in Healthcare: Innovations Transforming Medicine",
    excerpt: "Explore how AI is reshaping patient care and diagnostics.",
    content: "Full article content here...",
    image: "/placeholder.svg?text=AI+Healthcare",
    category: "AI Solutions",
    author: "Michael Rodriguez",
    publishedAt: "2025-02-05",
    readTime: "8 min read",
    tags: ["AI", "Healthcare", "Innovation"],
  },
  {
    slug: "ai-coding-assistants",
    title: "Top AI Coding Assistants for Developers",
    excerpt: "A comparison of GitHub Copilot, Codeium, and other AI tools for developers.",
    content: "Full article content here...",
    image: "/placeholder.svg?text=AI+Coding+Assistants",
    category: "AI Solutions",
    author: "Alex Johnson",
    publishedAt: "2025-03-20",
    readTime: "6 min read",
    tags: ["AI", "Coding", "Tools"],
  },
  {
    slug: "ai-video-generation",
    title: "AI-Powered Video Creation Tools in 2025",
    excerpt: "Create professional videos using AI tools—no camera needed.",
    content: "Full article content here...",
    image: "/placeholder.svg?text=AI+Video+Tools",
    category: "AI Solutions",
    author: "Sarah Chen",
    publishedAt: "2025-03-08",
    readTime: "5 min read",
    tags: ["AI", "Video", "Media"],
  },

  // 📈 Digital Marketing (10)
  {
    slug: "seo-optimization-2025",
    title: "SEO Optimization Strategies for 2025",
    excerpt:
      "Master the latest SEO techniques and strategies to improve your website's search engine rankings and drive organic traffic.",
    content: "Full article content here...",
    image: "/placeholder.svg?text=SEO+Strategies",
    category: "Digital Marketing",
    author: "Emily Davis",
    publishedAt: "2025-02-28",
    readTime: "8 min read",
    tags: ["SEO", "Marketing", "Search", "Traffic"],
  },
  {
    slug: "content-marketing-trends",
    title: "Content Marketing Trends to Watch in 2025",
    excerpt: "Understand how content is evolving with AI and video dominance.",
    content: "Full article content here...",
    image: "/placeholder.svg?text=Content+Marketing",
    category: "Digital Marketing",
    author: "Sarah Chen",
    publishedAt: "2025-03-05",
    readTime: "6 min read",
    tags: ["Marketing", "Content", "SEO"],
  },
  {
    slug: "email-marketing-automation",
    title: "Email Marketing Automation Tools for 2025",
    excerpt: "Top platforms to streamline email campaigns and boost engagement.",
    content: "Full article content here...",
    image: "/placeholder.svg?text=Email+Marketing",
    category: "Digital Marketing",
    author: "Alex Johnson",
    publishedAt: "2025-01-19",
    readTime: "7 min read",
    tags: ["Email", "Automation", "Marketing"],
  },
  {
    slug: "social-media-strategies-2025",
    title: "Social Media Growth Strategies in 2025",
    excerpt: "Learn advanced engagement and influencer collaboration strategies.",
    content: "Full article content here...",
    image: "/placeholder.svg?text=Social+Media",
    category: "Digital Marketing",
    author: "Michael Rodriguez",
    publishedAt: "2025-02-22",
    readTime: "9 min read",
    tags: ["Social Media", "Marketing", "Influencer"],
  },
  {
    slug: "ai-in-marketing",
    title: "Using AI to Optimize Marketing Campaigns",
    excerpt: "Leverage AI tools for analytics, personalization, and ROI.",
    content: "Full article content here...",
    image: "/placeholder.svg?text=AI+Marketing",
    category: "Digital Marketing",
    author: "Emily Davis",
    publishedAt: "2025-02-25",
    readTime: "6 min read",
    tags: ["AI", "Marketing", "Automation"],
  },
  {
    slug: "google-ads-2025",
    title: "Mastering Google Ads in 2025",
    excerpt: "A detailed guide to maximizing ROI on Google Ads campaigns.",
    content: "Full article content here...",
    image: "/placeholder.svg?text=Google+Ads",
    category: "Digital Marketing",
    author: "Sarah Chen",
    publishedAt: "2025-03-09",
    readTime: "8 min read",
    tags: ["Google", "Ads", "Marketing"],
  },
  {
    slug: "video-marketing-tactics",
    title: "Video Marketing Tactics That Work in 2025",
    excerpt: "Harness the power of short-form and AI-generated videos.",
    content: "Full article content here...",
    image: "/placeholder.svg?text=Video+Marketing",
    category: "Digital Marketing",
    author: "Alex Johnson",
    publishedAt: "2025-03-14",
    readTime: "5 min read",
    tags: ["Video", "Marketing", "Trends"],
  },
  {
    slug: "marketing-analytics-tools",
    title: "Best Marketing Analytics Tools in 2025",
    excerpt: "Top platforms to track engagement, conversions, and ROI.",
    content: "Full article content here...",
    image: "/placeholder.svg?text=Marketing+Analytics",
    category: "Digital Marketing",
    author: "Michael Rodriguez",
    publishedAt: "2025-03-02",
    readTime: "7 min read",
    tags: ["Analytics", "Tools", "Marketing"],
  },
  {
    slug: "brand-building-strategies",
    title: "Brand Building in the Digital Age",
    excerpt: "How to establish a strong online identity and loyal audience.",
    content: "Full article content here...",
    image: "/placeholder.svg?text=Brand+Building",
    category: "Digital Marketing",
    author: "Emily Davis",
    publishedAt: "2025-01-30",
    readTime: "8 min read",
    tags: ["Branding", "Marketing", "Digital"],
  },
  {
    slug: "influencer-marketing-guide",
    title: "Influencer Marketing Guide for 2025",
    excerpt: "Maximize brand exposure with influencer collaborations.",
    content: "Full article content here...",
    image: "/placeholder.svg?text=Influencer+Guide",
    category: "Digital Marketing",
    author: "Sarah Chen",
    publishedAt: "2025-03-19",
    readTime: "6 min read",
    tags: ["Influencer", "Marketing", "Social Media"],
  },

  // 💡 Tutorials (10)
  {
    slug: "react-performance-optimization",
    title: "React Performance Optimization: Advanced Techniques",
    excerpt:
      "Deep dive into advanced React optimization techniques including code splitting, memoization, and virtual DOM optimization.",
    content: "Full article content here...",
    image: "/placeholder.svg?text=React+Performance",
    category: "Tutorials",
    author: "Alex Johnson",
    publishedAt: "2025-02-20",
    readTime: "10 min read",
    tags: ["React", "Performance", "Optimization", "JavaScript"],
  },
  {
    slug: "nextjs-api-routes-tutorial",
    title: "Next.js API Routes Tutorial",
    excerpt: "Learn to build APIs directly inside your Next.js projects.",
    content: "Full article content here...",
    image: "/placeholder.svg?text=Next.js+API+Routes",
    category: "Tutorials",
    author: "Emily Davis",
    publishedAt: "2025-02-14",
    readTime: "8 min read",
    tags: ["Next.js", "API", "Backend"],
  },
  {
    slug: "typescript-react-hooks",
    title: "Using React Hooks with TypeScript",
    excerpt: "Best patterns and typing techniques for hooks in React projects.",
    content: "Full article content here...",
    image: "/placeholder.svg?text=React+Hooks+TypeScript",
    category: "Tutorials",
    author: "Sarah Chen",
    publishedAt: "2025-01-28",
    readTime: "7 min read",
    tags: ["React", "TypeScript", "Hooks"],
  },
  {
    slug: "docker-nodejs-setup",
    title: "Docker Setup for Node.js Applications",
    excerpt: "Containerize and deploy your Node.js apps easily with Docker.",
    content: "Full article content here...",
    image: "/placeholder.svg?text=Docker+Node.js",
    category: "Tutorials",
    author: "Michael Rodriguez",
    publishedAt: "2025-02-01",
    readTime: "6 min read",
    tags: ["Docker", "Node.js", "DevOps"],
  },
  {
    slug: "graphql-api-tutorial",
    title: "Building APIs with GraphQL",
    excerpt: "Learn GraphQL basics and build your first queryable API.",
    content: "Full article content here...",
    image: "/placeholder.svg?text=GraphQL+API",
    category: "Tutorials",
    author: "Alex Johnson",
    publishedAt: "2025-03-03",
    readTime: "9 min read",
    tags: ["GraphQL", "API", "Web Development"],
  },
  {
    slug: "firebase-authentication-guide",
    title: "Firebase Authentication Tutorial",
    excerpt: "Implement secure login systems using Firebase Auth.",
    content: "Full article content here...",
    image: "/placeholder.svg?text=Firebase+Auth",
    category: "Tutorials",
    author: "Emily Davis",
    publishedAt: "2025-02-18",
    readTime: "6 min read",
    tags: ["Firebase", "Auth", "Security"],
  },
  {
    slug: "tailwind-css-custom-themes",
    title: "Creating Custom Themes in Tailwind CSS",
    excerpt: "Learn to extend and customize Tailwind CSS themes.",
    content: "Full article content here...",
    image: "/placeholder.svg?text=Tailwind+Themes",
    category: "Tutorials",
    author: "Sarah Chen",
    publishedAt: "2025-03-11",
    readTime: "7 min read",
    tags: ["Tailwind", "CSS", "Design"],
  },
  {
    slug: "python-api-fastapi",
    title: "Building APIs with FastAPI in Python",
    excerpt: "High-performance API development using FastAPI.",
    content: "Full article content here...",
    image: "/placeholder.svg?text=FastAPI+Tutorial",
    category: "Tutorials",
    author: "Michael Rodriguez",
    publishedAt: "2025-03-06",
    readTime: "9 min read",
    tags: ["Python", "FastAPI", "Backend"],
  },
  {
    slug: "testing-react-with-vitest",
    title: "Testing React Components with Vitest",
    excerpt: "Simplify testing React components using Vitest and Testing Library.",
    content: "Full article content here...",
    image: "/placeholder.svg?text=Vitest+React",
    category: "Tutorials",
    author: "Alex Johnson",
    publishedAt: "2025-02-26",
    readTime: "8 min read",
    tags: ["React", "Testing", "Vitest"],
  },
  {
    slug: "nextjs-deployment-vercel",
    title: "Deploying Next.js Apps to Vercel",
    excerpt: "Step-by-step tutorial for deploying your app to Vercel’s platform.",
    content: "Full article content here...",
    image: "/placeholder.svg?text=Vercel+Deployment",
    category: "Tutorials",
    author: "Emily Davis",
    publishedAt: "2025-03-13",
    readTime: "6 min read",
    tags: ["Next.js", "Vercel", "Deployment"],
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
