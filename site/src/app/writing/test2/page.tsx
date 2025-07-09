"use client";

import { WritingTemplate } from "@/components/writing-template";
import { useRouter } from "next/navigation";

const test2Post = {
  id: "test2",
  title: "Coming Soon",
  excerpt: "Placeholder for upcoming writing content...",
  content: `# Coming Soon

I'm going to upload stuff soon i promise

Stay tuned for more content!`,
  date: "2024-01-18",
  readTime: "1 min read",
  tags: ["Coming Soon"],
  category: "Placeholder"
};

export default function Test2Page() {
  const router = useRouter();
  
  return (
    <WritingTemplate 
      selectedPost={test2Post}
      onBack={() => router.back()}
    />
  );
} 