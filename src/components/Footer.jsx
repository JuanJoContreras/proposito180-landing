import { FiLinkedin, FiInstagram, FiMail, FiArrowUp } from 'react-icons/fi'

const navLinks = [
  { id: 'inicio', label: 'Inicio' },
  { id: 'proposito180', label: 'Propósito 180' },
  { id: 'equipo', label: 'Equipo' },
  { id: 'soluciones', label: 'Soluciones Estratégicas' },
  { id: 'servicios', label: 'Servicios' },
  { id: 'contacto', label: 'Contacto' },
  ]

export default function Footer() {
    const scrollToTop = () => {
          window.scrollTo({ top: 0, behavior: 'smooth' })
    }

  const scrollTo = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
        <footer className="bg-primary-500 text-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
              
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
                      
                        {/* Brand */}
                                <div className="md:col-span-1">
                                            <div className="mb-4">
                                                          <span className="font-heading font-black text-2xl text-white tracking-wide">
                                                                          PROPÓSITO{' '}
                                                                          <span className="text-accent">180</span>span>
                                                          </span>span>
                                                          <p className="text-white/60 text-xs uppercase tracking-widest mt-1">
                                                                          Strategic Consulting
                                                          </p>p>
                                            </div>div>
                                            <p className="text-white/70 text-sm leading-relaxed mb-5">
                                                          Estrategia Organizacional | Innovación | Desarrollo Humano
                                            </p>p>
                                            <p className="text-white/60 text-xs italic">
                                                          "Diseñamos procesos de transformación organizacional que integran estrategia, desarrollo humano y herramientas de consciencia aplicada."
                                            </p>p>
                                  {/* Social */}
                                            <div className="flex gap-3 mt-6">
                                                          <a
                                                                            href="https://www.linkedin.com/company/proposito180"
                                                                            target="_blank"
                                                                            rel="noopener noreferrer"</footer>
