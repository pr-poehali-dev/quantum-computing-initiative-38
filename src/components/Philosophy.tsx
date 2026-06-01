import { useEffect, useRef, useState } from "react"

export function Philosophy() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true) },
      { threshold: 0.2 },
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="details" className="py-32 lg:py-40 px-6 lg:px-12 relative overflow-hidden">
      {/* Side flora */}
      <svg className="absolute right-0 top-1/4 w-48 opacity-40 pointer-events-none" viewBox="0 0 200 400" fill="none">
        <path d="M190 0 Q160 80 170 160 Q180 240 150 380" stroke="#8fad8f" strokeWidth="1.5" fill="none"/>
        <ellipse cx="155" cy="50" rx="22" ry="10" fill="#a8c5a0" fillOpacity="0.6" transform="rotate(20 155 50)"/>
        <ellipse cx="175" cy="90" rx="20" ry="10" fill="#b5cdb0" fillOpacity="0.55" transform="rotate(-15 175 90)"/>
        <ellipse cx="152" cy="130" rx="23" ry="11" fill="#9dbf97" fillOpacity="0.6" transform="rotate(10 152 130)"/>
        <ellipse cx="170" cy="170" rx="21" ry="10" fill="#a8c5a0" fillOpacity="0.5" transform="rotate(-20 170 170)"/>
        <ellipse cx="148" cy="210" rx="22" ry="10" fill="#b5cdb0" fillOpacity="0.5" transform="rotate(15 148 210)"/>
        {/* Peony */}
        <circle cx="140" cy="300" r="24" fill="#f0c4c4" fillOpacity="0.45"/>
        <ellipse cx="140" cy="288" rx="13" ry="17" fill="#f5d0d0" fillOpacity="0.55" transform="rotate(-10 140 288)"/>
        <ellipse cx="153" cy="303" rx="12" ry="16" fill="#f5d0d0" fillOpacity="0.5" transform="rotate(20 153 303)"/>
        <ellipse cx="127" cy="305" rx="12" ry="15" fill="#f5d0d0" fillOpacity="0.5" transform="rotate(-20 127 305)"/>
        <circle cx="140" cy="300" r="7" fill="#f9e4e4" fillOpacity="0.8"/>
      </svg>

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image */}
          <div className={`relative aspect-[4/5] bg-sand overflow-hidden transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}>
            <img
              src="https://cdn.poehali.dev/projects/d1c2c738-56df-487f-9f74-a1a0c77efa19/bucket/8cb6b574-eafc-4f25-86cc-c722c7d23494.jpg"
              alt="Антон и Виктория"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#f5d0d0]/60" />
          </div>

          {/* Content */}
          <div className="lg:pl-8">
            <p className={`text-xs tracking-[0.3em] uppercase text-terracotta mb-6 transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
              Детали торжества
            </p>

            <h2 className={`font-serif text-4xl md:text-5xl lg:text-6xl font-light leading-[1.1] text-foreground mb-8 text-balance transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              Когда
              <span className="italic"> и где</span>
            </h2>

            <div className={`space-y-6 text-muted-foreground leading-relaxed transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              <p>
                Мы будем рады видеть вас <em className="text-foreground">9 августа 2026 года</em> на нашем свадебном торжестве. В этот день мы соединим наши сердца и жизни в окружении самых близких людей.
              </p>
              <p>
                Начало праздника в <em className="text-foreground">17:00</em>. Просим вас быть чуть заранее, чтобы успеть занять места и встретиться с друзьями.
              </p>
            </div>

            {/* Details */}
            <div className={`grid grid-cols-1 gap-6 mt-12 pt-12 border-t border-border transition-all duration-1000 delay-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              <div className="flex gap-4 items-start">
                <div className="w-8 h-8 flex items-center justify-center shrink-0 mt-0.5 text-sage">
                  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2} className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs tracking-widest uppercase text-muted-foreground mb-1">Дата и время</p>
                  <p className="text-foreground">9 августа 2026 · Начало в 17:00</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-8 h-8 flex items-center justify-center shrink-0 mt-0.5 text-sage">
                  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2} className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs tracking-widest uppercase text-muted-foreground mb-1">Место</p>
                  <p className="text-foreground">Банкетный зал Сокол</p>
                  <p className="text-muted-foreground text-sm">г. Курган, ул. Карла Маркса, 58</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}