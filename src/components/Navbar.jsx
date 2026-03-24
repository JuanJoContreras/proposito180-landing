import { useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'

const navLinks = [
  { id: 'inicio', label: 'INICIO' },
  { id: 'proposito180', label: 'PROPÓSITO 180' },
  { id: 'equipo', label: 'EQUIPO' },
  { id: 'soluciones', label: 'SOLUCIONES ESTRATÉGICAS' },
  { id: 'servicios', label: 'SERVICIOS' },
]

export default function Navbar({ scrolled }) {
  const [mobileOpen, setMobileOpen] = useState(false)

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
    setMobileOpen(false)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white shadow-md py-2'
          : 'bg-white/95 backdrop-blur-sm py-3'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <div
            className="flex items-center cursor-pointer"
            onClick={() => scrollTo('inicio')}
          >
            <div className="flex flex-col">
              <span className="font-heading font-black text-xl text-primary-500 leading-tight tracking-wide">
                PROPÓSITO{' '}
                <span className="text-primary-400">180</span>
              </span>
              <span className="text-xs text-gray-500 font-medium tracking-widest uppercase">
                Consulting
              </span>
            </div>
          </div>

          {/* Desktop nav */}
          <ul className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => scrollTo(link.id)}
                  className="px-4 py-2 text-sm font-semibold text-gray-700 hover:text-primary-400 hover:bg-primary-50 rounded-lg transition-all duration-200 tracking-wide"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          {/* CTA Desktop */}
          <div className="hidden lg:block">
            <button
              onClick={() => scrollTo('contacto')}
              className="btn-primary text-sm"
            >
              Agenda una conversación
            </button>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </nav>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden mt-3 pb-4 border-t border-gray-100">
            <ul className="flex flex-col gap-1 mt-3">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollTo(link.id)}
                    className="w-full text-left px-4 py-2.5 text-sm font-semibold text-gray-700 hover:text-primary-400 hover:bg-primary-50 rounded-lg transition-all"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
              <li className="mt-2">
                <button
                  onClick={() => scrollTo('contacto')}
                  className="w-full btn-primary text-sm"
                >
                  Agenda una conversación
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  )
}
