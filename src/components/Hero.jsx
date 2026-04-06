import { FiCheckCircle, FiDownload, FiCalendar } from 'react-icons/fi'

const features = [
  'Liderazgo consciente',
  'Cultura organizacional positiva',
  'Felicidad y bienestar laboral',
  'Atención plena aplicada al trabajo',
]

export default function Hero() {
  const scrollToContact = () => {
    document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-white -z-10" />
      <div className="absolute top-20 right-0 w-1/2 h-full bg-gradient-to-l from-primary-500/5 to-transparent -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Image side */}
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80"
                alt="Equipo Propósito 180 en sesión estratégica"
                className="w-full h-[400px] lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-500/40 to-transparent" />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-5 max-w-[200px]">
              <p className="text-3xl font-black text-primary-500">+5</p>
              <p className="text-sm text-gray-600 font-medium mt-1">años de experiencia como equipo en transformación organizacional</p>
            </div>
          </div>

          {/* Content side */}
          <div className="order-1 lg:order-2 fade-in-up visible">
            <div className="inline-flex items-center gap-2 bg-accent/20 text-primary-500 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse"></span>
              Strategic Consulting
            </div>

            <h1 className="font-heading text-4xl md:text-5xl lg:text-5xl font-black text-primary-500 leading-tight mb-6">
              Estrategia Organizacional,{' '}
              <span className="text-primary-400">Liderazgo Consciente</span>{' '}
              y Bienestar
            </h1>

            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Diseñamos procesos de transformación organizacional que integran
              estrategia, desarrollo humano y herramientas de consciencia aplicada,
              acompañando a equipos y organizaciones hacia culturas más humanas,
              resilientes y sostenibles.
            </p>

            {/* Features */}
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
              {features.map((feature, i) => (
                <li key={i} className="flex items-center gap-2 text-gray-700">
                  <FiCheckCircle className="text-accent-dark flex-shrink-0" size={18} />
                  <span className="text-sm font-medium">{feature}</span>
                </li>
              ))}
            </ul>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button onClick={scrollToContact} className="btn-primary">
                <FiCalendar className="mr-2" />
                Agenda una conversación estratégica
              </button>
              <a
                href="/PRESENTACION%20PROPOSITO180v1.pdf"
                className="btn-outline"
                target="_blank"
                rel="noopener noreferrer"
                download
              >
                <FiDownload className="mr-2" />
                Descarga brochure
              </a>
            </div>
          </div>
        </div>

        {/* Bottom stats bar */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-gray-200 pt-10">
          {[
            { label: 'Diagnóstico', desc: 'Análisis de necesidades y objetivos' },
            { label: 'Diseño', desc: 'Programas adaptados a cada organización' },
            { label: 'Implementación', desc: 'Acompañamiento estratégico a equipos' },
            { label: 'Seguimiento', desc: 'Evaluación y fortalecimiento continuo' },
          ].map((item, i) => (
            <div key={i} className="text-center">
              <p className="font-heading font-bold text-primary-400 text-lg">{item.label}</p>
              <p className="text-xs text-gray-500 mt-1">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
