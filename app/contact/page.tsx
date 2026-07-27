'use client'

import { useState } from 'react'
import { Send, CheckCircle2, AlertCircle } from 'lucide-react'
import { Navbar } from '../Components/Navbar'
import { Footer } from '../Components/Footer'

export default function ContactPage() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('loading')
    setMessage('')

    const formData = new FormData(e.currentTarget)
    const data = Object.fromEntries(formData)

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      const result = await res.json()

      if (res.ok) {
        setStatus('success')
        setMessage('Your message has been sent successfully!')
        e.currentTarget.reset()
      } else {
        setStatus('error')
        setMessage(result.error || 'Something went wrong.')
      }
    } catch {
      setStatus('error')
      setMessage('Network error. Please try again.')
    }
  }

  return (
    <main className="bg-slate-50 min-h-screen">
      <Navbar />

      {/* Hero Header - Exactly like About & FAQ */}
      <section className="px-5 pt-32 pb-16 md:px-10 md:pt-40 md:pb-20">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="mt-2 text-3xl md:text-4xl font-bold text-slate-900">
            Let's talk about your project
          </h1>
          <p className="mt-3 text-slate-600 text-sm">
            Have a question or want to work together? Fill out the form below and I'll get back to you as soon as possible.
          </p>
        </div>
      </section>

      {/* Form - White card */}
      <section className="border-y border-slate-200 px-5 py-16 md:px-10 md:py-20">
        <div className="mx-auto max-w-2xl">
          <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 md:p-8">
            {/* form fields... (same as earlier) */}
            <div className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1.5">Your Name</label>
                  <input id="name" name="name" type="text" required placeholder="John Doe"
                    className="w-full rounded-lg border border-slate-300 bg-slate-50 px-4 py-2.5 text-sm text-slate-900 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1.5">Email Address</label>
                  <input id="email" name="email" type="email" required placeholder="john@example.com"
                    className="w-full rounded-lg border border-slate-300 bg-slate-50 px-4 py-2.5 text-sm text-slate-900 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20" />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-1.5">Subject</label>
                <input id="subject" name="subject" type="text" required placeholder="Project Inquiry"
                  className="w-full rounded-lg border border-slate-300 bg-slate-50 px-4 py-2.5 text-sm text-slate-900 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1.5">Message</label>
                <textarea id="message" name="message" required rows={6}
                  placeholder="Tell me about your project, goals, and timeline..."
                  className="w-full resize-y rounded-lg border border-slate-300 bg-slate-50 px-4 py-2.5 text-sm text-slate-900 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20" />
              </div>
              <div className="flex flex-wrap items-center gap-4">
                <button type="submit" disabled={status === 'loading'}
                  className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-2.5 text-sm font-medium text-white transition hover:bg-blue-700 hover:scale-[1.02] disabled:opacity-60">
                  {status === 'loading' ? 'Sending...' : 'Send Message'}
                  <Send className="size-4" />
                </button>
                {status === 'success' && <span className="flex items-center gap-2 text-sm text-green-600"><CheckCircle2 className="size-4" />{message}</span>}
                {status === 'error' && <span className="flex items-center gap-2 text-sm text-red-600"><AlertCircle className="size-4" />{message}</span>}
              </div>
            </div>
          </form>

          <div className="mt-8 text-center text-sm text-slate-500">
            <p>Or reach out directly:</p>
            <div className="mt-2 flex flex-wrap justify-center gap-4">
              <a href="mailto:webdeveloperafzaal@gmail.com" className="text-blue-600 hover:text-blue-800">webdeveloperafzaal@gmail.com</a>
              <a href="https://wa.me/923103104364" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800">WhatsApp</a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}