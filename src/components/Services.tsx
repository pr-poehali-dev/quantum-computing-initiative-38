import { useEffect, useRef, useState } from "react"

export function Services() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true) },
      { threshold: 0.1 },
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const dresscodeColors = [
    { color: "#e8dcc8", label: "Бежевый" },
    { color: "#e8c5c0", label: "Пудрово-розовый" },
    { color: "#c5d8c0", label: "Нежно-зелёный" },
    { color: "#8b6b4a", label: "Коричневый" },
  ]

  return (
    <section ref={sectionRef} id="dresscode" className="py-32 lg:py-40 px-6 lg:px-12 bg-sand/50 relative overflow-hidden">
      {/* Left flora */}
      <svg className="absolute left-0 top-1/3 w-44 opacity-40 pointer-events-none" viewBox="0 0 180 350" fill="none">
        <path d="M0 30 Q40 100 30 180 Q20 260 50 340" stroke="#8fad8f" strokeWidth="1.5" fill="none"/>
        <ellipse cx="42" cy="60" rx="21" ry="10" fill="#a8c5a0" fillOpacity="0.6" transform="rotate(-25 42 60)"/>
        <ellipse cx="15" cy="100" rx="19" ry="9" fill="#b5cdb0" fillOpacity="0.55" transform="rotate(20 15 100)"/>
        <ellipse cx="38" cy="140" rx="22" ry="10" fill="#9dbf97" fillOpacity="0.6" transform="rotate(-10 38 140)"/>
        <ellipse cx="12" cy="175" rx="20" ry="9" fill="#a8c5a0" fillOpacity="0.5" transform="rotate(25 12 175)"/>
        <ellipse cx="40" cy="215" rx="21" ry="10" fill="#b5cdb0" fillOpacity="0.5" transform="rotate(-15 40 215)"/>
        {/* Peony */}
        <circle cx="55" cy="290" r="22" fill="#f0c4c4" fillOpacity="0.45"/>
        <ellipse cx="55" cy="279" rx="12" ry="15" fill="#f5d0d0" fillOpacity="0.55" transform="rotate(-10 55 279)"/>
        <ellipse cx="67" cy="292" rx="11" ry="14" fill="#f5d0d0" fillOpacity="0.5" transform="rotate(20 67 292)"/>
        <ellipse cx="43" cy="294" rx="11" ry="13" fill="#f5d0d0" fillOpacity="0.5" transform="rotate(-20 43 294)"/>
        <circle cx="55" cy="289" r="6" fill="#f9e4e4" fillOpacity="0.8"/>
      </svg>

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <p className={`text-xs tracking-[0.3em] uppercase text-terracotta mb-6 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            Дресс-код
          </p>
          <h2 className={`font-serif text-4xl md:text-5xl lg:text-6xl font-light text-foreground text-balance transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            Цветовая палитра
          </h2>
          <p className={`text-muted-foreground mt-6 max-w-xl mx-auto leading-relaxed transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            Мы будем благодарны, если вы поддержите нашу цветовую гамму торжества. Выбирайте любые оттенки из палитры ниже.
          </p>
        </div>

        {/* Color swatches */}
        <div className={`flex flex-wrap justify-center gap-8 md:gap-14 transition-all duration-1000 delay-400 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          {dresscodeColors.map(({ color, label }, index) => (
            <div key={label} className="flex flex-col items-center gap-4" style={{ transitionDelay: `${400 + index * 100}ms` }}>
              <div
                className="w-20 h-20 md:w-28 md:h-28 rounded-full shadow-sm border border-white/60"
                style={{ backgroundColor: color }}
              />
              <div className="flex gap-1.5">
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className="w-3 h-3 rounded-full"
                    style={{
                      backgroundColor: color,
                      opacity: 0.5 + i * 0.2,
                    }}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        <p className={`text-center text-sm text-muted-foreground mt-14 transition-all duration-1000 delay-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          Оттенки могут варьироваться — главное, чтобы вам было комфортно и красиво
        </p>
      </div>
    </section>
  )
}
