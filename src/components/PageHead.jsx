import React from 'react'
import { Star } from 'lucide-react'
import Reveal from './Reveal'

/**
 * PageHead — colossal editorial page header.
 * Giant display title + blurb left, meta chips right, doodle star.
 * Props: label, title (node), sr (screen-reader suffix), sub (node), meta (string[])
 */
const PageHead = ({ label, title, sr, sub, meta = [] }) => {
  return (
    <div>
      <Reveal>
        <div className="flex items-center gap-2.5 mb-4">
          <p className="term-label">{label}</p>
          <Star size={16} className="text-sun fill-sun animate-wiggle" />
        </div>
        <h1 className="font-display text-ink leading-[0.85] text-[clamp(3.2rem,10vw,7rem)]">
          {title}
          {sr && <span className="sr-only">{sr}</span>}
        </h1>
      </Reveal>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 mt-6 items-start">
        <Reveal className="lg:col-span-7" delay={100}>
          <div className="text-muted text-[15px] md:text-lg leading-relaxed max-w-xl">
            {sub}
          </div>
        </Reveal>
        {meta.length > 0 && (
          <Reveal className="lg:col-span-5" delay={180}>
            <div className="flex flex-wrap lg:justify-end gap-2">
              {meta.map((m, i) => (
                <span
                  key={m}
                  className="chip-teal"
                  style={{ transform: `rotate(${i % 2 === 0 ? -1.5 : 1.5}deg)` }}
                >
                  {m}
                </span>
              ))}
            </div>
          </Reveal>
        )}
      </div>

      {/* doodle rule */}
      <Reveal delay={200}>
        <div className="flex items-center gap-3 mt-8" aria-hidden="true">
          <svg width="120" height="14" viewBox="0 0 120 14" className="shrink-0">
            <path
              d="M2 8 Q 12 2, 22 8 T 42 8 T 62 8 T 82 8 T 102 8 T 122 8"
              stroke="#46cfa9" strokeWidth="3" fill="none" strokeLinecap="round"
            />
          </svg>
          <div className="flex-1 h-px bg-[#fff7e8]/10" />
          <Star size={14} className="text-coral fill-coral shrink-0" />
        </div>
      </Reveal>
    </div>
  )
}

export default PageHead
