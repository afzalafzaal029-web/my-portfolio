import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Check, Code2, Sparkles } from "lucide-react";
import { Navbar } from "./Components/Navbar";
import { projects } from "./lib/portfolio";
import { Footer } from "./Components/Footer";
import { Skills } from "./Components/Skills";

const buttonClass =
  "inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-medium text-white transition hover:bg-blue-700 hover:scale-[1.02]";

export default function Page() {
  return (
    <main className="bg-slate-50">
      <Navbar />

      {/* Hero Section - Clean & Minimal */}
      <section className="px-5 pt-32 pb-16 md:px-10 md:pt-40 md:pb-20">
        <div className="mx-auto max-w-5xl">
          <div className="flex items-center gap-2 text-sm font-mono text-blue-600 mb-4"></div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 leading-[1.1]">
            I build clear, useful <br />
            <span className="text-blue-600">digital products</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-slate-600">
            I&apos;m Afzaal, a Next.js developer shaping bold ideas into fast,
            useful websites and applications.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/about" className={buttonClass}>
              Learn more <ArrowUpRight className="size-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-100"
            >
              Let&apos;s talk
            </Link>
          </div>
        </div>
      </section>

      <Skills />
      <hr />
      {/* Featured Projects - Clean Cards with Gaps */}
      <section className="px-5 py-16 md:px-10 md:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="mt-2 text-3xl md:text-4xl font-bold text-slate-900">
              Featured Projects
            </h2>
            <p className="mt-3 text-slate-600 max-w-2xl mx-auto text-sm md:text-base">
              A collection of projects I've worked on, showcasing my skills and
              creativity in building functional and visually appealing
              solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <article
                key={project.title}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <a
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                  className="block relative aspect-[16/10] overflow-hidden bg-slate-100"
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover object-top transition duration-500 group-hover:scale-105"
                  />
                </a>
                <div className="p-5">
                  <p className="text-xs font-mono text-blue-600 uppercase tracking-wider">
                    {project.category}
                  </p>
                  <h3 className="mt-1 text-lg font-semibold text-slate-900">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-600 line-clamp-2">
                    {project.description}
                  </p>
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600 hover:text-blue-800 transition"
                  >
                    View Project <ArrowUpRight className="size-4" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-slate-200 px-5 py-16 md:px-10">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-mono text-blue-600 uppercase tracking-wider">
            Have a project?
          </p>
          <h2 className="mt-2 text-2xl md:text-3xl font-bold text-slate-900">
            Let&apos;s make something useful.
          </h2>
          <Link
            href="/contact"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-blue-600 px-8 py-3 text-sm font-medium text-white transition hover:bg-blue-700"
          >
            Let&apos;s talk <ArrowUpRight className="size-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
