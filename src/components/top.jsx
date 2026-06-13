import React from 'react'
import tokito from './img/tokito.png'
import html from './img/html.png'
import css from './img/css.png'
import js from './img/js.png'
import react from './img/react.png'
import tailwind from './img/tailwind.png'
import mui from './img/mui.png'
import { GraduationCap, Code2, Sparkles, Terminal, Cpu } from 'lucide-react'

const Top = () => {
  const skills = [
    { name: 'HTML5', img: html, level: 'w-[88%]' },
    { name: 'CSS3', img: css, level: 'w-[85%]' },
    { name: 'JavaScript', img: js, level: 'w-4/5' },
    { name: 'React.js', img: react, level: 'w-[82%]' },
    { name: 'Tailwind CSS', img: tailwind, level: 'w-[90%]' },
  ]

  return (
    <div className="relative min-h-screen w-full py-16 px-4 md:px-8 overflow-hidden">

      {/* Background Glowing Ambient Orbs */}
      <div className="absolute top-1/4 left-1/10 w-96 h-96 aura-glow-blue rounded-full filter blur-3xl opacity-40 animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 aura-glow-mauve rounded-full filter blur-3xl opacity-40 animate-pulse-glow animate-float-delayed" />

      {/* Main Container Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">

        {/* Left Side: Bio & Education (Cols 1-7) */}
        <div className="lg:col-span-7 flex flex-col gap-10">

          {/* Intro Console */}
          <div className="glass-card p-6 md:p-8 rounded-3xl relative overflow-hidden group animate-fade-up">
            {/* Hologram lines effect */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(18,24,38,0)_95%,rgba(137,180,250,0.10)_95%)] bg-[length:100%_24px] pointer-events-none opacity-40" />

            {/* Header / Accent */}
            <div className="flex items-center gap-3 text-sapphire text-xs font-mono tracking-widest uppercase mb-4">
              <Terminal size={14} className="animate-pulse" />
              <span>System.Initialize("Developer_Bio")</span>
            </div>

            {/* Hello Header */}
            <h1 className="text-4xl md:text-6xl font-space font-extrabold tracking-tight mb-6 flex items-center gap-4 flex-wrap text-white">
              Hello!
              <span className="inline-flex items-center justify-center p-2 bg-lavender/10 border border-lavender/25 rounded-2xl animate-float">
                <img
                  src={tokito}
                  alt="Tokito"
                  className="h-10 w-10 md:h-14 md:w-14 object-contain filter drop-shadow-[0_0_12px_rgba(180,190,254,0.5)]"
                />
              </span>
            </h1>

            {/* Text Bio */}
            <p className="text-muted text-lg leading-relaxed font-outfit mb-6">
              My name is <span className="text-gradient font-semibold font-space">Vikas</span>.
              My core strength lies in designing state-of-the-art <b className="text-lavender font-semibold">frontend architectures, React JS, and Tailwind CSS</b>.
              I am passionate about implementing modern, pixel-perfect user interfaces and solving complex frontend engineering tasks.
            </p>

            <div className="p-3 bg-white/5 border border-white/5 rounded-2xl inline-flex items-center gap-2 text-sm text-muted font-mono">
              <Sparkles size={16} className="text-mauve animate-spin-slow" />
              <span>Hope you enjoy my portfolio & have a fantastic day!</span>
            </div>
          </div>

          {/* Education panel */}
          <div className="glass-card p-6 md:p-8 rounded-3xl relative overflow-hidden animate-fade-up delay-2">
            <div className="flex items-center gap-3 text-mauve text-xs font-mono tracking-widest uppercase mb-6">
              <Cpu size={14} />
              <span>Academic.Log()</span>
            </div>

            <div className="flex gap-4 items-start">
              <div className="p-3 rounded-2xl bg-mauve/10 border border-mauve/20 text-mauve shadow-[0_0_18px_rgba(203,166,247,0.15)]">
                <GraduationCap size={28} />
              </div>
              <div>
                <h3 className="text-2xl font-space font-bold text-white mb-2">Education Timeline</h3>
                <p className="text-muted leading-relaxed max-w-lg">
                  Successfully completed my 10th grade in New Delhi in <b className="text-mauve font-semibold">2026</b>, and currently pursuing my 11th grade studies this year, expanding my knowledge stack.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Graphic & Skills (Cols 8-12) */}
        <div className="lg:col-span-5 flex flex-col gap-10 items-center justify-center animate-fade-up delay-3">

          {/* Avatar Graphic Panel */}
          <div className="relative w-72 h-72 md:w-88 md:h-88 group">
            {/* Spinning neon rings */}
            <div className="absolute inset-0 rounded-full border-2 border-dashed border-lavender/20 animate-[spin_40s_linear_infinite]" />
            <div className="absolute -inset-4 rounded-full border border-mauve/25 animate-[spin_25s_linear_infinite_reverse]" />

            {/* Background glowing aura */}
            <div className="absolute inset-4 rounded-full bg-gradient-to-tr from-blue to-mauve opacity-20 filter blur-xl group-hover:opacity-35 transition-opacity duration-500" />

            {/* Image Wrapper */}
            <div className="relative w-full h-full rounded-full overflow-hidden border border-white/10 bg-surface/60 p-4 shadow-2xl flex items-center justify-center">
              <img
                src={mui}
                alt="Muichiro Tokito Anime Graphic"
                className="w-[90%] h-[90%] object-contain rounded-full transform group-hover:scale-105 group-hover:rotate-2 transition-all duration-500 filter drop-shadow-[0_0_20px_rgba(137,180,250,0.4)]"
              />
            </div>
          </div>

          {/* Holographic Skills Matrix */}
          <div className="w-full glass-card p-6 rounded-3xl">
            <div className="flex items-center gap-3 text-sapphire text-xs font-mono tracking-widest uppercase mb-5">
              <Code2 size={14} />
              <span>Core.Skills_Stack()</span>
            </div>

            <div className="flex flex-col gap-3">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 rounded-2xl bg-white/5 border border-white/5 shadow-md hover:translate-x-2 hover:border-lavender/25 transition-all duration-300"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-canvas/60 p-2 flex items-center justify-center border border-white/5">
                      <img src={skill.img} alt={skill.name} className="w-full h-full object-contain" />
                    </div>
                    <span className="font-space font-semibold text-white text-sm md:text-base">{skill.name}</span>
                  </div>
                  <div className="h-1.5 w-24 bg-elevated rounded-full overflow-hidden">
                    <div className={`h-full bg-gradient-to-r from-blue to-mauve ${skill.level} rounded-full`} />
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Top
