import React from 'react'
import mui from '../components/img/mui1.png'
import insta from '../components/img/insta.png'
import Reveal from '../components/Reveal'
import SEO from '../components/SEO'
import PageHead from '../components/PageHead'
import { Mail, Phone, Copy, Check, ArrowUpRight, Star } from 'lucide-react'

const Github = ({ size = 20, ...props }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
)

const Contact = () => {
  const [copied, setCopied] = React.useState('')

  const handleCopy = (text, label) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text).catch(() => {})
    }
    setCopied(label)
    setTimeout(() => setCopied(''), 2000)
  }

  const contacts = [
    { label: 'Email', value: 't4tokito@gmail.com', href: 'mailto:t4tokito@gmail.com', icon: Mail, hint: 'Replies within a day', bg: 'bg-accent' },
    { label: 'Phone', value: '+91 99533 70380', href: 'tel:+919953370380', icon: Phone, hint: 'Mon–Sat, 10am–8pm IST', bg: 'bg-sun' },
    { label: 'GitHub', value: 'github.com/t4tokito', href: 'https://github.com/t4tokito', icon: Github, hint: 'Code & side-projects', external: true, bg: 'bg-coral' },
  ]

  return (
    <div className="relative w-full py-12 md:py-20 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        <SEO
          title="Contact"
          path="/contact"
          description="Contact t4tokito (Vikas Maurya) — email t4tokito@gmail.com, GitHub github.com/t4tokito. Open to internships & collaborations."
        />
        <PageHead
          label="Contact"
          title={<>SAY <span className="text-sun">HELLO!</span></>}
          sr=" — contact Vikas Maurya, known online as t4tokito (Tokito Dev)"
          sub="Open to internships, freelance UI work and fun collaborations. Pick a channel — I actually reply."
          meta={['Replies < 24h', 'Delhi · Remote OK']}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-5 mt-10 md:mt-12">
          {/* sticker profile */}
          <Reveal className="lg:col-span-5" delay={80}>
            <div className="h-full rounded-[24px] bg-sun text-[#0a0d0b] p-7 md:p-8 flex flex-col items-center text-center gap-5 relative overflow-hidden rotate-[-1deg] hover:rotate-0 transition-transform duration-500">
              <Star size={140} className="absolute -left-10 -bottom-10 text-[#0a0d0b]/10 fill-[#0a0d0b]/10 -rotate-12 pointer-events-none" />
              <div className="relative">
                <div className="w-36 h-36 md:w-40 md:h-40 rounded-full p-1.5 bg-[#0a0d0b] rotate-3">
                  <img src={mui} alt="Vikas Maurya, known online as t4tokito — frontend developer" className="w-full h-full rounded-full object-cover border-4 border-sun" />
                </div>
                <span className="absolute bottom-2 right-2 flex items-center gap-1 bg-[#0a0d0b] text-[#fff7e8] font-space text-[11px] font-bold rounded-full px-2.5 py-1 -rotate-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#7ed492] animate-pulse" /> ONLINE
                </span>
              </div>
              <div>
                <h2 className="font-display text-3xl leading-none">VIKAS MAURYA</h2>
                <p className="font-space text-[13px] font-bold opacity-60 mt-1.5">Frontend Developer · Delhi</p>
              </div>
              <a
                href="https://www.instagram.com/t4tokito/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-[#0a0d0b] text-[#fff7e8] rounded-full pl-5 pr-2 py-1.5 transition-transform duration-300 hover:-translate-y-0.5 hover:rotate-1"
              >
                <span className="font-space text-[14px] font-bold">@t4tokito</span>
                <span className="w-8 h-8 rounded-full bg-[#fff7e8] flex items-center justify-center overflow-hidden">
                  <img src={insta} alt="" className="w-5 h-5 object-contain" />
                </span>
              </a>
            </div>
          </Reveal>

          {/* channels */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            {contacts.map((c, i) => {
              const Icon = c.icon
              const isCopied = copied === c.label
              return (
                <Reveal key={c.label} delay={120 + i * 80}>
                  <div className={`rounded-[20px] bg-[#0e1310] border-[1.5px] border-[#fff7e8]/15 ${i % 2 === 0 ? 'rotate-[0.5deg]' : 'rotate-[-0.5deg]'} hover:rotate-0 transition-transform duration-500 p-4 md:p-5 flex items-center gap-4 group`}>
                    <a
                      href={c.href}
                      {...(c.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                      className="flex items-center gap-4 flex-1 min-w-0"
                    >
                      <span className={`w-14 h-14 rounded-2xl ${c.bg} text-[#0a0d0b] flex items-center justify-center shrink-0 -rotate-3 group-hover:rotate-6 group-hover:scale-110 transition-transform duration-300`}>
                        <Icon size={22} />
                      </span>
                      <span className="min-w-0">
                        <span className="block font-display text-[26px] md:text-[30px] text-ink leading-none truncate">{c.value.toUpperCase()}</span>
                        <span className="block font-space text-[12px] font-bold text-faint mt-1.5 tracking-wide uppercase">{c.label} · {c.hint}</span>
                      </span>
                      <ArrowUpRight size={22} className="ml-auto text-faint group-hover:text-sun group-hover:rotate-45 transition-all shrink-0" />
                    </a>
                    <button
                      onClick={() => handleCopy(c.value, c.label)}
                      className="w-11 h-11 rounded-[12px] border-[1.5px] border-accent/40 text-accent flex items-center justify-center hover:bg-accent hover:text-[#0a0d0b] hover:border-accent transition-all shrink-0"
                      aria-label={`Copy ${c.label}`}
                    >
                      {isCopied ? <Check size={17} /> : <Copy size={17} />}
                    </button>
                  </div>
                </Reveal>
              )
            })}

            <Reveal delay={360}>
              <div className="rounded-[20px] border-[2px] border-dashed border-sun/50 p-5 text-center rotate-[0.5deg]">
                <p className="text-[13.5px] text-muted">
                  Prefer email? Write to{' '}
                  <a href="mailto:t4tokito@gmail.com" className="text-sun font-space font-bold underline underline-offset-4 decoration-2 hover:text-ink transition-colors">
                    t4tokito@gmail.com
                  </a>{' '}
                  with your idea & timeline.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
