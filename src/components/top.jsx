import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Reveal from './Reveal'
import DoodleArt from './DoodleArt'
import tokito from './img/tokito.png'
import mui from './img/mui.png'
import {
  ArrowRight, ArrowUpRight, GraduationCap,
  Sparkles, FolderGit2, MapPin, Star
} from 'lucide-react'

const chips = ['React', 'React Native', 'Tailwind', 'Expo', 'JavaScript', 'Vite']

const Top = () => {
  // cycling spotlight — one chip glows yellow for 2s, then passes it on
  const [activeChip, setActiveChip] = useState(0)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const id = setInterval(() => {
      setActiveChip((i) => (i + 1) % chips.length)
    }, 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="relative w-full">
      {/* ─────────── GIANT DISPLAY ─────────── */}
      <section className="max-w-6xl mx-auto px-4 md:px-6 pt-10 md:pt-16">
        <Reveal>
          <div className="flex items-center gap-2 mb-2">
            <span className="inline-flex items-center gap-1.5 text-[12px] font-space font-bold tracking-[0.12em] uppercase text-accent">
              <span className="status-dot" style={{ width: 7, height: 7 }} />
              Available for work
            </span>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <h1 className="font-display text-ink leading-[0.85] tracking-wide select-none text-[clamp(4.5rem,17vw,13rem)]">
            TOKITO
            <span className="sr-only"> by Vikas Maurya, known online as t4tokito (Tokito Dev)</span>
          </h1>
          <div className="flex items-center gap-3 md:gap-5 -mt-1 md:-mt-3">
            <span className="font-display text-outline leading-[0.85] text-[clamp(4.5rem,17vw,13rem)]">
              DEV
            </span>
            <Star size={28} className="text-sun fill-sun animate-wiggle shrink-0 hidden sm:block" />
            <p className="hidden sm:block font-space font-semibold text-muted text-sm md:text-base max-w-[180px] leading-snug">
              frontend developer, Delhi → world
            </p>
          </div>
        </Reveal>

        {/* ── editorial row: about-blurb left, chips right ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-8 md:mt-10 items-start">
          <Reveal className="lg:col-span-6" delay={140}>
            <h2 className="font-space font-bold text-3xl md:text-[2.6rem] leading-[1.02] tracking-tight text-ink">
              I build playful, fast interfaces for web & mobile
            </h2>
            <p className="text-muted text-[14.5px] md:text-[15.5px] leading-relaxed max-w-md mt-4">
              Hi, I'm <span className="text-ink font-semibold">Vikas Maurya</span> — aka{' '}
              <span className="text-ink font-semibold">t4tokito</span>. I work with React,
              React Native & Tailwind. Minimal by intent, full of character by execution.
            </p>
            <div className="flex flex-wrap items-center gap-3 mt-6">
              <Link to="/projects" className="btn-tactical btn-primary group !px-6 !py-3 !text-[14px]">
                View my work
                <ArrowRight size={16} className="group-hover:translate-x-1 group-hover:rotate-12 transition-transform duration-300" />
              </Link>
              <Link to="/contact" className="btn-tactical btn-ghost !px-6 !py-3 !text-[14px]">
                Get in touch
              </Link>
            </div>
            <p className="flex items-center gap-1.5 text-[12.5px] text-faint mt-5">
              <MapPin size={13} /> New Delhi, India
              <span className="mx-1.5 inline-block w-1 h-1 rounded-full bg-faint" />
              5 shipped builds
            </p>
          </Reveal>

          <Reveal className="lg:col-span-6" delay={220}>
            <div className="lg:text-right">
              <p className="font-space text-[12px] font-bold tracking-[0.14em] uppercase text-faint mb-3">
                Toolbox — pick your flavour
              </p>
              <div className="flex flex-wrap lg:justify-end gap-2">
                {chips.map((c, i) => (
                  <span
                    key={c}
                    className={`chip-cream ${i === activeChip ? 'chip-cream-active' : ''}`}
                    style={{ transform: `rotate(${i % 2 === 0 ? -1.5 : 1.5}deg)` }}
                  >
                    {c}
                  </span>
                ))}
                <Link
                  to="/projects"
                  className="inline-flex items-center gap-1.5 font-space text-[13px] font-bold text-[#0a0d0b] bg-[#fff7e8] rounded-[10px] px-3.5 py-2 border-[1.5px] border-[#fff7e8] hover:bg-sun hover:border-sun transition-all duration-300 hover:-translate-y-0.5 hover:rotate-1"
                >
                  Explore <ArrowUpRight size={14} />
                </Link>
              </div>

              {/* mini profile strip */}
              <div className="mt-5 inline-flex items-center gap-3 rounded-2xl border border-[#fff7e8]/12 bg-white/[0.03] px-4 py-3">
                <img
                  src={tokito}
                  alt="t4tokito logo — Vikas Maurya, frontend developer"
                  className="w-11 h-11 rounded-xl object-contain bg-white/[0.06] border border-white/10 p-1"
                />
                <div className="text-left">
                  <p className="font-space font-bold text-ink text-[14px] leading-tight">Vikas Maurya</p>
                  <p className="text-muted text-[12px]">Frontend Developer · UI polish 92%</p>
                </div>
                <div className="ml-2 flex-1 min-w-8 h-2 rounded-full bg-white/[0.08] overflow-hidden hidden sm:block">
                  <div className="h-full w-[92%] rounded-full bg-gradient-to-r from-accent to-sun" />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─────────── ILLUSTRATION PANEL ─────────── */}
      <section className="max-w-6xl mx-auto px-4 md:px-6 mt-8 md:mt-10">
        <Reveal delay={100}>
          <DoodleArt />
        </Reveal>
      </section>

      {/* ─────────── BENTO ─────────── */}
      <section className="max-w-6xl mx-auto px-4 md:px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-5">
          <Reveal className="lg:col-span-7" delay={0}>
            <div className="glass-card p-6 md:p-7 h-full !rounded-[24px] flex gap-5 items-start">
              <span className="w-12 h-12 rounded-2xl bg-sun text-[#0a0d0b] flex items-center justify-center shrink-0 -rotate-3">
                <GraduationCap size={22} />
              </span>
              <div>
                <p className="term-label mb-3">Education</p>
                <h3 className="font-space font-bold text-xl text-ink tracking-tight mb-2">
                  Class 11 · PCM + Computer Science
                </h3>
                <p className="text-muted text-[14.5px] leading-relaxed">
                  Completed Class 10 in New Delhi in <span className="text-ink font-medium">2026</span>,
                  now pursuing 11th with PCM + CS — learning DSA, building apps daily, and refining
                  my React & React Native workflow.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal className="lg:col-span-5" delay={100}>
            <div className="h-full rounded-[24px] bg-[#46cfa9] text-[#0a0d0b] p-6 md:p-7 flex flex-col justify-between gap-6 relative overflow-hidden">
              <Star size={120} className="absolute -right-8 -top-8 text-[#0a0d0b]/10 fill-[#0a0d0b]/10 rotate-12 pointer-events-none" />
              <div>
                <p className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-[0.14em] font-space font-bold mb-4 opacity-70">
                  <Sparkles size={13} /> Philosophy
                </p>
                <p className="font-display text-[26px] leading-[1.02]">
                  DESIGN WITH RESTRAINT. BUILD WITH CHARACTER.
                </p>
              </div>
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 bg-[#0a0d0b] text-[#fff7e8] rounded-full pl-5 pr-2 py-2 text-[14px] font-space font-bold w-fit hover:bg-[#fff7e8] hover:text-[#0a0d0b] transition-all duration-300 group"
              >
                Explore work
                <span className="w-8 h-8 rounded-full bg-[#46cfa9] text-[#0a0d0b] flex items-center justify-center group-hover:rotate-12 transition-transform">
                  <FolderGit2 size={15} />
                </span>
              </Link>
            </div>
          </Reveal>
        </div>

        <Reveal delay={100}>
          <div className="mt-4 md:mt-5 overflow-hidden rounded-[24px] border border-[#fff7e8]/10 bg-white/[0.02] py-4 relative">
            <div className="marquee-track px-4">
              {[0, 1].map((copy) => (
                <div key={copy} className="flex items-center gap-3 pr-3" aria-hidden={copy === 1}>
                  {['React.js', 'React Native', 'Tailwind CSS', 'NativeWind', 'JavaScript', 'Expo', 'Vite', 'UI Polish'].map((t) => (
                    <span
                      key={`${copy}-${t}`}
                      className="inline-flex items-center gap-2 whitespace-nowrap font-space text-[13px] font-semibold text-accent bg-accent/[0.06] border-[1.5px] border-accent/40 rounded-[10px] px-4 py-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-sun" />
                      {t}
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      <img src={mui} alt="" className="sr-only" aria-hidden="true" />
    </div>
  )
}

export default Top
