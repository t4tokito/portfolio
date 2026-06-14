import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight, Send } from 'lucide-react'

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

const Footer = () => {
  const skills = ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'React Native', 'Tailwind CSS', 'NativeWind']
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative z-10 w-full bg-panel border-t border-line mt-16 md:mt-24 py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">

        {/* Bio */}
        <div className="md:col-span-5 flex flex-col gap-4">
          <Link to="/" className="flex items-center gap-2.5 group font-space">
            <div className="w-7 h-7 rounded-md bg-accent flex items-center justify-center group-hover:shadow-[0_0_16px_-2px_rgba(139,92,246,0.7)] transition-shadow">
              <span className="text-white font-extrabold text-xs">V</span>
            </div>
            <span className="text-base font-bold tracking-tight text-ink">
              vikas<span className="text-accent">.dev</span>
            </span>
          </Link>

          <p className="text-muted text-sm leading-relaxed max-w-sm">
            Open to new engineering opportunities, collaborations, and frontend challenges.
            Reach out via email or socials.
          </p>

          <div className="flex items-center gap-3 mt-1">
            <a
              href="https://github.com/vikasmourya10"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-2.5 rounded-lg bg-elevated border border-line text-muted hover:text-ink hover:border-accent/50 transition-all duration-300"
            >
              <Github size={18} />
            </a>
            <a
              href="mailto:t4tokito@gmail.com"
              aria-label="Email"
              className="p-2.5 rounded-lg bg-elevated border border-line text-muted hover:text-ink hover:border-accent/50 transition-all duration-300"
            >
              <Send size={18} />
            </a>
          </div>
        </div>

        {/* Tech */}
        <div className="md:col-span-3 flex flex-col gap-3">
          <h4 className="term-label">// CORE_TECH</h4>
          <ul className="flex flex-col gap-2 mt-1">
            {skills.map((skill) => (
              <li key={skill} className="text-muted text-sm flex items-center gap-2.5">
                <span className="w-1 h-1 rounded-full bg-accent" />
                {skill}
              </li>
            ))}
          </ul>
        </div>

        {/* Nav */}
        <div className="md:col-span-4 flex flex-col gap-3">
          <h4 className="term-label">// EXPLORE</h4>
          <div className="grid grid-cols-2 gap-2 mt-1">
            {[
              { label: 'Home', path: '/' },
              { label: 'About', path: '/about' },
              { label: 'Projects', path: '/projects' },
              { label: 'Certificates', path: '/certificates' },
              { label: 'Contact', path: '/contact' },
            ].map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-muted hover:text-accent text-sm flex items-center gap-1 group transition-colors duration-200"
              >
                <span>{link.label}</span>
                <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-accent" />
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="max-w-7xl mx-auto border-t border-line mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-faint font-mono">
        <div>&copy; {currentYear} Vikas Maurya — all rights reserved.</div>
        <div className="flex items-center gap-1.5">
          <span className="status-dot" />
          <span>Crafted in Delhi, India</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
