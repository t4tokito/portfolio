import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Home, User, FolderGit2, Award, Mail } from 'lucide-react'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  const navLinks = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'About', path: '/about', icon: User },
    { name: 'Projects', path: '/projects', icon: FolderGit2 },
    { name: 'Certificates', path: '/certificates', icon: Award },
    { name: 'Contact', path: '/contact', icon: Mail },
  ]

  const isActive = (path) => location.pathname === path

  return (
    <nav className="sticky top-0 z-50 w-full bg-canvas/70 backdrop-blur-xl border-b border-line px-6 py-4 transition-all duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between">

        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2.5 group font-space"
          onClick={() => setMenuOpen(false)}
        >
          <div className="w-9 h-9 rounded-lg bg-accent flex items-center justify-center group-hover:shadow-[0_0_20px_-2px_rgba(139,92,246,0.7)] transition-shadow duration-300">
            <span className="text-white font-extrabold text-lg">T</span>
          </div>
          <span className="text-lg font-bold tracking-tight text-ink">
            tokito<span className="text-accent">.dev</span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-1 bg-elevated/60 p-1 rounded-xl border border-line">
          {navLinks.map((link) => {
            const Icon = link.icon
            const active = isActive(link.path)
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`relative flex items-center gap-2 px-4 py-2 rounded-lg text-[13px] font-semibold tracking-wide transition-all duration-300 ${active
                    ? 'text-white bg-accent/15 border border-accent/40'
                    : 'text-muted hover:text-ink hover:bg-white/[0.04] border border-transparent'
                  }`}
              >
                <Icon size={15} className={active ? 'text-accent' : 'text-faint'} />
                {link.name}
              </Link>
            )
          })}
        </div>

        {/* Hamburger Menu Icon */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 rounded-lg text-muted hover:text-ink hover:bg-white/[0.04] focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 transition-all duration-200"
          aria-label="Toggle Menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={24} className="text-accent" /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-canvas/95 backdrop-blur-2xl border-b border-line overflow-hidden transition-all duration-300 ease-in-out ${menuOpen ? 'max-h-[500px] opacity-100 py-6 px-6' : 'max-h-0 opacity-0 py-0 px-6 pointer-events-none'
          }`}
      >
        <div className="flex flex-col gap-2">
          <span className="term-label mb-2">// NAVIGATION</span>
          {navLinks.map((link) => {
            const Icon = link.icon
            const active = isActive(link.path)
            return (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMenuOpen(false)}
                className={`flex items-center gap-4 p-3.5 rounded-xl font-semibold transition-all duration-300 ${active
                    ? 'text-white bg-accent/15 border border-accent/40'
                    : 'text-muted hover:text-ink hover:bg-white/[0.04] border border-transparent'
                  }`}
              >
                <Icon size={19} className={active ? 'text-accent' : 'text-faint'} />
                <span className="text-base">{link.name}</span>
              </Link>
            )
          })}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
