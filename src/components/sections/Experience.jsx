import React from "react";
import { experienceData } from "@/data/experienceData";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-background relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-900/20 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <Briefcase className="w-4 h-4" />
            <span>Career Path</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-6">
            Work <span className="text-primary">Experience</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A journey of learning, building, and contributing to real-world projects.
          </p>
        </motion.div>

        <div className="relative border-l border-border/50 ml-6 md:ml-12 space-y-12">
          {experienceData.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative pl-8 md:pl-12"
            >
              <div className="absolute -left-[5px] top-6 w-3 h-3 rounded-full bg-primary ring-4 ring-background" />

              <div className="bg-card border border-border/50 hover:border-primary/50 p-6 md:p-8 rounded-2xl transition-all hover:shadow-lg hover:shadow-primary/5 group">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                  <div className="flex items-start gap-4">
                    {exp.logo && (
                      <div className="w-12 h-12 rounded-lg bg-white/10 p-2 border border-white/10 flex items-center justify-center shrink-0">
                        <img
                          src={exp.logo}
                          alt={exp.company}
                          className="w-full h-full object-contain"
                        />
                      </div>
                    )}
                    <div>
                      <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                        {exp.role}
                      </h3>
                      <p className="text-primary font-medium">{exp.company}</p>
                    </div>
                  </div>
                  <span className="px-3 py-1 text-xs font-semibold rounded-full bg-secondary text-secondary-foreground w-fit">
                    {exp.duration}
                  </span>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {exp.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {exp.responsibilities.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground/80">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/50 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 text-xs rounded-md bg-secondary/50 text-secondary-foreground border border-border/50"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
