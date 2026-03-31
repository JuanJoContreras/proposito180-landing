import { useState } from 'react'
import { FiMail, FiPhone, FiMapPin, FiSend, FiCalendar } from 'react-icons/fi'

const regionesComunas = {
  'Arica y Parinacota': ['Arica', 'Camarones', 'Putre', 'General Lagos'],
  'Tarapaca': ['Iquique', 'Alto Hospicio', 'Pozo Almonte', 'Camina', 'Colchane', 'Huara', 'Pica'],
  'Antofagasta': ['Antofagasta', 'Mejillones', 'Sierra Gorda', 'Taltal', 'Calama', 'Ollagüe', 'San Pedro de Atacama', 'Tocopilla', 'Maria Elena'],
  'Atacama': ['Copiapo', 'Caldera', 'Tierra Amarilla', 'Chanaral', 'Diego de Almagro', 'Vallenar', 'Alto del Carmen', 'Freirina', 'Huasco'],
  'Coquimbo': ['La Serena', 'Coquimbo', 'Andacollo', 'La Higuera', 'Paihuano', 'Vicuna', 'Illapel', 'Canela', 'Los Vilos', 'Salamanca', 'Ovalle', 'Combarbala', 'Monte Patria', 'Punitaqui', 'Rio Hurtado'],
  'Valparaiso': ['Valparaiso', 'Casablanca', 'Concon', 'Juan Fernandez', 'Puchuncavi', 'Quintero', 'Vina del Mar', 'Isla de Pascua', 'Los Andes', 'Calle Larga', 'Rinconada', 'San Esteban', 'La Ligua', 'Cabildo', 'Papudo', 'Petorca', 'Zapallar', 'Quillota', 'Calera', 'Hijuelas', 'La Cruz', 'Nogales', 'San Antonio', 'Algarrobo', 'Cartagena', 'El Quisco', 'El Tabo', 'Santo Domingo', 'San Felipe', 'Catemu', 'Llaillay', 'Panquehue', 'Putaendo', 'Santa Maria', 'Quilpue', 'Limache', 'Olmue', 'Villa Alemana'],
  'Metropolitana': ['Santiago', 'Cerrillos', 'Cerro Navia', 'Conchali', 'El Bosque', 'Estacion Central', 'Huechuraba', 'Independencia', 'La Cisterna', 'La Florida', 'La Granja', 'La Pintana', 'La Reina', 'Las Condes', 'Lo Barnechea', 'Lo Espejo', 'Lo Prado', 'Macul', 'Maipu', 'Nunoa', 'Pedro Aguirre Cerda', 'Penalolen', 'Providencia', 'Pudahuel', 'Quilicura', 'Quinta Normal', 'Recoleta', 'Renca', 'San Joaquin', 'San Miguel', 'San Ramon', 'Vitacura', 'Puente Alto', 'Pirque', 'San Jose de Maipo', 'Colina', 'Lampa', 'Til Til', 'San Bernardo', 'Buin', 'Calera de Tango', 'Paine', 'Melipilla', 'Alhue', 'Curacavi', 'Maria Pinto', 'San Pedro', 'Talagante', 'El Monte', 'Isla de Maipo', 'Padre Hurtado', 'Penaflor'],
  'OHiggins': ['Rancagua', 'Codegua', 'Coinco', 'Coltauco', 'Donihue', 'Graneros', 'Las Cabras', 'Machali', 'Malloa', 'Mostazal', 'Olivar', 'Peumo', 'Pichidegua', 'Quinta de Tilcoco', 'Requinoa', 'Rengo', 'San Vicente', 'Pichilemu', 'La Estrella', 'Litueche', 'Marchihue', 'Navidad', 'Paredones', 'San Fernando', 'Chepica', 'Chimbarongo', 'Lolol', 'Nancagua', 'Palmilla', 'Peralillo', 'Placilla', 'Pumanque', 'Santa Cruz'],
  'Maule': ['Talca', 'Constitucion', 'Curepto', 'Empedrado', 'Maule', 'Pelarco', 'Pencahue', 'Rio Claro', 'San Clemente', 'San Rafael', 'Cauquenes', 'Chanco', 'Pelluhue', 'Curico', 'Hualane', 'Licanten', 'Molina', 'Rauco', 'Romeral', 'Sagrada Familia', 'Teno', 'Vichuquen', 'Linares', 'Colbun', 'Longavi', 'Parral', 'Retiro', 'San Javier', 'Villa Alegre', 'Yerbas Buenas'],
  'Nuble': ['Chillan', 'Bulnes', 'Chillan Viejo', 'El Carmen', 'Pemuco', 'Pinto', 'Quillon', 'San Ignacio', 'Yungay', 'Cobquecura', 'Coelemu', 'Ninhue', 'Portezuelo', 'Quirihue', 'Ranquil', 'Trehuaco', 'Coihueco', 'Niquen', 'San Carlos', 'San Fabian', 'San Nicolas'],
  'Biobio': ['Concepcion', 'Coronel', 'Chiguayante', 'Florida', 'Hualqui', 'Lota', 'Penco', 'San Pedro de la Paz', 'Santa Juana', 'Talcahuano', 'Tome', 'Hualpuen', 'Lebu', 'Arauco', 'Canete', 'Contulmo', 'Curanilahue', 'Los Alamos', 'Tirua', 'Los Angeles', 'Antuco', 'Cabrero', 'Laja', 'Mulchen', 'Nacimiento', 'Negrete', 'Quilaco', 'Quilleco', 'San Rosendo', 'Santa Barbara', 'Tucapel', 'Yumbel', 'Alto Biobio'],
  'Araucania': ['Temuco', 'Carahue', 'Cunco', 'Curarrehue', 'Freire', 'Galvarino', 'Gorbea', 'Lautaro', 'Loncoche', 'Melipeuco', 'Nueva Imperial', 'Padre las Casas', 'Perquenco', 'Pitrufquen', 'Pucon', 'Saavedra', 'teodoro Schmidt', 'Tolten', 'Vilcun', 'Villarrica', 'Cholchol', 'Angol', 'Collipulli', 'Curacautin', 'Ercilla', 'Lonquimay', 'Los Sauces', 'Lumaco', 'Puren', 'Renaico', 'Traiguen', 'Victoria'],
  'Los Rios': ['Valdivia', 'Corral', 'Futrono', 'La Union', 'Lago Ranco', 'Lanco', 'Los Lagos', 'Mafil', 'Mariquina', 'Paillaco', 'Panguipulli', 'Rio Bueno'],
  'Los Lagos': ['Puerto Montt', 'Calbuco', 'Cochamo', 'Fresia', 'Frutillar', 'Los Muermos', 'Llanquihue', 'Maullin', 'Puerto Varas', 'Castro', 'Ancud', 'Chonchi', 'Curaco de Velez', 'Dalcahue', 'Puqueldon', 'Queilen', 'Quellon', 'Quemchi', 'Quinchao', 'Osorno', 'Puerto Octay', 'Purranque', 'Puyehue', 'Rio Negro', 'San Juan de la Costa', 'San Pablo', 'Chaiten', 'Futaleufu', 'Hualaihue', 'Palena'],
  'Aysen': ['Coihaique', 'Lago Verde', 'Aysen', 'Cisnes', 'Guaitecas', 'Cochrane', 'OHiggins', 'Tortel', 'Chile Chico', 'Rio Ibanez'],
  'Magallanes': ['Punta Arenas', 'Laguna Blanca', 'Rio Verde', 'San Gregorio', 'Cabo de Hornos', 'Antartica', 'Porvenir', 'Primavera', 'Timaukel', 'Natales', 'Torres del Paine'],
}

export default function Contacto() {
  const [form, setForm] = useState({
    nombre: '',
    email: '',
    telefono: '',
    organizacion: '',
    servicio: '',
    region: '',
    comuna: '',
    mensaje: '',
  })
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    if (name === 'region') {
      setForm({ ...form, region: value, comuna: '' })
    } else {
      setForm({ ...form, [name]: value })
    }
  }

  const comunasDisponibles = form.region ? (regionesComunas[form.region] || []) : []

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    await new Promise((r) => setTimeout(r, 1000))
    setSent(true)
    setLoading(false)
  }

  const inputClass = 'w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent text-sm transition-all'
  const selectClass = 'w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent text-sm transition-all bg-white'

  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-primary-500 to-primary-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left - Info */}
          <div className="text-white">
            <span className="text-accent font-bold text-sm uppercase tracking-widest">CONTACTO</span>
            <h2 className="font-heading text-4xl md:text-5xl font-black mt-3 mb-6 leading-tight">
              Agenda una conversacion estrategica
            </h2>
            <p className="text-white/80 text-lg leading-relaxed mb-10">
              Cuentanos sobre tu organizacion y los desafios que estas enfrentando. Nuestro equipo te contactara para explorar como podemos acompanarte.
            </p>
            <div className="space-y-4 mb-10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FiMail className="text-accent" size={18} />
                </div>
                <div>
                  <p className="text-white/60 text-xs uppercase tracking-wide">Email</p>
                  <p className="text-white font-medium">contacto@proposito180.cl</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FiPhone className="text-accent" size={18} />
                </div>
                <div>
                  <p className="text-white/60 text-xs uppercase tracking-wide">Telefono</p>
                  <p className="text-white font-medium">+56 9 XXXX XXXX</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FiMapPin className="text-accent" size={18} />
                </div>
                <div>
                  <p className="text-white/60 text-xs uppercase tracking-wide">Ubicacion</p>
                  <p className="text-white font-medium">Santiago, Chile</p>
                </div>
              </div>
            </div>
            <a
              href="#"
              className="inline-flex items-center gap-3 bg-white/10 hover:bg-white/20 text-white px-6 py-4 rounded-xl font-semibold transition-all duration-300 border border-white/20"
              onClick={(e) => e.preventDefault()}
            >
              <FiCalendar size={20} className="text-accent" />
              Agenda directamente en mi calendario
            </a>
          </div>

          {/* Right - Form */}
          <div className="bg-white rounded-2xl p-8 shadow-2xl">
            {sent ? (
              <div className="text-center py-8">
                <div className="text-5xl mb-4">🎉</div>
                <h3 className="font-heading font-bold text-2xl text-primary-500 mb-2">Mensaje enviado!</h3>
                <p className="text-gray-600">Nos contactaremos contigo muy pronto para agendar tu conversacion estrategica.</p>
                <button
                  onClick={() => { setSent(false); setForm({ nombre: '', email: '', telefono: '', organizacion: '', servicio: '', region: '', comuna: '', mensaje: '' }) }}
                  className="mt-6 btn-outline text-sm"
                >
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">

                {/* Nombre + Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Nombre *</label>
                    <input type="text" name="nombre" value={form.nombre} onChange={handleChange} required placeholder="Tu nombre completo" className={inputClass} />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Email *</label>
                    <input type="email" name="email" value={form.email} onChange={handleChange} required placeholder="tu@email.com" className={inputClass} />
                  </div>
                </div>

                {/* Telefono + Organizacion */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Telefono *</label>
                    <input type="tel" name="telefono" value={form.telefono} onChange={handleChange} required placeholder="+56 9 XXXX XXXX" className={inputClass} />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Organizacion</label>
                    <input type="text" name="organizacion" value={form.organizacion} onChange={handleChange} placeholder="Nombre de tu organizacion" className={inputClass} />
                  </div>
                </div>

                {/* Region + Comuna */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Region</label>
                    <select name="region" value={form.region} onChange={handleChange} className={selectClass}>
                      <option value="">-- Region --</option>
                      {Object.keys(regionesComunas).map((r) => (
                        <option key={r} value={r}>{r}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Comuna</label>
                    <select name="comuna" value={form.comuna} onChange={handleChange} disabled={!form.region} className={selectClass}>
                      <option value="">-- Comuna --</option>
                      {comunasDisponibles.map((c) => (
                        <option key={c} value={c}>{c}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Servicio */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Servicio de interes</label>
                  <select name="servicio" value={form.servicio} onChange={handleChange} className={selectClass}>
                    <option value="">Selecciona un servicio</option>
                    <option value="estrategia">Estrategia Organizacional</option>
                    <option value="liderazgo">Liderazgo Consciente</option>
                    <option value="cultura">Transformacion Cultural</option>
                    <option value="bienestar">Bienestar y Felicidad Laboral</option>
                    <option value="formacion">Formacion y Capacitacion</option>
                    <option value="cambio">Gestion del Cambio</option>
                    <option value="otro">Otro</option>
                  </select>
                </div>

                {/* Mensaje */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Mensaje *</label>
                  <textarea name="mensaje" value={form.mensaje} onChange={handleChange} required rows={4} placeholder="Cuentanos sobre tu organizacion y que desafios estas enfrentando..." className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent text-sm transition-all resize-none" />
                </div>

                <button type="submit" disabled={loading} className="w-full btn-primary justify-center text-base py-4 disabled:opacity-70 disabled:cursor-not-allowed">
                  {loading ? (
                    <span className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Enviando...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <FiSend size={16} />
                      Enviar mensaje
                    </span>
                  )}
                </button>

              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
