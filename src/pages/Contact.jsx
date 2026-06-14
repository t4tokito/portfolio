import React, { useState } from 'react'
import mui from '../components/img/mui1.png'
import insta from '../components/img/insta.png'
import TerminalCard from '../components/TerminalCard'
import { Mail, Phone, Send, Copy, Check } from 'lucide-react'

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
    { label: 'Email', value: 't4tokito@gmail.com', href: 'mailto:t4tokito@gmail.com', icon: Mail },
    { label: 'Phone', value: '+91 99533 70380', href: 'tel:+919953370380', icon: Phone },
    { label: 'GitHub', value: 'github.com/t4tokito', href: 'https://github.com/t4tokito', icon: Github },
  ]

  return (
    <div className="relative w-full py-14 md:py-20 px-4 md:px-8 overflow-hidden">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-12 md:mb-16 animate-fade-up">
          <span className="term-label mb-4">// SYSTEM.OPEN_CONNECTION_CHANNEL</span>
          <h1 className="text-4xl md:text-6xl font-space font-black tracking-tight text-ink leading-none">
            Get In <span className="text-accent">Touch</span>
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

          {/* Left — profile HUD (Cols 1-5) */}
          <div className="lg:col-span-5 animate-fade-up delay-1">
            <div className="glass-card p-6 h-full flex flex-col items-center justify-center gap-6 relative overflow-hidden group">
              <span className="absolute top-3 left-3 w-7 h-7 border-t border-l border-accent/50" />
              <span className="absolute top-3 right-3 w-7 h-7 border-t border-r border-accent/50" />
              <span className="absolute bottom-3 left-3 w-7 h-7 border-b border-l border-accent/50" />
              <span className="absolute bottom-3 right-3 w-7 h-7 border-b border-r border-accent/50" />

              <div className="relative w-48 h-48 md:w-56 md:h-56 flex items-center justify-center">
                <div className="absolute inset-0 rounded-full p-[2px] bg-accent">
                  <div className="w-full h-full rounded-full bg-canvas" />
                </div>
                <img
                  src={mui}
                  alt="Vikas Maurya"
                  className="absolute w-[88%] h-[88%] rounded-full object-cover border-4 border-surface transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="text-center font-space">
                <h3 className="text-xl font-bold text-ink">Vikas Maurya</h3>
                <p className="text-accent font-mono text-xs mt-1 flex items-center justify-center gap-2">
                  <span className="status-dot" /> Available for inquiries
                </p>
              </div>

              <a
                href="https://www.instagram.com/t4tokito/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-5 py-2.5 rounded-lg bg-elevated border border-line hover:border-accent/50 transition-all duration-300 group/insta"
              >
                <span className="text-muted font-mono text-sm group-hover/insta:text-ink transition-colors">@t4tokito</span>
                <img src={insta} alt="" className="h-5 w-5 object-contain group-hover/insta:scale-110 transition-transform duration-200" />
              </a>
            </div>
          </div>

          {/* Right — channels (Cols 6-12) */}
          <div className="lg:col-span-7 flex flex-col gap-5 animate-fade-up delay-2">

            {/* terminal status */}
            <TerminalCard file="connection_log.exe" bodyClassName="font-mono text-sm">
              <p className="text-faint mb-2"><span className="text-accent">$</span> ./listen --channel open</p>
              <p className="text-ink font-semibold flex items-center gap-2">
                <span className="status-dot" /> Channel status: active &amp; listening
              </p>
              <p className="text-muted text-xs leading-relaxed mt-2">
                Copy any detail to your clipboard, or tap a card to launch mail, call, or browser.
              </p>
            </TerminalCard>

            {/* channels */}
            <div className="flex flex-col gap-4">
              {contacts.map((contact) => {
                const Icon = contact.icon
                const isCopied = copiedText === contact.label
                return (
                  <div
                    key={contact.label}
                    className="glass-card p-4 md:p-5 flex items-center justify-between gap-4 group"
                  >
                    <a
                      href={contact.href}
                      target={contact.label === 'GitHub' ? '_blank' : '_self'}
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 flex-1 min-w-0"
                    >
                      <div className="p-3 rounded-xl bg-elevated border border-line text-accent group-hover:scale-105 transition-transform duration-200 shrink-0">
                        <Icon size={22} />
                      </div>
                      <div className="overflow-hidden">
                        <span className="text-faint text-[10px] font-mono uppercase tracking-widest block mb-0.5">{contact.label}</span>
                        <span className="text-ink font-space font-semibold text-sm md:text-base block truncate">{contact.value}</span>
                      </div>
                    </a>

                    <button
                      onClick={() => handleCopy(contact.value, contact.label)}
                      className="p-3 rounded-xl bg-elevated border border-line text-muted hover:text-ink hover:border-accent/50 transition-all duration-200 relative shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/60"
                      title={`Copy ${contact.label}`}
                      aria-label={`Copy ${contact.label}`}
                    >
                      {isCopied ? (
                        <Check size={16} className="text-accent" />
                      ) : (
                        <Copy size={16} />
                      )}
                      {isCopied && (
                        <span className="absolute -top-9 left-1/2 -translate-x-1/2 bg-accent text-white font-mono font-bold text-[10px] px-2 py-1 rounded">
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
