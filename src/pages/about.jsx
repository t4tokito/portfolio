import React from 'react'
import mui from '../components/img/mui2.png'
import { User2, Target, Heart, Sparkles } from 'lucide-react'

const About = () => {
  const cards = [
    {
      icon: Target,
      title: 'Engineering Goals',
      desc: 'Build high-performance web applications with seamless UX, focusing on code clean-up and responsive styling.',
      color: 'text-sapphire bg-sapphire/5 border-sapphire/20'
    },
    {
      icon: Heart,
      title: 'Design Philosophies',
      desc: 'Create highly interactive UI interfaces with elegant glassmorphism, responsive grids, and soft dark styling templates.',
      color: 'text-mauve bg-mauve/5 border-mauve/20'
    },
    {
      icon: Sparkles,
      title: 'Creative Coding',
      desc: 'Eagerly learning new algorithms, tools, frameworks, and micro-animations to stay at the cutting edge of web standard solutions.',
      color: 'text-pink bg-pink/5 border-pink/20'
    }
  ]

  return (
    <div className="relative min-h-screen w-full py-16 px-4 md:px-8 overflow-hidden">
      
      {/* Background radial glows */}
      <div className="absolute top-1/3 right-1/10 w-96 h-96 aura-glow-blue rounded-full filter blur-3xl opacity-30 pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-1/3 left-1/10 w-96 h-96 aura-glow-mauve rounded-full filter blur-3xl opacity-30 pointer-events-none animate-pulse-glow animate-float-delayed" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Title Section */}
        <div className="text-center mb-16 animate-fade-up">
          <h1 className="text-4xl md:text-6xl font-space font-extrabold tracking-tight text-white inline-flex items-center gap-4">
            <User2 className="text-sapphire w-10 h-10 md:w-14 md:h-14 animate-pulse" />
            About <span className="text-gradient">Me</span>
          </h1>
          <p className="text-muted font-mono text-xs md:text-sm mt-3 uppercase tracking-widest">
            System.Read_Core_Profile()
          </p>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Story (Cols 1-7) */}
          <div className="lg:col-span-7 flex flex-col gap-6 animate-fade-up delay-1">

            {/* Story Card 1 */}
            <div className="glass-card p-6 md:p-8 rounded-3xl relative overflow-hidden group">
              <h2 className="text-2xl md:text-3xl font-space font-bold text-white mb-4 flex items-center gap-2">
                <span className="w-2 h-6 bg-gradient-to-b from-blue to-sapphire rounded-full" />
                The Developer Story
              </h2>
              <p className="text-muted text-base md:text-lg leading-relaxed">
                Hello there! My name is <b className="text-lavender">Vikas</b>. I am a passionate web developer dedicated to building beautiful, functional, and user-centered websites. I have built solid foundations in <b className="text-mauve">HTML, CSS, JavaScript, React.js, and Tailwind CSS</b>.
              </p>
            </div>

            {/* Story Card 2 */}
            <div className="glass-card p-6 md:p-8 rounded-3xl relative overflow-hidden group">
              <h2 className="text-2xl md:text-3xl font-space font-bold text-white mb-4 flex items-center gap-2">
                <span className="w-2 h-6 bg-gradient-to-b from-mauve to-lavender rounded-full" />
                Growth & Learning
              </h2>
              <p className="text-muted text-base md:text-lg leading-relaxed">
                I am always eager to learn new things and continuously push my technical limits. In my free time, I work on challenging frontend scripts, follow modern user interface trends, and participate in web projects to refine my workflows.
              </p>
            </div>

            {/* Values Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2">
              {cards.map((card, index) => {
                const Icon = card.icon
                return (
                  <div key={index} className={`glass-card p-5 rounded-2xl border flex flex-col gap-3 ${card.color}`}>
                    <Icon size={24} />
                    <h4 className="font-space font-bold text-white text-base">{card.title}</h4>
                    <p className="text-muted text-xs leading-relaxed">{card.desc}</p>
                  </div>
                )
              })}
            </div>

          </div>

          {/* Right Column: Avatar Graphic (Cols 8-12) */}
          <div className="lg:col-span-5 flex justify-center relative animate-fade-up delay-3">
            <div className="relative w-72 h-72 md:w-96 md:h-96 group">
              {/* Decorative soft shapes */}
              <div className="absolute inset-0 rounded-3xl border border-sapphire/20 rotate-6 group-hover:rotate-3 transition-transform duration-500" />
              <div className="absolute inset-0 rounded-3xl border border-mauve/20 -rotate-3 group-hover:-rotate-1 transition-transform duration-500" />
              <div className="absolute inset-0 rounded-3xl bg-surface/60 p-4 border border-white/10 overflow-hidden shadow-2xl flex items-center justify-center">
                <img
                  src={mui}
                  alt="Muichiro Tokito Profile Visual"
                  className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-500 filter drop-shadow-[0_0_20px_rgba(203,166,247,0.35)]"
                />
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}

export default About
