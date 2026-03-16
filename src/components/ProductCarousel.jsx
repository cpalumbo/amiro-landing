import { useState, useEffect, useCallback } from 'react'

const tabs = ['Chat', 'Tasks', 'Revenue']

/* ─── Slide 1: Chat ─── */
function ChatSlide() {
  return (
    <div className="flex flex-col gap-3 h-full">
      <div className="self-end max-w-[85%] bg-purple text-white text-[13px] leading-snug px-4 py-3 rounded-[14px] rounded-br-sm">
        What needs my attention today?
      </div>

      <div className="self-start max-w-[85%] bg-white text-text text-[13px] leading-snug px-4 py-3 rounded-[14px] rounded-bl-sm border border-gray-200">
        <div className="text-[10px] font-semibold uppercase tracking-wider opacity-70 mb-1">Amiro</div>
        You have <strong>3 no-shows</strong> from yesterday, <strong>8 results</strong> ready
        to send, and <strong>2 follow-ups</strong> overdue. I've drafted a recovery campaign
        for the no-shows — want me to send it or would you like to review first?
      </div>

      <div className="self-end max-w-[85%] bg-purple text-white text-[13px] leading-snug px-4 py-3 rounded-[14px] rounded-br-sm">
        Send the no-show campaign. I'll review the follow-ups.
      </div>

      <div className="self-start max-w-[85%] bg-white text-text text-[13px] leading-snug px-4 py-3 rounded-[14px] rounded-bl-sm border border-gray-200">
        <div className="text-[10px] font-semibold uppercase tracking-wider opacity-70 mb-1">Amiro</div>
        Done — 3 patients contacted via WhatsApp with rebooking links.
        I'll flag the follow-ups for your review. ✓
      </div>

      {/* Input mock */}
      <div className="flex items-center gap-2.5 px-4 py-3 bg-white border border-gray-200 rounded-[10px] mt-auto">
        <span className="text-[13px] text-text-secondary">Ask Amiro anything...</span>
        <div className="ml-auto w-7 h-7 rounded-md bg-purple flex items-center justify-center">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="22" y1="2" x2="11" y2="13" />
            <polygon points="22 2 15 22 11 13 2 9 22 2" />
          </svg>
        </div>
      </div>
    </div>
  )
}

/* ─── Slide 2: Tasks ─── */
const tasks = [
  { icon: '📞', iconBg: 'bg-red-50', title: 'No-show: Anna de Vries', desc: 'Missed yesterday · 3rd occurrence', status: 'Urgent', statusClass: 'bg-red-100 text-red-800' },
  { icon: '📄', iconBg: 'bg-purple-light', title: 'Send results: Mark Jansen', desc: 'Lab results ready since Mar 4', status: 'Pending', statusClass: 'bg-amber-100 text-amber-800' },
  { icon: '✓', iconBg: 'bg-green-light', title: 'Follow-up call: Lisa Bakker', desc: 'Post-treatment check · Day 7', status: 'Done', statusClass: 'bg-green-light text-green-800' },
  { icon: '💶', iconBg: 'bg-amber-100', title: 'Invoice overdue: Peter Smit', desc: '€120 · 14 days past due', status: 'Pending', statusClass: 'bg-amber-100 text-amber-800' },
  { icon: '📩', iconBg: 'bg-purple-light', title: 'Campaign: Q1 check-up reminder', desc: '142 patients · Sent this morning', status: 'Sent', statusClass: 'bg-purple-light text-purple' },
]

function TasksSlide() {
  return (
    <div className="flex flex-col gap-2.5">
      <div className="flex justify-between items-center mb-1">
        <h4 className="text-sm font-bold">Today's Operations</h4>
        <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-green-light text-green-800">● Live</span>
      </div>
      {tasks.map((t, i) => (
        <div key={i} className="flex items-center gap-3 px-3.5 py-3 bg-white border border-gray-200 rounded-[10px]">
          <div className={`w-[34px] h-[34px] rounded-lg flex items-center justify-center text-base shrink-0 ${t.iconBg}`}>
            {t.icon}
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-[13px] font-semibold truncate">{t.title}</div>
            <div className="text-[11px] text-text-secondary">{t.desc}</div>
          </div>
          <span className={`text-[11px] font-semibold px-2 py-0.5 rounded shrink-0 ${t.statusClass}`}>
            {t.status}
          </span>
        </div>
      ))}
    </div>
  )
}

/* ─── Slide 3: Revenue ─── */
const kpis = [
  { label: 'Recovered this month', value: '€4,820', change: '↑ 32% vs last month' },
  { label: 'Patients rebooked', value: '47', change: '↑ 18 more than usual' },
  { label: 'No-show rate', value: '8%', change: '↓ from 23%' },
]

const bars = [
  { label: 'Oct', before: 40, after: 55 },
  { label: 'Nov', before: 45, after: 68 },
  { label: 'Dec', before: 38, after: 72 },
  { label: 'Jan', before: 50, after: 80 },
  { label: 'Feb', before: 42, after: 90 },
  { label: 'Mar', before: 48, after: 105 },
]

function RevenueSlide() {
  return (
    <div className="flex flex-col gap-3.5">
      <div className="grid grid-cols-3 gap-2.5">
        {kpis.map((k, i) => (
          <div key={i} className="bg-white border border-gray-200 rounded-[10px] p-3.5">
            <div className="text-[11px] text-text-secondary font-medium mb-1.5">{k.label}</div>
            <div className="text-[22px] font-extrabold tracking-tight">{k.value}</div>
            <div className="text-[11px] font-semibold text-emerald-600 mt-1">{k.change}</div>
          </div>
        ))}
      </div>

      <div className="flex-1 bg-white border border-gray-200 rounded-[10px] p-4">
        <h4 className="text-xs font-semibold mb-3">Monthly Revenue Recovery</h4>
        <div className="flex items-end gap-1.5 h-[120px]">
          {bars.map((b, i) => (
            <div key={i} className="flex-1 flex flex-col items-center gap-1">
              <div className="flex gap-[3px] items-end w-full justify-center">
                <div className="w-3.5 rounded-t bg-gray-200" style={{ height: b.before }} />
                <div className="w-3.5 rounded-t bg-purple" style={{ height: b.after }} />
              </div>
              <span className="text-[9px] text-text-secondary font-medium">{b.label}</span>
            </div>
          ))}
        </div>
        <div className="flex gap-4 mt-2.5">
          <span className="flex items-center gap-1.5 text-[10px] text-text-secondary">
            <span className="w-2 h-2 rounded-sm bg-gray-200" /> Before Amiro
          </span>
          <span className="flex items-center gap-1.5 text-[10px] text-text-secondary">
            <span className="w-2 h-2 rounded-sm bg-purple" /> With Amiro
          </span>
        </div>
      </div>
    </div>
  )
}

/* ─── Carousel wrapper ─── */
export default function ProductCarousel() {
  const [active, setActive] = useState(0)

  const next = useCallback(() => setActive(a => (a + 1) % 3), [])

  useEffect(() => {
    const timer = setInterval(next, 5000)
    return () => clearInterval(timer)
  }, [next])

  const slides = [<ChatSlide />, <TasksSlide />, <RevenueSlide />]

  return (
    <div className="bg-surface rounded-[20px] border border-gray-200 overflow-hidden shadow-lg">
      {/* Browser chrome */}
      <div className="flex items-center gap-2 px-5 py-3.5 border-b border-gray-200 bg-white">
        <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
        <div className="flex ml-auto gap-0.5 bg-surface rounded-md p-0.5">
          {tabs.map((tab, i) => (
            <button
              key={tab}
              onClick={() => setActive(i)}
              className={`text-[11px] font-medium px-3 py-1 rounded transition-all ${
                active === i
                  ? 'bg-white text-text shadow-sm'
                  : 'text-text-secondary hover:text-text'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Slides */}
      <div className="relative h-[380px] sm:h-[400px] overflow-hidden">
        {slides.map((slide, i) => (
          <div
            key={i}
            className={`absolute inset-0 p-6 transition-opacity duration-400 ${
              active === i ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
          >
            {slide}
          </div>
        ))}
      </div>

      {/* Nav dots */}
      <div className="flex justify-center gap-2 pb-4">
        {tabs.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`h-2 rounded-full transition-all duration-200 ${
              active === i ? 'w-6 bg-purple' : 'w-2 bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  )
}
