const logos = [
  { name: 'Curitt.Health', letter: 'C' },
  { name: 'MedVita Clinics', letter: 'M' },
  { name: 'HealthBridge', letter: 'H' },
  { name: 'NovaCare', letter: 'N' },
  { name: 'Dental360', letter: 'D' },
]

export default function LogosBar() {
  return (
    <section className="py-12 border-y border-gray-200">
      <div className="max-w-content mx-auto px-6">
        <p className="text-center text-[13px] font-medium text-text-secondary uppercase tracking-[0.05em] mb-6">
          Trusted by forward-thinking clinics
        </p>
        <div className="flex justify-center items-center gap-10 flex-wrap">
          {logos.map((logo, i) => (
            <div
              key={i}
              className="flex items-center gap-2.5 opacity-40 hover:opacity-60 transition-opacity"
            >
              <div className="w-8 h-8 rounded-lg bg-gray-200 flex items-center justify-center">
                <span className="text-sm font-bold text-text-secondary">
                  {logo.letter}
                </span>
              </div>
              <span className="text-[15px] font-semibold text-text-secondary tracking-tight">
                {logo.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
