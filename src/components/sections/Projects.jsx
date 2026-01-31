import React from "react";
import { projectsData } from "@/data/projectsData";
import { motion } from "framer-motion";
import { ExternalLink, Github, Folder } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-background relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-900/20 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <Folder className="w-4 h-4" />
            <span>Portfolio</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-6">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A showcase of the work I've done—blending creativity with clean engineering.
          </p>
        </motion.div>

        <div className="flex flex-col gap-12">
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-primary/10 rounded-[2rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative flex flex-col md:flex-row bg-[#080808] border border-white/5 rounded-[2rem] overflow-hidden hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 transition-all duration-500">
                {/* Image Section - Left (50%) */}
                <div className="w-full md:w-1/2 min-h-[300px] md:min-h-[400px] bg-blue-900/10 relative overflow-hidden p-8 flex items-center justify-center">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-contain transform scale-100 group-hover:scale-105 transition-transform duration-700 drop-shadow-2xl"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <Folder className="w-20 h-20 text-white/10" />
                    </div>
                  )}
                </div>

                {/* Content Section - Right (50%) */}
                <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center items-start text-left">
                  {/* Title */}
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-bold font-display text-white leading-tight mb-4 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400/90 text-base md:text-lg leading-relaxed mb-8">
                    {project.description}
                  </p>

                  {/* Tech Stack Tags */}
                  {project.tech && (
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.tech.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1.5 text-xs font-medium rounded-lg bg-white/5 text-gray-300 border border-white/10 hover:border-primary/50 hover:bg-white/10 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Buttons */}
                  <div className="flex flex-wrap items-center gap-4 mt-auto">
                    <Button
                      variant="ghost"
                      asChild
                      className="rounded-full hover:bg-primary/10 text-gray-300 hover:text-primary border border-white/10 hover:border-primary/50 h-11 px-6 text-sm font-medium transition-all"
                    >
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        Live Demo
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
