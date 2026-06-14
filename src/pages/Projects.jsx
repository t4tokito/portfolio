import React from 'react'
import tokitogptLogo from '../components/img/tokitogpt-logo.svg'
import { ExternalLink, Cpu, ArrowRight } from 'lucide-react'

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

const Projects = () => {
  const projectsList = [
    {
      title: 'TokitoGPT',
      subtitle: 'High-speed AI chatbot',
      desc: 'An interactive conversational interface with responsive layouts, markdown parsing, context streams, and real-time AI prompt processing.',
      preview: tokitogptLogo,
      tags: ['React.js', 'Tailwind CSS', 'Vite', 'AI Integration'],
      github: 'https://github.com/vikasmourya10/chatbot',
      live: 'https://tokitogpt.netlify.app/',
    },
  ]

  return (
    <div className="relative w-full py-14 md:py-20 px-4 md:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-12 md:mb-16 animate-fade-up">
          <span className="term-label mb-4">// SYSTEM.QUERY_REPOSITORIES</span>
          <h1 className="text-4xl md:text-6xl font-space font-black tracking-tight text-ink leading-none">
            Selected <span className="text-accent">Work</span>
          </h1>
          <p className="text-muted mt-4 max-w-xl">
            A focused log of shipped builds — each one a real product, not a demo.
          </p>
        </div>

        {/* Projects */}
        <div className="flex flex-col gap-8">
          {projectsList.map((project, index) => (
            <div
              key={project.title}
              className="glass-card overflow-hidden grid grid-cols-1 md:grid-cols-12 animate-fade-up delay-1"
            >
              {/* Visual */}
              <div className="md:col-span-6 relative min-h-[240px] md:min-h-[320px] overflow-hidden group border-b md:border-b-0 md:border-r border-line bg-elevated/30">
                <img
                  src={project.preview}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <span className="absolute top-4 left-4 term-label bg-canvas/70 backdrop-blur px-2.5 py-1 rounded-md border border-line">
                  <Cpu size={12} /> NODE.0{index + 1}
                </span>
              </div>

              {/* Meta */}
              <div className="md:col-span-6 p-6 md:p-8 flex flex-col justify-between gap-6">
                <div>
                  <h3 className="text-2xl md:text-3xl font-space font-black text-ink mb-1.5">
                    {project.title}
                  </h3>
                  <p className="text-accent font-medium text-sm mb-4">{project.subtitle}</p>
                  <p className="text-muted text-sm md:text-base leading-relaxed mb-6">
                    {project.desc}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-md text-xs font-mono text-muted bg-elevated border border-line"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 btn-tactical btn-ghost"
                  >
                    <Github size={15} /> Source
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 btn-tactical btn-primary group"
                  >
                    <ExternalLink size={15} /> Live
                    <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects
