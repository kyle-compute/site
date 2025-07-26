import { Button } from "@/components/ui/button";
import { Mail, PenTool } from "lucide-react";
import { Logo } from "@/components/ui/logo";
import Image from "next/image";

export function Header() {
  return (
    <div className="text-center mb-16">
      {/* Logo */}
      <div className="flex justify-center mb-8">
        <Logo size={64} className="text-[#181414]" />
      </div>
      
      <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#181414] to-[#181414]/80 bg-clip-text text-transparent leading-tight">
        I&apos;m Kyle a software engineer
      </h1>
      <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-8">
        I build robust ML inference stacks, real-time sensor networks, and low-level systems. You can think of me as claude code on steroids, no micromanagement required :).
      </p>
      
      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <Button 
          asChild
          className="bg-[#181414] hover:bg-[#181414]/80 text-[#f0eee6] px-6 py-3 text-base font-medium transition-all duration-300 hover:scale-105"
        >
          <a href="mailto:kyle@sonicsensing.com" className="flex items-center gap-2">
            <Mail size={20} />
            Engineering Roles Only
          </a>
        </Button>
        
        <Button 
          variant="outline"
          asChild
          className="border-[#f0eee6] text-[#181414] hover:bg-[#f0eee6]/50 px-6 py-3 text-base font-medium transition-all duration-300 hover:scale-105"
        >
          <a href="/writing" className="flex items-center gap-2">
            <PenTool size={20} />
            My Writing
          </a>
        </Button>
        
        <Button 
          variant="outline"
          asChild
          className="border-[#f0eee6] text-[#181414] hover:bg-[#f0eee6]/50 px-6 py-3 text-base font-medium transition-all duration-300 hover:scale-105"
        >
          <a href="https://github.com/kyle-compute" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
            <Image
              src="/svgs/github.svg"
              alt="GitHub icon"
              width={20}
              height={20}
              className="flex-shrink-0"
            />
            Github/OSS
          </a>
        </Button>
      </div>
    </div>
  );
} 