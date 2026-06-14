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
import { Eye, X, ZoomIn } from 'lucide-react'

const Certificate = () => {
  const [selectedCert, setSelectedCert] = useState(null)

  const certificates = [
    { id: 1, img: certificate1, title: 'Certificate 01' },
    { id: 2, img: certificate2, title: 'Certificate 02' },
    { id: 3, img: certificate3, title: 'Certificate 03' },
    { id: 4, img: certificate4, title: 'Certificate 04' },
    { id: 5, img: certificate5, title: 'Certificate 05' },
    { id: 6, img: certificate6, title: 'Certificate 06' },
    { id: 7, img: certificate7, title: 'Certificate 07' },
    { id: 8, img: certificate8, title: 'Certificate 08' },
    { id: 9, img: certificate9, title: 'Certificate 09' },
    { id: 10, img: certificate10, title: 'Certificate 10' },
    { id: 11, img: certificate11, title: 'Certificate 11' },
  ]

  return (
    <div className="relative w-full py-14 md:py-20 px-4 md:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-12 md:mb-16 animate-fade-up">
          <span className="term-label mb-4">// SYSTEM.QUERY_ACHIEVEMENTS</span>
          <h1 className="text-4xl md:text-6xl font-space font-black tracking-tight text-ink leading-none">
            Certificates
          </h1>
          <div className="mt-5 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-elevated border border-line text-muted text-xs font-mono">
            <span className="status-dot" />
            {certificates.length} ACHIEVEMENTS UNLOCKED
          </div>
        </div>

        {/* Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <div
              key={cert.id}
              onClick={() => setSelectedCert(cert.img)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setSelectedCert(cert.img)}
              style={{ animationDelay: `${index * 0.05}s` }}
              className="glass-card p-3 cursor-pointer group relative overflow-hidden animate-fade-up focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/60"
            >
              <div className="absolute top-5 left-5 z-20 w-8 h-8 rounded-md bg-canvas/80 backdrop-blur border border-line flex items-center justify-center text-accent font-mono text-xs font-bold">
                {String(cert.id).padStart(2, '0')}
              </div>

              <div className="relative aspect-[4/3] rounded-lg overflow-hidden border border-line bg-elevated/40 flex items-center justify-center p-2">
                <img
                  src={cert.img}
                  alt={cert.title}
                  className="max-w-full max-h-full object-contain rounded transition-transform duration-500 group-hover:scale-[1.04]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-canvas/85 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-3">
                  <div className="p-3.5 rounded-full bg-accent text-white transform scale-75 group-hover:scale-100 transition-transform duration-300">
                    <ZoomIn size={22} />
                  </div>
                  <span className="text-ink font-space font-semibold text-sm tracking-wide">View Certificate</span>
                </div>
              </div>

              <div className="mt-3 flex items-center justify-between px-1">
                <span className="text-muted font-space font-semibold text-sm group-hover:text-accent transition-colors duration-200">
                  {cert.title}
                </span>
                <Eye size={15} className="text-faint group-hover:text-accent transition-colors duration-200" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedCert && (
        <div
          className="fixed inset-0 z-[100] bg-canvas/95 backdrop-blur-md flex items-center justify-center p-4 md:p-8 animate-fade-in"
          onClick={() => setSelectedCert(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative max-w-5xl max-h-[85vh] w-full bg-surface border border-line rounded-xl overflow-hidden p-2 md:p-4 flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedCert(null)}
              className="absolute top-4 right-4 z-50 p-2.5 rounded-full bg-canvas border border-line text-muted hover:text-ink hover:border-accent/50 transition-colors duration-200"
              aria-label="Close Preview"
            >
              <X size={20} />
            </button>
            <img
              src={selectedCert}
              alt="Full certificate preview"
              className="max-w-full max-h-[80vh] object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  )
}

export default Certificate
