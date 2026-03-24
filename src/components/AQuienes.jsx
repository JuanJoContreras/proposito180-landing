import { FiArrowRight } from 'react-icons/fi'

const sectors = [
  {
    title: 'Sector Público',
    emoji: '🏛️',
    desc: 'Ministerios, servicios públicos, municipalidades y organismos gubernamentales que buscan modernizar su cultura organizacional y gestión del talento.',
    items: ['Gestión del cambio institucional', 'Liderazgo directivo', 'Clima laboral', 'Bienestar funcionario'],
    bg: 'bg-blue-50',
    border: 'border-blue-200',
    accent: 'text-blue-600',
  },
  {
    title: 'Empresas Privadas',
    emoji: '🏢',
    desc: 'Organizaciones que buscan desarrollar culturas de alto rendimiento, potenciar equipos y construir entornos donde las personas crecen con la empresa.',
    items: ['Cultura organizacional', 'Desarrollo de equipos', 'Estrategia de personas', 'Felicidad laboral'],
    bg: 'bg-primary-50',
    border: 'border-primary-200',
    accent: 'text-primary-400',
  },
  {
    title: 'Industria y Minería',
    emoji: '⛏️',
    desc: 'Empresas de sectores exigentes que necesitan integrar bienestar y consciencia en entornos de alta presión, mejorando desempeño y reduciendo rotación.',
    items: ['Regulación emocional', 'Atención plena operacional', 'Liderazgo en campo', 'Gestión del estrés'],
    bg: 'bg-amber-50',
    border: 'border-amber-200',
    accent: 'text-amber-600',
  },
]

export default function AQuienes() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent-dark font-bold text-sm uppercase tracking-widest">
            A QUIÉNES ACOMPAÑAMOS
          </span>
          <h2 className="section-title mt-3">
            Organizaciones que evolucionan con{' '}
            <span className="text-primary-400">estrategia y propósito</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Acompañamos procesos de liderazgo, cultura organizacional y 
            transformación del desempeño en tres grandes sectores.
          </p>
        </div>

        {/* Sectors */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14">
          {sectors.map((sector, i) => (
            <div
              key={i}
              className={`${sector.bg} border ${sector.border} rounded-2xl p-8 hover:shadow-lg transition-all duration-300 flex flex-col`}
            >
              <div className="text-4xl mb-4">{sector.emoji}</div>
              <h3 className="font-heading font-bold text-2xl text-primary-500 mb-3">
                {sector.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-5 flex-grow">
                {sector.desc}
              </p>
              <ul className="space-y-2">
                {sector.items.map((item, j) => (
                  <li key={j} className="flex items-center gap-2 text-sm">
                    <FiArrowRight className={`${sector.accent} flex-shrink-0`} size={14} />
                    <span className="text-gray-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Mindfulness note */}
        <div className="bg-gradient-to-r from-primary-50 to-blue-50 border border-primary-100 rounded-2xl p-8 text-center">
          <p className="text-2xl mb-3">🧘</p>
          <p className="text-primary-500 font-semibold text-lg mb-2">Consciencia aplicada al entorno organizacional</p>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Incorporamos prácticas de regulación emocional y atención plena adaptadas 
            a entornos organizacionales exigentes, mejorando el desempeño desde el bienestar.
          </p>
        </div>
      </div>
    </section>
  )
}
