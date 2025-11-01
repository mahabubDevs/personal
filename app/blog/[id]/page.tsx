"use client"

import Link from "next/link"
import { Clock, User, ArrowLeft, ArrowRight, Share2 } from "lucide-react"
import { useParams } from "next/navigation"

const blogArticles: Record<
  string,
  {
    id: number
    title: string
    excerpt: string
    author: string
    date: string
    readTime: string
    category: string
    image: string
    content: string
  }
> = {
  "1": {
    id: 1,
    title: "The Future of AI in Web Development",
    excerpt: "Exploring how artificial intelligence is revolutionizing the way we build web applications.",
    author: "Alex Chen",
    date: "Nov 15, 2024",
    readTime: "8 min",
    category: "AI & Technology",
    image: "/ai-web-development.png",
    content: `
      <h2>Introduction</h2>
      <p>Artificial Intelligence is fundamentally transforming how we approach web development. From intelligent code generation to predictive analytics, AI tools are becoming essential to modern development workflows.</p>

      <h2>AI-Powered Development Tools</h2>
      <p>Modern IDEs and development environments are increasingly incorporating AI capabilities. Tools like GitHub Copilot have demonstrated how AI can assist developers in writing code faster and more efficiently.</p>

      <h3>Benefits of AI Code Assistance</h3>
      <ul>
        <li>Faster development cycles</li>
        <li>Reduced human errors</li>
        <li>Better code patterns and practices</li>
        <li>Learning opportunities for developers</li>
      </ul>

      <h2>Intelligent User Experiences</h2>
      <p>AI is enabling developers to create more intelligent user interfaces. Machine learning models can personalize content, predict user behavior, and provide smarter recommendations.</p>

      <h2>The Road Ahead</h2>
      <p>As AI technology continues to evolve, we can expect even more sophisticated tools that will further accelerate development cycles and enable developers to focus on creative and strategic aspects of their work.</p>
    `,
  },
  "2": {
    id: 2,
    title: "Mobile-First Design: Best Practices for 2024",
    excerpt: "A comprehensive guide to designing mobile-first applications that work seamlessly across devices.",
    author: "Marcus Rodriguez",
    date: "Nov 12, 2024",
    readTime: "6 min",
    category: "Design",
    image: "/modern-mobile-app-interface.png",
    content: `
      <h2>Why Mobile-First Still Matters</h2>
      <p>Mobile devices continue to dominate user interactions. Designing with mobile in mind first ensures your applications are accessible and performant for the majority of users.</p>

      <h2>Core Principles of Mobile-First Design</h2>
      <h3>1. Touch-Friendly Interfaces</h3>
      <p>Ensure buttons and interactive elements are appropriately sized for touch interactions. A minimum of 44x44 pixels is recommended for touch targets.</p>

      <h3>2. Responsive Typography</h3>
      <p>Use fluid typography that scales appropriately across different screen sizes. This improves readability and user experience.</p>

      <h3>3. Performance Optimization</h3>
      <p>Mobile users often have slower connections. Optimize images, minimize CSS and JavaScript, and implement lazy loading for better performance.</p>

      <h2>Testing and Validation</h2>
      <p>Always test your designs on real devices, not just browser simulators. This helps catch issues that may only appear in production environments.</p>

      <h2>Conclusion</h2>
      <p>Mobile-first design is not a trend, but a necessity in today's digital landscape. By prioritizing mobile users, you ensure your applications are truly accessible and performant for everyone.</p>
    `,
  },
  "3": {
    id: 3,
    title: "Building Scalable Backend Systems",
    excerpt: "Deep dive into architecture patterns and best practices for building scalable backend systems.",
    author: "Elena Petrov",
    date: "Nov 8, 2024",
    readTime: "12 min",
    category: "Backend",
    image: "/backend-architecture.jpg",
    content: `
      <h2>Understanding Scalability</h2>
      <p>Scalability is the ability of a system to handle increased load without degradation in performance. There are two main types: vertical scaling (adding more power to existing machines) and horizontal scaling (adding more machines).</p>

      <h2>Microservices Architecture</h2>
      <p>Breaking down applications into smaller, independent services allows for better scalability and maintainability. Each service can be scaled independently based on demand.</p>

      <h2>Database Optimization</h2>
      <h3>Caching Strategies</h3>
      <p>Implement caching at multiple levels: application level, database level, and CDN level. This significantly reduces database load.</p>

      <h3>Database Sharding</h3>
      <p>Distribute data across multiple database instances based on a shard key. This allows you to scale horizontally.</p>

      <h2>Message Queues and Event Streaming</h2>
      <p>Use message brokers like RabbitMQ or Kafka to decouple services and handle asynchronous processing. This improves system resilience and throughput.</p>

      <h2>Monitoring and Observability</h2>
      <p>Implement comprehensive monitoring, logging, and tracing to understand system behavior and identify bottlenecks.</p>
    `,
  },
  "4": {
    id: 4,
    title: "Intro to Machine Learning for Developers",
    excerpt: "A beginner-friendly introduction to machine learning concepts and practical implementation.",
    author: "Sarah Johnson",
    date: "Nov 1, 2024",
    readTime: "10 min",
    category: "Machine Learning",
    image: "/machine-learning-concept.png",
    content: `
      <h2>What is Machine Learning?</h2>
      <p>Machine Learning is a subset of artificial intelligence that enables systems to learn and improve from data without being explicitly programmed. It powers many of the services we use daily.</p>

      <h2>Types of Machine Learning</h2>
      <h3>Supervised Learning</h3>
      <p>The model learns from labeled data. Examples include classification and regression tasks.</p>

      <h3>Unsupervised Learning</h3>
      <p>The model learns patterns from unlabeled data. Common applications include clustering and dimensionality reduction.</p>

      <h3>Reinforcement Learning</h3>
      <p>The model learns through interaction and rewards. Used in game AI and robotics.</p>

      <h2>Getting Started with ML</h2>
      <p>Popular frameworks for developers include TensorFlow, PyTorch, and Scikit-learn. Start with simple problems and build your understanding gradually.</p>

      <h2>Real-World Applications</h2>
      <p>Machine learning powers recommendation systems, predictive analytics, natural language processing, and computer vision applications.</p>
    `,
  },
  "5": {
    id: 5,
    title: "Cloud Infrastructure Best Practices",
    excerpt: "Learn how to optimize your cloud infrastructure for cost, performance, and reliability.",
    author: "Alex Chen",
    date: "Oct 28, 2024",
    readTime: "9 min",
    category: "Cloud",
    image: "/cloud-infrastructure.png",
    content: `
      <h2>Cloud Architecture Principles</h2>
      <p>Designing for the cloud requires understanding principles like redundancy, scalability, and cost optimization.</p>

      <h2>Avoiding Common Pitfalls</h2>
      <h3>Over-provisioning</h3>
      <p>Allocating more resources than needed increases costs unnecessarily. Use auto-scaling to match demand.</p>

      <h3>Poor Cost Monitoring</h3>
      <p>Without proper monitoring, cloud costs can spiral quickly. Implement cost tracking and alerts.</p>

      <h2>Security Considerations</h2>
      <p>Implement security at every layer: network security, encryption, identity and access management, and continuous monitoring.</p>

      <h2>Disaster Recovery</h2>
      <p>Implement backup strategies, multi-region deployment, and regular disaster recovery drills to ensure business continuity.</p>

      <h2>Conclusion</h2>
      <p>Cloud infrastructure offers tremendous flexibility and scalability when implemented correctly. Follow best practices to maximize benefits and minimize costs.</p>
    `,
  },
  "6": {
    id: 6,
    title: "Cybersecurity in Modern Applications",
    excerpt: "Essential security practices to protect your applications and user data from modern threats.",
    author: "Marcus Rodriguez",
    date: "Oct 20, 2024",
    readTime: "11 min",
    category: "Security",
    image: "/cybersecurity-network.png",
    content: `
      <h2>The Security Landscape</h2>
      <p>Modern applications face evolving threats. Understanding common vulnerabilities and how to protect against them is crucial.</p>

      <h2>OWASP Top 10</h2>
      <p>The Open Web Application Security Project lists the top 10 web application security risks. Familiarize yourself with these to build more secure applications.</p>

      <h2>Essential Security Practices</h2>
      <h3>Input Validation</h3>
      <p>Always validate and sanitize user input to prevent injection attacks.</p>

      <h3>Authentication and Authorization</h3>
      <p>Implement strong authentication mechanisms and proper authorization checks.</p>

      <h3>Encryption</h3>
      <p>Encrypt sensitive data both in transit and at rest.</p>

      <h2>Regular Updates and Patching</h2>
      <p>Keep all dependencies and frameworks updated. Regular patching is critical for security.</p>

      <h2>Security Testing</h2>
      <p>Implement automated security testing as part of your CI/CD pipeline. Regular penetration testing can identify vulnerabilities.</p>
    `,
  },
}

export default function BlogArticle() {
  const params = useParams()
  const id = params?.id as string
  const article = blogArticles[id] || blogArticles["1"]

  return (
    <main className="min-h-screen pt-24 pb-12">
      <div className="max-w-4xl mx-auto px-4">
        {/* Back Link */}
        <Link href="/blog" className="flex items-center gap-2 text-secondary hover:text-accent mb-8 transition-colors">
          <ArrowLeft size={20} /> Back to Blog
        </Link>

        {/* Article Header */}
        <article className="mb-12">
          <div className="mb-6">
            <span className="text-xs font-semibold text-secondary bg-secondary/10 px-3 py-1 rounded-full">
              {article.category}
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">{article.title}</h1>

          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-8 pb-8 border-b border-border">
            <div className="flex items-center gap-2">
              <User size={16} />
              {article.author}
            </div>
            <span>•</span>
            <div className="flex items-center gap-2">
              <Clock size={16} />
              {article.readTime}
            </div>
            <span>•</span>
            <span>{article.date}</span>
            <div className="flex-1"></div>
            <button className="flex items-center gap-2 text-secondary hover:text-accent transition-colors">
              <Share2 size={16} /> Share
            </button>
          </div>

          <div className="h-96 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg overflow-hidden mb-12 border border-border">
            <div className="w-full h-full bg-muted/20"></div>
          </div>

          {/* Article Content */}
          <div className="prose prose-invert max-w-none mb-12 text-foreground/90 leading-relaxed">
            <p className="text-xl text-foreground/80 mb-8 italic">{article.excerpt}</p>

            <div dangerouslySetInnerHTML={{ __html: article.content }} className="space-y-6"></div>

            <style jsx>{`
              :global(.prose h2) {
                @apply text-3xl font-bold text-foreground mt-8 mb-4;
              }
              :global(.prose h3) {
                @apply text-2xl font-semibold text-secondary mt-6 mb-3;
              }
              :global(.prose p) {
                @apply text-foreground/80 mb-4 leading-relaxed;
              }
              :global(.prose ul) {
                @apply list-disc list-inside space-y-2 mb-4 text-foreground/80;
              }
              :global(.prose li) {
                @apply ml-4;
              }
            `}</style>
          </div>

          <div className="bg-card/50 border border-border rounded-lg p-6 mb-12">
            <h3 className="text-lg font-bold text-foreground mb-2">About the Author</h3>
            <p className="text-foreground/70">
              {article.author} is a senior developer at MrBitX with expertise in {article.category.toLowerCase()}. They
              are passionate about sharing knowledge and helping other developers grow.
            </p>
          </div>

          {/* Related Articles Navigation */}
          <div className="flex justify-between items-center pt-8 border-t border-border">
            {Number.parseInt(id) > 1 ? (
              <Link
                href={`/blog/${Number.parseInt(id) - 1}`}
                className="flex items-center gap-2 text-secondary hover:text-accent transition-colors"
              >
                <ArrowLeft size={20} /> Previous Article
              </Link>
            ) : (
              <div />
            )}
            {Number.parseInt(id) < 6 ? (
              <Link
                href={`/blog/${Number.parseInt(id) + 1}`}
                className="flex items-center gap-2 text-secondary hover:text-accent transition-colors"
              >
                Next Article <ArrowRight size={20} />
              </Link>
            ) : (
              <div />
            )}
          </div>
        </article>

        <div className="bg-gradient-to-r from-primary/20 to-secondary/20 rounded-lg p-8 border border-border text-center">
          <h2 className="text-3xl font-bold mb-4 text-foreground">Have Questions?</h2>
          <p className="text-foreground/80 mb-6">
            Feel free to reach out to our team for more insights and discussions.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-full font-semibold hover:shadow-[0_0_40px_rgba(138,43,226,0.7)] transition-all"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </main>
  )
}
