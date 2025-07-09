import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Container, GitBranch, Code, Wrench } from "lucide-react";

export function Skills() {
  return (
    <section className="mb-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Expertise</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Technologies and tools I work with to build robust applications and infrastructure
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Tools, Infrastructure & Databases Card */}
        <Card className="group hover:shadow-lg transition-all duration-300 border hover:border-primary/30">
          <CardHeader className="pb-4">
            <CardTitle className="text-lg flex items-center gap-2">
              <Wrench className="h-5 w-5 text-primary" />
              Tools, Infrastructure & Databases
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-2">
              <div className="flex items-center gap-2 px-3 py-2 bg-blue-50 text-blue-700 rounded-lg text-sm font-medium hover:bg-blue-100 transition-colors">
                <Container size={16} />
                Docker
              </div>
              <div className="px-3 py-2 bg-yellow-50 text-yellow-700 rounded-lg text-sm font-medium hover:bg-yellow-100 transition-colors">
                Linux
              </div>
              <div className="flex items-center gap-2 px-3 py-2 bg-gray-50 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors">
                <GitBranch size={16} />
                Git
              </div>
              <div className="px-3 py-2 bg-orange-50 text-orange-700 rounded-lg text-sm font-medium hover:bg-orange-100 transition-colors">
                Firebase
              </div>
              <div className="px-3 py-2 bg-cyan-50 text-cyan-700 rounded-lg text-sm font-medium hover:bg-cyan-100 transition-colors">
                DigitalOcean
              </div>
              <div className="px-3 py-2 bg-green-50 text-green-700 rounded-lg text-sm font-medium hover:bg-green-100 transition-colors">
                Nginx
              </div>
              <div className="px-3 py-2 bg-red-50 text-red-700 rounded-lg text-sm font-medium hover:bg-red-100 transition-colors">
                InfluxDB
              </div>
              <div className="px-3 py-2 bg-blue-50 text-blue-700 rounded-lg text-sm font-medium hover:bg-blue-100 transition-colors">
                PostgreSQL
              </div>
              <div className="px-3 py-2 bg-gray-50 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors">
                SQLite
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Languages, Libraries & Frameworks Card */}
        <Card className="group hover:shadow-lg transition-all duration-300 border hover:border-primary/30">
          <CardHeader className="pb-4">
            <CardTitle className="text-lg flex items-center gap-2">
              <Code className="h-5 w-5 text-primary" />
              Languages, Libraries & Frameworks
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-2">
              <div className="flex items-center gap-2 px-3 py-2 bg-blue-50 text-blue-700 rounded-lg text-sm font-medium hover:bg-blue-100 transition-colors">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                C++
              </div>
              <div className="flex items-center gap-2 px-3 py-2 bg-green-50 text-green-700 rounded-lg text-sm font-medium hover:bg-green-100 transition-colors">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                Python
              </div>
              <div className="flex items-center gap-2 px-3 py-2 bg-purple-50 text-purple-700 rounded-lg text-sm font-medium hover:bg-purple-100 transition-colors">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                TypeScript
              </div>
              <div className="px-3 py-2 bg-blue-50 text-blue-700 rounded-lg text-sm font-medium hover:bg-blue-100 transition-colors">
                React
              </div>
              <div className="px-3 py-2 bg-gray-50 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors">
                Next.js
              </div>
              <div className="px-3 py-2 bg-purple-50 text-purple-700 rounded-lg text-sm font-medium hover:bg-purple-100 transition-colors">
                PyTorch
              </div>
              <div className="px-3 py-2 bg-green-50 text-green-700 rounded-lg text-sm font-medium hover:bg-green-100 transition-colors">
                OpenCV
              </div>
              <div className="px-3 py-2 bg-indigo-50 text-indigo-700 rounded-lg text-sm font-medium hover:bg-indigo-100 transition-colors">
                Pydantic
              </div>
              <div className="px-3 py-2 bg-teal-50 text-teal-700 rounded-lg text-sm font-medium hover:bg-teal-100 transition-colors">
                SQLAlchemy
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}