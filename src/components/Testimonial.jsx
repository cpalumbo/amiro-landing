export default function Testimonial() {
  return (
    <section className="py-20 bg-surface">
      <div className="max-w-content mx-auto px-6">
        <div className="max-w-[800px] mx-auto bg-white rounded-[20px] border border-gray-200 p-12 shadow-md text-center">
          <p className="text-[22px] font-medium leading-relaxed tracking-tight mb-8 text-text">
            "We saw the demo and signed the same day. Amiro understood our problems
            instantly — follow-ups falling through the cracks, patients not rebooking,
            revenue leaking silently. It felt like they'd worked at our clinic."
          </p>

          <div className="flex items-center justify-center gap-4">
            {/* Avatar placeholder — replace with real image */}
            <div className="w-[52px] h-[52px] rounded-full bg-gradient-to-br from-purple-light to-purple-mid flex items-center justify-center text-xl font-bold text-purple">
              C
            </div>
            <div className="text-left">
              <div className="text-[15px] font-bold">Curitt.Health</div>
              <div className="text-[13px] text-text-secondary">
                First Amiro customer — Amsterdam, NL
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
