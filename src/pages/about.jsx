import React from 'react'
import mui from '../components/img/mui2.png'
import Reveal from '../components/Reveal'
import SEO from '../components/SEO'
import Faq from '../components/Faq'
import PageHead from '../components/PageHead'
import { Target, Heart, Sparkles, MapPin, ArrowUpRight, Star } from 'lucide-react'
import { Link } from 'react-router-dom'

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Engineering goals',
      desc: 'Cross-platform apps with seamless UX — clean code, responsive web & mobile.',
      bg: 'bg-accent',
      fg: 'text-[#0a0d0b]',
      tilt: '-rotate-1',
    },
    {
      icon: Heart,
      title: 'Design philosophy',
      desc: 'Characterful, minimal interfaces — deep surfaces, chunky type, consistent everywhere.',
      bg: 'bg-sun',
      fg: 'text-[#0a0d0b]',
      tilt: 'rotate-1',
    },
    {
      icon: Sparkles,
      title: 'Always learning',
      desc: 'Exploring React Native, Expo & modern UI patterns. Shipping every week.',
      bg: 'bg-coral',
      fg: 'text-[#0a0d0b]',
      tilt: '-rotate-1',
    },
  ]

  return (
    <div className="relative w-full py-12 md:py-20 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        <SEO
          title="About"
          path="/about"
          description="About t4tokito — Vikas Maurya (Tokito Dev), frontend developer from Delhi working with React, React Native & Tailwind CSS."
        />
        <PageHead
          label="About me"
          title={<>HEY, I'M <span className="text-sun">VIKAS</span></>}
          sr=" — Vikas Maurya, known online as t4tokito (Tokito Dev)"
          sub={
            <>
              I'm Vikas — aka <span className="text-ink font-semibold">t4tokito (Tokito Dev)</span>,
              a frontend developer from Delhi building beautiful, functional, user-centered
              products for web and mobile.
            </>
          }
          meta={['Delhi, India', 'Frontend Dev', 'Open to work']}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-5 mt-10 md:mt-12 items-stretch">
          {/* polaroid photo */}
          <Reveal className="lg:col-span-5" delay={80}>
            <div className="h-full rounded-[24px] bg-[#fff7e8] p-4 pb-5 rotate-[-1.5deg] hover:rotate-0 transition-transform duration-500 shadow-[0_24px_60px_-24px_rgba(0,0,0,0.8)]">
              <div className="rounded-[16px] bg-[#0c120e] overflow-hidden aspect-[4/4.2] flex items-center justify-center p-8 group">
                <img
                  src={mui}
                  alt="Vikas Maurya, known online as t4tokito — frontend developer from Delhi"
                  className="w-full h-full object-contain group-hover:scale-[1.05] group-hover:rotate-1 transition-transform duration-700 ease-out"
                />
              </div>
              <div className="flex items-center justify-between px-1.5 pt-3.5 text-[#0a0d0b]">
                <span className="inline-flex items-center gap-1.5 text-[13px] font-space font-bold">
                  <MapPin size={14} /> Delhi, India
                </span>
                <span className="inline-flex items-center gap-1.5 text-[12px] font-space font-bold bg-[#0a0d0b] text-[#fff7e8] rounded-full px-3 py-1.5 -rotate-2">
                  <Star size={12} className="text-sun fill-sun" /> t4tokito
                </span>
              </div>
            </div>
          </Reveal>

          <div className="lg:col-span-7 flex flex-col gap-4 md:gap-5">
            <Reveal delay={120}>
              <div className="glass-card p-6 md:p-8 !rounded-[24px] rotate-[0.5deg]">
                <p className="term-label mb-4">My story</p>
                <p className="font-display text-[26px] md:text-[32px] leading-[1.02] text-ink">
                  HTML CURIOSITY → REACT OBSESSION → <span className="text-gradient">MOBILE DREAMS</span>
                </p>
                <p className="text-muted text-[14.5px] leading-relaxed mt-4">
                  Started with HTML & CSS curiosity, fell in love with React's component flow,
                  then went mobile with React Native. Now I obsess over spacing, motion and
                  load times — the tiny details that make an app feel expensive.
                </p>
                <div className="flex flex-wrap gap-2 mt-5">
                  {['React.js', 'React Native', 'Tailwind', 'Expo', 'JavaScript'].map((t, i) => (
                    <span
                      key={t}
                      className="chip-teal"
                      style={{ transform: `rotate(${i % 2 === 0 ? -1.5 : 1.5}deg)` }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={180}>
              <div className="rounded-[24px] bg-coral text-[#0a0d0b] p-6 md:p-8 relative overflow-hidden rotate-[-0.5deg] hover:rotate-0 transition-transform duration-500">
                <Sparkles size={110} className="absolute -right-6 -bottom-6 text-[#0a0d0b]/10 rotate-12 pointer-events-none" />
                <p className="font-space text-[11px] uppercase tracking-[0.14em] font-bold opacity-60 mb-3">Currently</p>
                <p className="font-display text-[24px] md:text-[28px] leading-[1.02]">
                  CLASS 11 · PCM + CS — LEVELING UP DAILY
                </p>
                <Link to="/projects" className="inline-flex items-center gap-1.5 font-space text-[14px] font-bold underline underline-offset-4 decoration-2 hover:gap-3 transition-all mt-4">
                  See what I'm building <ArrowUpRight size={15} />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 mt-4 md:mt-5">
          {values.map((v, i) => {
            const Icon = v.icon
            return (
              <Reveal key={v.title} delay={i * 90}>
                <div className={`rounded-[24px] ${v.bg} ${v.fg} ${v.tilt} hover:rotate-0 transition-transform duration-500 p-6 h-full`}>
                  <span className="w-11 h-11 rounded-2xl bg-[#0a0d0b] text-[#fff7e8] flex items-center justify-center mb-4">
                    <Icon size={20} />
                  </span>
                  <h4 className="font-display text-[22px] leading-none mb-2">{v.title.toUpperCase()}</h4>
                  <p className="text-[13.5px] leading-relaxed opacity-75 font-medium">{v.desc}</p>
                </div>
              </Reveal>
            )
          })}
        </div>

        <Faq />
      </div>
    </div>
  )
}

export default About
