import { useEffect, useState } from "react"

export function Hero() {
  const [isVisible, setIsVisible] = useState(false)
  const [days, setDays] = useState(0)
  const [hours, setHours] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  useEffect(() => {
    const target = new Date("2026-08-09T17:00:00")
    const interval = setInterval(() => {
      const now = new Date()
      const diff = target.getTime() - now.getTime()
      if (diff <= 0) {
        clearInterval(interval)
        return
      }
      setDays(Math.floor(diff / (1000 * 60 * 60 * 24)))
      setHours(Math.floor((diff / (1000 * 60 * 60)) % 24))
      setMinutes(Math.floor((diff / (1000 * 60)) % 60))
      setSeconds(Math.floor((diff / 1000) % 60))
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 lg:px-12 pt-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-sand/30 to-background" />

      {/* Decorative elements */}
      <DecorativeFlora />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <p className={`text-xs tracking-[0.3em] uppercase text-muted-foreground mb-8 transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
          09 августа 2026
        </p>

        <h1 className={`font-serif text-5xl md:text-7xl lg:text-8xl font-light leading-[1.1] tracking-tight text-foreground mb-6 text-balance transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          Антон <span className="text-sage">&</span> Виктория
        </h1>

        <p className={`text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-4 transition-all duration-1000 delay-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          Мы рады пригласить вас разделить с нами самый важный день нашей жизни
        </p>
        <p className={`text-sm tracking-widest uppercase text-muted-foreground mb-12 transition-all duration-1000 delay-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          г. Курган · Банкетный зал Сокол · 17:00
        </p>

        {/* Countdown */}
        <div className={`flex gap-8 md:gap-16 justify-center mb-14 transition-all duration-1000 delay-900 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          {[
            { val: days, label: "дней" },
            { val: hours, label: "часов" },
            { val: minutes, label: "минут" },
            { val: seconds, label: "секунд" },
          ].map(({ val, label }) => (
            <div key={label} className="text-center">
              <p className="font-serif text-4xl md:text-5xl text-sage">{String(val).padStart(2, "0")}</p>
              <p className="text-xs tracking-widest uppercase text-muted-foreground mt-2">{label}</p>
            </div>
          ))}
        </div>

        <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-1000 delay-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <a href="#rsvp" className="group inline-flex items-center gap-3 px-8 py-4 bg-sage text-primary-foreground text-sm tracking-widest uppercase hover:bg-sage/90 transition-all duration-500">
            Заполнить анкету
            <svg className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
        <div className="w-px h-16 bg-gradient-to-b from-transparent via-stone to-transparent animate-pulse" />
      </div>
    </section>
  )
}

function DecorativeFlora() {
  return (
    <>
      {/* Top-left branch with leaves */}
      <svg className="absolute top-0 left-0 w-64 md:w-80 opacity-60 pointer-events-none" viewBox="0 0 300 280" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 10 Q40 60 30 120 Q20 180 60 240" stroke="#8fad8f" strokeWidth="1.5" fill="none"/>
        <ellipse cx="55" cy="40" rx="22" ry="11" fill="#a8c5a0" fillOpacity="0.6" transform="rotate(-30 55 40)"/>
        <ellipse cx="25" cy="75" rx="20" ry="10" fill="#b5cdb0" fillOpacity="0.55" transform="rotate(20 25 75)"/>
        <ellipse cx="48" cy="105" rx="24" ry="11" fill="#9dbf97" fillOpacity="0.6" transform="rotate(-15 48 105)"/>
        <ellipse cx="20" cy="140" rx="21" ry="10" fill="#a8c5a0" fillOpacity="0.5" transform="rotate(25 20 140)"/>
        <ellipse cx="50" cy="170" rx="23" ry="11" fill="#b5cdb0" fillOpacity="0.55" transform="rotate(-10 50 170)"/>
        <ellipse cx="25" cy="200" rx="19" ry="9" fill="#9dbf97" fillOpacity="0.5" transform="rotate(30 25 200)"/>
        <ellipse cx="55" cy="228" rx="22" ry="10" fill="#a8c5a0" fillOpacity="0.5" transform="rotate(-20 55 228)"/>
        {/* Peony top-left */}
        <circle cx="80" cy="55" r="22" fill="#f0c4c4" fillOpacity="0.5"/>
        <ellipse cx="80" cy="44" rx="12" ry="16" fill="#f5d0d0" fillOpacity="0.6" transform="rotate(-10 80 44)"/>
        <ellipse cx="92" cy="58" rx="11" ry="15" fill="#f5d0d0" fillOpacity="0.55" transform="rotate(20 92 58)"/>
        <ellipse cx="68" cy="60" rx="11" ry="14" fill="#f5d0d0" fillOpacity="0.55" transform="rotate(-20 68 60)"/>
        <ellipse cx="80" cy="68" rx="10" ry="12" fill="#f9dcdc" fillOpacity="0.5"/>
        <circle cx="80" cy="57" r="6" fill="#f9e4e4" fillOpacity="0.8"/>
      </svg>

      {/* Top-right branch */}
      <svg className="absolute top-0 right-0 w-64 md:w-80 opacity-60 pointer-events-none" viewBox="0 0 300 280" fill="none" xmlns="http://www.w3.org/2000/svg" style={{transform: "scaleX(-1)"}}>
        <path d="M10 10 Q40 60 30 120 Q20 180 60 240" stroke="#8fad8f" strokeWidth="1.5" fill="none"/>
        <ellipse cx="55" cy="40" rx="22" ry="11" fill="#a8c5a0" fillOpacity="0.6" transform="rotate(-30 55 40)"/>
        <ellipse cx="25" cy="75" rx="20" ry="10" fill="#b5cdb0" fillOpacity="0.55" transform="rotate(20 25 75)"/>
        <ellipse cx="48" cy="105" rx="24" ry="11" fill="#9dbf97" fillOpacity="0.6" transform="rotate(-15 48 105)"/>
        <ellipse cx="20" cy="140" rx="21" ry="10" fill="#a8c5a0" fillOpacity="0.5" transform="rotate(25 20 140)"/>
        <ellipse cx="50" cy="170" rx="23" ry="11" fill="#b5cdb0" fillOpacity="0.55" transform="rotate(-10 50 170)"/>
        {/* Peony top-right */}
        <circle cx="80" cy="55" r="22" fill="#f0c4c4" fillOpacity="0.5"/>
        <ellipse cx="80" cy="44" rx="12" ry="16" fill="#f5d0d0" fillOpacity="0.6" transform="rotate(-10 80 44)"/>
        <ellipse cx="92" cy="58" rx="11" ry="15" fill="#f5d0d0" fillOpacity="0.55" transform="rotate(20 92 58)"/>
        <ellipse cx="68" cy="60" rx="11" ry="14" fill="#f5d0d0" fillOpacity="0.55" transform="rotate(-20 68 60)"/>
        <circle cx="80" cy="57" r="6" fill="#f9e4e4" fillOpacity="0.8"/>
      </svg>

      {/* Bottom-left */}
      <svg className="absolute bottom-0 left-0 w-56 md:w-72 opacity-50 pointer-events-none" viewBox="0 0 260 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 200 Q50 150 40 90 Q30 40 80 10" stroke="#8fad8f" strokeWidth="1.5" fill="none"/>
        <ellipse cx="65" cy="165" rx="22" ry="10" fill="#a8c5a0" fillOpacity="0.55" transform="rotate(15 65 165)"/>
        <ellipse cx="30" cy="130" rx="20" ry="10" fill="#b5cdb0" fillOpacity="0.5" transform="rotate(-20 30 130)"/>
        <ellipse cx="55" cy="100" rx="23" ry="11" fill="#9dbf97" fillOpacity="0.55" transform="rotate(10 55 100)"/>
        <ellipse cx="35" cy="65" rx="20" ry="10" fill="#a8c5a0" fillOpacity="0.5" transform="rotate(-25 35 65)"/>
      </svg>

      {/* Bottom-right */}
      <svg className="absolute bottom-0 right-0 w-56 md:w-72 opacity-50 pointer-events-none" viewBox="0 0 260 200" fill="none" xmlns="http://www.w3.org/2000/svg" style={{transform: "scaleX(-1)"}}>
        <path d="M0 200 Q50 150 40 90 Q30 40 80 10" stroke="#8fad8f" strokeWidth="1.5" fill="none"/>
        <ellipse cx="65" cy="165" rx="22" ry="10" fill="#a8c5a0" fillOpacity="0.55" transform="rotate(15 65 165)"/>
        <ellipse cx="30" cy="130" rx="20" ry="10" fill="#b5cdb0" fillOpacity="0.5" transform="rotate(-20 30 130)"/>
        <ellipse cx="55" cy="100" rx="23" ry="11" fill="#9dbf97" fillOpacity="0.55" transform="rotate(10 55 100)"/>
        <ellipse cx="35" cy="65" rx="20" ry="10" fill="#a8c5a0" fillOpacity="0.5" transform="rotate(-25 35 65)"/>
        {/* Peony bottom-right */}
        <circle cx="90" cy="155" r="20" fill="#f0c4c4" fillOpacity="0.45"/>
        <ellipse cx="90" cy="145" rx="11" ry="14" fill="#f5d0d0" fillOpacity="0.55" transform="rotate(-10 90 145)"/>
        <ellipse cx="101" cy="158" rx="10" ry="13" fill="#f5d0d0" fillOpacity="0.5" transform="rotate(20 101 158)"/>
        <ellipse cx="79" cy="160" rx="10" ry="12" fill="#f5d0d0" fillOpacity="0.5" transform="rotate(-20 79 160)"/>
        <circle cx="90" cy="156" r="5" fill="#f9e4e4" fillOpacity="0.8"/>
      </svg>
    </>
  )
}