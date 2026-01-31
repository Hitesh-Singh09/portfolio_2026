import React from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Marquee from "@/components/ui/Marquee";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";

export default function Hero() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const staggerContainer = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-background pt-20">
      {/* Tech Background Image - Removed as per user request */}


      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-900/20 blur-[120px] rounded-full pointer-events-none z-0"></div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="max-w-5xl mx-auto text-center z-10 px-6 flex-grow flex flex-col justify-center"
      >
        {/* Badge */}
        <motion.div variants={fadeInUp} className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 backdrop-blur-sm border border-border/50 text-sm font-medium text-secondary-foreground">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            Currently open to new opportunities and freelance work.
          </div>
        </motion.div>

        {/* Heading */}
        <motion.h1
          variants={fadeInUp}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 font-display bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70"
        >
          Building digital
          <br />
          <span className="text-primary italic">experiences</span> that matter.
        </motion.h1>

        {/* Description */}
        <motion.p
          variants={fadeInUp}
          className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Hi, I'm a passionate frontend developer crafting pixel-perfect, interactive, and accessible web interfaces. I turn ideas into elegant code.
        </motion.p>
        {/* Social Links */}
        <motion.div variants={fadeInUp} className="flex justify-center gap-6 mb-5">
          <a
            href="https://linkedin.com/in/hitesh-singh-9009m"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors transform hover:scale-110"
          >
            <Linkedin className="w-6 h-6" />
          </a>

          <a
            href="mailto:hiteshsingh922@gmail.com"
            className="text-muted-foreground hover:text-primary transition-colors transform hover:scale-110"
          >
            <Mail className="w-6 h-6" />
          </a>
        </motion.div>
        {/* CTA Buttons */}
        <motion.div
          variants={fadeInUp}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <Button
            size="lg"
            className="group min-w-[160px] text-base h-12 rounded-full"
            onClick={(e) => {
              e.preventDefault();
              const element = document.getElementById('projects');
              element?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            View Projects
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="min-w-[160px] text-base h-12 rounded-full hover:bg-secondary/80"
          >
            <a href="/Hitesh Singh Resume.pdf" download>
              Download CV
              <Download className="ml-2 w-4 h-4" />
            </a>
          </Button>
        </motion.div>


      </motion.div>

      {/* Marquee Strap at the bottom */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="w-full mt-auto mt-20"
      >
        <Marquee />
      </motion.div>
    </section>
  );
}
