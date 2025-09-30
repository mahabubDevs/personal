"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, User, ArrowRight, MessageCircle, Facebook, Linkedin } from "lucide-react"
import Link from "next/link"

interface BlogPost {
  slug: string
  title: string
  excerpt: string
  content: string
  image: string
  category: string
  author: string
  publishedAt: string
  readTime: string
  tags: string[]
}

interface BlogCardProps {
  post: BlogPost
  featured?: boolean
}

export function BlogCard({ post, featured = false }: BlogCardProps) {
  const shareUrl = `${typeof window !== "undefined" ? window.location.origin : ""}/blog/${post.slug}`
  const shareText = `Check out this article: ${post.title}`

  const handleShare = (platform: string) => {
    let url = ""
    switch (platform) {
      case "whatsapp":
        url = `https://wa.me/?text=${encodeURIComponent(`${shareText} ${shareUrl}`)}`
        break
      case "facebook":
        url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`
        break
      case "linkedin":
        url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`
        break
    }
    if (url) {
      window.open(url, "_blank", "noopener,noreferrer")
    }
  }

  return (
    <Card className={`overflow-hidden hover:shadow-lg transition-shadow ${featured ? "md:col-span-2" : ""}`}>
      <div className={`overflow-hidden ${featured ? "aspect-[2/1]" : "aspect-video"}`}>
        <img
          src={post.image || "/placeholder.svg"}
          alt={post.title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      <CardHeader>
        <div className="flex items-center justify-between mb-2">
          <Badge variant="secondary">{post.category}</Badge>
          <div className="flex items-center text-sm text-muted-foreground">
            <Calendar className="h-4 w-4 mr-1" />
            {new Date(post.publishedAt).toLocaleDateString()}
          </div>
        </div>
        <CardTitle className={`${featured ? "text-2xl" : "text-xl"} line-clamp-2`}>{post.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground mb-4 line-clamp-3">{post.excerpt}</p>

        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center">
              <User className="h-4 w-4 mr-1" />
              {post.author}
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-1" />
              {post.readTime}
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <Button asChild>
            <Link href={`/blog/${post.slug}`}>
              Read More
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>

          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => handleShare("whatsapp")}
              className="text-muted-foreground hover:text-foreground"
            >
              <MessageCircle className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => handleShare("facebook")}
              className="text-muted-foreground hover:text-foreground"
            >
              <Facebook className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => handleShare("linkedin")}
              className="text-muted-foreground hover:text-foreground"
            >
              <Linkedin className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
