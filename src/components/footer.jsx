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
  const skills = ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Tailwind CSS']
  
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full bg-panel/80 backdrop-blur-md border-t border-white/5 mt-20 py-12 px-6 md:px-12 relative overflow-hidden">

      {/* Soft background glow */}
      <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-80 h-80 aura-glow-blue rounded-full filter blur-3xl opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 relative z-10">
        
        {/* Bio / Info Column (Cols 1-5) */}
        <div className="md:col-span-5 flex flex-col gap-4">
          <Link to="/" className="flex items-center gap-2 group font-space">
            <div className="w-6 h-6 rounded bg-gradient-to-br from-blue via-lavender to-mauve flex items-center justify-center shadow-lg group-hover:rotate-12 transition-all duration-300">
              <span className="text-[#0d0d14] font-extrabold text-xs">V</span>
            </div>
            <span className="text-lg font-bold tracking-wider text-white">
              Vikas<span className="text-mauve">.dev</span>
            </span>
          </Link>

          <p className="text-muted text-sm leading-relaxed max-w-sm">
            I am always open to exploring new engineering opportunities, collaborations, and frontend challenges. Reach out via email or socials!
          </p>

          <div className="flex items-center gap-4 mt-2">
            <a 
              href="https://github.com/vikasmourya10" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-white/5 border border-white/5 text-muted hover:text-white hover:bg-white/10 hover:border-lavender/25 transition-all duration-300"
            >
              <Github size={18} />
            </a>
            <a
              href="mailto:t4tokito@gmail.com"
              className="p-2 rounded-xl bg-white/5 border border-white/5 text-muted hover:text-white hover:bg-white/10 hover:border-lavender/25 transition-all duration-300"
            >
              <Send size={18} />
            </a>
          </div>
        </div>

        {/* Tech Stack Chips (Cols 6-8) */}
        <div className="md:col-span-3 flex flex-col gap-4">
          <h4 className="font-space font-bold text-white text-sm uppercase tracking-wider border-b border-white/5 pb-2">
            Core Tech
          </h4>
          <ul className="flex flex-col gap-2">
            {skills.map((skill) => (
              <li key={skill} className="text-muted text-sm flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue to-mauve" />
                {skill}
              </li>
            ))}
          </ul>
        </div>

        {/* Navigation Map (Cols 9-12) */}
        <div className="md:col-span-4 flex flex-col gap-4">
          <h4 className="font-space font-bold text-white text-sm uppercase tracking-wider border-b border-white/5 pb-2">
            Explore
          </h4>
          <div className="grid grid-cols-2 gap-2">
            {[
              { label: 'Home', path: '/' },
              { label: 'About', path: '/about' },
              { label: 'Projects', path: '/projects' },
              { label: 'Certificates', path: '/certificates' },
              { label: 'Contact', path: '/contact' }
            ].map((link) => (
              <Link 
                key={link.path} 
                to={link.path}
                className="text-muted hover:text-lavender text-sm flex items-center gap-1 group transition-colors duration-200"
              >
                <span>{link.label}</span>
                <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-lavender" />
              </Link>
            ))}
          </div>
        </div>

      </div>

      {/* Copyright Line */}
      <div className="max-w-7xl mx-auto border-t border-white/5 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-faint font-mono relative z-10">
        <div>
          &copy; {currentYear} Vikas Mourya. All rights reserved.
        </div>
        <div className="flex items-center gap-1">
          <span>Crafted in Delhi, India</span>
          <span className="text-mauve">✦</span>
        </div>
      </div>

    </footer>
  )
}

export default Footer
