"use client";

import { WritingTemplate } from "@/components/writing-template";
import { useRouter } from "next/navigation";

const test1Post = {
  id: "test1",
  title: "Coming Soon",
  excerpt: "Placeholder for upcoming writing content...",
  content: `# Coming Soon

I'm going to upload stuff soon i promise

Stay tuned for more content!`,
  date: "2024-01-20",
  readTime: "1 min read",
  tags: ["Coming Soon"],
  category: "Placeholder",
  featured: true
};

export default function Test1Page() {
  const router = useRouter();
  
  return (
    <WritingTemplate 
      selectedPost={test1Post}
      onBack={() => router.back()}
    />
  );
} 