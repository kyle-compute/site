import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Container, GitBranch, Code, Wrench, LucideIcon } from "lucide-react";

// Types for better type safety
interface SkillItem {
  name: string;
  icon?: LucideIcon;
  hasIcon?: boolean;
}

interface SkillCategory {
  title: string;
  icon: LucideIcon;
  skills: SkillItem[];
}

// Skills data separated from presentation
const skillsData: SkillCategory[] = [
  {
    title: "Tools, Infrastructure & Databases",
    icon: Wrench,
    skills: [
      { name: "Docker", icon: Container },
      { name: "Linux" },
      { name: "Git", icon: GitBranch },
      { name: "Firebase" },
      { name: "DigitalOcean" },
      { name: "Nginx" },
      { name: "InfluxDB" },
      { name: "PostgreSQL" },
      { name: "SQLite" },
    ],
  },
  {
    title: "Languages, Libraries & Frameworks",
    icon: Code,
    skills: [
      { name: "C++", hasIcon: true },
      { name: "Python", hasIcon: true },
      { name: "TypeScript", hasIcon: true },
      { name: "React" },
      { name: "Next.js" },
      { name: "PyTorch" },
      { name: "OpenCV" },
      { name: "Pydantic" },
      { name: "SQLAlchemy" },
    ],
  },
];

// Styling constants
const SKILL_ITEM_CLASSES = 
  "px-3 py-2 bg-[#f0eee6]/60 text-[#181414] rounded-lg text-sm font-medium hover:bg-[#f0eee6]/80 transition-colors";
const SKILL_ITEM_WITH_ICON_CLASSES = 
  "flex items-center gap-2 px-3 py-2 bg-[#f0eee6]/60 text-[#181414] rounded-lg text-sm font-medium hover:bg-[#f0eee6]/80 transition-colors";

// Reusable components
function SkillItem({ skill }: { skill: SkillItem }) {
  if (skill.icon) {
    const IconComponent = skill.icon;
    return (
      <div className={SKILL_ITEM_WITH_ICON_CLASSES}>
        <IconComponent size={16} />
        {skill.name}
      </div>
    );
  }

  if (skill.hasIcon) {
    return (
      <div className={SKILL_ITEM_WITH_ICON_CLASSES}>
        <div className="w-2 h-2 bg-[#181414] rounded-full"></div>
        {skill.name}
      </div>
    );
  }

  return (
    <div className={SKILL_ITEM_CLASSES}>
      {skill.name}
    </div>
  );
}

function SkillCard({ category }: { category: SkillCategory }) {
  const IconComponent = category.icon;
  
  return (
    <Card className="group hover:shadow-lg transition-all duration-300 border hover:border-[#f0eee6]/50 bg-[#f0eee6]/30">
      <CardHeader className="pb-4">
        <CardTitle className="text-lg flex items-center gap-2">
          <IconComponent className="h-5 w-5 text-[#181414]" />
          {category.title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-2">
          {category.skills.map((skill, index) => (
            <SkillItem key={index} skill={skill} />
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

export function Skills() {
  return (
    <section className="mb-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-[#181414] to-[#181414]/80 bg-clip-text text-transparent">
          Skills & Expertise
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Technologies and tools I work with to build robust applications and infrastructure
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {skillsData.map((category, index) => (
          <SkillCard key={index} category={category} />
        ))}
      </div>
    </section>
  );
}