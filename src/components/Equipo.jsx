import { FiLinkedin } from 'react-icons/fi'

const team = [
  {
    name: 'Paulina Ruz',
    role: 'Fundadora y Directora',
    bio: 'Especialista en estrategia organizacional y liderazgo consciente con mas de 15 anos de experiencia acompanando procesos de transformacion en organizaciones publicas y privadas.',
    expertise: ['Estrategia Organizacional', 'Liderazgo Consciente', 'Mindfulness Corporativo'],
    img: '/paulina-ruz.jpg',
  },
  {
    name: 'Juan Jose Contreras',
    role: 'Direccion Ejecutiva - Innovacion',
    bio: 'Metodologia y Diseno de Programas. Experto en innovacion organizacional y diseno de soluciones a medida para empresas e instituciones.',
    expertise: ['Innovacion', 'Metodologia', 'Diseno de Programas'],
    img: '/juan-jose-contreras.jpg',
  },
  
]

export default function Equipo() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent-dark font-bold text-sm uppercase tracking-widest">EQUIPO</span>
          <h2 className="section-title mt-3">El equipo detras de <span className="text-primary-400">Proposito 180</span></h2>
          <p className="section-subtitle mx-auto">Profesionales con experiencia comprobada en estrategia, liderazgo y transformacion organizacional.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {team.map((member, i) => (
            <div key={i} className="group rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 bg-white">
              <div className="relative overflow-hidden h-64">
                <img src={member.img} alt={member.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-500/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <a href="#" className="text-white hover:text-accent transition-colors" onClick={(e) => e.preventDefault()}><FiLinkedin size={24} /></a>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-heading font-bold text-xl text-primary-500 mb-1">{member.name}</h3>
                <p className="text-primary-400 font-semibold text-sm mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{member.bio}</p>
                <div className="flex flex-wrap gap-2">
                  {member.expertise.map((tag, j) => (<span key={j} className="px-3 py-1 bg-primary-50 text-primary-500 text-xs font-semibold rounded-full">{tag}</span>))}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4">
          <div className="text-center mb-10">
            <span className="text-accent-dark font-bold text-sm uppercase tracking-widest">ESTRUCTURA</span>
            <h3 className="text-2xl font-heading font-bold text-primary-500 mt-2">Organigrama del Equipo</h3>
          </div>
          <div className="bg-gray-50 rounded-3xl p-8 shadow-inner overflow-x-auto">
            <div className="flex justify-center mb-4">
              <div className="bg-[#3d3580] text-white rounded-xl px-8 py-4 text-center min-w-[220px] shadow-lg">
                <p className="font-bold text-base">Proposito 180 Consulting</p>
                <p className="text-purple-200 text-xs mt-1">Liderazgo - Productividad - Bienestar</p>
              </div>
            </div>
            <div className="flex justify-center mb-4"><div className="w-px h-8 bg-gray-400" /></div>
            <div className="flex flex-col md:flex-row justify-center gap-4 mb-2">
              <div className="bg-[#3d3580] text-white rounded-xl px-6 py-4 text-center min-w-[200px] shadow-md">
                <p className="font-bold text-sm">Paulina Ruz</p>
                <p className="text-purple-200 text-xs mt-1">Direccion Ejecutiva - Bienestar - Liderazgo</p>
              </div>
              <div className="bg-[#3d3580] text-white rounded-xl px-6 py-4 text-center min-w-[200px] shadow-md">
                <p className="font-bold text-sm">Juan Jose Contreras</p>
                <p className="text-purple-200 text-xs mt-1">Direccion Ejecutiva - Innovacion - Metodologia y Diseño de Programas</p>
              </div>
            </div>
            <div className="text-center text-gray-400 text-xs italic my-3">Nivel Estrategico Transversal</div>
            <div className="flex justify-center mb-4">
              <div className="bg-[#7b5a00] text-white rounded-xl px-8 py-4 text-center min-w-[220px] shadow-lg border-2 border-yellow-500">
                <p className="font-bold text-base text-yellow-300">David Flores</p>
                <p className="text-yellow-200 text-xs mt-1">Desarrollo Comercial - Expansion - Alianzas</p>
              </div>
            </div>
            <div className="flex justify-center mb-4"><div className="w-px h-8 bg-gray-400" /></div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <div className="flex flex-col gap-2">
                <div className="bg-[#2d6a4f] text-white rounded-xl px-4 py-3 text-center shadow-md"><p className="font-bold text-sm">Bienestar</p><p className="text-green-200 text-xs">Progs. 2, 5, 9</p></div>
                <div className="bg-gray-600 text-white rounded-xl px-4 py-3 text-center shadow-sm"><p className="font-bold text-xs">.</p><p className="text-gray-300 text-xs">Yoga - Emocional</p></div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="bg-[#7b3f00] text-white rounded-xl px-4 py-3 text-center shadow-md"><p className="font-bold text-sm">Seguridad</p><p className="text-orange-200 text-xs">Progs. 3, 6, 12</p></div>
                <div className="flex flex-col gap-2">
                  <div className="bg-gray-600 text-white rounded-xl px-4 py-2 text-center shadow-sm"><p className="font-bold text-xs">.</p><p className="text-gray-300 text-xs">ISO - DS 594</p></div>
                  <div className="bg-gray-600 text-white rounded-xl px-4 py-2 text-center shadow-sm"><p className="font-bold text-xs">.</p><p className="text-gray-300 text-xs">Magia Laboral</p></div>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="bg-[#7b2d2d] text-white rounded-xl px-4 py-3 text-center shadow-md"><p className="font-bold text-sm">Cumplimiento</p><p className="text-red-200 text-xs">Progs. 11, 12, 13</p></div>
                <div className="bg-gray-600 text-white rounded-xl px-4 py-3 text-center shadow-sm"><p className="font-bold text-xs">.</p><p className="text-gray-300 text-xs">Ley Karin - DS 44</p></div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="bg-[#1b4332] text-white rounded-xl px-4 py-3 text-center shadow-md"><p className="font-bold text-sm">Sector Publico</p><p className="text-green-300 text-xs">Progs. 4, 5, 6, 10</p></div>
                <div className="bg-gray-600 text-white rounded-xl px-4 py-3 text-center shadow-sm"><p className="font-bold text-xs">.</p><p className="text-gray-300 text-xs">ChileCompra - SENCE</p></div>
              </div>
            </div>
            <div className="text-center text-gray-400 text-xs italic mb-4">Programa Transversal - Todos los Sectores</div>
            <div className="flex justify-center mb-6">
              <div className="bg-[#3d3580] text-white rounded-xl px-8 py-4 text-center max-w-sm w-full shadow-lg">
                <p className="font-bold text-base">Programa Estrella - 90 dias</p>
                <p className="text-purple-200 text-xs mt-1">Todo el equipo - 5 fases - Informe documentado</p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row justify-center gap-4 mb-6">
              <div className="bg-[#1a4b6e] text-white rounded-xl px-6 py-3 text-center min-w-[140px] shadow-md"><p className="text-sm font-semibold">Mineria</p></div>
              <div className="bg-[#2d6a4f] text-white rounded-xl px-6 py-3 text-center min-w-[140px] shadow-md"><p className="text-sm font-semibold">Municipalidades</p></div>
              <div className="bg-[#7b2d00] text-white rounded-xl px-6 py-3 text-center min-w-[140px] shadow-md"><p className="text-sm font-semibold">Empresas</p></div>
            </div>
            <div className="border-t border-gray-200 pt-4">
              <p className="text-center text-gray-400 text-xs italic mb-3">Metodologia Transversal</p>
              <div className="flex flex-wrap justify-center gap-3 mb-3">
                <div className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-sm bg-[#3d3580]" /><span className="text-gray-500 text-xs">Direccion / Metodologia</span></div>
                <div className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-sm bg-[#7b5a00]" /><span className="text-gray-500 text-xs">Desarrollo Comercial</span></div>
                <div className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-sm bg-[#2d6a4f]" /><span className="text-gray-500 text-xs">Bienestar</span></div>
                <div className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-sm bg-[#7b3f00]" /><span className="text-gray-500 text-xs">Seguridad</span></div>
                <div className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-sm bg-[#7b2d2d]" /><span className="text-gray-500 text-xs">Cumplimiento</span></div>
                <div className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-sm bg-[#1b4332]" /><span className="text-gray-500 text-xs">Sector Publico</span></div>
              </div>              
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
