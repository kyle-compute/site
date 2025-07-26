import { PortfolioLayout } from "@/components/layout/portfolio-layout";
import { Header } from "@/components/sections/header";
import { Skills } from "@/components/sections/skills";
import { WorkHistory } from "@/components/sections/work-history";
import { Projects } from "@/components/sections/projects";

export default function Home() {
  return (
    <PortfolioLayout>
      <Header />
      <Skills />
      <WorkHistory />
      <Projects />
    </PortfolioLayout>
  );
}
