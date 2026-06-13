import React, { useState } from 'react'
import mui from '../components/img/mui1.png'
import insta from "../components/img/insta.png"
import { Mail, Phone, Send, Copy, Check, Terminal } from 'lucide-react'

const Github = ({ size = 20, ...props }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
)

const Contact = () => {
  const [copiedText, setCopiedText] = useState('')

  const handleCopy = (text, label) => {
    navigator.clipboard.writeText(text)
    setCopiedText(label)
    setTimeout(() => setCopiedText(''), 2500)
  }

  const contacts = [
    {
      label: 'Email',
      value: 't4tokito@gmail.com',
      href: 'mailto:t4tokito@gmail.com',
      icon: Mail,
      color: 'hover:border-sapphire/30 text-sapphire bg-sapphire/5'
    },
    {
      label: 'Phone',
      value: '+91 99533 70380',
      href: 'tel:+919953370380',
      icon: Phone,
      color: 'hover:border-mauve/30 text-mauve bg-mauve/5'
    },
    {
      label: 'GitHub',
      value: 'github.com/vikasmourya10',
      href: 'https://github.com/vikasmourya10',
      icon: Github,
      color: 'hover:border-teal/30 text-teal bg-teal/5'
    }
  ]

  return (
    <div className="relative min-h-screen w-full py-16 px-4 md:px-8 overflow-hidden">
      
      {/* Background ambient light */}
      <div className="absolute top-1/3 left-1/10 w-96 h-96 aura-glow-blue rounded-full filter blur-3xl opacity-30 pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-1/3 right-1/10 w-96 h-96 aura-glow-mauve rounded-full filter blur-3xl opacity-30 pointer-events-none animate-pulse-glow animate-float-delayed" />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Title Banner */}
        <div className="text-center mb-16 animate-fade-up">
          <h1 className="text-4xl md:text-6xl font-space font-extrabold tracking-tight text-white inline-flex items-center gap-4">
            <Send className="text-sapphire w-10 h-10 md:w-14 md:h-14 animate-[pulse_2s_infinite]" />
            Contact <span className="text-gradient">Me</span>
          </h1>
          <p className="text-muted font-mono text-xs md:text-sm mt-3 uppercase tracking-widest">
            System.Open_Connection_Channel()
          </p>
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Column: Visual Profile Hud (Cols 1-5) */}
          <div className="lg:col-span-5 flex flex-col justify-center items-center animate-fade-up delay-1">
            <div className="glass-card p-6 rounded-3xl w-full flex flex-col items-center justify-center gap-6 relative overflow-hidden group">

              {/* Soft border HUD lines */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-lavender/70" />
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-lavender/70" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-lavender/70" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-lavender/70" />

              {/* Profile Image & Animated Border Group */}
              <div className="relative w-52 h-52 md:w-60 md:h-60 flex items-center justify-center">
                {/* Avatar frame */}
                <div className="absolute inset-0 rounded-full p-1 bg-gradient-to-tr from-blue via-transparent to-mauve animate-[spin_12s_linear_infinite]">
                  <div className="w-full h-full rounded-full bg-canvas" />
                </div>

                {/* Real Image sitting inside (absolute, centered, matching the spinning frame) */}
                <img
                  src={mui}
                  alt="Muichiro Tokito Profile Logo"
                  className="absolute w-[88%] h-[88%] rounded-full object-cover border-4 border-surface shadow-2xl filter drop-shadow-[0_0_15px_rgba(180,190,254,0.35)] transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="text-center mt-2 font-space">
                <h3 className="text-xl font-bold text-white">Vikas Mourya</h3>
                <p className="text-sapphire font-mono text-xs mt-1">Available for Inquiries</p>
              </div>

              {/* Instagram tag */}
              <a 
                href="https://www.instagram.com/t4tokito/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-6 py-2.5 rounded-full bg-surface border border-white/5 hover:border-pink/40 transition-all duration-300 group/insta mt-2"
              >
                <span className="text-muted font-mono text-sm group-hover/insta:text-white">@t4tokito</span>
                <img src={insta} alt="Instagram" className="h-5 w-5 object-contain transform group-hover/insta:scale-110 transition-transform duration-200" />
              </a>
            </div>
          </div>

          {/* Right Column: Connection Cards (Cols 6-12) */}
          <div className="lg:col-span-7 flex flex-col justify-between gap-6 animate-fade-up delay-2">

            {/* Terminal status box */}
            <div className="glass-card p-6 rounded-3xl bg-canvas/60 font-mono text-sm text-lavender flex flex-col gap-2 relative">
              <div className="flex items-center gap-2 mb-2 pb-2 border-b border-white/5 text-faint text-xs">
                <Terminal size={14} />
                <span>TERMINAL_LOG.EXE</span>
              </div>
              <p className="text-white font-semibold flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-green animate-ping" />
                Channel status: Active and listening.
              </p>
              <p className="text-muted text-xs leading-relaxed">
                Click copy icons to save details directly to your clipboard, or click a card to launch your mail application, call protocol, or browser target.
              </p>
            </div>

            {/* Dynamic Contacts Stack */}
            <div className="flex flex-col gap-4">
              {contacts.map((contact, index) => {
                const Icon = contact.icon
                const isCopied = copiedText === contact.label
                return (
                  <div
                    key={index}
                    className={`glass-card p-5 rounded-3xl border flex items-center justify-between gap-4 transition-all duration-300 group ${contact.color}`}
                  >
                    <a
                      href={contact.href}
                      target={contact.label === 'GitHub' ? '_blank' : '_self'}
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 flex-1"
                    >
                      <div className="p-3 rounded-2xl bg-canvas/40 border border-white/5 text-inherit group-hover:scale-105 transition-transform duration-200">
                        <Icon size={24} />
                      </div>
                      <div className="overflow-hidden">
                        <span className="text-muted text-xs font-mono block mb-1">{contact.label}</span>
                        <span className="text-white font-space font-semibold text-sm md:text-lg block truncate">{contact.value}</span>
                      </div>
                    </a>

                    {/* Copy Button */}
                    <button
                      onClick={() => handleCopy(contact.value, contact.label)}
                      className="p-3.5 rounded-2xl bg-canvas/40 border border-white/5 text-muted hover:text-white hover:bg-white/5 transition-all duration-200 relative group/btn"
                      title={`Copy ${contact.label}`}
                    >
                      {isCopied ? (
                        <Check size={16} className="text-green animate-[scale-in_0.2s_ease-out]" />
                      ) : (
                        <Copy size={16} className="group-hover/btn:scale-105 transition-transform duration-200" />
                      )}

                      {/* Copied Tooltip */}
                      {isCopied && (
                        <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-green text-[#0d0d14] font-mono font-bold text-[10px] px-2 py-1 rounded shadow-lg animate-bounce">
                          Copied!
                        </span>
                      )}
                    </button>
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

export default Contact
