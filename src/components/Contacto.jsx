import { useState } from 'react'
import { FiMail, FiPhone, FiMapPin, FiSend, FiCalendar } from 'react-icons/fi'

export default function Contacto() {
  const [form, setForm] = useState({
    nombre: '',
    email: '',
    organizacion: '',
    mensaje: '',
    servicio: '',
  })
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    // Simulated send - replace with actual API call
    await new Promise((r) => setTimeout(r, 1000))
    setSent(true)
    setLoading(false)
  }

  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-primary-500 to-primary-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left - Info */}
          <div className="text-white">
            <span className="text-accent font-bold text-sm uppercase tracking-widest">
              CONTACTO
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-black mt-3 mb-6 leading-tight">
              Agenda una conversación estratégica
            </h2>
            <p className="text-white/80 text-lg leading-relaxed mb-10">
              Cuéntanos sobre tu organización y los desafíos que estás enfrentando. 
              Nuestro equipo te contactará para explorar cómo podemos acompañarte.
            </p>

            {/* Contact details */}
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
                  <p className="text-white font-medium">+56 9 XXXX XXXX</p>
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

            {/* Calendar CTA */}
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
                <h3 className="font-heading font-bold text-2xl text-primary-500 mb-2">
                  ¡Mensaje enviado!
                </h3>
                <p className="text-gray-600">
                  Nos contactaremos contigo muy pronto para agendar tu conversación estratégica.
                </p>
                <button
                  onClick={() => { setSent(false); setForm({ nombre: '', email: '', organizacion: '', mensaje: '', servicio: '' }) }}
                  className="mt-6 btn-outline text-sm"
                >
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Nombre *
                    </label>
                    <input
                      type="text"
                      name="nombre"
                      value={form.nombre}
                      onChange={handleChange}
                      required
                      placeholder="Tu nombre completo"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent text-sm transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="tu@email.com"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent text-sm transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Organización
                  </label>
                  <input
                    type="text"
                    name="organizacion"
                    value={form.organizacion}
                    onChange={handleChange}
                    placeholder="Nombre de tu organización"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent text-sm transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Servicio de interés
                  </label>
                  <select
                    name="servicio"
                    value={form.servicio}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent text-sm transition-all bg-white"
                  >
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

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Mensaje *
                  </label>
                  <textarea
                    name="mensaje"
                    value={form.mensaje}
                    onChange={handleChange}
                    required
                    rows={4}
                    placeholder="Cuéntanos sobre tu organización y qué desafíos estás enfrentando..."
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent text-sm transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full btn-primary justify-center text-base py-4 disabled:opacity-70 disabled:cursor-not-allowed"
                >
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
