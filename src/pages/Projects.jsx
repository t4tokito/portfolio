import React from 'react'
import gif from '../components/img/gif.gif'
import { FolderGit2, ExternalLink, Code2, Cpu } from 'lucide-react'

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
      subtitle: 'A high-speed chatbot powered by AI',
      desc: 'An interactive conversational interface styled with responsive design layouts, parsing markdown, storing context streams, and providing real-time AI prompt processing.',
      preview: gif,
      tags: ['React.js', 'Tailwind CSS', 'Vite', 'AI Integration'],
      github: 'https://github.com/vikasmourya10/chatbot',
      live: 'https://tokitogpt.netlify.app/'
    }
  ]

  return (
    <div className="relative min-h-screen w-full py-16 px-4 md:px-8 overflow-hidden">
      
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/10 w-96 h-96 aura-glow-blue rounded-full filter blur-3xl opacity-35 pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 aura-glow-mauve rounded-full filter blur-3xl opacity-35 pointer-events-none animate-pulse-glow animate-float-delayed" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Page Title */}
        <div className="text-center mb-16 animate-fade-up">
          <h1 className="text-4xl md:text-6xl font-space font-extrabold tracking-tight text-white inline-flex items-center gap-4">
            <FolderGit2 className="text-sapphire w-10 h-10 md:w-14 md:h-14 animate-pulse" />
            My <span className="text-gradient">Projects</span>
          </h1>
          <p className="text-muted font-mono text-xs md:text-sm mt-3 uppercase tracking-widest">
            System.Query_Repositories()
          </p>
        </div>

        {/* Projects Grid */}
        <div className="flex flex-col items-center justify-center">
          {projectsList.map((project, index) => (
            <div
              key={index}
              className="w-full max-w-4xl glass-card rounded-3xl overflow-hidden grid grid-cols-1 md:grid-cols-12 gap-6 hover:shadow-[0_0_35px_rgba(137,180,250,0.18)] transition-all duration-550 border border-white/5 animate-fade-up delay-1"
            >

              {/* Project Visual (Cols 1-6) */}
              <div className="md:col-span-6 relative h-60 md:h-full min-h-[260px] overflow-hidden group border-b md:border-b-0 md:border-r border-white/5">
                {/* Backdrop scanlines */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(18,24,38,0)_95%,rgba(137,180,250,0.10)_95%)] bg-[length:100%_16px] pointer-events-none z-10" />
                <div className="absolute inset-0 bg-canvas/40 group-hover:bg-canvas/10 transition-colors duration-300 z-10" />
                <img 
                  src={project.preview} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Project Meta Content (Cols 7-12) */}
              <div className="md:col-span-6 p-6 md:p-8 flex flex-col justify-between gap-6">
                <div>
                  
                  {/* Category Accent */}
                  <div className="flex items-center gap-2 text-sapphire text-xs font-mono tracking-widest uppercase mb-3">
                    <Cpu size={12} />
                    <span>Project_Node.0{index + 1}</span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-2xl md:text-3xl font-space font-extrabold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-lavender/90 font-medium text-sm mb-4">
                    {project.subtitle}
                  </p>

                  {/* Description */}
                  <p className="text-muted text-sm md:text-base leading-relaxed mb-6 font-outfit">
                    {project.desc}
                  </p>

                  {/* Technical Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full text-xs font-mono font-medium text-lavender bg-lavender/10 border border-lavender/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                </div>

                {/* Actions Grid */}
                <div className="flex items-center gap-4 mt-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-white/5 border border-white/5 text-muted font-semibold text-sm hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                  >
                    <Github size={16} />
                    <span>Source Code</span>
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-gradient-to-r from-blue to-mauve text-[#0d0d14] font-bold text-sm shadow-lg shadow-lavender/15 hover:shadow-lavender/30 hover:scale-[1.02] transition-all duration-300"
                  >
                    <ExternalLink size={16} />
                    <span>Live Demo</span>
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
