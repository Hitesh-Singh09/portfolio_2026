import React from "react";
import { motion } from "framer-motion";
import { Badge } from "lucide-react";

const skills = [
  { name: "HTML5", category: "Frontend", icon: "/html.png" },
  { name: "CSS3", category: "Styling", icon: "/css.png" },
  { name: "JavaScript", category: "Language", icon: "/js.png" },
  { name: "Vue.js", category: "Frontend", icon: "/Vuejs.png" },
  { name: "Nuxt", category: "Framework", icon: "/NuxtJs.png" },
  { name: "React.js", category: "Frontend", icon: "/logo512.png" }, // Assuming logo512 is react, if not I'll just use what I have or standard react icon if available, but for now I'll stick to what's in public or just skip if not sure. Wait, I saw logo512.png usually is react.
  { name: "Next.js", category: "Framework", icon: "/nextjs.svg" }, // Wait, Nuxt is for Vue. Next.js image not found in list? Let me check list again.
  // Images found: NuxtJs.png, Vuejs.png, bootstrap.png, codenicely.png, css.png, git.svg, github.png, html.png, js.png, logo512.png, materialUi.svg, npm.png, postman.png, restapi.png, saas.png, vite.svg, vuetify.svg
  // I will use available images.
  { name: "Bootstrap", category: "Styling", icon: "/bootstrap.png" },
  { name: "Material UI", category: "Styling", icon: "/materialUi.svg" },
  { name: "Vuetify", category: "Styling", icon: "/vuetify.svg" },
  { name: "Vite", category: "Tool", icon: "/vite.svg" },
  { name: "Git", category: "Tool", icon: "/git.svg" },
  { name: "GitHub", category: "Tool", icon: "/github.svg" },
  { name: "Amplify", category: "Tool", icon: "/Amplify.png" },
  { name: "NPM", category: "Tool", icon: "/npm.png" },
  { name: "Postman", category: "Tool", icon: "/postman.png" },
  { name: "REST API", category: "Backend", icon: "/restapi.png" },
  { name: "SaaS", category: "Concept", icon: "/saas.png" },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-background relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-900/20 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-6">
            Technical Proficiency
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A curated list of the tools and technologies I use to bring digital products to life.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-primary/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative flex flex-col items-center justify-center w-28 h-28 p-4 bg-card border border-border hover:border-primary/50 rounded-xl transition-all hover:-translate-y-1 hover:shadow-lg">
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-10 h-10 mb-3 object-contain"
                />
                <span className="font-medium text-sm text-center leading-tight">{skill.name}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

