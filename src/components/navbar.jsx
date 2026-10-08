import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ArrowUpRight } from 'lucide-react'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Certificates', path: '/certificates' },
    { name: 'Contact', path: '/contact' },
  ]

  const isActive = (path) => location.pathname === path

  return (
    <header className="sticky top-0 z-50 w-full px-3 sm:px-6 pt-3 sm:pt-4">
      <nav
        className={`max-w-6xl mx-auto flex items-center justify-between gap-3 rounded-2xl border px-3 sm:px-4 py-2.5 transition-all duration-300 ${
          scrolled
            ? 'bg-[#0c100d]/95 backdrop-blur-xl border-[#fff7e8]/15 shadow-[0_16px_40px_-20px_rgba(0,0,0,0.9)]'
            : 'bg-[#0c100d]/70 backdrop-blur-md border-[#fff7e8]/10'
        }`}
      >
        {/* chunky logo */}
        <Link to="/" className="flex items-center gap-2 pl-1 group" aria-label="tokito.dev home">
          <span className="font-display text-[26px] leading-none text-ink tracking-wide group-hover:text-sun transition-colors duration-300">
            tokito<span className="text-sun">.</span>
          </span>
          <span className="hidden sm:inline-flex w-2 h-2 rounded-full bg-coral animate-wiggle" />
        </Link>

        {/* Desktop — teal chips like the reference */}
        <div className="hidden md:flex items-center gap-2">
          {navLinks.map((link) => {
            const active = isActive(link.path)
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`font-space text-[13px] font-semibold tracking-wide rounded-[10px] px-3.5 py-2 border-[1.5px] transition-all duration-300 ${
                  active
                    ? 'bg-sun text-[#0a0d0b] border-sun shadow-[0_8px_20px_-8px_rgba(242,201,76,0.7)]'
                    : 'text-ink/70 border-[#fff7e8]/20 bg-white/[0.03] hover:bg-sun hover:text-[#0a0d0b] hover:border-sun hover:-translate-y-0.5 hover:-rotate-1'
                }`}
              >
                {link.name}
              </Link>
            )
          })}
          <a
            href="https://t4tokito-store.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-space text-[13px] font-semibold tracking-wide rounded-[10px] px-3.5 py-2 border-[1.5px] transition-all duration-300 inline-flex items-center gap-1 text-ink/70 border-[#fff7e8]/20 bg-white/[0.03] hover:bg-sun hover:text-[#0a0d0b] hover:border-sun hover:-translate-y-0.5 hover:-rotate-1"
          >
            Store <ArrowUpRight size={13} />
          </a>
        </div>

        <div className="hidden md:flex items-center gap-2">
          <Link
            to="/contact"
            className="group inline-flex items-center gap-2 bg-[#fff7e8] text-[#0a0d0b] font-space text-[13px] font-bold pl-4 pr-1.5 py-1.5 rounded-full hover:bg-sun transition-all duration-300"
          >
            Let's talk
            <span className="w-7 h-7 rounded-full bg-[#0a0d0b] text-[#fff7e8] flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
              <ArrowUpRight size={14} />
            </span>
          </Link>
        </div>

        {/* Mobile — menu pill like the reference */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden inline-flex items-center gap-2 bg-[#fff7e8] text-[#0a0d0b] font-space text-[13px] font-bold rounded-full pl-4 pr-3 py-2"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          Menu
          {menuOpen ? <X size={16} /> : <Menu size={16} />}
        </button>
      </nav>

      <div
        className={`md:hidden max-w-6xl mx-auto overflow-hidden transition-all duration-300 ease-out ${
          menuOpen ? 'max-h-[480px] opacity-100 mt-2' : 'max-h-0 opacity-0 mt-0 pointer-events-none'
        }`}
      >
        <div className="bg-[#0e1310]/95 backdrop-blur-xl border border-[#fff7e8]/12 rounded-2xl p-2.5 shadow-2xl flex flex-wrap gap-2">
          {navLinks.map((link) => {
            const active = isActive(link.path)
            return (
              <Link
                key={link.path}
                to={link.path}
                onClick={closeMenu}
                className={`font-space text-[14px] font-semibold rounded-[10px] px-4 py-2.5 border-[1.5px] transition-colors ${
                  active
                    ? 'bg-sun text-[#0a0d0b] border-sun'
                    : 'text-ink/70 border-[#fff7e8]/20 bg-white/[0.03]'
                }`}
              >
                {link.name}
              </Link>
            )
          })}
          <a
            href="https://t4tokito-store.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-space text-[14px] font-semibold rounded-[10px] px-4 py-2.5 border-[1.5px] transition-colors inline-flex items-center gap-1 text-ink/70 border-[#fff7e8]/20 bg-white/[0.03]"
          >
            Store <ArrowUpRight size={14} />
          </a>
          <Link
            to="/contact"
            onClick={closeMenu}
            className="w-full mt-1 flex items-center justify-center gap-2 bg-[#fff7e8] text-[#0a0d0b] font-space font-bold rounded-xl py-3"
          >
            Let's talk <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Navbar
