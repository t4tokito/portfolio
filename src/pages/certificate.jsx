import React, { useState } from 'react'
import mui from '../components/img/mui3.png'
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
import { Award, Eye, X, ZoomIn } from 'lucide-react'

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
    <div className="relative min-h-screen w-full py-16 px-4 md:px-8 overflow-hidden">
      
      {/* Background ambient soft blur */}
      <div className="absolute top-1/4 right-1/10 w-96 h-96 aura-glow-blue rounded-full filter blur-3xl opacity-30 pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-1/4 left-1/10 w-96 h-96 aura-glow-mauve rounded-full filter blur-3xl opacity-30 pointer-events-none animate-pulse-glow animate-float-delayed" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Page Header */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-16 text-center md:text-left animate-fade-up">
          <img
            src={mui}
            alt="Mui Graphic"
            className="h-32 md:h-40 object-contain filter drop-shadow-[0_0_15px_rgba(180,190,254,0.35)] animate-float"
          />
          <div>
            <h1 className="text-4xl md:text-6xl font-space font-extrabold tracking-tight text-white inline-flex items-center gap-4">
              <Award className="text-sapphire w-10 h-10 md:w-14 md:h-14 animate-[pulse_3s_infinite]" />
              My <span className="text-gradient">Certificates</span>
            </h1>
            <p className="text-muted font-mono text-xs md:text-sm mt-3 uppercase tracking-widest">
              System.Query_Achievements()
            </p>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert) => (
            <div
              key={cert.id}
              onClick={() => setSelectedCert(cert.img)}
              className="glass-card p-3 rounded-2xl cursor-pointer group relative overflow-hidden hover:shadow-[0_0_25px_rgba(180,190,254,0.22)] transition-all duration-300"
            >
              {/* Media wrapper */}
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-canvas/40 border border-white/5">
                <img 
                  src={cert.img} 
                  alt={cert.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                {/* Glow Overlay on Hover */}
                <div className="absolute inset-0 bg-canvas/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2">
                  <div className="p-3 rounded-full bg-gradient-to-br from-blue to-lavender text-[#0d0d14] shadow-lg shadow-lavender/25 transform scale-75 group-hover:scale-100 transition-transform duration-300">
                    <ZoomIn size={20} />
                  </div>
                </div>
              </div>

              {/* Sub-label */}
              <div className="mt-3 flex items-center justify-between px-1">
                <span className="text-muted font-space font-semibold text-sm group-hover:text-lavender transition-colors duration-200">
                  {cert.title}
                </span>
                <span className="text-lavender/80 font-mono text-xs flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <Eye size={12} />
                  View
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Full-Screen Lightbox Modal */}
      {selectedCert && (
        <div
          className="fixed inset-0 z-[100] bg-canvas/90 backdrop-blur-md flex items-center justify-center p-4 md:p-8 animate-[fade-in_0.25s_ease-out]"
          onClick={() => setSelectedCert(null)}
        >
          {/* Modal Content */}
          <div
            className="relative max-w-5xl max-h-[85vh] w-full bg-surface/40 border border-white/10 rounded-2xl overflow-hidden shadow-2xl p-2 md:p-4 flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedCert(null)}
              className="absolute top-4 right-4 z-50 p-2.5 rounded-full bg-canvas/80 border border-white/10 text-muted hover:text-white hover:bg-white/10 transition-colors duration-250 shadow-md"
              aria-label="Close Preview"
            >
              <X size={20} />
            </button>

            {/* Certificate Display */}
            <img
              src={selectedCert}
              alt="Full Certificate Preview"
              className="max-w-full max-h-[80vh] object-contain rounded-lg filter drop-shadow-[0_0_30px_rgba(180,190,254,0.28)]"
            />
          </div>
        </div>
      )}

    </div>
  )
}

export default Certificate
