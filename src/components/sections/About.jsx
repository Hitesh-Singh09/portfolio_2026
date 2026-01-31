import React from "react";
import { Code2, Laptop, User, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function About() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="about" className="relative py-24 px-6 overflow-hidden bg-background">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-900/20 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          variants={fadeInUp}
          className="mb-16 text-center"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4" />
            <span>About Me</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-6">
            Passion for <span className="text-primary">Perfection</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            I’m Hitesh Singh, a Frontend Developer with 2+ years of experience crafting modern, high-performance web applications. I specialize in turning design concepts into intuitive, responsive, and scalable user interfaces.
            With a strong focus on problem-solving and performance, I build products that not only look great but also deliver smooth, reliable user experiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: User,
              title: "Who I Am",
              desc: "A developer who thrives on clean code and user-centric design principles.",
            },
            {
              icon: Code2,
              title: "Tech Stack",
              desc: "Fluent in React, Vue, Tailwind, and the modern JavaScript ecosystem.",
            },
            {
              icon: Laptop,
              title: "What I Do",
              desc: "I build responsive web apps, dashboards, and interactive experiences.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="group p-8 rounded-3xl bg-card border border-border/50 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
