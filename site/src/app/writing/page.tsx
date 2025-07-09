import { WritingTemplate } from "@/components/writing-template";

const essayPosts = [
  {
    id: "test1",
    title: "Coming Soon",
    excerpt: "Placeholder for upcoming writing content...",
    content: `# Coming Soon

I'm going to upload stuff soon i promise

`,
    date: "2025-07-09",
    readTime: "1 min read",
    tags: ["Coming Soon"],
    category: "Placeholder",
    featured: true
  },
  {
    id: "test2",
    title: "Coming Soon",
    excerpt: "Placeholder for upcoming writing content...",
    content: `# Coming Soon

I'm going to upload stuff soon i promise

`,
    date: "2025-07-09",
    readTime: "1 min read",
    tags: ["Coming Soon"],
    category: "Placeholder"
  },
  {
    id: "test3",
    title: "Coming Soon",
    excerpt: "Placeholder for upcoming writing content...",
    content: `# Coming Soon

I'm going to upload stuff soon i promise

`,
    date: "2025-07-09",
    readTime: "1 min read",
    tags: ["Coming Soon"],
    category: "Placeholder"
  }
];

export default function WritingPage() {
  return <WritingTemplate posts={essayPosts} />;
} 