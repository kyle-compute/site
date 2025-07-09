"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, Clock, BookOpen, Tag, Home, Sparkles } from "lucide-react";
import { useState } from "react";
import { Logo } from "@/components/ui/logo";

interface WritingPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  tags: string[];
  category: string;
  featured?: boolean;
}

interface WritingTemplateProps {
  posts?: WritingPost[];
  selectedPost?: WritingPost;
  onPostSelect?: (post: WritingPost) => void;
  onBack?: () => void;
}

// Sample data - replace with your actual content
const samplePosts: WritingPost[] = [
  {
    id: "1",
    title: "The Future of Infrastructure Deployment",
    excerpt: "Exploring modern approaches to scalable infrastructure and the tools that make it possible...",
    content: `# The Future of Infrastructure Deployment

Infrastructure deployment has evolved dramatically over the past decade. What once required manual server configuration and lengthy deployment cycles can now be accomplished with a few commands and automated pipelines.

## Key Trends

### 1. Container Orchestration
The rise of Docker and Kubernetes has fundamentally changed how we think about application deployment. Containers provide consistency across environments while orchestration platforms handle scaling and management.

### 2. Infrastructure as Code
Tools like Terraform and Pulumi allow us to define infrastructure declaratively, bringing version control and reproducibility to infrastructure management.

### 3. Serverless Architecture
Functions-as-a-Service platforms are changing how we build and deploy applications, abstracting away server management entirely.

## Looking Forward

The future of infrastructure deployment lies in further automation, better developer experience, and more intelligent resource management. As we continue to push the boundaries of what's possible, the focus will shift from "how to deploy" to "how to deploy intelligently."`,
    date: "2024-01-15",
    readTime: "5 min read",
    tags: ["Infrastructure", "DevOps", "Automation"],
    category: "Technical",
    featured: true
  },
  {
    id: "2",
    title: "Signal Processing in Embedded Systems",
    excerpt: "Deep dive into real-time signal processing challenges and solutions for resource-constrained devices...",
    content: `# Signal Processing in Embedded Systems

Working with embedded systems presents unique challenges, especially when dealing with real-time signal processing. Resource constraints force us to be creative with our algorithms and implementations.

## The Challenge

Embedded systems typically have:
- Limited processing power
- Restricted memory
- Power consumption constraints
- Real-time requirements

## Solutions and Approaches

### Efficient Algorithms
Choosing the right algorithm can make the difference between a working system and one that fails under load.

### Hardware Acceleration
Leveraging specialized hardware like DSPs or FPGAs can dramatically improve performance.

### Optimization Techniques
Code optimization becomes critical when every cycle counts.`,
    date: "2024-01-10",
    readTime: "8 min read",
    tags: ["Embedded Systems", "DSP", "C++"],
    category: "Technical"
  },
  {
    id: "3",
    title: "Thoughts on Building in Public",
    excerpt: "Reflections on sharing the journey of building products and the lessons learned along the way...",
    content: `# Thoughts on Building in Public

Building in public has become a popular approach for entrepreneurs and developers. There's something powerful about sharing your journey, struggles, and victories with an audience.

## The Benefits

### Accountability
When you share your goals publicly, you create accountability that can drive you forward.

### Community
Building an audience around your work creates a community of supporters and potential customers.

### Learning
Teaching others forces you to understand concepts more deeply.

## The Challenges

### Vulnerability
Sharing failures and struggles can be emotionally challenging.

### Time Investment
Creating content takes time away from building.

### Managing Expectations
Public commitments can create pressure and stress.

## Finding Balance

The key is finding the right balance between sharing and building, between vulnerability and professionalism.`,
    date: "2024-01-05",
    readTime: "4 min read",
    tags: ["Entrepreneurship", "Community", "Personal"],
    category: "Thoughts"
  }
];

export function WritingTemplate({ 
  posts = samplePosts, 
  selectedPost, 
  onPostSelect, 
  onBack 
}: WritingTemplateProps) {
  const [internalSelectedPost, setInternalSelectedPost] = useState<WritingPost | null>(null);
  
  const currentPost = selectedPost || internalSelectedPost;
  const handlePostSelect = onPostSelect || setInternalSelectedPost;
  const handleBack = onBack || (() => setInternalSelectedPost(null));

  if (currentPost) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#f0eee6]/20 to-[#f0eee6]/10">
        {/* Header */}
        <header className="border-b border-[#f0eee6]/30 bg-[#f0eee6]/10 backdrop-blur-sm sticky top-0 z-10">
          <div className="max-w-4xl mx-auto px-4 py-6">
            <div className="flex items-center justify-between mb-4">
              <Button 
                variant="ghost" 
                onClick={handleBack}
                className="text-[#181414] hover:bg-[#f0eee6]/50"
              >
                <ArrowLeft size={20} className="mr-2" />
                Back to Writing
              </Button>
              
              {/* Creative Home Button */}
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#f0eee6]/40 to-[#f0eee6]/20 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-300"></div>
                <Button 
                  variant="ghost"
                  asChild
                  className="relative text-[#181414] hover:bg-[#f0eee6]/50 border border-[#f0eee6]/30 hover:border-[#f0eee6]/60"
                >
                  <a href="/" className="flex items-center gap-2">
                    <Logo size={18} />
                    <span className="hidden sm:inline">Home</span>
                  </a>
                </Button>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Calendar size={16} />
                {new Date(currentPost.date).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
                <span className="mx-2">•</span>
                <Clock size={16} />
                {currentPost.readTime}
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold text-[#181414] leading-tight">
                {currentPost.title}
              </h1>
              
              <div className="flex flex-wrap gap-2">
                {currentPost.tags.map((tag, index) => (
                  <Badge 
                    key={index} 
                    variant="secondary"
                    className="bg-[#f0eee6]/60 text-[#181414] border-[#f0eee6]/50"
                  >
                    <Tag size={12} className="mr-1" />
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="max-w-4xl mx-auto px-4 py-8">
          <article className="prose prose-lg max-w-none">
            <div 
              className="text-[#181414] leading-relaxed"
              dangerouslySetInnerHTML={{ 
                __html: currentPost.content.replace(/\n/g, '<br>').replace(/#{1,6} /g, '<h2 class="text-2xl font-bold mt-8 mb-4 text-[#181414]">').replace(/<h2 class="text-2xl font-bold mt-8 mb-4 text-\[#181414\]">([^<]+)/g, '<h2 class="text-2xl font-bold mt-8 mb-4 text-[#181414]">$1</h2>')
              }}
            />
          </article>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f0eee6]/20 to-[#f0eee6]/10">
      {/* Header */}
      <header className="text-center py-16 px-4">
        <div className="flex justify-center mb-6">
          <Logo size={48} className="text-[#181414]" />
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#181414] to-[#181414]/80 bg-clip-text text-transparent leading-tight">
          My Writing
        </h1>
        
        {/* Creative Home Button - moved below title */}
        <div className="flex justify-center mb-6">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#f0eee6]/40 to-[#f0eee6]/20 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-300"></div>
            <Button 
              variant="ghost"
              asChild
              className="relative text-[#181414] hover:bg-[#f0eee6]/50 border border-[#f0eee6]/30 hover:border-[#f0eee6]/60"
            >
              <a href="/" className="flex items-center gap-2">
                <Logo size={18} />
                <span>Home</span>
              </a>
            </Button>
          </div>
        </div>
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Thoughts on technology, infrastructure, and the journey of building things
        </p>
      </header>

      {/* Featured Post */}
      {posts.find(post => post.featured) && (
        <section className="max-w-6xl mx-auto px-4 mb-16">
          <h2 className="text-2xl font-bold mb-8 text-[#181414]">Featured</h2>
          {(() => {
            const featuredPost = posts.find(post => post.featured)!;
            return (
              <Card 
                className="group cursor-pointer hover:shadow-2xl transition-all duration-500 border-2 hover:border-[#f0eee6]/50 bg-gradient-to-br from-[#f0eee6]/30 via-[#f0eee6]/20 to-[#f0eee6]/30 backdrop-blur-sm overflow-hidden"
                onClick={() => handlePostSelect(featuredPost)}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <Badge className="bg-[#181414] text-[#f0eee6]">Featured</Badge>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar size={14} />
                        {new Date(featuredPost.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock size={14} />
                        {featuredPost.readTime}
                      </div>
                    </div>
                  </div>
                  <CardTitle className="text-2xl md:text-3xl mb-4 text-[#181414] group-hover:text-[#181414]/80 transition-colors">
                    {featuredPost.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {featuredPost.tags.map((tag, index) => (
                      <Badge 
                        key={index} 
                        variant="secondary"
                        className="bg-[#f0eee6]/60 text-[#181414] border-[#f0eee6]/50"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })()}
        </section>
      )}

      {/* All Posts Grid */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <h2 className="text-2xl font-bold mb-8 text-[#181414]">All Posts</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <Card 
              key={post.id}
              className="group cursor-pointer hover:shadow-lg transition-all duration-300 border hover:border-[#f0eee6]/50 bg-[#f0eee6]/20 backdrop-blur-sm hover:bg-[#f0eee6]/30"
              onClick={() => handlePostSelect(post)}
            >
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between mb-2">
                  <Badge 
                    variant="outline"
                    className="text-xs border-[#f0eee6]/50 text-[#181414]"
                  >
                    {post.category}
                  </Badge>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <BookOpen size={12} />
                    {post.readTime}
                  </div>
                </div>
                <CardTitle className="text-lg leading-tight text-[#181414] group-hover:text-[#181414]/80 transition-colors">
                  {post.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-1">
                    {post.tags.slice(0, 2).map((tag, index) => (
                      <Badge 
                        key={index} 
                        variant="secondary"
                        className="text-xs bg-[#f0eee6]/60 text-[#181414] border-[#f0eee6]/50"
                      >
                        {tag}
                      </Badge>
                    ))}
                    {post.tags.length > 2 && (
                      <Badge 
                        variant="secondary"
                        className="text-xs bg-[#f0eee6]/60 text-[#181414] border-[#f0eee6]/50"
                      >
                        +{post.tags.length - 2}
                      </Badge>
                    )}
                  </div>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Calendar size={12} />
                    {new Date(post.date).toLocaleDateString()}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
} 