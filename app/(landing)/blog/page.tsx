import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { Calendar, ArrowRight } from "lucide-react"

const blogPosts = [
  {
    slug: "ultimate-guide-screen-sharing-privacy",
    title: "The Ultimate Guide to Screen Sharing Privacy in 2025",
    excerpt: "Learn how to protect sensitive information during screen sharing sessions with comprehensive privacy strategies and tools.",
    date: "2025-10-07",
    readTime: "8 min read",
    category: "Privacy",
    featured: true
  },
  {
    slug: "ai-powered-blur-technology-explained", 
    title: "How AI-Powered Blur Technology Protects Your Data",
    excerpt: "Discover how advanced AI algorithms automatically detect and protect sensitive information in real-time during presentations.",
    date: "2025-10-05",
    readTime: "6 min read",
    category: "Technology"
  },
  {
    slug: "content-creator-privacy-best-practices",
    title: "Privacy Best Practices for Content Creators and Educators",
    excerpt: "Essential privacy tips for YouTubers, educators, and content creators sharing their screens with audiences.",
    date: "2025-10-03",
    readTime: "7 min read",
    category: "Education"
  },
  {
    slug: "zoom-google-meet-privacy-tips",
    title: "Zoom vs Google Meet vs Teams: Privacy Features Compared",
    excerpt: "A comprehensive comparison of privacy features across major video conferencing platforms.",
    date: "2025-10-01",
    readTime: "10 min read",
    category: "Comparison"
  },
  {
    slug: "api-key-security-developers",
    title: "API Key Security: A Developer's Complete Guide",
    excerpt: "How to keep your API keys, tokens, and credentials secure during development and presentations.",
    date: "2025-09-28",
    readTime: "12 min read",
    category: "Development"
  },
  {
    slug: "gdpr-compliance-screen-sharing",
    title: "GDPR Compliance and Screen Sharing: What You Need to Know",
    excerpt: "Understanding GDPR requirements when sharing screens that may contain personal data.",
    date: "2025-09-25",
    readTime: "9 min read",
    category: "Legal"
  }
]

export default function BlogPage() {
  const featuredPost = blogPosts.find(post => post.featured)
  const regularPosts = blogPosts.filter(post => !post.featured)

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-16 pt-32">
        <div className="text-center mb-16">
        <h1 className="text-4xl font-cal mb-4">Blurby Blog</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Privacy insights, security tips, and best practices for safe screen sharing and content creation.
        </p>
        </div>

      {featuredPost && (
        <div className="mb-16">
          <Card className="overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="p-8 lg:p-12">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                  <span className="bg-primary text-primary-foreground px-2 py-1 rounded text-xs">Featured</span>
                  <span>{featuredPost.category}</span>
                  <span>•</span>
                  <span>{featuredPost.readTime}</span>
                </div>
                <h2 className="text-3xl font-cal mb-4">
                  <Link href={`/blog/${featuredPost.slug}`} className="hover:text-primary transition-colors">
                    {featuredPost.title}
                  </Link>
                </h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <time dateTime={featuredPost.date}>
                      {new Date(featuredPost.date).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </time>
                  </div>
                  <Link 
                    href={`/blog/${featuredPost.slug}`}
                    className="flex items-center gap-2 text-primary hover:gap-3 transition-all"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
              <div className="bg-gradient-to-br from-primary/20 to-primary/10 p-8 lg:p-12 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🔒</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Featured Article</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      )}

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {regularPosts.map((post) => (
          <Card key={post.slug} className="p-6 hover:shadow-lg transition-shadow">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span className="bg-muted px-2 py-1 rounded text-xs">{post.category}</span>
                <span>{post.readTime}</span>
              </div>
              
              <h3 className="text-xl font-cal leading-tight">
                <Link href={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
                  {post.title}
                </Link>
              </h3>
              
              <p className="text-muted-foreground text-sm leading-relaxed">
                {post.excerpt}
              </p>
              
              <div className="flex items-center justify-between pt-4 border-t">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString('en-US', { 
                      month: 'short', 
                      day: 'numeric' 
                    })}
                  </time>
                </div>
                <Link 
                  href={`/blog/${post.slug}`}
                  className="flex items-center gap-2 text-primary hover:gap-3 transition-all text-sm"
                >
                  Read More
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="text-center mt-16">
        <p className="text-muted-foreground mb-4">
          Stay updated with the latest privacy and security insights
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <input 
            type="email" 
            placeholder="Enter your email" 
            className="px-4 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20"
          />
          <button className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
            Subscribe
          </button>
        </div>
      </div>
      </div>
      <Footer />
    </div>
  )
}