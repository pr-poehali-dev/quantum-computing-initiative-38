import { useEffect, useRef, useState } from "react"

const steps = [
  {
    number: "01",
    title: "Сбор гостей",
    description: "С 17:00 гости собираются в банкетном зале Сокол. Приятное общение, живая музыка и лёгкие закуски создадут атмосферу тепла и ожидания.",
  },
  {
    number: "02",
    title: "Церемония",
    description: "Торжественная регистрация брака в кругу самых близких. Момент, который мы будем хранить в сердцах навсегда.",
  },
  {
    number: "03",
    title: "Праздничный ужин",
    description: "Вкусный ужин, тосты и веселье. Вечер, наполненный радостью, смехом и искренними словами от дорогих нам людей.",
  },
  {
    number: "04",
    title: "Танцы до рассвета",
    description: "Музыка, танцы и незабываемые воспоминания. Этот вечер будет долго звучать в наших сердцах.",
  },
]

export function Process() {
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

  return (
    <section ref={sectionRef} id="schedule" className="py-32 lg:py-40 px-6 lg:px-12 relative overflow-hidden">
      {/* Right flora */}
      <svg className="absolute right-0 bottom-1/4 w-44 opacity-40 pointer-events-none" viewBox="0 0 180 350" fill="none">
        <path d="M180 30 Q140 100 150 180 Q160 260 130 340" stroke="#8fad8f" strokeWidth="1.5" fill="none"/>
        <ellipse cx="138" cy="60" rx="21" ry="10" fill="#a8c5a0" fillOpacity="0.6" transform="rotate(25 138 60)"/>
        <ellipse cx="165" cy="100" rx="19" ry="9" fill="#b5cdb0" fillOpacity="0.55" transform="rotate(-20 165 100)"/>
        <ellipse cx="142" cy="140" rx="22" ry="10" fill="#9dbf97" fillOpacity="0.6" transform="rotate(10 142 140)"/>
        <ellipse cx="168" cy="175" rx="20" ry="9" fill="#a8c5a0" fillOpacity="0.5" transform="rotate(-25 168 175)"/>
        {/* Peony */}
        <circle cx="125" cy="270" r="22" fill="#f0c4c4" fillOpacity="0.45"/>
        <ellipse cx="125" cy="259" rx="12" ry="15" fill="#f5d0d0" fillOpacity="0.55" transform="rotate(-10 125 259)"/>
        <ellipse cx="137" cy="272" rx="11" ry="14" fill="#f5d0d0" fillOpacity="0.5" transform="rotate(20 137 272)"/>
        <ellipse cx="113" cy="274" rx="11" ry="13" fill="#f5d0d0" fillOpacity="0.5" transform="rotate(-20 113 274)"/>
        <circle cx="125" cy="269" r="6" fill="#f9e4e4" fillOpacity="0.8"/>
      </svg>

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-32">
              <p className={`text-xs tracking-[0.3em] uppercase text-terracotta mb-6 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
                Программа вечера
              </p>
              <h2 className={`font-serif text-4xl md:text-5xl font-light text-foreground mb-6 text-balance transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
                Наш
                <span className="italic"> вечер</span>
              </h2>
              <p className={`text-muted-foreground leading-relaxed transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
                Мы подготовили для вас особенный вечер, наполненный радостью, теплом и незабываемыми моментами.
              </p>
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="space-y-0">
              {steps.map((step, index) => (
                <div
                  key={step.number}
                  className={`group py-10 lg:py-14 border-t border-border last:border-b transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                  style={{ transitionDelay: `${400 + index * 150}ms` }}
                >
                  <div className="flex gap-8 lg:gap-12">
                    <span className="font-serif text-4xl lg:text-5xl text-stone/50 group-hover:text-[#e8c5c0] transition-colors duration-500">
                      {step.number}
                    </span>
                    <div>
                      <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-4">{step.title}</h3>
                      <p className="text-muted-foreground leading-relaxed max-w-xl">{step.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
