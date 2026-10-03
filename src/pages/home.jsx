import React from 'react'
import Top from '../components/top'
import SEO from '../components/SEO'

const Home = () => {
  return (
    <div>
      <SEO
        path="/"
        description="t4tokito (Tokito Dev) — portfolio of Vikas Maurya, frontend developer from Delhi building fast React, React Native & Tailwind CSS interfaces."
      />
      <Top />
    </div>
  )
}

export default Home
