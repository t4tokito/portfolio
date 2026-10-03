import React, { useState } from 'react'
import certificate1 from './certificates/1.jpg'
import certificate2 from './certificates/2.jpg'
import certificate3 from './certificates/03.jpg'
import certificate4 from './certificates/04.jpg'
import certificate5 from './certificates/05.jpg'
import certificate6 from './certificates/06.png'
import certificate7 from './certificates/07.jpg'
import certificate8 from './certificates/08.jpg'
import certificate9 from './certificates/09.jpg'
import certificate10 from './certificates/10.jpg'
import certificate11 from './certificates/11.jpg'
import Reveal from '../components/Reveal'
import SEO from '../components/SEO'
import PageHead from '../components/PageHead'
import { X, ZoomIn, BadgeCheck, Star } from 'lucide-react'

const Certificate = () => {
  const [selected, setSelected] = useState(null)

  const certificates = [
    { id: 1, img: certificate1, title: 'Frontend Foundations', org: 'Web basics' },
    { id: 2, img: certificate2, title: 'JavaScript Essentials', org: 'Programming' },
    { id: 3, img: certificate3, title: 'React Basics', org: 'Library' },
    { id: 4, img: certificate4, title: 'Responsive Design', org: 'CSS mastery' },
    { id: 5, img: certificate5, title: 'UI Styling', org: 'Tailwind' },
    { id: 6, img: certificate6, title: 'App Development', org: 'Mobile' },
    { id: 7, img: certificate7, title: 'Advanced JS', org: 'Programming' },
    { id: 8, img: certificate8, title: 'React Native', org: 'Mobile' },
    { id: 9, img: certificate9, title: 'Project Building', org: 'Hands-on' },
    { id: 10, img: certificate10, title: 'AI Integration', org: 'Modern stack' },
    { id: 11, img: certificate11, title: 'Full Frontend', org: 'Complete path' },
  ]

  const stickers = ['bg-sun', 'bg-accent', 'bg-coral']

  return (
    <div className="relative w-full py-12 md:py-20 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        <SEO
          title="Certificates"
          path="/certificates"
          description="Certificates earned by t4tokito (Vikas Maurya) — frontend, JavaScript, React, React Native & AI integration achievements."
        />
        <PageHead
          label="Achievements"
          title={<>CERTIFIED <span className="text-sun">NERD</span></>}
          sr=" — certificates earned by Vikas Maurya, known online as t4tokito"
          sub="Every certificate is a checkpoint in the journey — tap any card to inspect it up close."
          meta={[`${certificates.length} unlocked`, 'Always learning']}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 mt-10 md:mt-12">
          {certificates.map((c, i) => (
            <Reveal key={c.id} delay={(i % 3) * 80}>
              <button
                onClick={() => setSelected(c)}
                className={`w-full text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-[20px] ${i % 2 === 0 ? 'rotate-[0.8deg]' : 'rotate-[-0.8deg]'} hover:rotate-0 transition-transform duration-500`}
              >
                <span className="block rounded-[20px] bg-[#fff7e8] p-3 pb-4 shadow-[0_20px_50px_-24px_rgba(0,0,0,0.8)]">
                  <span className="relative block rounded-[12px] overflow-hidden bg-[#0c120e] aspect-[4/3] p-2">
                    <img
                      src={c.img}
                      alt={`${c.title} certificate earned by t4tokito (Vikas Maurya)`}
                      loading="lazy"
                      className="w-full h-full object-contain group-hover:scale-[1.05] group-hover:rotate-1 transition-transform duration-700 ease-out"
                    />
                    <span className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors duration-300 flex items-center justify-center">
                      <span className="opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100 transition-all duration-300 inline-flex items-center gap-2 bg-[#fff7e8] text-[#0a0d0b] font-space text-[13px] font-bold rounded-full px-4 py-2.5 shadow-lg">
                        <ZoomIn size={15} /> Inspect
                      </span>
                    </span>
                    <span className={`absolute top-3 left-3 ${stickers[i % 3]} text-[#0a0d0b] font-display text-[13px] rounded-lg px-2.5 py-1 -rotate-3 shadow`}>
                      {String(c.id).padStart(2, '0')}
                    </span>
                  </span>
                  <span className="flex items-center justify-between px-1.5 pt-3 text-[#0a0d0b]">
                    <span>
                      <span className="block font-display text-[19px] leading-none">{c.title.toUpperCase()}</span>
                      <span className="block font-space text-[12px] font-semibold opacity-60 mt-1">{c.org}</span>
                    </span>
                    <BadgeCheck size={20} className="shrink-0" />
                  </span>
                </span>
              </button>
            </Reveal>
          ))}

          {/* end card */}
          <Reveal delay={160}>
            <div className="rounded-[20px] border-[2px] border-dashed border-accent/50 p-6 h-full min-h-[220px] flex flex-col items-center justify-center text-center gap-3 rotate-[0.8deg]">
              <Star size={28} className="text-sun fill-sun animate-wiggle" />
              <p className="font-display text-[22px] text-ink leading-none">MORE<br />LOADING…</p>
              <p className="text-muted text-[13px]">Next certificate in progress</p>
            </div>
          </Reveal>
        </div>
      </div>

      {selected && (
        <div
          className="fixed inset-0 z-[100] bg-black/85 backdrop-blur-md flex items-center justify-center p-4 md:p-8 animate-fade-in"
          onClick={() => setSelected(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative max-w-4xl w-full bg-[#fff7e8] rounded-[24px] p-3 md:p-4 rotate-[0.5deg]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelected(null)}
              className="absolute top-5 right-5 z-10 w-10 h-10 rounded-full bg-[#0a0d0b] text-[#fff7e8] flex items-center justify-center hover:bg-coral transition-colors"
              aria-label="Close preview"
            >
              <X size={18} />
            </button>
            <img src={selected.img} alt={`${selected.title} certificate — t4tokito`} className="w-full max-h-[72vh] object-contain rounded-2xl bg-[#0c120e]" />
            <p className="text-center font-display text-[20px] text-[#0a0d0b] py-3">{selected.title.toUpperCase()}</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default Certificate
