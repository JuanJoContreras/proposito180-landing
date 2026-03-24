import { FiLinkedin } from 'react-icons/fi'

const team = [
  {
    name: 'Paulina Ruz',
    role: 'Fundadora y Directora',
    bio: 'Especialista en estrategia organizacional y liderazgo consciente con más de 15 años de experiencia acompañando procesos de transformación en organizaciones públicas y privadas.',
    expertise: ['Estrategia Organizacional', 'Liderazgo Consciente', 'Mindfulness Corporativo'],
    img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80',
  },
  {
    name: 'Consultor Senior',
    role: 'Consultor en Transformación Cultural',
    bio: 'Experto en diseño e implementación de procesos de cambio cultural en organizaciones complejas, con enfoque en bienestar y desempeño sostenible.',
    expertise: ['Cultura Organizacional', 'Gestión del Cambio', 'Bienestar Laboral'],
    img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80',
  },
  {
    name: 'Especialista en Bienestar',
    role: 'Consultora en Bienestar Organizacional',
    bio: 'Especializada en programas de felicidad laboral y atención plena aplicada al contexto profesional, con formación en psicología positiva y neurociencias.',
    expertise: ['Felicidad Laboral', 'Atención Plena', 'Psicología Positiva'],
    img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80',
  },
]

export default function Equipo() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent-dark font-bold text-sm uppercase tracking-widest">
            EQUIPO
          </span>
          <h2 className="section-title mt-3">
            El equipo detrás de{' '}
            <span className="text-primary-400">Propósito 180</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Profesionales con experiencia comprobada en estrategia, liderazgo 
            y transformación organizacional.
          </p>
        </div>

        {/* Team grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, i) => (
            <div
              key={i}
              className="group rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 bg-white"
            >
              {/* Photo */}
              <div className="relative overflow-hidden h-64">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-500/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <a
                    href="#"
                    className="text-white hover:text-accent transition-colors"
                    onClick={(e) => e.preventDefault()}
                  >
                    <FiLinkedin size={24} />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-heading font-bold text-xl text-primary-500 mb-1">
                  {member.name}
                </h3>
                <p className="text-primary-400 font-semibold text-sm mb-3">
                  {member.role}
                </p>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {member.bio}
                </p>
                <div className="flex flex-wrap gap-2">
                  {member.expertise.map((tag, j) => (
                    <span
                      key={j}
                      className="px-3 py-1 bg-primary-50 text-primary-500 text-xs font-semibold rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
