import React from "react";

export default function Marquee() {
    const items = [
        { name: "React", icon: "/logo512.png" },
        { name: "Vue", icon: "/Vuejs.png" },
        { name: "Next.js", icon: "/nextjs.svg" },
        { name: "Nuxt", icon: "/NuxtJs.png" },
        { name: "JavaScript", icon: "/js.png" },
        { name: "Vite", icon: "/vite.svg" },
    ];

    return (
        <div className="relative w-full overflow-hidden bg-secondary/5 py-4 border-y border-white/5">
            <div className="flex w-max animate-scroll">
                {/* First set */}
                <div className="flex gap-16 mx-8 shrink-0 items-center">
                    {items.map((item, index) => (
                        <div key={`a-${index}`} className="flex items-center gap-2 group cursor-default">
                            <img
                                src={item.icon}
                                alt={item.name}
                                className="w-8 h-8 md:w-10 md:h-10 object-contain transition-transform duration-300 group-hover:scale-110"
                            />
                            <span className="text-lg font-bold tracking-widest text-muted-foreground/40 uppercase group-hover:text-primary transition-colors">
                                {item.name}
                            </span>
                        </div>
                    ))}
                </div>
                {/* Second set (Duplicate) */}
                <div className="flex gap-16 mx-8 shrink-0 items-center">
                    {items.map((item, index) => (
                        <div key={`b-${index}`} className="flex items-center gap-2 group cursor-default">
                            <img
                                src={item.icon}
                                alt={item.name}
                                className="w-8 h-8 md:w-10 md:h-10 object-contain transition-transform duration-300 group-hover:scale-110"
                            />
                            <span className="text-lg font-bold tracking-widest text-muted-foreground/40 uppercase group-hover:text-primary transition-colors">
                                {item.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
