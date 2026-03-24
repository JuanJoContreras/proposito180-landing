import { FiSearch, FiLayout, FiPlay, FiBarChart2 } from 'react-icons/fi'

const steps = [
  {
    icon: FiSearch,
    number: '01',
    title: 'Diagnóstico',
    desc: 'Análisis profundo de las necesidades, contexto y objetivos estratégicos de la organización.',
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: FiLayout,
    number: '02',
    title: 'Diseño',
    desc: 'Diseño de programas y estrategias completamente adaptados a cada organización y sus desafíos específicos.',
    color: 'from-indigo-500 to-indigo-600',
  },
  {
    icon: FiPlay,
    number: '03',
    title: 'Implementación',
    desc: 'Acompañamiento estratégico y activo a equipos durante todo el proceso de transformación.',
    color: 'from-primary-500 to-primary-600',
  },
  {
    icon: FiBarChart2,
    number: '04',
    title: 'Seguimiento',
    desc: 'Evaluación continua y fortalecimiento de los resultados para garantizar impacto sostenible.',
    color: 'from-accent-dark to-green-600',
  },
]

export default function Soluciones() {
  return (
    <section className="py-20 md:py-28 bg-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent-dark font-bold text-sm uppercase tracking-widest">
            SOLUCIONES ESTRATÉGICAS
          </span>
          <h2 className="section-title mt-3">
            Integramos estrategia y{' '}
            <span className="text-primary-400">desarrollo humano</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Diseñamos procesos de cambio sostenibles en equipos e instituciones, 
            con un modelo metodológico integral de cuatro fases.
          </p>
        </div>

        {/* Steps grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {steps.map((step, i) => (
            <div
              key={i}
              className="relative bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 group overflow-hidden"
            >
              {/* Number background */}
              <div className="absolute top-4 right-4 text-6xl font-black text-gray-100 group-hover:text-primary-50 transition-colors font-heading">
                {step.number}
              </div>

              {/* Icon */}
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-5 shadow-md`}>
                <step.icon className="text-white" size={24} />
              </div>

              <h3 className="font-heading font-bold text-xl text-primary-500 mb-3">
                {step.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom description */}
        <div className="bg-gradient-to-r from-primary-500 to-primary-400 rounded-2xl p-8 md:p-10 text-white text-center shadow-xl">
          <p className="text-lg md:text-xl font-medium leading-relaxed max-w-3xl mx-auto">
            Modelo estratégico que integra{' '}
            <strong>análisis organizacional</strong>,{' '}
            <strong>bienestar laboral</strong> y{' '}
            <strong>liderazgo consciente</strong>{' '}
            para generar cambios reales en equipos.
          </p>
          <button
            onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
            className="mt-6 btn-secondary"
          >
            Conoce cómo podemos ayudarte
          </button>
        </div>
      </div>
    </section>
  )
}
