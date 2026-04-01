import { useState } from 'react'
import { FiMail, FiPhone, FiMapPin, FiSend, FiCalendar } from 'react-icons/fi'

const EMAILS = [
  'contacto@proposito180.cl',
  'comercial@proposito180.cl',
  'juanjose@proposito180.cl',
  'marketing.proposito180@gmail.com',
]

const regionesComunas = {
  'Arica y Parinacota': ['Arica', 'Camarones', 'Putre', 'General Lagos'],
  'Tarapacá': ['Iquique', 'Alto Hospicio', 'Pozo Almonte', 'Camiña', 'Colchane', 'Huara', 'Pica'],
  'Antofagasta': ['Antofagasta', 'Mejillones', 'Sierra Gorda', 'Taltal', 'Calama', 'Ollagüe', 'San Pedro de Atacama', 'Tocopilla', 'María Elena'],
  'Atacama': ['Copiapó', 'Caldera', 'Tierra Amarilla', 'Chañaral', 'Diego de Almagro', 'Vallenar', 'Alto del Carmen', 'Freirina', 'Huasco'],
  'Coquimbo': ['La Serena', 'Coquimbo', 'Andacollo', 'La Higuera', 'Paihuano', 'Vicuña', 'Illapel', 'Canela', 'Los Vilos', 'Salamanca', 'Ovalle', 'Combarbalá', 'Monte Patria', 'Punitaqui', 'Río Hurtado'],
  'Valparaíso': ['Valparaíso', 'Casablanca', 'Concón', 'Juan Fernández', 'Puchuncaví', 'Quintero', 'Viña del Mar', 'Isla de Pascua', 'Los Andes', 'Calle Larga', 'Rinconada', 'San Esteban', 'La Ligua', 'Cabildo', 'Papudo', 'Petorca', 'Zapallar', 'Quillota', 'Calera', 'Hijuelas', 'La Cruz', 'Nogales', 'San Antonio', 'Algarrobo', 'Cartagena', 'El Quisco', 'El Tabo', 'Santo Domingo', 'San Felipe', 'Catemu', 'Llaillay', 'Panquehue', 'Putaendo', 'Santa María', 'Quilpué', 'Limache', 'Olmué', 'Villa Alemana'],
  'Metropolitana': ['Santiago', 'Cerrillos', 'Cerro Navia', 'Conchali', 'El Bosque', 'Estación Central', 'Huechuraba', 'Independencia', 'La Cisterna', 'La Florida', 'La Granja', 'La Pintana', 'La Reina', 'Las Condes', 'Lo Barnechea', 'Lo Espejo', 'Lo Prado', 'Macul', 'Maipu', 'Nuñoa', 'Pedro Aguirre Cerda', 'Peñalolen', 'Providencia', 'Pudahuel', 'Quilicura', 'Quinta Normal', 'Recoleta', 'Renca', 'San Joaquín', 'San Miguel', 'San Ramón', 'Vitacura', 'Puente Alto', 'Pirque', 'San José de Maipo', 'Colina', 'Lampa', 'Til Til', 'San Bernardo', 'Buin', 'Calera de Tango', 'Paine', 'Melipilla', 'Alhué', 'Curacaví', 'María Pinto', 'San Pedro', 'Talagante', 'El Monte', 'Isla de Maipo', 'Padre Hurtado', 'Peñaflor'],
  'O’Higgins': ['Rancagua', 'Codegua', 'Coinco', 'Coltauco', 'Donihue', 'Graneros', 'Las Cabras', 'Machalí', 'Malloa', 'Mostazal', 'Olivar', 'Peumo', 'Pichidegua', 'Quinta de Tilcoco', 'Requinoa', 'Rengo', 'San Vicente', 'Pichilemu', 'La Estrella', 'Litueche', 'Marchihue', 'Navidad', 'Paredones', 'San Fernando', 'Chepica', 'Chimbarongo', 'Lolol', 'Nancagua', 'Palmilla', 'Peralillo', 'Placilla', 'Pumanque', 'Santa Cruz'],
  'Maule': ['Talca', 'Constitución', 'Curepto', 'Empedrado', 'Maule', 'Pelarco', 'Pencahue', 'Río Claro', 'San Clemente', 'San Rafael', 'Cauquenes', 'Chanco', 'Pelluhue', 'Curicó', 'Hualane', 'Licantén', 'Molina', 'Rauco', 'Romeral', 'Sagrada Familia', 'Teno', 'Vichuquén', 'Linares', 'Colbún', 'Longaví', 'Parral', 'Retiro', 'San Javier', 'Villa Alegre', 'Yerbas Buenas'],
  'Ñuble': ['Chillán', 'Bulnes', 'Chillán Viejo', 'El Carmen', 'Pemuco', 'Pinto', 'Quillón', 'San Ignacio', 'Yungay', 'Cobquecura', 'Coelemu', 'Ninhue', 'Portezuelo', 'Quirihue', 'Ranquil', 'Trehuaco', 'Coihueco', 'Niquen', 'San Carlos', 'San Fabián', 'San Nicolás'],
  'Biobío': ['Concepción', 'Coronel', 'Chiguayante', 'Florida', 'Hualqui', 'Lota', 'Penco', 'San Pedro de la Paz', 'Santa Juana', 'Talcahuano', 'Tomé', 'Hualpuen', 'Lebu', 'Arauco', 'Cañete', 'Contulmo', 'Curanilahue', 'Los Álamos', 'Tirua', 'Los Ángeles', 'Antuco', 'Cabrero', 'Laja', 'Mulchén', 'Nacimiento', 'Negrete', 'Quilaco', 'Quilleco', 'San Rosendo', 'Santa Bárbara', 'Tucapel', 'Yumbel', 'Alto Biobío'],
  'Araucanía': ['Temuco', 'Carahue', 'Cunco', 'Curarrehue', 'Freire', 'Galvarino', 'Gorbea', 'Lautaro', 'Loncoche', 'Melipeuco', 'Nueva Imperial', 'Padre las Casas', 'Perquenco', 'Pitrufquén', 'Pucón', 'Saavedra', 'Teodoro Schmidt', 'Toltén', 'Vilcun', 'Villarrica', 'Cholchol', 'Angol', 'Collipulli', 'Curacautín', 'Ercilla', 'Lonquimay', 'Los Sauces', 'Lumaco', 'Purén', 'Renaico', 'Traigúen', 'Victoria'],
  'Los Ríos': ['Valdivia', 'Corral', 'Futrono', 'La Unión', 'Lago Ranco', 'Lanco', 'Los Lagos', 'Mafil', 'Mariquina', 'Paillaco', 'Panguipulli', 'Río Bueno'],
  'Los Lagos': ['Puerto Montt', 'Calbuco', 'Cohamó', 'Fresia', 'Frutillar', 'Los Muermos', 'Llanquihue', 'Maullín', 'Puerto Varas', 'Castro', 'Ancud', 'Chonchi', 'Curaco de Vélez', 'Dalcahue', 'Puqueldon', 'Queilen', 'Quellón', 'Quemchi', 'Quinchao', 'Osorno', 'Puerto Octay', 'Purranque', 'Puyehue', 'Río Negro', 'San Juan de la Costa', 'San Pablo', 'Chaiten', 'Futaleufú', 'Hualaihue', 'Palena'],
  'Aysén': ['Coihaique', 'Lago Verde', 'Aysén', 'Cisnes', 'Guaitecas', 'Cochrane', 'O’Higgins', 'Tortel', 'Chile Chico', 'Río Ibáñez'],
  'Magallanes': ['Punta Arenas', 'Laguna Blanca', 'Río Verde', 'San Gregorio', 'Cabo de Hornos', 'Antártica', 'Porvenir', 'Primavera', 'Timaukel', 'Natales', 'Torres del Paine'],
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
  const [error, setError] = useState('')

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
    setError('')
    try {
      const body = new FormData()
      body.append('access_key', 'proposito180-web3forms')
      body.append('subject', 'Nuevo contacto desde Propósito 180 - ' + form.nombre)
      body.append('from_name', form.nombre)
      body.append('email', form.email)
      EMAILS.forEach((mail) => body.append('to', mail))
      body.append('Teléfono', form.telefono)
      body.append('Organización', form.organizacion || 'No especificada')
      body.append('Región', form.region || 'No especificada')
      body.append('Comuna', form.comuna || 'No especificada')
      body.append('Servicio de interés', form.servicio || 'No especificado')
      body.append('Mensaje', form.mensaje)
      const mailtoParams = [
        'subject=' + encodeURIComponent('Nuevo contacto Propósito 180 - ' + form.nombre),
        'cc=' + encodeURIComponent(EMAILS.slice(1).join(',')),
        'body=' + encodeURIComponent(
          'Nombre: ' + form.nombre + '\n' +
          'Email: ' + form.email + '\n' +
          'Teléfono: ' + form.telefono + '\n' +
          'Organización: ' + (form.organizacion || 'No especificada') + '\n' +
          'Región: ' + (form.region || 'No especificada') + '\n' +
          'Comuna: ' + (form.comuna || 'No especificada') + '\n' +
          'Servicio de interés: ' + (form.servicio || 'No especificado') + '\n\n' +
          'Mensaje:\n' + form.mensaje
        )
      ].join('&')
      window.location.href = 'mailto:' + EMAILS[0] + '?' + mailtoParams
      await new Promise((r) => setTimeout(r, 1500))
      setSent(true)
    } catch (err) {
      setError('Hubo un problema al enviar. Por favor inténtalo nuevamente.')
    } finally {
      setLoading(false)
    }
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
              Agenda una conversación estratégica
            </h2>
            <p className="text-white/80 text-lg leading-relaxed mb-10">
              Cuéntanos sobre tu organización y los desafíos que estás enfrentando. Nuestro equipo te contactará para explorar cómo podemos acompañarte.
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
                  <p className="text-white/60 text-xs uppercase tracking-wide">Teléfono</p>
                  <p className="text-white font-medium">+56 9 6845 9404</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FiMapPin className="text-accent" size={18} />
                </div>
                <div>
                  <p className="text-white/60 text-xs uppercase tracking-wide">Ubicación</p>
                  <p className="text-white font-medium">Santiago, Chile</p>
                </div>
              </div>
            </div>
            <a
              href="https://wa.me/56968459404"
              className="inline-flex items-center gap-3 bg-white/10 hover:bg-white/20 text-white px-6 py-4 rounded-xl font-semibold transition-all duration-300 border border-white/20"
              target="_blank"
              rel="noopener noreferrer"
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
                <h3 className="font-heading font-bold text-2xl text-primary-500 mb-2">¡Mensaje enviado!</h3>
                <p className="text-gray-600">Nos contactaremos contigo muy pronto para agendar tu conversación estratégica.</p>
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

                {/* Teléfono + Organización */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Teléfono *</label>
                    <input type="tel" name="telefono" value={form.telefono} onChange={handleChange} required placeholder="+56 9 XXXX XXXX" className={inputClass} />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Organización</label>
                    <input type="text" name="organizacion" value={form.organizacion} onChange={handleChange} placeholder="Nombre de tu organización" className={inputClass} />
                  </div>
                </div>

                {/* Región + Comuna */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Región</label>
                    <select name="region" value={form.region} onChange={handleChange} className={selectClass}>
                      <option value="">-- Región --</option>
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

                {/* Servicio de interés */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Servicio de interés</label>
                  <select name="servicio" value={form.servicio} onChange={handleChange} className={selectClass}>
                    <option value="">Selecciona un servicio</option>
                    <option value="estrategia">Estrategia Organizacional</option>
                    <option value="liderazgo">Liderazgo Consciente</option>
                    <option value="cultura">Transformación Cultural</option>
                    <option value="bienestar">Bienestar y Felicidad Laboral</option>
                    <option value="formacion">Formación y Capacitación</option>
                    <option value="cambio">Gestión del Cambio</option>
                    <option value="otro">Otro</option>
                  </select>
                </div>

                {/* Mensaje */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Mensaje *</label>
                  <textarea name="mensaje" value={form.mensaje} onChange={handleChange} required rows={4} placeholder="Cuéntanos sobre tu organización y qué desafíos estás enfrentando..." className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent text-sm transition-all resize-none" />
                </div>

                {error && (
                  <p className="text-red-500 text-sm text-center">{error}</p>
                )}

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
