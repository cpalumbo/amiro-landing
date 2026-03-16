const features = [
  'Fully autonomous campaigns',
  'AI-drafted workflows & playbooks',
  'EMR + messaging integration',
  'Revenue recovery dashboard',
  'White-label patient portal',
  'White-glove onboarding included',
  'Unlimited seats',
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-24">
      <div className="max-w-content mx-auto px-6">
        <div className="text-center">
          <div className="section-label">Pricing</div>
          <h2 className="section-title">One plan. One price. No games.</h2>
          <p className="section-desc mx-auto mb-12 text-center">
            We don't charge by meaningless metrics like seats or message
            volume. Your value measure is the clinic — so that's how we
            price.
          </p>
        </div>

        <div className="max-w-[480px] mx-auto">
          <div className="rounded-[14px] p-9 border border-purple shadow-md ring-1 ring-purple relative text-center">
            <div className="mb-6">
              <span className="text-4xl font-extrabold">€350</span>
              <span className="text-text-secondary text-base font-medium">/mo per clinic</span>
            </div>

            <p className="text-sm text-text-secondary mb-1 font-medium">
              Unlimited seats. Everything included.
            </p>

            <ul className="flex flex-col gap-2.5 my-7 text-left">
              {features.map((f, j) => (
                <li key={j} className="flex items-start gap-2 text-sm">
                  <span className="text-green font-bold shrink-0">✓</span>
                  {f}
                </li>
              ))}
            </ul>

            <a href="#contact" className="btn-primary w-full">
              Book a Demo
            </a>

            <p className="mt-6 text-xs text-text-secondary leading-relaxed">
              We guarantee Amiro will generate at least 3× in ROI within the
              first 3 months — or you get your money back.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
