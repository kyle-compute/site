"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Folder, PlayCircle, Zap, X, Code } from "lucide-react";
import { useState } from "react";

export function Projects() {
  const [showCodeModal, setShowCodeModal] = useState(false);
  const [selectedCode, setSelectedCode] = useState("");

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
        "Ultra-low power consumption",
        "Real-time object detection",
        "Autonomous tracking system",
        "Edge computing optimization"
      ]
    },
    {
      title: "C++ JSON Tokenizer",
      description: "High-performance JSON tokenizer implementation in C++ with custom parsing algorithms and memory-efficient token processing for embedded systems and performance-critical applications.",
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
        "High-performance parsing",
        "Memory-efficient tokenization",
        "Custom parsing algorithms",
        "Embedded systems optimized"
      ]
    },
    {
      title: "Low power device signal processing",
      description: "Advanced signal processing algorithms optimized for ultra-low power embedded devices with real-time analysis capabilities and efficient power management for extended battery life.",
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
        "Ultra-low power consumption",
        "Real-time signal analysis",
        "Advanced DSP algorithms",
        "Extended battery life"
      ]
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Production":
      case "Live":
        return "bg-green-50 text-green-700 border-green-300 dark:bg-green-900/20 dark:text-green-400 dark:border-green-800";
      case "Active":
        return "bg-blue-50 text-blue-700 border-blue-300 dark:bg-blue-900/20 dark:text-blue-400 dark:border-blue-800";
      case "Development":
        return "bg-yellow-50 text-yellow-700 border-yellow-300 dark:bg-yellow-900/20 dark:text-yellow-400 dark:border-yellow-800";
      case "Completed":
        return "bg-purple-50 text-purple-700 border-purple-300 dark:bg-purple-900/20 dark:text-purple-400 dark:border-purple-800";
      default:
        return "bg-gray-50 text-gray-700 border-gray-300 dark:bg-gray-900/20 dark:text-gray-400 dark:border-gray-800";
    }
  };

  return (
    <>
      <section className="mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A showcase of specialized projects focused on real-time monitoring and sensor technologies
          </p>
        </div>

        <div className="grid gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-500 border-2 hover:border-primary/40 bg-gradient-to-br from-card via-card/95 to-card/90 backdrop-blur-sm overflow-hidden">
              <CardHeader className="pb-6">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Zap className="h-6 w-6 text-primary" />
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
                    <div className="relative aspect-video bg-black/5 rounded-lg overflow-hidden group/video">
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
                      <div key={highlightIndex} className="flex items-center gap-2 p-3 bg-secondary/50 rounded-lg border">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-sm font-medium">{highlight}</span>
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
                        className="px-3 py-1.5 bg-gradient-to-r from-secondary to-secondary/80 text-secondary-foreground rounded-full text-sm font-medium border hover:shadow-md transition-all duration-200 hover:scale-105"
                      >
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
                        className="flex-1"
                      >
                        <Code size={18} />
                        View Code
                      </Button>
                    )}
                    {project.videoUrl && (
                      <Button variant="default" size="default" asChild className={project.hasCode ? "flex-1" : "w-full"}>
                        <a href={project.liveUrl} className="flex items-center gap-2">
                          <ExternalLink size={18} />
                          Live Demo
                        </a>
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
          <div className="bg-card border-2 border-primary/20 rounded-lg w-full max-w-4xl max-h-[80vh] overflow-hidden">
            <div className="flex items-center justify-between p-4 border-b">
              <h3 className="text-lg font-semibold">Code Preview</h3>
              <Button variant="ghost" size="sm" onClick={() => setShowCodeModal(false)}>
                <X size={20} />
              </Button>
            </div>
            <div className="p-4 overflow-auto max-h-[calc(80vh-80px)]">
              <pre className="bg-muted/50 p-4 rounded-lg overflow-x-auto text-sm font-mono">
                <code className="text-foreground">{selectedCode}</code>
              </pre>
            </div>
          </div>
        </div>
      )}
    </>
  );
} 