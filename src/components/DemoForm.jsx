import { useState } from 'react'

export default function DemoForm() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="demo" className="py-24 bg-surface">
      <div className="max-w-content mx-auto px-6 flex flex-col items-center text-center">
        <div className="section-label">Personalized Demo</div>
        <h2 className="section-title">See Amiro work for your clinic</h2>
        <p className="section-desc mx-auto mb-12 text-center">
          Fill in a few details and we'll show you a personalized demo
          with workflows tailored to your clinic — instantly.
        </p>

        {!submitted ? (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-3.5 w-full max-w-[420px]"
          >
            <input
              type="text"
              name="name"
              placeholder="Your name"
              required
              className="w-full px-[18px] py-3.5 rounded-[10px] border border-gray-200 bg-white text-text text-sm placeholder-text-secondary/50 outline-none focus:border-purple transition-colors"
            />
            <input
              type="email"
              name="email"
              placeholder="Work email"
              required
              className="w-full px-[18px] py-3.5 rounded-[10px] border border-gray-200 bg-white text-text text-sm placeholder-text-secondary/50 outline-none focus:border-purple transition-colors"
            />
            <input
              type="url"
              name="clinic_url"
              placeholder="Clinic website link"
              required
              className="w-full px-[18px] py-3.5 rounded-[10px] border border-gray-200 bg-white text-text text-sm placeholder-text-secondary/50 outline-none focus:border-purple transition-colors"
            />
            <button
              type="submit"
              className="btn-primary btn-large w-full mt-1"
            >
              Show Me My Demo
            </button>
            <span className="text-xs text-text-secondary">
              No credit card. No commitment. Just your demo.
            </span>
          </form>
        ) : (
          <div className="w-full max-w-[800px]">
            <div className="rounded-xl border border-gray-200 bg-white shadow-lg overflow-hidden">
              <div className="p-6 border-b border-gray-100 flex items-center gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-green animate-pulse-dot" />
                <span className="text-sm font-semibold text-text">
                  Your personalized demo is ready
                </span>
              </div>
              <div className="aspect-video bg-gradient-to-br from-purple-light to-purple-mid flex items-center justify-center">
                <div className="text-center px-6">
                  <div className="w-16 h-16 rounded-2xl bg-white/80 flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">▶</span>
                  </div>
                  <p className="text-sm font-medium text-purple">
                    Interactive demo placeholder
                  </p>
                  <p className="text-xs text-purple/60 mt-1">
                    Connect your demo tool (e.g. Navattic, Storylane, or Arcade) here
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
