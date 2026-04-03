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
                <span className="text-accent">180</span>
              </span>
              <p className="text-white/60 text-xs uppercase tracking-widest mt-1">
                Strategic Consulting
              </p>
            </div>
            <p className="text-white/70 text-sm leading-relaxed mb-5">
              Estrategia Organizacional | Innovación | Desarrollo Humano
            </p>
            <p className="text-white/60 text-xs italic">
              "Diseñamos procesos de transformación organizacional que integran estrategia, desarrollo humano y herramientas de consciencia aplicada."
            </p>
            {/* Social */}
            <div className="flex gap-3 mt-6">
              <a href="https://www.linkedin.com/company/proposito180" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-10 h-10 bg-white/10 hover:bg-accent/30 rounded-lg flex items-center justify-center transition-colors duration-200">
                <FiLinkedin size={16} />
              </a>
              <a href="https://www.instagram.com/proposito180" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-10 h-10 bg-white/10 hover:bg-accent/30 rounded-lg flex items-center justify-center transition-colors duration-200">
                <FiInstagram size={16} />
              </a>
              <a href="mailto:contacto@proposito180.cl" aria-label="Email" className="w-10 h-10 bg-white/10 hover:bg-accent/30 rounded-lg flex items-center justify-center transition-colors duration-200">
                <FiMail size={16} />
              </a>
            </div>
          </div>
          {/* Navigation */}
          <div>
            <h3 className="font-heading font-bold text-sm uppercase tracking-widest text-accent mb-5">Navegación</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button onClick={() => scrollTo(link.id)} className="text-white/70 hover:text-white text-sm transition-colors duration-200 hover:translate-x-1 inline-block transition-transform">
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          {/* Contact */}
          <div>
            <h3 className="font-heading font-bold text-sm uppercase tracking-widest text-accent mb-5">Contacto</h3>
            <div className="space-y-3 text-sm text-white/70">
              <p>📧 contacto@proposito180.cl</p>
              <p>📞 +56 9 6845 9404</p>
              <p>📍 Santiago, Chile</p>
            </div>
            <div className="mt-6">
              <button onClick={() => scrollTo('contacto')} className="bg-accent hover:bg-accent-dark text-primary-500 font-semibold text-sm px-5 py-2.5 rounded-lg transition-colors duration-200">
                Agenda una conversación
              </button>
            </div>
          </div>
        </div>
        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/50 text-xs text-center sm:text-left">
            © {new Date().getFullYear()} Propósito 180 Strategic Consulting. Todos los derechos reservados.
          </p>
          <button onClick={scrollToTop} className="flex items-center gap-2 text-white/50 hover:text-white text-xs transition-colors group">
            Volver arriba
            <div className="w-7 h-7 border border-white/20 group-hover:border-white/60 rounded-lg flex items-center justify-center transition-colors">
              <FiArrowUp size={12} />
            </div>
          </button>
        </div>
      </div>
    </footer>
  )
}
