import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight, Mail, Star } from 'lucide-react'

const GithubIcon = ({ size = 17 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
)

const InstagramIcon = ({ size = 17 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
)

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative z-10 w-full px-3 sm:px-6 pb-4 mt-16 md:mt-24">
      <div className="max-w-6xl mx-auto bg-[#0c100d] border border-[#fff7e8]/12 rounded-[28px] overflow-hidden">
        {/* giant CTA */}
        <div className="px-7 md:px-12 pt-10 md:pt-12">
          <p className="inline-flex items-center gap-2 text-[12px] font-space font-bold tracking-[0.12em] uppercase text-accent mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#7ed492] animate-pulse" />
            Available for work
          </p>
          <Link to="/contact" className="group block">
            <span className="font-display leading-[0.85] block text-[clamp(3rem,10vw,7rem)] text-ink group-hover:text-sun transition-colors duration-300">
              LET'S TALK
            </span>
            <span className="font-display leading-[0.85] flex items-center gap-4 text-[clamp(3rem,10vw,7rem)] text-outline">
              BUILD IT
              <span className="inline-flex w-[0.9em] h-[0.9em] rounded-full bg-accent items-center justify-center shrink-0 group-hover:bg-sun group-hover:rotate-45 transition-all duration-300">
                <ArrowUpRight className="w-[0.5em] h-[0.5em] text-[#0a0d0b]" strokeWidth={2.5} />
              </span>
            </span>
          </Link>
        </div>

        <div className="mx-7 md:mx-12 border-t border-[#fff7e8]/10 mt-8" />

        <div className="px-7 md:px-12 py-8 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-2">
            <div className="flex items-center gap-2 mb-3">
              <span className="font-display text-2xl text-ink">tokito<span className="text-accent">.</span></span>
              <Star size={14} className="text-sun fill-sun" />
            </div>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs">
              Vikas Maurya — frontend developer crafting fast, characterful interfaces with React & Tailwind.
            </p>
            <div className="flex items-center gap-2 mt-5">
              <a
                href="https://github.com/t4tokito"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-10 h-10 rounded-[10px] border-[1.5px] border-accent/40 text-accent/80 flex items-center justify-center hover:bg-accent hover:text-[#0a0d0b] hover:border-accent transition-all duration-300 hover:-rotate-6"
              >
                <GithubIcon size={17} />
              </a>
              <a
                href="https://www.instagram.com/t4tokito/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-[10px] border-[1.5px] border-accent/40 text-accent/80 flex items-center justify-center hover:bg-accent hover:text-[#0a0d0b] hover:border-accent transition-all duration-300 hover:rotate-6"
              >
                <InstagramIcon size={17} />
              </a>
              <a
                href="mailto:t4tokito@gmail.com"
                aria-label="Email"
                className="w-10 h-10 rounded-[10px] border-[1.5px] border-accent/40 text-accent/80 flex items-center justify-center hover:bg-accent hover:text-[#0a0d0b] hover:border-accent transition-all duration-300 hover:-rotate-6"
              >
                <Mail size={17} />
              </a>
            </div>
          </div>

          <div>
            <p className="font-space text-[11px] uppercase tracking-[0.14em] text-white/35 font-bold mb-4">Explore</p>
            <ul className="space-y-2.5 text-[14px]">
              {[
                { label: 'Home', path: '/' },
                { label: 'About', path: '/about' },
                { label: 'Projects', path: '/projects' },
              ].map((l) => (
                <li key={l.path}>
                  <Link to={l.path} className="text-white/55 hover:text-sun transition-colors font-space font-medium">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-space text-[11px] uppercase tracking-[0.14em] text-white/35 font-bold mb-4">More</p>
            <ul className="space-y-2.5 text-[14px]">
              {[
                { label: 'Certificates', path: '/certificates' },
                { label: 'Contact', path: '/contact' },
              ].map((l) => (
                <li key={l.path}>
                  <Link to={l.path} className="text-white/55 hover:text-sun transition-colors font-space font-medium">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="px-7 md:px-12 pb-7 flex flex-col sm:flex-row items-center justify-between gap-2 text-[12px] text-white/35">
          <span>© {currentYear} Vikas Maurya · t4tokito</span>
          <span>Designed & built in Delhi, India</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
