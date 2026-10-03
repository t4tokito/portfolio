import { useEffect } from 'react'
import Reveal from './Reveal'
import { Star } from 'lucide-react'

const FAQS = [
  {
    q: 'Who is t4tokito?',
    a: 't4tokito is the online alias of Vikas Maurya, a frontend developer from New Delhi, India, also known as Tokito Dev. He builds fast, minimal interfaces for web and mobile.',
  },
  {
    q: 'What does Tokito Dev do?',
    a: 'Tokito Dev (Vikas Maurya) designs and builds frontend interfaces with React.js, React Native, Tailwind CSS and NativeWind — from responsive websites to cross-platform mobile apps.',
  },
  {
    q: 'What projects has t4tokito built?',
    a: 't4tokito has shipped TokitoGPT (AI chatbot), Giyu AI (React Native chatbot), YT Notes Maker (YouTube learning app), Post Generator and Insta Auto Post (AI content automation).',
  },
  {
    q: 'Where is t4tokito based?',
    a: 't4tokito (Vikas Maurya) is based in New Delhi, India, and is open to remote internships, freelance UI work and collaborations.',
  },
  {
    q: 'How can I contact t4tokito?',
    a: 'You can reach t4tokito by email at t4tokito@gmail.com, on GitHub at github.com/t4tokito, or on Instagram at @t4tokito.',
  },
]

const TILTS = ['-rotate-1', 'rotate-1', '-rotate-[0.5deg]', 'rotate-[0.5deg]', '-rotate-1']

/**
 * Faq — visible sticker Q&A + matching FAQPage JSON-LD.
 * Explicit "Who is t4tokito?" facts help search + AI overviews.
 */
const Faq = () => {
  useEffect(() => {
    const id = 'faq-jsonld'
    if (document.getElementById(id)) return
    const script = document.createElement('script')
    script.id = id
    script.type = 'application/ld+json'
    script.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: FAQS.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    })
    document.head.appendChild(script)
  }, [])

  return (
    <section aria-label="Frequently asked questions about t4tokito" className="mt-12 md:mt-16">
      <Reveal>
        <div className="flex items-center gap-2.5 mb-4">
          <p className="term-label">FAQ</p>
          <Star size={16} className="text-sun fill-sun animate-wiggle" />
        </div>
        <h2 className="font-display leading-[0.9] text-4xl md:text-6xl text-ink">
          WHO IS <span className="text-sun">t4tokito?</span>
        </h2>
      </Reveal>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 mt-8">
        {FAQS.map((f, i) => (
          <Reveal key={f.q} delay={(i % 2) * 90}>
            <div className={`glass-card p-6 h-full !rounded-[20px] ${TILTS[i % TILTS.length]} hover:rotate-0 transition-transform duration-500`}>
              <div className="flex items-center gap-2.5 mb-3">
                <span className="font-display text-[15px] bg-accent text-[#0a0d0b] rounded-lg w-8 h-8 flex items-center justify-center shrink-0 -rotate-3">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="font-space font-bold text-ink text-[15px]">{f.q}</h3>
              </div>
              <p className="text-muted text-[13.5px] leading-relaxed">{f.a}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

export default Faq
export { FAQS }
