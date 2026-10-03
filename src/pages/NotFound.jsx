import React from 'react'
import { Link } from 'react-router-dom'
import { Home, FolderGit2, ArrowRight } from 'lucide-react'
import Reveal from '../components/Reveal'
import SEO from '../components/SEO'

const NotFound = () => {
  return (
    <div className="relative w-full py-20 md:py-28 px-4 md:px-6 text-center">
      <div className="max-w-xl mx-auto">
        <SEO title="Page not found" path="/404" description="This page doesn't exist on Tokito Dev (t4tokito) — Vikas Maurya's portfolio." noindex />
        <Reveal>
          <p className="term-label mb-6">Error 404</p>
          <h1 className="font-display leading-[0.85] block text-7xl md:text-9xl text-ink">
            Lost<span className="text-gradient">?</span>
          </h1>
          <p className="text-muted mt-5 text-[15px] md:text-base leading-relaxed">
            This page doesn't exist on <span className="text-ink font-medium">tokito.dev</span>.
            Let's get you back to something real.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 mt-8">
            <Link to="/" className="btn-tactical btn-primary !px-6 !py-3">
              <Home size={16} /> Back home
            </Link>
            <Link to="/projects" className="btn-tactical btn-ghost !px-6 !py-3">
              <FolderGit2 size={16} /> View projects <ArrowRight size={15} />
            </Link>
          </div>
        </Reveal>
      </div>
    </div>
  )
}

export default NotFound
