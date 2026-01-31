import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Contact() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="contact" className="py-32 bg-background relative overflow-hidden text-center">

      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-900/20 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">

        {/* Small Label */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mb-6"
        >
          <span className="text-sm font-bold tracking-widest text-slate-400 uppercase">
            Contact Me
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-4xl md:text-6xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-200 to-slate-400 mb-20"
        >
          Ready to develop your next big thing?
        </motion.h2>

        {/* Big Cards/Buttons */}
        <div className="flex justify-between items-center max-w-3xl mx-auto">

          {/* Discord Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col items-center"
          >
            <h3 className="text-4xl font-semibold text-white mb-2">Mail</h3>
            <p className="text-slate-500 mb-8">hiteshsingh922@gmail.com</p>
            <Button
              className="rounded-full px-8 py-6 text-base font-semibold bg-gradient-to-r from-amber-200 to-amber-100 text-black shadow-[0_0_20px_rgba(253,230,138,0.4)] hover:scale-105 transition-transform"
            >
              Contact Me on Mail
            </Button>
          </motion.div>

          {/* LinkedIn Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex flex-col items-center"
          >
            <h3 className="text-4xl font-semibold text-white mb-2">LinkedIn</h3>
            <p className="text-slate-500 mb-8">in/hitesh</p>
            <a href="https://linkedin.com/in/hitesh-singh-9009m"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Button
                className=" cursor-pointer rounded-full px-8 py-6 text-base font-semibold bg-gradient-to-r from-cyan-200 to-blue-200 text-black shadow-[0_0_20px_rgba(165,243,252,0.4)] hover:scale-105 transition-transform"
              >
                Visit my LinkedIn
              </Button>
            </a>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
