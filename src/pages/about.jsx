import React from 'react'
import mui from '../components/img/mui2.png'
import TerminalCard from '../components/TerminalCard'
import { Target, Heart, Sparkles, ShieldCheck, User, GitBranch } from 'lucide-react'

const About = () => {
  const cards = [
    {
      icon: Target,
      title: 'Engineering Goals',
      desc: 'Build cross-platform apps with seamless UX — clean code, responsive web & mobile interfaces.',
    },
    {
      icon: Heart,
      title: 'Design Philosophy',
      desc: 'Premium, minimal interfaces — dark surfaces, sharp typography, consistent across platforms.',
    },
    {
      icon: Sparkles,
      title: 'Creative Coding',
      desc: 'Always learning new tools, exploring React Native, and refining workflows on both web & mobile.',
    },
  ]

  return (
    <div className="relative w-full py-14 md:py-20 px-4 md:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-12 md:mb-16 animate-fade-up">
          <span className="term-label mb-4">// SYSTEM.READ_CORE_PROFILE</span>
          <h1 className="text-4xl md:text-6xl font-space font-black tracking-tight text-ink leading-none">
            About <span className="text-accent">Me</span>
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-start">

          {/* Terminal cards (Cols 1-7) */}
          <div className="lg:col-span-7 flex flex-col gap-6 animate-fade-up delay-1">

            <TerminalCard
              file="developer_story.md"
              icon={User}
              bodyClassName="font-mono text-[13px] md:text-sm leading-relaxed space-y-2.5"
            >
              <p className="text-faint"><span className="text-accent">$</span> cat about/intro.txt</p>
              <p className="text-muted">
                Hi! I'm <b className="text-accent">Vikas</b> — a passionate web developer focused on building
                beautiful, functional, user-centered products.
              </p>
              <p className="text-faint"><span className="text-accent">$</span> ls ./foundations</p>
              <p className="text-ink flex flex-wrap gap-x-4 gap-y-1">
                <span>HTML</span><span>CSS</span><span>JavaScript</span><span>React.js</span><span>React Native</span><span>TailwindCSS</span><span>NativeWind</span>
              </p>
            </TerminalCard>

            <TerminalCard
              file="growth.log"
              icon={GitBranch}
              bodyClassName="font-mono text-[13px] md:text-sm leading-relaxed space-y-2.5"
            >
              <p className="text-faint"><span className="text-accent">$</span> tail -f growth.log</p>
              <p className="text-muted">
                <span className="text-accent-soft">[learning]</span> always pushing my technical limits.
              </p>
              <p className="text-muted">
                <span className="text-accent-soft">[building]</span> challenging frontend scripts in free time.
              </p>
              <p className="text-muted">
                <span className="text-accent-soft">[tracking]</span> modern UI trends &amp; refining workflows.
              </p>
              <p className="text-ink flex items-center gap-2 pt-1">
                <span className="status-dot" /> status: leveling up<span className="cursor-blink" />
              </p>
            </TerminalCard>
          </div>

          {/* Visual HUD (Cols 8-12) — between cards & values on mobile */}
          <div className="lg:col-span-5 animate-fade-up delay-3">
            <div className="glass-card p-5 relative overflow-hidden group">
              {/* HUD corners */}
              <span className="absolute top-3 left-3 w-6 h-6 border-t border-l border-accent/50" />
              <span className="absolute top-3 right-3 w-6 h-6 border-t border-r border-accent/50" />
              <span className="absolute bottom-3 left-3 w-6 h-6 border-b border-l border-accent/50" />
              <span className="absolute bottom-3 right-3 w-6 h-6 border-b border-r border-accent/50" />

              <div className="aspect-square rounded-xl bg-elevated/40 border border-line flex items-center justify-center p-6 overflow-hidden">
                <img
                  src={mui}
                  alt="Vikas profile visual"
                  className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="mt-4 flex items-center justify-between font-mono text-xs">
                <span className="text-faint">[ PROFILE_RENDER ]</span>
                <span className="flex items-center gap-1.5 text-accent">
                  <ShieldCheck size={13} /> verified
                </span>
              </div>
            </div>
          </div>

          {/* Values grid (Cols 1-7) */}
          <div className="lg:col-span-7 animate-fade-up delay-2">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {cards.map((card) => {
                const Icon = card.icon
                return (
                  <div key={card.title} className="glass-card p-5 flex flex-col gap-3">
                    <div className="p-2.5 rounded-lg bg-elevated border border-line text-accent w-fit">
                      <Icon size={20} />
                    </div>
                    <h4 className="font-space font-bold text-ink text-sm">{card.title}</h4>
                    <p className="text-muted text-xs leading-relaxed">{card.desc}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
