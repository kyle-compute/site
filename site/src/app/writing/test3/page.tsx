import { WritingTemplate } from "@/components/writing-template";

const test3Post = {
  id: "test3",
  title: "Coming Soon",
  excerpt: "Placeholder for upcoming writing content...",
  content: `# Coming Soon

I'm going to upload stuff soon i promise

Stay tuned for more content!`,
  date: "2024-01-16",
  readTime: "1 min read",
  tags: ["Coming Soon"],
  category: "Placeholder"
};

export default function Test3Page() {
  return (
    <WritingTemplate 
      selectedPost={test3Post}
      onBack={() => window.history.back()}
    />
  );
} 