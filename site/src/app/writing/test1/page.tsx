"use client";

import { WritingTemplate } from "@/components/writing-template";
import { useRouter } from "next/navigation";

const test1Post = {
  id: "test1",
  title: "Concerns for peers",
  excerpt: "The old world is dying, and the new world struggles to be born: now is the time of monsters. Reflections on AI progress and human adaptation...",
  content: `# Concerns for peers

> "The old world is dying, and the new world struggles to be born: now is the time of monsters."

Reading this quote enforced my opinion on the state of AI and the impact it has on humanity.

The world isn't equipped for how it's changing with AI progress, even those in technical fields seem clueless to that fact. The most recent events with Grok 4 solidify that, with many people not understanding what a model even is, and blindly trusting fine tuned benchmarks.

Standardized education, mentorships, and special tutoring programs don't create the correct mental models which develop naturally in an individual who would dominate the new world.

It takes a special combination of technical ability and personal accounts of unfair circumstances to understand the current position of not so sophisticated lies, where we're leading, and how to take advantage of it.

People with said traits are deeply unwell, having deep technical capabilities and a developmental period that was plagued with trial by fire evidently causes that.

They will take advantage of the situation without remorse, and so should you. Not by short term gain from fucking someone over, but by scraping together the people who could survive on air alone in order to take advantage of the reducing opportunity windows.

It's a bit ironic I type this, it seems performative, like I'm one of the good guys helping you. Standing on some moral high ground to assist the less fortunate.

I'm not.

Don't manically work to catch up due to some spinal reflex of fear. That's the fastest way to die meaninglessly. Humans are hunters of persistence, this fact stands regardless of domain or condition. Apply that fact to your own work.

If you want to be a historical figure or someone of great success, the participation in cultures of myopia of fear based reactivity must end.

Quiet deliberate persistence makes for the most dangerous and competent people, it's in your best interest to become one.

Ideally create a group of them or at the very least find someone who's willing to bleed for their ambitions. They will become a reluctant leader, but a good one.

If there's one thing to take from this it's that humans can't survive alone, regardless of how intelligent and olympian.

However, an olympian can drag others to summit.`,
  date: "2025-07-14",
  readTime: "4 min read",
  tags: ["ai", "capitalization"],
  category: "Thoughts",
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