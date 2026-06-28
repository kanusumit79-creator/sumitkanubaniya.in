import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    setForm({ name: '', email: '', message: '' })
    setTimeout(() => setSent(false), 4000)
  }

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-heading">Get In Touch</h2>
        <p className="text-center text-gray-500 mb-12 max-w-lg mx-auto">
          Got a project idea, want to collaborate, or just want to say hi? Drop me a message!
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <form onSubmit={handleSubmit} className="glass rounded-2xl p-6 gradient-border">
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 text-sm"
                  required
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 text-sm"
                  required
                />
                <textarea
                  placeholder="Your Message"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 text-sm resize-none"
                  rows="4"
                  required
                />
                <button
                  type="submit"
                  className="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-medium text-sm hover:opacity-90 transition-opacity"
                >
                  Send Message
                </button>
              </div>
            </form>

            {sent && (
              <div className="mt-4 p-4 rounded-lg bg-green-500/10 border border-green-500/20 text-green-400 text-sm text-center">
                Message sent! I'll get back to you soon.
              </div>
            )}

            <div className="mt-6 text-center text-gray-500 text-sm">
              <p>Or email me directly at</p>
              <a href="mailto:kanusumit79@gmail.com" className="text-purple-400 hover:text-purple-300 transition-colors font-medium">
                kanusumit79@gmail.com
              </a>
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <div className="glass rounded-2xl p-8 gradient-border text-center">
              <h3 className="text-white font-semibold text-lg mb-4">Connect With Me</h3>
              <p className="text-gray-500 text-sm mb-6">
                Follow my journey on social media
              </p>

              <div className="flex justify-center gap-4">
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full glass flex items-center justify-center text-gray-400 hover:text-purple-400 hover:border-purple-500/30 transition-all"
                  title="Instagram"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="2" width="20" height="20" rx="5" />
                    <circle cx="12" cy="12" r="5" />
                    <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" />
                  </svg>
                </a>
                <a
                  href="mailto:kanusumit79@gmail.com"
                  className="w-12 h-12 rounded-full glass flex items-center justify-center text-gray-400 hover:text-purple-400 hover:border-purple-500/30 transition-all"
                  title="Email"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
