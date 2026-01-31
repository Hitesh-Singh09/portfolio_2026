import React from "react";
import Layout from "@/components/layouts/Layout";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <About/>
      <Skills/>
      <Projects/>
      <Experience/>
      <Contact/>
      {/* Add more sections later */}
    </Layout>
  );
}
