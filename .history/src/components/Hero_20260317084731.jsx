import ProductCarousel from './ProductCarousel'

export default function Hero() {
  return (
    <section className="pt-36 pb-20 bg-white">
      <div className="max-w-content mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left: copy */}
        <div className="max-w-[520px]">
          <div className="inline-flex items-center gap-1.5 bg-purple-light text-purple text-[13px] font-semibold px-3.5 py-1.5 rounded-full mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-green animate-pulse-dot" />
            Now onboarding clinics
          </div>

          <h1 className="text-[46px] font-extrabold leading-[1.1] tracking-tight mb-5">
            Scale your clinic revenue by running{' '}
            <span className="bg-gradient-to-br from-purple to-[#A78BFA] bg-clip-text text-transparent">
              patient journeys on autopilot
            </span>
          </h1>

          <p className="text-lg text-text-secondary leading-relaxed mb-8">
            Amiro plugs into your clinic's tools and runs follow-ups, rebookings,
            no-show recovery, and retention on autopilot. Like hiring the best ops
            person — without the headcount.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <a href="#demo" className="btn-primary btn-large">
              Try Your Demo
            </a>
            <a href="#contact" className="btn-outline btn-large">
              Talk to Sales
            </a>
          </div>
        </div>

        {/* Right: product carousel */}
        <div>
          <ProductCarousel />
        </div>
      </div>
    </section>
  )
}
