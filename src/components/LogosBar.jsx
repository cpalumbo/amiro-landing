export default function LogosBar() {
  return (
    <section className="py-12 border-y border-gray-200">
      <div className="max-w-content mx-auto px-6">
        <p className="text-center text-[13px] font-medium text-text-secondary uppercase tracking-[0.05em] mb-6">
          Trusted by forward-thinking clinics
        </p>
        <div className="flex justify-center items-center gap-12 flex-wrap">
          {['Curitt.Health', 'Your Clinic', 'Your Clinic', 'Your Clinic'].map((name, i) => (
            <span
              key={i}
              className="text-lg font-bold text-text-secondary opacity-40 tracking-tight"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
