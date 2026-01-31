import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);

    // Show button when page is scrolled down
    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.button
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.8, y: 20 }}
                    transition={{ duration: 0.3 }}
                    onClick={scrollToTop}
                    className="fixed bottom-8 right-8 z-50 group"
                    aria-label="Scroll to top"
                >
                    {/* Glow effect */}
                    <div className="absolute inset-0 bg-white/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    {/* Button */}
                    <div className="relative flex items-center justify-center w-14 h-14 bg-black border-2 border-white/20 rounded-full shadow-2xl hover:border-white/40 hover:scale-110 transition-all duration-300">
                        <ArrowUp className="w-6 h-6 text-white group-hover:translate-y-[-2px] transition-transform duration-300" strokeWidth={2.5} />
                    </div>
                </motion.button>
            )}
        </AnimatePresence>
    );
}
