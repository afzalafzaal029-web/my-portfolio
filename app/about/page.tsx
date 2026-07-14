import Image from 'next/image'
import Link from 'next/link'
import { Navbar } from '../Components/Navbar'
import { Footer } from '../Components/Footer'

// Custom SVG Icons (same as Navbar)
const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-5">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
)

const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-5">
    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.03-2.682-.103-.253-.446-1.27.098-2.646 0 0 .84-.269 2.75 1.025.8-.223 1.65-.334 2.5-.334.85 0 1.7.111 2.5.334 1.91-1.294 2.75-1.025 2.75-1.025.544 1.376.201 2.393.099 2.646.64.698 1.03 1.591 1.03 2.682 0 3.841-2.337 4.687-4.565 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
  </svg>
)

const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-5">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
)

const WhatsAppIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-5">
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
  </svg>
)

const socialLinks = [
  { icon: GithubIcon, href: 'https://github.com/afzalafzaal029-web', label: 'GitHub' },
  { icon: LinkedinIcon, href: 'https://www.linkedin.com/in/web-and-app-developere', label: 'LinkedIn' },
  { icon: WhatsAppIcon, href: 'https://wa.me/923103104364', label: 'WhatsApp' },
  { icon: InstagramIcon, href: 'https://www.instagram.com/webdeveloperafzaal', label: 'Instagram' },
]

export default function AboutPage() {
  return (
    <main className="bg-slate-50">
      <Navbar />

      <section className="px-5 pt-32 pb-16 md:px-10 md:pt-40 md:pb-20">
        <div className="mx-auto max-w-5xl">
          <div className="grid md:grid-cols-[1fr_1.5fr] gap-12 items-start">
            {/* Left - Circular Image */}
            <div className="flex flex-col items-center md:items-start">
              <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-blue-600 shadow-xl">
                <Image
                  src="/profile.png"
                  alt="Afzaal"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="mt-6 flex gap-3">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-white border border-slate-200 text-slate-600 hover:text-blue-600 hover:border-blue-600 transition"
                    aria-label={label}
                  >
                    <Icon />
                  </a>
                ))}
              </div>
            </div>

            {/* Right - About Content */}
            <div>
              <p className="text-sm font-mono text-blue-600 uppercase tracking-wider">About Me</p>
              <h1 className="mt-2 text-3xl md:text-4xl font-bold text-slate-900">
                Afzaal — Web & App Developer
              </h1>
              <div className="mt-4 space-y-4 text-slate-600 leading-relaxed">
                <p>
                  I'm a professional Front-End Developer with expertise in HTML, CSS, JavaScript,
                  TypeScript, Tailwind CSS, Node.js, React.js, and Next.js. I'm a passionate
                  front-end developer, skilled in building responsive and dynamic user interfaces.
                </p>
                <p>
                  I specialize in crafting seamless user experiences using technologies like
                  React, Next.js, and Tailwind CSS. With a focus on clean code and performance
                  optimization, I bring designs to life and ensure that applications are both
                  functional and visually appealing.
                </p>
                <p>
                  Driven by a passion for technology and creativity, I aim to deliver intuitive
                  and engaging web experiences.
                </p>
              </div>

              {/* Skills Tags */}
              <div className="mt-6 flex flex-wrap gap-2">
                {['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'JavaScript'].map((skill) => (
                  <span key={skill} className="px-3 py-1 text-xs font-medium bg-white border border-slate-200 rounded-full text-slate-700">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}