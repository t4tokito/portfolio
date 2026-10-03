import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/navbar'
import Footer from './components/footer'
import SystemBg from './components/SystemBg'
import Home from './pages/home'
import About from './pages/about'
import Projects from './pages/Projects'
import Certificate from './pages/certificate'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

const ScrollToTop = () => {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' in window ? 'auto' : 'auto' })
  }, [pathname])
  return null
}

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative flex flex-col min-h-screen bg-canvas text-ink antialiased">
        <SystemBg />
        <div className="grid-overlay" aria-hidden="true" />
        <ScrollToTop />
        <Navbar />

        <main className="flex-grow relative z-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/certificates" element={<Certificate />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
