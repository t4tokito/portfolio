import { useEffect, useState } from 'react'
import { LayoutGrid, Store, ArrowUpRight, Star } from 'lucide-react'

const STORE_URL = 'https://t4tokito-store.netlify.app/'

/**
 * EntryGate — fullscreen choice on EVERY visit: Portfolio vs App Store.
 * Shows each time the site loads; store is also linked in the navbar.
 */
const EntryGate = () => {
  const [open, setOpen] = useState(true)
  const [leaving, setLeaving] = useState(false)

  useEffect(() => {
    if (!open) return
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [open ])

  if (!open) return null

  const choosePortfolio = () => {
    setLeaving(true)
    setTimeout(() => setOpen(false), 350)
  }

  const chooseStore = () => {
    window.location.href = STORE_URL
  }

  return (
    <div
      className={`fixed inset-0 z-[200] flex items-center justify-center p-4 bg-[#0a0d0b]/95 backdrop-blur-md transition-opacity duration-300 ${
        leaving ? 'opacity-0' : 'opacity-100 animate-fade-in'
      }`}
      role="dialog"
      aria-modal="true"
      aria-label="Choose where to go"
    >
      <div className="w-full max-w-3xl text-center">
        <p className="inline-flex items-center gap-2 font-space text-[12px] font-bold tracking-[0.14em] uppercase text-accent mb-4">
          <Star size={14} className="text-sun fill-sun" />
          Welcome to tokito.dev
          <Star size={14} className="text-sun fill-sun" />
        </p>
        <h2 className="font-display leading-[0.85] text-ink text-[clamp(3rem,12vw,7rem)]">
          WHERE TO<span className="text-sun">?</span>
        </h2>
        <p className="text-muted text-[14px] md:text-[15px] mt-3 mb-8">
          Pick your destination — portfolio or the app store.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <button
            onClick={choosePortfolio}
            className="group rounded-[24px] bg-sun text-[#0a0d0b] p-7 md:p-8 text-left rotate-[-1deg] hover:rotate-0 hover:-translate-y-1 transition-all duration-300 shadow-[0_24px_60px_-20px_rgba(242,201,76,0.5)]"
          >
            <span className="w-12 h-12 rounded-2xl bg-[#0a0d0b] text-sun flex items-center justify-center mb-5 group-hover:rotate-12 group-hover:scale-110 transition-transform duration-300">
              <LayoutGrid size={22} />
            </span>
            <span className="font-display text-3xl md:text-4xl leading-none block">PORTFOLIO</span>
            <span className="block font-space text-[13px] font-bold opacity-60 mt-2">
              Vikas Maurya — projects, about & contact
            </span>
            <span className="inline-flex items-center gap-1.5 font-space text-[13px] font-bold mt-4 underline underline-offset-4 decoration-2">
              Enter <ArrowUpRight size={15} className="group-hover:rotate-45 transition-transform" />
            </span>
          </button>

          <button
            onClick={chooseStore}
            className="group rounded-[24px] bg-accent text-[#0a0d0b] p-7 md:p-8 text-left rotate-[1deg] hover:rotate-0 hover:-translate-y-1 transition-all duration-300 shadow-[0_24px_60px_-20px_rgba(70,207,169,0.5)]"
          >
            <span className="w-12 h-12 rounded-2xl bg-[#0a0d0b] text-accent flex items-center justify-center mb-5 group-hover:-rotate-12 group-hover:scale-110 transition-transform duration-300">
              <Store size={22} />
            </span>
            <span className="font-display text-3xl md:text-4xl leading-none block">APP STORE</span>
            <span className="block font-space text-[13px] font-bold opacity-60 mt-2">
              My apps — download & try them out
            </span>
            <span className="inline-flex items-center gap-1.5 font-space text-[13px] font-bold mt-4 underline underline-offset-4 decoration-2">
              Open store <ArrowUpRight size={15} className="group-hover:rotate-45 transition-transform" />
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default EntryGate
export { STORE_URL }
