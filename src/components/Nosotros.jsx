import { FiTarget, FiUsers, FiTrendingUp, FiHeart } from 'react-icons/fi'

const values = [
  {
    icon: FiTarget,
    title: 'Propósito',
    desc: 'Integramos propósito organizacional con resultados concretos y sostenibles.',
  },
  {
    icon: FiUsers,
    title: 'Personas',
    desc: 'Desarrollamos culturas donde las personas florecen y los equipos prosperan.',
  },
  {
    icon: FiTrendingUp,
    title: 'Productividad',
    desc: 'Optimizamos procesos y estrategias para resultados de alto impacto.',
  },
  {
    icon: FiHeart,
    title: 'Bienestar',
    desc: 'Promovemos entornos laborales saludables, resilientes y humanizados.',
  },
]

export default function Nosotros() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Content */}
          <div>
            <span className="text-accent-dark font-bold text-sm uppercase tracking-widest">
              NOSOTROS
            </span>
            <h2 className="section-title mt-3 mb-6">
              Propósito 180<br />
              <span className="text-primary-400">Strategic Consulting</span>
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Somos una consultora especializada en <strong className="text-primary-500">estrategia organizacional, 
                liderazgo y transformación cultural</strong>. Acompañamos a organizaciones públicas y privadas 
                en procesos que integran propósito, productividad y resultados sostenibles.
              </p>
              <p>
                Nuestro enfoque combina herramientas de gestión estratégica con metodologías de 
                bienestar y atención plena aplicadas al contexto profesional, permitiendo desarrollar 
                culturas organizacionales más humanas, resilientes y sostenibles.
              </p>
            </div>

            {/* Methodology badge */}
            <div className="mt-8 p-5 bg-primary-50 rounded-xl border border-primary-100">
              <p className="text-sm font-bold text-primary-500 uppercase tracking-wide mb-2">
                Metodología
              </p>
              <p className="text-gray-700 text-sm leading-relaxed">
                Modelo estratégico que integra análisis organizacional, bienestar laboral y 
                liderazgo consciente para generar cambios reales en equipos.
              </p>
              <div className="flex flex-wrap gap-2 mt-3">
                {['Diagnóstico', 'Diseño', 'Implementación', 'Seguimiento'].map((step) => (
                  <span
                    key={step}
                    className="px-3 py-1 bg-white text-primary-500 text-xs font-semibold rounded-full border border-primary-200"
                  >
                    {step}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Values grid */}
          <div className="grid grid-cols-2 gap-4">
            {values.map(({ icon: Icon, title, desc }, i) => (
              <div
                key={i}
                className="card group hover:border-l-4 hover:border-l-accent transition-all"
              >
                <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <Icon className="text-primary-400" size={22} />
                </div>
                <h3 className="font-heading font-bold text-primary-500 mb-2">{title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
