/* ─── Feature 1 visual: Tools hub ─── */
function ToolsVisual() {
  const tools = [
    { icon: '🏥', bg: 'bg-sky-100', label: 'EMR' },
    { icon: '💬', bg: 'bg-green-light', label: 'WhatsApp' },
    { icon: '📧', bg: 'bg-amber-100', label: 'Email' },
    { icon: '📅', bg: 'bg-purple-light', label: 'Calendar' },
  ]

  return (
    <div className="flex flex-col items-center gap-5 w-full">
      <div className="flex gap-3 justify-center flex-wrap">
        {tools.map((t, i) => (
          <div key={i} className="flex items-center gap-2 px-4 py-2.5 bg-white border border-gray-200 rounded-[10px] text-[13px] font-medium">
            <span className={`w-6 h-6 rounded-md flex items-center justify-center text-[13px] ${t.bg}`}>{t.icon}</span>
            {t.label}
          </div>
        ))}
      </div>

      {/* Connector */}
      <div className="w-0.5 h-5 bg-gradient-to-b from-gray-200 to-purple-mid" />

      {/* Hub */}
      <div className="flex items-center gap-3 px-6 py-3.5 bg-purple text-white rounded-xl font-bold text-[15px] shadow-[0_4px_20px_rgba(124,91,191,0.3)]">
        <span className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center text-lg">✦</span>
        Amiro
      </div>

      {/* Connector */}
      <div className="w-0.5 h-5 bg-gradient-to-b from-purple-mid to-gray-200" />

      {/* Mode toggle */}
      <div className="flex gap-2">
        <div className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold bg-green-light border border-green text-green-800">
          <span>⚡</span> Autopilot
        </div>
        <div className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold bg-white border border-gray-200 text-text-secondary">
          <span>👤</span> Human-in-the-loop
        </div>
      </div>
    </div>
  )
}

/* ─── Feature 2 visual: Journey flow ─── */
function JourneyVisual() {
  const steps = [
    { icon: '📄', bg: 'bg-purple-light', title: 'Results delivered', desc: 'Patient receives lab results via secure link' },
    { icon: '📅', bg: 'bg-sky-100', title: 'Follow-up prompted', desc: 'Amiro suggests next visit at the right time' },
    { icon: '💬', bg: 'bg-amber-100', title: 'Reminder sent', desc: 'WhatsApp + email nudge with booking link' },
    { icon: '✓', bg: 'bg-green-light', title: 'Patient rebooked', desc: 'Confirmed and added to calendar' },
  ]

  return (
    <div className="flex flex-col items-center gap-0 w-full">
      {steps.map((s, i) => (
        <div key={i} className="contents">
          <div className="flex items-center gap-3.5 px-4 py-3.5 bg-white border border-gray-200 rounded-xl w-full max-w-[320px]">
            <div className={`w-9 h-9 rounded-lg flex items-center justify-center text-lg shrink-0 ${s.bg}`}>{s.icon}</div>
            <div>
              <div className="text-[13px] font-semibold">{s.title}</div>
              <div className="text-[11px] text-text-secondary">{s.desc}</div>
            </div>
          </div>
          {i < steps.length - 1 && (
            <div className="relative w-0.5 h-5 bg-purple-mid">
              <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-t-[5px] border-t-purple-mid" />
            </div>
          )}
        </div>
      ))}

      {/* Arrow into result */}
      <div className="relative w-0.5 h-5 bg-purple-mid">
        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-t-[5px] border-t-purple-mid" />
      </div>

      <div className="w-full max-w-[320px] bg-purple text-white rounded-xl text-center py-3.5 px-6">
        <div className="text-[28px] font-extrabold tracking-tight">+30%</div>
        <div className="text-xs opacity-85 font-medium">average revenue uplift</div>
      </div>
    </div>
  )
}

/* ─── Feature 3 visual: Revenue dashboard ─── */
function RevenueVisual() {
  const cards = [
    { label: 'Revenue recovered (MTD)', value: '€4,820', change: '↑ 32% vs last month', highlight: true },
    { label: 'Patients rebooked', value: '47', change: '↑ 62% conversion', highlight: false },
    { label: 'No-show rate', value: '8%', change: '↓ from 23%', highlight: false },
    { label: 'Active campaigns', value: '5', change: 'All performing above target', highlight: false },
  ]

  return (
    <div className="flex flex-col gap-3 w-full">
      <div className="grid grid-cols-2 gap-2.5">
        {cards.map((c, i) => (
          <div
            key={i}
            className={`rounded-[10px] p-4 border ${
              c.highlight
                ? 'bg-purple text-white border-purple'
                : 'bg-white border-gray-200'
            }`}
          >
            <div className={`text-[11px] font-medium mb-1 ${c.highlight ? 'text-white/70' : 'text-text-secondary'}`}>
              {c.label}
            </div>
            <div className="text-2xl font-extrabold tracking-tight">{c.value}</div>
            <div className={`text-[11px] font-semibold mt-0.5 ${c.highlight ? 'text-emerald-200' : 'text-emerald-600'}`}>
              {c.change}
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white border border-gray-200 rounded-[10px] p-4 text-center">
        <span className="text-[13px] text-text-secondary">
          Amiro cost this month: €299 → Revenue recovered:{' '}
          <span className="text-lg font-extrabold text-green">€4,820</span>
        </span>
      </div>
    </div>
  )
}

/* ─── Pill component ─── */
function Pill({ children, green }) {
  return (
    <span className={`inline-flex items-center gap-1.5 text-[13px] font-medium px-3.5 py-1.5 rounded-full ${
      green ? 'bg-green-light text-green-800' : 'bg-purple-light text-purple'
    }`}>
      {children}
    </span>
  )
}

/* ─── Feature block ─── */
function FeatureBlock({ label, title, desc, pills, Visual, reverse }) {
  return (
    <div className={`grid grid-cols-1 lg:grid-cols-2 gap-20 items-center py-16 border-b border-gray-200 last:border-b-0`}>
      <div className={reverse ? 'lg:order-2' : ''}>
        <div className="section-label">{label}</div>
        <h2 className="section-title">{title}</h2>
        <p className="section-desc mb-6">{desc}</p>
        <div className="flex flex-wrap gap-2">{pills}</div>
      </div>
      <div className={`bg-surface rounded-[20px] border border-gray-200 p-8 min-h-[340px] flex items-center justify-center ${reverse ? 'lg:order-1' : ''}`}>
        <Visual />
      </div>
    </div>
  )
}

/* ─── Main Features section ─── */
export default function Features() {
  return (
    <section id="features" className="py-24">
      <div className="max-w-content mx-auto px-6">
        <FeatureBlock
          label="Your tools, on autopilot"
          title="Amiro plugs into your EMR and works for you"
          desc="Connect your existing tools — EMR, messaging, email, calendar — and Amiro uses them on your behalf. Choose full autopilot or stay in the loop and approve every action before it happens."
          pills={<>
            <Pill>🔄 EMR integration</Pill>
            <Pill>💬 WhatsApp</Pill>
            <Pill>📧 Email</Pill>
            <Pill>📅 Calendar</Pill>
          </>}
          Visual={ToolsVisual}
        />

        <FeatureBlock
          reverse
          label="Designed by experts"
          title="Patient journeys that drive 30% more revenue"
          desc="Every workflow in Amiro is built on best practices from top-performing clinics — designed by operators with 10+ years scaling healthcare businesses across hundreds of locations."
          pills={<>
            <Pill green>↑ 30% revenue uplift</Pill>
            <Pill>🔁 No-show recovery</Pill>
            <Pill>📋 Follow-up flows</Pill>
            <Pill>📈 Retention campaigns</Pill>
          </>}
          Visual={JourneyVisual}
        />

        <FeatureBlock
          label="Revenue you can see"
          title="Know exactly how Amiro pays for itself"
          desc="Track every recovered appointment, every rebooked patient, every euro of revenue uplift. Amiro doesn't just work — it shows you the results, so you always know the ROI."
          pills={<>
            <Pill green>💰 Revenue tracking</Pill>
            <Pill>📊 Campaign performance</Pill>
            <Pill>📉 No-show trends</Pill>
          </>}
          Visual={RevenueVisual}
        />
      </div>
    </section>
  )
}
