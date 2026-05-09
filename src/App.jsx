import React from 'react'
import Home from './pages/home'
import About from './pages/about'
import Certificate from './pages/certificate'
import Footer from './components/footer'
import contact from './pages/contact'
import projects from './pages/projects'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"

import Navbar from './components/navbar'

const App = () => {

  return (

    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route
          path='/'
          element={<Home />}
        />

        <Route
          path='/about'
          element={<About />}
        />

        <Route
          path='/certificates'
          element={<Certificate />}
        />
        <Route
          path='/contact'
          element={contact()}
        />
        <Route
          path='/projects'
          element={projects()}
        />
      </Routes>
      <Footer />
    </BrowserRouter>

  )
}

export default App