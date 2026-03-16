export default function ContactCta() {
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri']
  const hours = ['9:00', '10:00', '11:00', '14:00', '15:00', '16:00']

  return (
    <section id="contact" className="py-24 bg-[#1A1A2E] text-white">
      <div className="max-w-content mx-auto px-6 flex flex-col items-center text-center">
        <h2 className="text-4xl font-extrabold tracking-tight leading-[1.15] mb-3">
          Ready to grow your revenue?
        </h2>
        <p className="text-[17px] text-white/60 leading-relaxed max-w-[480px] mb-10">
          Pick a time that works for you — we'll show you real workflows
          running on real data in under 20 minutes.
        </p>

        {/* Calendar placeholder — replace with Cal.com embed */}
        <div className="w-full max-w-[700px] rounded-xl border border-white/10 bg-white/[0.05] overflow-hidden">
          <div className="px-6 py-4 border-b border-white/10 flex items-center justify-between">
            <span className="text-sm font-semibold">Book a meeting</span>
            <span className="text-xs text-white/40">March 2026</span>
          </div>

          <div className="p-6">
            <div className="grid grid-cols-5 gap-3 mb-4">
              {days.map((day) => (
                <div key={day} className="text-center">
                  <span className="text-xs text-white/40 font-medium">{day}</span>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-5 gap-3 mb-6">
              {days.map((_, i) => (
                <div
                  key={i}
                  className="text-center py-2.5 rounded-lg bg-white/[0.06] border border-white/10 text-sm font-medium text-white/60"
                >
                  {16 + i}
                </div>
              ))}
            </div>

            <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
              {hours.map((hour) => (
                <div
                  key={hour}
                  className="py-2 rounded-lg border border-purple/40 bg-purple/10 text-xs font-medium text-purple-light text-center"
                >
                  {hour}
                </div>
              ))}
            </div>
          </div>

          <div className="px-6 py-4 border-t border-white/10 text-center">
            <span className="text-xs text-white/30">
              Cal.com embed will replace this placeholder
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
