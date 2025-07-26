"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Zap, X, Code } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

export function Projects() {
  const [showCodeModal, setShowCodeModal] = useState(false);
  const [selectedCode, setSelectedCode] = useState("");

  // Technology to SVG mapping
  const techIcons: { [key: string]: string } = {
    "vLLM": "/svgs/vLLM-Logo.svg",
    "Python": "/svgs/python.svg",
    "Docker": "/svgs/docker.svg",
    "AWS": "/svgs/EC2.svg",
    "C++": "/svgs/cplusplus.svg",
    "PostgreSQL": "/svgs/postgresql.svg",
    "InfluxDB": "/svgs/influxdb.svg",
    "Digital Ocean": "/svgs/digitalocean.svg",
    "Next.js 15": "/svgs/nextdotjs.svg",
    "React 19": "/svgs/react.svg",
    "TypeScript": "/svgs/typescript.svg",
    "OpenCV.js": "/svgs/opencv.svg",
    "OpenCV": "/svgs/opencv.svg",
    "MicroPython": "/svgs/python.svg",
    "Discord.py": "/svgs/python.svg",
    "Docker Compose": "/svgs/docker.svg",
    "CUDA": "/svgs/cuda-svgrepo-com.svg",
  };

  const codeSnippets = {
    "Low power device signal processing": `void loop()
{
    // Read 2 × 1024-sample DMA blocks → 2048 samples
    static uint32_t raw[FFT_N];
    size_t got = 0;
    while (got < sizeof(raw)) {
        size_t n;
        i2s_read(I2S_PORT,
                 (uint8_t*)raw + got,
                 sizeof(raw) - got,
                 &n, portMAX_DELAY);
        got += n;
    }

    // CIC (popcount) and centre
    for (int i = 0; i < FFT_N; ++i)
        fft_in[i] = (float)pop32(raw[i]) - (DECIM / 2.0f);

    // FFT
    FFT.hammingWindow();
    FFT.execute();
    FFT.complexToMagnitude();

    // analyse
    static uint16_t calib_ctr = 0, matches = 0;
    float peak = 0; int hit = 0;

    for (int b = BIN_MIN; b <= BIN_MAX; ++b) {
        float m = fft_mag[b];
        if (state == CALIB) {
            base[b] = (calib_ctr == 0) ? m :
                      (m > base[b] ? BASE_UP*base[b] + (1-BASE_UP)*m
                                   : BASE_DN*base[b] + (1-BASE_DN)*m);
        } else {
            float snr = 20*log10f((m+EPS)/(base[b]+EPS));
            if (snr > SNR_DB) ++hit;
            peak = fmaxf(peak, snr);
            if (!hit)
                base[b] = (m > base[b] ? BASE_UP*base[b] + (1-BASE_UP)*m
                                       : BASE_DN*base[b] + (1-BASE_DN)*m);
        }
    }

    if (state == CALIB) {
        if (++calib_ctr >= CALIB_N) {
            state = RUN;
            Serial.println("Calibration done.");
        }
        return;
    }

    bool leak = hit >= TRIG_MIN && hit <= TRIG_MAX;
    matches   = leak ? matches+1 : 0;

    static uint32_t t0 = 0;
    if (matches >= CONFIRM) {
        Serial.printf("LEAK  | SNR %.1f dB | bins %d\\n", peak, hit);
        matches = 0;
    } else if (millis() - t0 > 500) {
        Serial.printf("Clear | SNR %.1f dB | bins %d\\n", peak, hit);
        t0 = millis();
    }
}`
  };

  const handleViewCode = (projectTitle: string) => {
    setSelectedCode(codeSnippets[projectTitle as keyof typeof codeSnippets] || "");
    setShowCodeModal(true);
  };

  const projects = [
    {
      title: "Automated Medical Billing Forms",
      description: "AI-powered medical billing automation system using fine tuned, INT4 Quantized, Regex prior to prompting, vLLM inference, RAG for intelligent form processing, and PDF editing libraries for seamless document generation and processing. For 180 tokens/second on a singular 4080 super",
      technologies: ["vLLM", "RAG", "Python", "Docker", "Fine tuned LLM", "Regex", "AWS"],
      githubUrl: "#",
      liveUrl: "#",
      status: "Active",
      videoUrl: "/demo-ai-biller.mp4",
      images: [
        "/api/placeholder/400/300", // Replace with actual image paths
        "/api/placeholder/400/300",
        "/api/placeholder/400/300"
      ],
      highlights: [
        "Custom local model deployment",
        "Intelligent form extraction",
        "RAG-based processing",
        "Automated PDF generation"
      ]
    },
    {
      title: "Real Time Compressed Gas Leak Sensors",
      description: "ESP32-based sensor network for real-time detection and monitoring of compressed gas leaks with custom C++ libraries, wireless communication, and instant alerting system.",
      technologies: ["C++", "Espressif","PostgreSQL", "InfluxDB", "Docker", "Digital Ocean", "Custom Signal Processing ^_^"],
      githubUrl: "#",
      liveUrl: "https://sonicsensing.com",
      status: "Active",
      videoUrl: "/demo.mp4", // Updated to use the demo video
      images: [
        "/api/placeholder/400/300", // Replace with actual image paths
        "/api/placeholder/400/300",
        "/api/placeholder/400/300"
      ],
      highlights: [
        "Real-time gas leak detection",
        "Wireless sensor network",
        "Custom C++ libraries",
        "Instant alerting system"
      ]
    },
    {
      title: "Image to G-Code Converter",
      description: "Next.js web application that converts images to G-code for CNC machines using OpenCV.js vectorization. Features color region processing, centerline extraction, and optimized toolpath generation.",
      technologies: ["Next.js 15", "React 19", "TypeScript", "OpenCV.js", "Tailwind CSS", "Radix UI"],
      githubUrl: "https://github.com/kyle-compute/imagetogcode",
      liveUrl: "#",
      status: "Completed",
      videoUrl: "/fern.mp4",
      images: [
        "/api/placeholder/400/300",
        "/api/placeholder/400/300",
        "/api/placeholder/400/300"
      ],
      highlights: [
        "Color region vectorization",
        "Centerline extraction algorithms",
        "Path optimization for CNC",
        "Real-time image processing"
      ]
    },
    {
      title: "CUAS on Ultra Low Powered Systems",
      description: "Counter-Unmanned Aircraft System implementation on ultra-low power embedded systems using computer vision and machine learning for autonomous detection and tracking.",
      technologies: ["OpenCV", "MicroPython", "Espressif-IDF", "CUDA"],
      githubUrl: "#",
      liveUrl: "#",
      status: "Completed",
      videoUrl: null,
      images: [
        "/api/placeholder/400/300", // Replace with actual image paths
        "/api/placeholder/400/300",
        "/api/placeholder/400/300"
      ],
      highlights: [
        "Processing Power Constraints",
        "Real-time object detection",
        "Autonomous tracking system",
      ]
    },
    {
      title: "MLH Elobot - Competitive Discord Bot",
      description: "Discord bot that gamifies productivity for startup founders through weekly challenges, peer review, and ELO ranking system. Features competitive sprint cycles with difficulty voting and proof-based completion verification.",
      technologies: ["Python", "Discord.py", "PostgreSQL", "Docker", "ELO Algorithm", "Docker Compose"],
      githubUrl: "https://github.com/kyle-compute/StartupBot",
      liveUrl: "#",
      status: "Completed",
      videoUrl: "/botdemo.mp4",
      images: [
        "/api/placeholder/400/300",
        "/api/placeholder/400/300",
        "/api/placeholder/400/300"
      ],
      highlights: [
        "Weekly sprint challenges",
        "Peer review system",
        "ELO ranking algorithm",
        "Community-driven difficulty rating"
      ]
    },
    {
      title: "Low power device signal processing",
      description: "Signal processing algorithms optimized for ultra-low power embedded device with limited processing capabilities.",
      technologies: ["C++", "DSP", "Embedded Systems", "Power Optimization"],
      githubUrl: "#",
      liveUrl: "#",
      status: "Completed",
      videoUrl: null,
      hasCode: true,
      images: [
        "/api/placeholder/400/300", // Replace with actual image paths
        "/api/placeholder/400/300",
        "/api/placeholder/400/300"
      ],
      highlights: [
        "Real-time signal analysis",
        "Advanced DSP algorithms",
        "Low power System Work"
      ]
    },
    {
      title: "C++ JSON Tokenizer",
      description: "Custom JSON Tokenizer from scratch in C++.",
      technologies: ["C++", "My prefrontal cortex"],
      githubUrl: "#",
      liveUrl: "#",
      status: "Completed",
      videoUrl: null,
      images: [
        "/api/placeholder/400/300", // Replace with actual image paths
        "/api/placeholder/400/300",
        "/api/placeholder/400/300"
      ],
      highlights: [
        "Memory-efficient tokenization",
        "Custom parsing algorithms",
        "Data structures..."
        
      ]
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Production":
      case "Live":
        return "bg-[#f0eee6]/60 text-[#181414] border-[#f0eee6]";
      case "Active":
        return "bg-[#f0eee6]/80 text-[#181414] border-[#f0eee6]";
      case "Development":
        return "bg-[#f0eee6]/50 text-[#181414] border-[#f0eee6]";
      case "Completed":
        return "bg-[#f0eee6]/40 text-[#181414] border-[#f0eee6]";
      default:
        return "bg-[#f0eee6]/60 text-[#181414] border-[#f0eee6]";
    }
  };

  return (
    <>
      <section className="mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-[#181414] to-[#181414]/80 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A showcase of specialized projects focused on real-time monitoring and sensor technologies
          </p>
        </div>

        <div className="grid gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-500 border-2 hover:border-[#f0eee6]/50 bg-gradient-to-br from-[#f0eee6]/20 via-[#f0eee6]/10 to-[#f0eee6]/20 backdrop-blur-sm overflow-hidden">
              <CardHeader className="pb-6">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-[#f0eee6]/60 rounded-lg">
                      <Zap className="h-6 w-6 text-[#181414]" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl mb-1">{project.title}</CardTitle>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(project.status)}`}>
                        {project.status}
                      </span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                {/* Project Media Section */}
                {project.videoUrl && (
                  <div className="relative">
                    <div className="relative aspect-video bg-[#f0eee6]/20 rounded-lg overflow-hidden group/video">
                      <video 
                        className="w-full h-full object-cover"
                        autoPlay
                        loop
                        muted
                        playsInline
                        preload="auto"
                      >
                        <source src={project.videoUrl} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                  </div>
                )}

                {/* Project Description */}
                <div className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Project Highlights */}
                  <div className="grid grid-cols-2 gap-3">
                    {project.highlights.map((highlight, highlightIndex) => (
                      <div key={highlightIndex} className="flex items-center gap-2 p-3 bg-[#f0eee6]/40 rounded-lg border border-[#f0eee6]/50">
                        <div className="w-2 h-2 bg-[#181414] rounded-full"></div>
                        <span className="text-sm font-medium text-[#181414]">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Technologies */}
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1.5 bg-[#f0eee6]/60 text-[#181414] rounded-full text-sm font-medium border border-[#f0eee6]/50 hover:bg-[#f0eee6]/80 hover:shadow-md transition-all duration-200 hover:scale-105 flex items-center gap-2"
                      >
                        {techIcons[tech] && (
                          <Image
                            src={techIcons[tech]}
                            alt={`${tech} icon`}
                            width={16}
                            height={16}
                            className="flex-shrink-0"
                          />
                        )}
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                {(project.videoUrl || project.hasCode) && (
                  <div className="flex gap-4 pt-4">
                    {project.hasCode && (
                      <Button 
                        variant="outline" 
                        size="default" 
                        onClick={() => handleViewCode(project.title)}
                        className="flex-1 border-[#f0eee6] text-[#181414] hover:bg-[#f0eee6]/50"
                      >
                        <Code size={18} />
                        View Code
                      </Button>
                    )}
                    {project.videoUrl && project.title !== "Automated Medical Billing Forms" && (
                      <Button variant="default" size="default" asChild className={`${project.hasCode ? "flex-1" : "w-full"} bg-[#181414] hover:bg-[#181414]/80 text-[#f0eee6]`}>
                        {project.title === "MLH Elobot - Competitive Discord Bot" || project.title === "Image to G-Code Converter" ? (
                          <a href={project.githubUrl} className="flex items-center gap-2">
                            <ExternalLink size={18} />
                            View on GitHub
                          </a>
                        ) : (
                          <a href={project.liveUrl} className="flex items-center gap-2">
                            <ExternalLink size={18} />
                            Live Demo
                          </a>
                        )}
                      </Button>
                    )}
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Code Modal */}
      {showCodeModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-card border-2 border-[#f0eee6]/50 rounded-lg w-full max-w-4xl max-h-[80vh] overflow-hidden">
            <div className="flex items-center justify-between p-4 border-b border-[#f0eee6]/50">
              <h3 className="text-lg font-semibold text-[#181414]">Code Preview</h3>
              <Button variant="ghost" size="sm" onClick={() => setShowCodeModal(false)} className="text-[#181414] hover:bg-[#f0eee6]/50">
                <X size={20} />
              </Button>
            </div>
            <div className="p-4 overflow-auto max-h-[calc(80vh-80px)]">
              <pre className="bg-[#f0eee6]/30 p-4 rounded-lg overflow-x-auto text-sm font-mono border border-[#f0eee6]/50">
                <code className="text-[#181414]">{selectedCode}</code>
              </pre>
            </div>
          </div>
        </div>
      )}
    </>
  );
} 