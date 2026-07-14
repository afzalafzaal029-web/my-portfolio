import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

const socialLinks = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/web-and-app-developere/' },
  { label: 'GitHub', href: 'https://github.com/afzalafzaal029-web/' },
  { label: 'WhatsApp', href: 'https://wa.me/923103104364' },
  { label: 'Instagram', href: 'https://www.instagram.com/webdeveloperafzaal/' },
]

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white/80 px-5 py-10 md:px-10">
      <div className="mx-auto max-w-6xl">
        {/* Top Row - Brand + Social Links */}
        <div className="flex flex-col justify-between gap-6 border-b border-slate-200 pb-8 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-mono font-medium text-slate-900">
              AFZAAL <span className="text-blue-600">/</span> Web &amp; App Developer
            </p>
            <p className="mt-1 text-sm text-slate-500">
              Thoughtful digital products, built with care.
            </p>
          </div>
          <div className="flex flex-wrap gap-5">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-1 text-sm text-slate-500 transition hover:text-blue-600"
              >
                {link.label}
                <ArrowUpRight className="size-3 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Row - Copyright + Contact */}
        <div className="mt-6 flex flex-col justify-between gap-3 font-mono text-xs uppercase tracking-wider text-slate-400 sm:flex-row">
          <p>© {new Date().getFullYear()} Afzaal</p>
          <Link href="/contact" className="hover:text-blue-600 transition">
            Contact &amp; FAQs
          </Link>
        </div>
      </div>
    </footer>
  )
}