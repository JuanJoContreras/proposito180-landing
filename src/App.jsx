import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Ticker from './components/Ticker'
import Nosotros from './components/Nosotros'
import Soluciones from './components/Soluciones'
import AQuienes from './components/AQuienes'
import Servicios from './components/Servicios'
import Equipo from './components/Equipo'
import Contacto from './components/Contacto'
import Footer from './components/Footer'

function App() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar scrolled={scrolled} />
      <main>
        <section id="inicio">
          <Hero />
          <Ticker />
        </section>
        <section id="proposito180">
          <Nosotros />
        </section>
        <section id="soluciones">
          <Soluciones />
        </section>
        <section id="a-quienes">
          <AQuienes />
        </section>
        <section id="servicios">
          <Servicios />
        </section>
        <section id="equipo">
          <Equipo />
        </section>
        <section id="contacto">
          <Contacto />
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default App
