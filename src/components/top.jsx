import React from 'react'
import { Link } from 'react-router-dom'
import TerminalCard from './TerminalCard'
import tokito from './img/tokito.png'
import html from './img/html.png'
import css from './img/css.png'
import js from './img/js.png'
import react from './img/react.png'
import tailwind from './img/tailwind.png'
import mui from './img/mui.png'
import {
  GraduationCap, Code2, Cpu, ArrowRight,
  FolderGit2, ShieldCheck, Activity
} from 'lucide-react'

const Top = () => {
  const skills = [
    { name: 'HTML5', img: html },
    { name: 'CSS3', img: css },
    { name: 'JavaScript', img: js },
    { name: 'React.js', img: react },
    { name: 'React Native', img: null, icon: Code2 },
    { name: 'Tailwind CSS', img: tailwind },
    { name: 'NativeWind', img: null, icon: Code2 },
  ]

  return (
    <div className="relative w-full overflow-hidden">

      {/* ───────────────── HERO ───────────────── */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 pt-16 md:pt-24 pb-12 md:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">

          {/* Left — editorial headline (Cols 1-7) */}
          <div className="lg:col-span-7 flex flex-col gap-7 animate-fade-up">

            <div className="flex items-center gap-3 flex-wrap">
              <span className="term-label">
                <span className="status-dot" /> [ STATUS ] AVAILABLE FOR WORK
              </span>
            </div>

            <h1 className="font-space font-black tracking-tight text-ink leading-[0.95] text-[2.7rem] sm:text-6xl lg:text-7xl">
              Building<br />
              <span className="text-accent">frontend</span> systems<br />
              that <span className="cursor-blink">matter</span>
            </h1>

            <p className="text-muted text-base md:text-lg leading-relaxed max-w-xl">
              I'm <span className="text-ink font-semibold">Vikas Maurya</span> — aka <span className="text-accent font-semibold">t4tokito</span> (Tokito Dev) — a frontend developer crafting
              fast, pixel-perfect interfaces with <span className="text-accent font-medium">React</span>,
              <span className="text-accent font-medium"> React Native</span>, and
              <span className="text-accent font-medium"> Tailwind CSS</span>. Minimal by intent, premium by execution.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <Link to="/projects" className="btn-tactical btn-primary group">
                View Projects
                <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <Link to="/contact" className="btn-tactical btn-ghost">
                Contact
              </Link>
            </div>

            {/* Stat strip */}
            <div className="grid grid-cols-3 gap-4 max-w-lg pt-6 border-t border-line">
              {[
                { k: 'STACK', v: '7+ Tools' },
                { k: 'FOCUS', v: 'Frontend' },
                { k: 'BASED IN', v: 'Delhi, IN' },
              ].map((s) => (
                <div key={s.k} className="flex flex-col gap-1">
                  <span className="text-faint font-mono text-[10px] tracking-widest uppercase">{s.k}</span>
                  <span className="text-ink font-space font-bold text-sm md:text-base">{s.v}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — terminal console card (Cols 8-12) */}
          <div className="lg:col-span-5 animate-fade-up delay-2">
            <TerminalCard file="developer_bio.sh" bodyClassName="font-mono text-[13px] leading-relaxed space-y-2.5">
              <p className="text-faint"><span className="text-accent">$</span> whoami</p>
              <p className="text-ink flex items-center gap-3">
                <img src={tokito} alt="t4tokito logo" className="h-8 w-8 object-contain" />
                Vikas (t4tokito) — Frontend Engineer
              </p>
              <p className="text-faint"><span className="text-accent">$</span> cat strengths.json</p>
              <p className="text-muted">
                {'{'} <br />
                &nbsp;&nbsp;<span className="text-accent-soft">"ui"</span>: "pixel-perfect", <br />
                &nbsp;&nbsp;<span className="text-accent-soft">"stack"</span>: "react + native + tailwind", <br />
                &nbsp;&nbsp;<span className="text-accent-soft">"mindset"</span>: "ship &amp; iterate" <br />
                {'}'}
              </p>
              <p className="text-ink flex items-center gap-2 pt-1">
                <ShieldCheck size={14} className="text-accent" /> verified · online
              </p>
            </TerminalCard>
          </div>
        </div>
      </section>

      {/* ───────────────── LOWER GRID ───────────────── */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 items-start">

          {/* Education + intro (Cols 1-7) */}
          <div className="lg:col-span-7 flex flex-col gap-6">

            <div className="glass-card p-6 md:p-8 animate-fade-up">
              <span className="term-label mb-5"><Cpu size={13} /> // ACADEMIC.LOG</span>
              <div className="flex gap-5 items-start">
                <div className="p-3 rounded-xl bg-elevated border border-line text-accent shrink-0">
                  <GraduationCap size={26} />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-space font-bold text-ink mb-2">Education Timeline</h3>
                  <p className="text-muted leading-relaxed">
                    Completed 10th grade in New Delhi in <b className="text-accent font-semibold">2026</b>, and
                    currently pursuing 11th grade with <b className="text-accent font-semibold">PCM + Computer Science</b> — actively expanding my engineering stack.
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-card p-6 md:p-8 animate-fade-up delay-1">
              <span className="term-label mb-5"><Activity size={13} /> // PROTOCOL.MISSION</span>
              <p className="text-ink text-lg md:text-xl font-space font-semibold leading-snug">
                Design with restraint. Build with intent.<br />
                <span className="text-muted font-normal text-base">
                  Every interface should feel premium, intentional, and powerful — minimal, not empty.
                </span>
              </p>
            </div>
          </div>

          {/* Skills matrix (Cols 8-12) */}
          <div className="lg:col-span-5 animate-fade-up delay-3">
            <div className="glass-card p-6 md:p-7">
              <span className="term-label mb-5"><Code2 size={13} /> // CORE.SKILLS_STACK</span>

              <div className="grid grid-cols-2 gap-3">
                {skills.map((skill) => {
                  const SkillIcon = skill.icon
                  return (
                    <div
                      key={skill.name}
                      className="group flex items-center gap-3 p-3 rounded-xl bg-elevated/60 border border-line hover:border-accent/50 hover:bg-accent/5 transition-all duration-300 cursor-default"
                    >
                      <div className="w-9 h-9 rounded-lg bg-canvas border border-line flex items-center justify-center shrink-0 group-hover:border-accent/40 transition-colors duration-300">
                        {skill.img ? (
                          <img src={skill.img} alt="" className="w-5 h-5 object-contain" />
                        ) : (
                          <SkillIcon size={16} className="text-accent" />
                        )}
                      </div>
                      <span className="font-space font-semibold text-ink text-sm leading-tight">{skill.name}</span>
                    </div>
                  )
                })}
              </div>

              <Link
                to="/projects"
                className="mt-6 w-full btn-tactical btn-ghost group"
              >
                <FolderGit2 size={15} /> Explore Work
                <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* hidden decorative avatar preserved for brand continuity (sr-only) */}
      <img src={mui} alt="" className="sr-only" aria-hidden="true" />
    </div>
  )
}

export default Top
