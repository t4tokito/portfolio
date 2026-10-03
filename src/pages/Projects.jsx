import React, { useState } from 'react'
import tokitogptLogo from '../components/img/tokitogpt-logo.svg'
import giyuLogo from '../components/img/giyu-ai-logo.svg'
import postGenLogo from '../components/img/post-generator-logo.svg'
import ytNotesLogo from '../components/img/yt-notes-logo.svg'
import instaAutoLogo from '../components/img/insta-auto-logo.svg'
import giyu1 from './screenshots/giyu_ai/preview1.jpeg'
import giyu2 from './screenshots/giyu_ai/preview2.jpeg'
import giyu3 from './screenshots/giyu_ai/preview3.jpeg'
import Reveal from '../components/Reveal'
import SEO from '../components/SEO'
import PageHead from '../components/PageHead'
import { ExternalLink, ArrowUpRight, Download, Images, X, ChevronLeft, ChevronRight, Star } from 'lucide-react'

const GithubIcon = ({ size = 15 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
)

const Projects = () => {
  const [lightbox, setLightbox] = useState({ open: false, images: [], index: 0 })
  const projectsList = [
    {
      title: 'POST GENERATOR',
      subtitle: 'AI-powered content creator',
      desc: 'Generates relatable text posts with professional blur-effect images. OpenRouter API for text + Sharp for crisp 1080×1080 visuals with multiple themes.',
      preview: postGenLogo,
      tags: ['Node.js', 'Sharp', 'OpenRouter API'],
      github: 'https://github.com/t4tokito/Post-Generator',
      glow: 'rgba(242,201,76,0.20)',
      sticker: 'bg-sun',
    },
    {
      title: 'YT NOTES MAKER',
      subtitle: 'YouTube learning companion',
      desc: 'Turns YouTube videos into notes, quizzes and topic explainers — plus social learning with friends via chat & groups.',
      preview: ytNotesLogo,
      tags: ['TypeScript', 'React Native', 'Expo'],
      github: 'https://github.com/t4tokito/yt-notes-maker',
      glow: 'rgba(91,155,213,0.22)',
      sticker: 'bg-lake',
    },
    {
      title: 'INSTA AUTO POST',
      subtitle: 'Instagram automation tool',
      desc: 'AI quotes + blur-effect images auto-posted to Instagram. Node.js image pipeline combined with Python Instagram API.',
      preview: instaAutoLogo,
      tags: ['Python', 'Node.js', 'Instagram API'],
      github: 'https://github.com/t4tokito/insta-auto-post',
      glow: 'rgba(242,112,92,0.20)',
      sticker: 'bg-coral',
    },
    {
      title: 'TOKITOGPT',
      subtitle: 'Demon Slayer Tokito chatbot',
      desc: 'Conversational UI with responsive layouts, markdown parsing, context streams and real-time AI prompt processing.',
      preview: tokitogptLogo,
      tags: ['React.js', 'Tailwind', 'Vite'],
      github: 'https://github.com/vikasmourya10/chatbot',
      live: 'https://tokitogpt.netlify.app/',
      glow: 'rgba(126,212,146,0.20)',
      sticker: 'bg-accent',
    },
    {
      title: 'GIYU AI',
      subtitle: 'Demon Slayer Giyu chatbot',
      desc: 'React Native chatbot themed on Giyu Tomioka — detects emotion in replies and answers with contextual Giyu stickers.',
      preview: giyuLogo,
      screenshots: [giyu1, giyu2, giyu3],
      tags: ['React Native', 'Expo', 'NativeWind'],
      github: 'https://github.com/t4tokito/Giyu-AI',
      download: 'https://expo.dev/accounts/t4tokito/projects/Silly-Giyu/builds/7354411a-62e6-477c-999a-4303beb0b2c2',
      glow: 'rgba(70,207,169,0.22)',
      sticker: 'bg-accent',
    },
  ]

  return (
    <div className="relative w-full py-12 md:py-20 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        <SEO
          title="Projects"
          path="/projects"
          description="Projects by t4tokito (Vikas Maurya) — TokitoGPT, Giyu AI, YT Notes Maker, Post Generator & Insta Auto Post. React, React Native & AI builds."
        />
        <PageHead
          label="Selected work"
          title={<>SHIPPED <span className="text-outline">&</span> <span className="text-sun">POLISHED</span></>}
          sr=" — projects by Vikas Maurya, known online as t4tokito (Tokito Dev)"
          sub="Each one is a real shipped build — designed, coded and refined end-to-end. No placeholders, no tutorials clones."
          meta={['5 builds', 'Web + Mobile', 'AI inside']}
        />

        <div className="flex flex-col gap-6 md:gap-8 mt-10 md:mt-12">
          {projectsList.map((p, idx) => (
            <Reveal key={p.title} delay={Math.min(idx * 60, 180)}>
              <article className={`group relative rounded-[28px] border border-[#fff7e8]/12 bg-[#0e1310] overflow-hidden ${idx % 2 === 0 ? 'rotate-[0.4deg]' : 'rotate-[-0.4deg]'} hover:rotate-0 transition-transform duration-500`}>
                {/* giant index */}
                <span className="font-display pointer-events-none select-none absolute -top-4 right-4 md:right-8 text-[5rem] md:text-[7rem] leading-none text-[#fff7e8]/[0.06]">
                  0{idx + 1}
                </span>
                <div className="grid grid-cols-1 md:grid-cols-12">
                  {/* visual */}
                  <div
                    className="md:col-span-5 relative min-h-[230px] md:min-h-[320px] flex items-center justify-center p-10 overflow-hidden border-b md:border-b-0 md:border-r border-[#fff7e8]/10"
                    style={{ background: `radial-gradient(circle at 50% 42%, ${p.glow}, transparent 70%)` }}
                  >
                    <img
                      src={p.preview}
                      alt={`${p.title} — project by t4tokito (Vikas Maurya)`}
                      loading="lazy"
                      className="w-full h-full max-h-[230px] md:max-h-[270px] object-contain drop-shadow-[0_24px_40px_rgba(0,0,0,0.6)] group-hover:scale-[1.07] group-hover:rotate-2 transition-transform duration-700 ease-out"
                    />
                    <span className={`absolute top-4 left-4 inline-flex items-center gap-1.5 ${p.sticker} text-[#0a0d0b] font-space text-[11px] font-bold rounded-[10px] px-3 py-1.5 -rotate-2 shadow-lg`}>
                      <Star size={11} className="fill-[#0a0d0b]" /> {p.subtitle}
                    </span>
                  </div>

                  {/* content */}
                  <div className="md:col-span-7 p-6 md:p-9 flex flex-col justify-between gap-6">
                    <div>
                      <h2 className="font-display text-4xl md:text-6xl text-ink leading-[0.9]">
                        {p.title}
                      </h2>
                      <p className="text-muted text-[14.5px] leading-relaxed mt-3.5 max-w-lg">
                        {p.desc}
                      </p>
                      <div className="flex flex-wrap gap-2 mt-5">
                        {p.tags.map((t, i) => (
                          <span
                            key={t}
                            className="chip-teal"
                            style={{ transform: `rotate(${i % 2 === 0 ? -1.5 : 1.5}deg)` }}
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-2.5">
                      <a
                        href={p.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-tactical btn-ghost !py-2.5 !px-5 !text-[13px]"
                      >
                        <GithubIcon size={15} /> Source
                      </a>
                      {p.screenshots && (
                        <button
                          onClick={() => setLightbox({ open: true, images: p.screenshots, index: 0 })}
                          className="btn-tactical btn-ghost !py-2.5 !px-5 !text-[13px]"
                        >
                          <Images size={15} /> Screenshots
                        </button>
                      )}
                      {p.live && (
                        <a href={p.live} target="_blank" rel="noopener noreferrer" className="btn-tactical btn-primary !py-2.5 !px-5 !text-[13px] group/btn">
                          <ExternalLink size={15} /> Live demo
                          <ArrowUpRight size={14} className="group-hover/btn:rotate-45 transition-transform" />
                        </a>
                      )}
                      {p.download && (
                        <a href={p.download} target="_blank" rel="noopener noreferrer" className="btn-tactical btn-accent !py-2.5 !px-5 !text-[13px]">
                          <Download size={15} /> Get app
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>

      {/* lightbox */}
      {lightbox.open && (
        <div
          className="fixed inset-0 z-[100] bg-black/85 backdrop-blur-md flex items-center justify-center p-4 md:p-8 animate-fade-in"
          onClick={() => setLightbox({ open: false, images: [], index: 0 })}
          role="dialog"
          aria-modal="true"
        >
          <div className="relative max-w-3xl w-full flex flex-col items-center gap-4" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setLightbox({ open: false, images: [], index: 0 })}
              className="absolute -top-2 -right-2 z-10 w-10 h-10 rounded-full bg-[#fff7e8] text-[#0a0d0b] flex items-center justify-center shadow-lg hover:bg-sun transition-colors"
              aria-label="Close"
            >
              <X size={18} />
            </button>
            <div className="w-full bg-[#0e1310] border border-[#fff7e8]/15 rounded-3xl overflow-hidden p-3 flex items-center justify-center relative">
              <img src={lightbox.images[lightbox.index]} alt={`Screenshot ${lightbox.index + 1} of Giyu AI by t4tokito`} className="max-h-[72vh] object-contain rounded-2xl" />
              {lightbox.images.length > 1 && (
                <>
                  <button
                    onClick={() => setLightbox((p) => ({ ...p, index: p.index > 0 ? p.index - 1 : p.images.length - 1 }))}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 backdrop-blur border border-white/15 text-white flex items-center justify-center hover:bg-accent hover:text-[#0a0d0b] transition-colors"
                    aria-label="Previous"
                  >
                    <ChevronLeft size={18} />
                  </button>
                  <button
                    onClick={() => setLightbox((p) => ({ ...p, index: p.index < p.images.length - 1 ? p.index + 1 : 0 }))}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 backdrop-blur border border-white/15 text-white flex items-center justify-center hover:bg-accent hover:text-[#0a0d0b] transition-colors"
                    aria-label="Next"
                  >
                    <ChevronRight size={18} />
                  </button>
                </>
              )}
            </div>
            <div className="flex items-center gap-2">
              {lightbox.images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setLightbox((p) => ({ ...p, index: i }))}
                  aria-label={`Go to ${i + 1}`}
                  className={`h-2 rounded-full transition-all ${i === lightbox.index ? 'w-6 bg-sun' : 'w-2 bg-white/30 hover:bg-white/60'}`}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Projects
