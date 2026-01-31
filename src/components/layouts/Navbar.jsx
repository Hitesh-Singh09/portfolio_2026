import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [theme, setTheme] = useState("dark");

  // Load saved theme
  useEffect(() => {
    const saved = localStorage.getItem("theme") || "dark";
    setTheme(saved);
    document.documentElement.classList.toggle("dark", saved === "dark");
  }, []);

  // Toggle theme
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  const sections = ["Home", "Projects", "Skills", "Contact"];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b bg-background/70 backdrop-blur-xl">
      <div className="max-w-6xl mx-auto flex items-center justify-between p-4">

        {/* Logo */}
        <h1 className="text-xl font-semibold">MyPortfolio</h1>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6">
          {sections.map((sec) => (
            <a
              key={sec}
              href={`#${sec.toLowerCase()}`}
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById(sec.toLowerCase());
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="hover:text-primary transition font-medium cursor-pointer"
            >
              {sec}
            </a>
          ))}
        </nav>

        {/* Theme + Mobile toggle */}
        <div className="flex items-center gap-3">
          <Button
            variant="outline"
            size="icon"
            onClick={toggleTheme}
            className="rounded-full"
          >
            {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
          </Button>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden border-t bg-background">
          <nav className="flex flex-col p-4 gap-4">
            {sections.map((sec) => (
              <a
                key={sec}
                href={`#${sec.toLowerCase()}`}
                onClick={(e) => {
                  e.preventDefault();
                  setMobileOpen(false);
                  const element = document.getElementById(sec.toLowerCase());
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="text-lg hover:text-primary transition cursor-pointer"
              >
                {sec}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
