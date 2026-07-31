"use client";

import { useEffect, useRef, useState } from "react";

const skills = [
  { name: "HTML", src: "/icons/html.png", remicolor: "red" },
  { name: "CSS", src: "/icons/css.png", remicolor: "purple750" },
  { name: "JavaScript", src: "/icons/js.png", remicolor: "yellow" },
  { name: "TypeScript", src: "/icons/typescript.png", remicolor: "blue650" },
  { name: "WordPress", src: "/icons/wordpress.png", remicolor: "blue" },
  { name: "Next.js", src: "/icons/nextjs.png", remicolor: "black" },
  { name: "Node.js", src: "/icons/nodejs.png", remicolor: "green" },
  { name: "Tailwind CSS", src: "/icons/tailwindcss.png", remicolor: "blue" },
];

// Color mapping – shadow colors
const colorMap: Record<string, string> = {
  red: "#EF4444",
  green: "#66cf3b",
  blue: "#3B82F6",
  yellow: "#EAB308",
  black: "#000000",
  purple750:'#6e3097',
  blue650:'#007ac6'
};

export function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-16 px-5 md:px-10 bg-slate-50 border-y border-slate-200"
    >
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-10">
          <h2 className="mt-2 text-2xl md:text-3xl font-bold text-slate-900">
            Technologies I Work With
          </h2>
          <p className="mt-2 text-sm text-slate-500 max-w-xl mx-auto">
            Tools and frameworks I use daily to build modern, responsive web
            applications.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 cursor-pointer md:grid-cols-4 lg:grid-cols-4 gap-4 md:gap-6">
          {skills.map((skill, index) => {
            const shadowColor = colorMap[skill.remicolor];
            return (
              <div
                key={skill.name}
                className={`group bg-white rounded-xl border border-slate-200 p-4 md:p-6 text-center transition-all duration-500 hover:-translate-y-2 hover:border-blue-400 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={
                  {
                    transitionDelay: `${index * 80}ms`,
                    "--hover-shadow-color": shadowColor,
                  } as React.CSSProperties
                }
              >
                {/* Icon */}
                <div className="flex justify-center cursor-pointer mb-3">
                  <img
                    src={skill.src}
                    alt={skill.name}
                    className="w-10 h-10 md:w-12 md:h-12 transition-all duration-300 group-hover:scale-110 object-contain"
                    style={{
                      filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.1))",
                    }}
                  />
                </div>

                <p className="text-sm md:text-base font-medium text-slate-700 transition-colors duration-300 group-hover:text-blue-600">
                  {skill.name}
                </p>

                <div className="w-8 h-0.5 mx-auto mt-2 rounded-full bg-slate-200 transition-all duration-300 group-hover:w-12 group-hover:bg-blue-500" />
              </div>
            );
          })}
        </div>
      </div>

      {/* Hover shadow effect – applied globally via style tag */}
      <style>{`
        .group:hover {
          box-shadow: 0 10px 40px -8px var(--hover-shadow-color, rgba(0,0,0,0.2));
        }
      `}</style>
    </section>
  );
}
