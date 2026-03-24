const tickerItems = [
  '🧠 CONSCIENCIA APLICADA',
  '↩️ PROPÓSITO 180',
  '💗 FELICIDAD Y BIENESTAR LABORAL',
  '🏢 ESTRATEGIA ORGANIZACIONAL',
  '🌱 CULTURA ORGANIZACIONAL',
  '⚡ LIDERAZGO CONSCIENTE',
  '🎯 TRANSFORMACIÓN CULTURAL',
  '🤝 DESARROLLO HUMANO',
]

export default function Ticker() {
  const doubled = [...tickerItems, ...tickerItems]

  return (
    <div className="bg-primary-500 py-4 overflow-hidden">
      <div className="ticker-wrapper">
        <div className="ticker-content">
          {doubled.map((item, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-2 text-white font-semibold text-sm tracking-wider px-8 whitespace-nowrap"
            >
              {item}
              <span className="text-accent mx-2">•</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
