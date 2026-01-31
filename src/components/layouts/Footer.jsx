import React from "react";

export default function Footer() {
  return (
    <footer className="fixed bottom-0 w-full bg-background/80 backdrop-blur-md border-t border-border/10 text-center py-4 z-50">
      <p className="text-slate-400 text-sm">
        © {new Date().getFullYear()} Hitesh Singh — Built with ❤️ using React
      </p>
    </footer>
  );
}
