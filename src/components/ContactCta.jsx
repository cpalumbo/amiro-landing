import { useState } from 'react'

export default function ContactCta() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="py-24 bg-[#1A1A2E] text-white">
      <div className="max-w-content mx-auto px-6 flex flex-col items-center text-center">
        <h2 className="text-4xl font-extrabold tracking-tight leading-[1.15] mb-3">
          Ready to stop losing patients?
        </h2>
        <p className="text-[17px] text-white/60 leading-relaxed max-w-[480px] mb-10">
          Book a demo and see what Amiro looks like for your clinic. We'll show you
          real workflows running on real data — in under 20 minutes.
        </p>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-3.5 w-full max-w-[420px]"
        >
          <input
            type="text"
            name="name"
            placeholder="Your name"
            required
            className="w-full px-[18px] py-3.5 rounded-[10px] border border-white/15 bg-white/[0.08] text-white text-sm placeholder-white/40 outline-none focus:border-purple transition-colors"
          />
          <input
            type="email"
            name="email"
            placeholder="Work email"
            required
            className="w-full px-[18px] py-3.5 rounded-[10px] border border-white/15 bg-white/[0.08] text-white text-sm placeholder-white/40 outline-none focus:border-purple transition-colors"
          />
          <input
            type="text"
            name="clinic"
            placeholder="Clinic name"
            className="w-full px-[18px] py-3.5 rounded-[10px] border border-white/15 bg-white/[0.08] text-white text-sm placeholder-white/40 outline-none focus:border-purple transition-colors"
          />
          <textarea
            name="message"
            placeholder="Tell us about your clinic (optional)"
            rows={3}
            className="w-full px-[18px] py-3.5 rounded-[10px] border border-white/15 bg-white/[0.08] text-white text-sm placeholder-white/40 outline-none focus:border-purple transition-colors resize-y"
          />

          <button
            type="submit"
            disabled={submitted}
            className={`w-full py-3.5 rounded-[10px] font-semibold text-[15px] transition-all ${
              submitted
                ? 'bg-green text-white cursor-default'
                : 'bg-purple text-white hover:bg-purple-dark hover:-translate-y-px hover:shadow-md'
            }`}
          >
            {submitted ? "Thank you! We'll be in touch." : 'Book a Demo'}
          </button>

          <span className="text-xs text-white/40">
            We'll respond within 24 hours. No spam, ever.
          </span>
        </form>
      </div>
    </section>
  )
}
