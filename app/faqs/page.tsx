import { Navbar } from '../Components/Navbar'
import { Footer } from '../Components/Footer'

const faqs = [
  {
    q: 'What services do you offer?',
    a: 'Web development, UI/UX design, and digital marketing — from landing pages to complex web applications.',
  },
  {
    q: 'What technologies do you use?',
    a: 'Next.js, React, TypeScript, Tailwind CSS, and Node.js are my core stack.',
  },
  {
    q: 'How long does a project take?',
    a: 'Marketing websites take 2–4 weeks. Larger applications are planned in milestones.',
  },
  {
    q: 'Do you offer support after launch?',
    a: 'Yes — maintenance and support packages to keep your application secure and up-to-date.',
  },
  {
    q: 'How is pricing structured?',
    a: 'Based on complexity, screens, and integrations. You get a transparent fixed proposal.',
  },
]

export default function FAQsPage() {
  return (
    <main className="bg-slate-50 min-h-screen">
      <Navbar />

      <section className="px-5 pt-32 pb-16 md:px-10 md:pt-40 md:pb-20">
        <div className="mx-auto max-w-3xl">
          <h1 className="mt-2 text-3xl md:text-4xl font-bold text-slate-900 text-center">
            Frequently Asked Questions
          </h1>
          <p className="mt-3 text-center text-slate-600 text-sm">
            Quick answers to common questions about my work and process.
          </p>

          <div className="mt-10 space-y-3">
            {faqs.map((faq, index) => (
              <details
                key={index}
                className="group bg-white rounded-xl border border-slate-200 overflow-hidden transition-shadow hover:shadow-sm"
              >
                <summary className="flex cursor-pointer items-center justify-between px-6 py-4 text-slate-900 font-medium list-none">
                  <span className="flex items-center gap-3">
                    <span className="text-sm font-mono text-blue-600">0{index + 1}</span>
                    {faq.q}
                  </span>
                  <span className="text-2xl text-slate-400 transition-transform duration-300 group-open:rotate-45 group-open:text-blue-600">
                    +
                  </span>
                </summary>
                <p className="px-6 pb-4 text-sm text-slate-600 border-t border-slate-100 pt-3">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}