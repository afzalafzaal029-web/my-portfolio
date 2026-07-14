'use client'

import { useEffect, useRef, useState } from 'react'

const skills = [
  { name: 'HTML', icon: 'html5', color: '#E34F26' },
  { name: 'CSS', icon: 'css3', color: '#1572B6' },
  { name: 'JavaScript', icon: 'javascript', color: '#F7DF1E' },
  { name: 'TypeScript', icon: 'typescript', color: '#3178C6' },
  { name: 'React', icon: 'react', color: '#61DAFB' },
  { name: 'Next.js', icon: 'nextdotjs', color: '#000000' },
  { name: 'Node.js', icon: 'nodedotjs', color: '#339933' },
  { name: 'Tailwind CSS', icon: 'tailwindcss', color: '#06B6D4' },
]

export function Skills() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-16 px-5 md:px-10 bg-slate-50 border-y border-slate-200">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="mt-2 text-2xl md:text-3xl font-bold text-slate-900">
            Technologies I Work With
          </h2>
          <p className="mt-2 text-sm text-slate-500 max-w-xl mx-auto">
            Tools and frameworks I use daily to build modern, responsive web applications.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 cursor-pointer md:grid-cols-4 lg:grid-cols-4 gap-4 md:gap-6">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className={`group bg-white rounded-xl border border-slate-200 p-4 md:p-6 text-center transition-all duration-500 hover:-translate-y-2 hover:shadow-lg hover:border-blue-400 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
              style={{
                transitionDelay: `${index * 80}ms`,
              }}
            >
              {/* Icon */}
              <div className="flex justify-center cursor-pointer mb-3">
                <img
                  src={`https://cdn.jsdelivr.net/npm/simple-icons@v14/icons/${skill.icon}.svg`}
                  alt={skill.name}
                  className="w-10 h-10 md:w-12 md:h-12 transition-all duration-300 group-hover:scale-110"
                  style={{
                    filter:
                      skill.name === 'Next.js'
                        ? 'brightness(0)'
                        : `drop-shadow(0 2px 4px ${skill.color}40)`,
                  }}
                />
              </div>

              {/* Name */}
              <p className="text-sm md:text-base font-medium text-slate-700 transition-colors duration-300 group-hover:text-blue-600">
                {skill.name}
              </p>

              {/* Underline hover effect */}
              <div className="w-8 h-0.5 mx-auto mt-2 rounded-full bg-slate-200 transition-all duration-300 group-hover:w-12 group-hover:bg-blue-500" />
            </div>
          ))}
        </div>
      </div>

      {/* Inline styles for animation */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  )
}