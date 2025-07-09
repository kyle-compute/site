import { Button } from "@/components/ui/button";
import { Mail, PenTool } from "lucide-react";
import { Logo } from "@/components/ui/logo";

export function Header() {
  return (
    <div className="text-center mb-16">
      {/* Logo */}
      <div className="flex justify-center mb-8">
        <Logo size={64} className="text-[#181414]" />
      </div>
      
      <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#181414] to-[#181414]/80 bg-clip-text text-transparent leading-tight">
        Hey, I&apos;m Kyle
      </h1>
      <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-8">
        I&apos;m interested in a lot of topics but currently what&apos;s most interesting to me is infra deployment
      </p>
      
      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <Button 
          asChild
          className="bg-[#181414] hover:bg-[#181414]/80 text-[#f0eee6] px-6 py-3 text-base font-medium transition-all duration-300 hover:scale-105"
        >
          <a href="mailto:kyle@sonicsensing.com" className="flex items-center gap-2">
            <Mail size={20} />
            Get in Touch
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
      </div>
    </div>
  );
} 