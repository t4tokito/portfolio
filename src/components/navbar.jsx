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
    <nav className="sticky top-0 z-50 w-full bg-canvas/70 backdrop-blur-xl border-b border-white/5 px-6 py-4 transition-all duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between">

        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 group font-space"
          onClick={() => setMenuOpen(false)}
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue via-lavender to-mauve flex items-center justify-center shadow-lg shadow-lavender/20 group-hover:rotate-12 transition-all duration-300">
            <span className="text-[#0d0d14] font-extrabold text-lg">V</span>
          </div>
          <span className="text-xl font-bold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-white via-lavender to-mauve group-hover:from-lavender group-hover:to-lavender transition-all duration-300">
            Vikas<span className="text-mauve">.dev</span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-1 bg-white/5 p-1.5 rounded-full border border-white/5">
          {navLinks.map((link) => {
            const Icon = link.icon
            const active = isActive(link.path)
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`relative flex items-center gap-2 px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  active
                    ? 'text-lavender bg-lavender/10 border border-lavender/20 shadow-[0_0_18px_rgba(180,190,254,0.15)]'
                    : 'text-muted hover:text-white hover:bg-white/5'
                }`}
              >
                <Icon size={16} className={active ? "text-lavender" : "text-muted"} />
                {link.name}
              </Link>
            )
          })}
        </div>

        {/* Hamburger Menu Icon */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 rounded-lg text-muted hover:text-white hover:bg-white/5 focus:outline-none transition-all duration-200"
          aria-label="Toggle Menu"
        >
          {menuOpen ? <X size={24} className="text-lavender" /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-canvas/95 backdrop-blur-2xl border-b border-white/10 overflow-hidden transition-all duration-350 ease-in-out ${
          menuOpen ? 'max-h-screen opacity-100 py-6 px-6' : 'max-h-0 opacity-0 py-0 px-6 pointer-events-none'
        }`}
      >
        <div className="flex flex-col gap-4">
          {navLinks.map((link) => {
            const Icon = link.icon
            const active = isActive(link.path)
            return (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMenuOpen(false)}
                className={`flex items-center gap-4 p-3.5 rounded-xl font-medium transition-all duration-300 ${
                  active
                    ? 'text-lavender bg-lavender/10 border border-lavender/20 shadow-[0_0_15px_rgba(180,190,254,0.1)]'
                    : 'text-muted hover:text-white hover:bg-white/5'
                }`}
              >
                <Icon size={20} />
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
