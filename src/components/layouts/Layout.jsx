import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ScrollToTop from "@/components/ui/ScrollToTop";

export default function Layout({ children }) {
  return (
    <div className="relative min-h-screen flex flex-col bg-[#0d1224] text-white">
      {/* Fixed Navbar */}
      <Navbar />

      {/* Scrollable Main Content */}
      <main className="grow pt-20 pb-16 overflow-y-auto">
        {children}
      </main>

      {/* Fixed Footer */}
      <Footer />

      {/* Scroll to Top Button */}
      <ScrollToTop />
    </div>
  );
}
