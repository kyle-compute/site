import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Briefcase } from "lucide-react";

interface WorkExperience {
  title: string;
  company: string;
  location: string;
  achievements: (string | React.JSX.Element)[];
}

const workHistory: WorkExperience[] = [
  {
    title: "Embedded Systems Engineer",
    company: "Computer Networking Services",
    location: "San Diego, CA",
    achievements: [
      <>Cut photometric variance <strong>40%</strong> in AC lighting per IEEE 1789</>,
      "Built C# GUI for PWM distortion analysis",
      "Wrote compliance docs for QA + certification"
    ]
  },
  {
    title: "Network Engineer Intern",
    company: "Murrieta Valley USD",
    location: "Murrieta, CA",
    achievements: [
      <>Migrated bell system to multicast (↑<strong>25%</strong> efficiency)</>,
      "Deployed L3 switches + routing for 12 campuses",
      "Hardened network: firewalls, VLANs, ACLs",
      <>Cut congestion <strong>20%</strong> via QoS + VLAN tuning</>
    ]
  }
];

function WorkCard({ experience }: { experience: WorkExperience }) {
  return (
    <Card className="group hover:shadow-lg transition-all duration-300 border hover:border-[#f0eee6]/50 bg-[#f0eee6]/30 h-full">
      <CardHeader className="pb-4">
        <div className="flex items-start gap-3">
          <div className="p-2 bg-[#f0eee6]/60 rounded-lg">
            <Briefcase className="h-5 w-5 text-[#181414]" />
          </div>
          <div className="flex-1">
            <CardTitle className="text-lg text-[#181414] mb-1">
              {experience.title}
            </CardTitle>
            <p className="text-sm font-medium text-[#181414]/80 mb-1">
              {experience.company}
            </p>
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <MapPin className="h-3 w-3" />
              {experience.location}
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {experience.achievements.map((achievement, index) => (
            <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
              <div className="w-1.5 h-1.5 bg-[#181414] rounded-full mt-2 flex-shrink-0"></div>
              <span>{achievement}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}

export function WorkHistory() {
  return (
    <section className="mb-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-[#181414] to-[#181414]/80 bg-clip-text text-transparent">
          Work Experience
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Professional experience in embedded systems, networking, and infrastructure
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {workHistory.map((experience, index) => (
          <WorkCard key={index} experience={experience} />
        ))}
      </div>
    </section>
  );
} 