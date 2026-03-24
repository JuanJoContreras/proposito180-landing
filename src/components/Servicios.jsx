import { FiCheckCircle } from 'react-icons/fi'

const services = [
  {
    title: 'Estrategia Organizacional',
    emoji: '🎯',
    desc: 'Diagnóstico y diseño de estrategias organizacionales alineadas al propósito y los objetivos de cada institución.',
    features: [
      'Diagnóstico estratégico integral',
      'Diseño de modelo organizacional',
      'Planificación estratégica participativa',
      'Gestión del cambio organizacional',
    ],
  },
  {
    title: 'Liderazgo Consciente',
    emoji: '🧠',
    desc: 'Programas de desarrollo de liderazgo que integran gestión estratégica con herramientas de consciencia y bienestar.',
    features: [
      'Talleres de liderazgo transformacional',
      'Coaching ejecutivo y de equipos',
      'Mindfulness para líderes',
      'Inteligencia emocional aplicada',
    ],
  },
  {
    title: 'Cultura Organizacional',
    emoji: '🌱',
    desc: 'Diseño e implementación de procesos de transformación cultural que construyen entornos de trabajo más humanos.',
    features: [
      'Diagnóstico de cultura',
      'Diseño de cultura deseada',
      'Programas de transformación cultural',
      'Medición de clima organizacional',
    ],
  },
  {
    title: 'Bienestar y Felicidad Laboral',
    emoji: '💗',
    desc: 'Programas integrales de bienestar organizacional que mejoran la satisfacción, compromiso y productividad del equipo.',
    features: [
      'Diagnóstico de bienestar organizacional',
      'Programas de mindfulness corporativo',
      'Gestión del estrés y resiliencia',
      'Medición de felicidad laboral',
    ],
  },
  {
    title: 'Formación y Capacitación',
    emoji: '📚',
    desc: 'Programas formativos personalizados en habilidades estratégicas, liderazgo y herramientas de consciencia aplicada.',
    features: [
      'Talleres y workshops estratégicos',
      'Formación en atención plena',
      'Programas e-learning',
      'Certificaciones en bienestar',
    ],
  },
  {
    title: 'Consultoría en Gestión del Cambio',
    emoji: '🔄',
    desc: 'Acompañamiento experto en procesos de transformación organizacional complejos, desde el diseño hasta la consolidación.',
    features: [
      'Gestión de resistencia al cambio',
      'Comunicación estratégica interna',
      'Formación de agentes de cambio',
      'Seguimiento y evaluación del impacto',
    ],
  },
]

export default function Servicios() {
  return (
    <section className="py-20 md:py-28 bg-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent-dark font-bold text-sm uppercase tracking-widest">
            SERVICIOS
          </span>
          <h2 className="section-title mt-3">
            Nuestros{' '}
            <span className="text-primary-400">servicios especializados</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Soluciones integrales para la transformación organizacional, 
            diseñadas y adaptadas a las necesidades únicas de cada cliente.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <div
              key={i}
              className="card hover:border-l-4 hover:border-l-primary-400 group"
            >
              <div className="text-3xl mb-4">{service.emoji}</div>
              <h3 className="font-heading font-bold text-xl text-primary-500 mb-3 group-hover:text-primary-400 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                {service.desc}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm text-gray-700">
                    <FiCheckCircle className="text-accent-dark flex-shrink-0 mt-0.5" size={14} />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
