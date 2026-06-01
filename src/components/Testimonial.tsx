import { useEffect, useRef, useState } from "react"

export function Testimonial() {
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
    <section ref={sectionRef} className="py-32 lg:py-40 px-6 lg:px-12 bg-sage relative overflow-hidden">
      {/* Decorative peonies on this section */}
      <svg className="absolute left-8 top-8 w-32 opacity-30 pointer-events-none" viewBox="0 0 120 120" fill="none">
        <circle cx="60" cy="60" r="35" fill="#fff" fillOpacity="0.2"/>
        <ellipse cx="60" cy="44" rx="18" ry="24" fill="#fff" fillOpacity="0.18" transform="rotate(-10 60 44)"/>
        <ellipse cx="78" cy="62" rx="17" ry="22" fill="#fff" fillOpacity="0.16" transform="rotate(20 78 62)"/>
        <ellipse cx="42" cy="64" rx="17" ry="21" fill="#fff" fillOpacity="0.16" transform="rotate(-20 42 64)"/>
        <ellipse cx="60" cy="75" rx="15" ry="18" fill="#fff" fillOpacity="0.14"/>
        <circle cx="60" cy="58" r="9" fill="#fff" fillOpacity="0.25"/>
      </svg>
      <svg className="absolute right-8 bottom-8 w-32 opacity-30 pointer-events-none" viewBox="0 0 120 120" fill="none">
        <circle cx="60" cy="60" r="35" fill="#fff" fillOpacity="0.2"/>
        <ellipse cx="60" cy="44" rx="18" ry="24" fill="#fff" fillOpacity="0.18" transform="rotate(-10 60 44)"/>
        <ellipse cx="78" cy="62" rx="17" ry="22" fill="#fff" fillOpacity="0.16" transform="rotate(20 78 62)"/>
        <ellipse cx="42" cy="64" rx="17" ry="21" fill="#fff" fillOpacity="0.16" transform="rotate(-20 42 64)"/>
        <circle cx="60" cy="58" r="9" fill="#fff" fillOpacity="0.25"/>
      </svg>

      <div className="max-w-5xl mx-auto text-center">
        <div className={`mb-10 transition-all duration-1000 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"}`}>
          <p className="font-serif text-6xl text-primary-foreground/30">&</p>
        </div>

        <blockquote className={`font-serif text-2xl md:text-3xl lg:text-4xl font-light text-primary-foreground leading-relaxed mb-10 text-balance transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          Любовь — это не смотреть друг на друга, это смотреть вместе в одном направлении
        </blockquote>

        <div className={`transition-all duration-1000 delay-400 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="text-sm tracking-widest uppercase text-primary-foreground/80">Антуан де Сент-Экзюпери</p>
          <div className="mt-6 w-px h-10 bg-primary-foreground/20 mx-auto" />
          <p className="text-sm tracking-widest uppercase text-primary-foreground/60 mt-4">09 · 08 · 2026</p>
        </div>
      </div>
    </section>
  )
}
