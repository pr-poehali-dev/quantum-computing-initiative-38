import type React from "react"
import { useEffect, useRef, useState } from "react"

type FormState = {
  name: string
  attending: string
  guests: string
  allergies: string
  music: string
}

export function Contact() {
  const [isVisible, setIsVisible] = useState(false)
  const [formState, setFormState] = useState<FormState>({
    name: "",
    attending: "",
    guests: "",
    allergies: "",
    music: "",
  })
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true) },
      { threshold: 0.1 },
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")
    try {
      const res = await fetch("https://functions.poehali.dev/8c3d1c00-69b8-42f8-8c42-3ed995f67a30", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      })
      if (res.ok) {
        setStatus("success")
        setFormState({ name: "", attending: "", guests: "", allergies: "", music: "" })
      } else {
        setStatus("error")
      }
    } catch {
      setStatus("error")
    }
  }

  const inputClass = "w-full bg-transparent border-b border-border py-3 text-foreground placeholder:text-muted-foreground/50 focus:border-sage focus:outline-none transition-colors"
  const labelClass = "block text-xs tracking-widest uppercase text-muted-foreground mb-3"

  return (
    <section ref={sectionRef} id="rsvp" className="py-32 lg:py-40 px-6 lg:px-12 relative overflow-hidden">
      {/* Left flora */}
      <svg className="absolute left-0 bottom-0 w-52 opacity-40 pointer-events-none" viewBox="0 0 200 300" fill="none">
        <path d="M0 300 Q50 220 40 140 Q30 70 80 10" stroke="#8fad8f" strokeWidth="1.5" fill="none"/>
        <ellipse cx="65" cy="260" rx="22" ry="10" fill="#a8c5a0" fillOpacity="0.55" transform="rotate(15 65 260)"/>
        <ellipse cx="28" cy="220" rx="20" ry="10" fill="#b5cdb0" fillOpacity="0.5" transform="rotate(-20 28 220)"/>
        <ellipse cx="52" cy="180" rx="23" ry="11" fill="#9dbf97" fillOpacity="0.55" transform="rotate(10 52 180)"/>
        <ellipse cx="32" cy="140" rx="20" ry="10" fill="#a8c5a0" fillOpacity="0.5" transform="rotate(-25 32 140)"/>
        <ellipse cx="55" cy="100" rx="22" ry="10" fill="#b5cdb0" fillOpacity="0.5" transform="rotate(15 55 100)"/>
        {/* Peony */}
        <circle cx="78" cy="45" r="26" fill="#f0c4c4" fillOpacity="0.45"/>
        <ellipse cx="78" cy="32" rx="14" ry="18" fill="#f5d0d0" fillOpacity="0.55" transform="rotate(-10 78 32)"/>
        <ellipse cx="92" cy="47" rx="13" ry="17" fill="#f5d0d0" fillOpacity="0.5" transform="rotate(20 92 47)"/>
        <ellipse cx="64" cy="49" rx="13" ry="16" fill="#f5d0d0" fillOpacity="0.5" transform="rotate(-20 64 49)"/>
        <circle cx="78" cy="44" r="8" fill="#f9e4e4" fillOpacity="0.8"/>
      </svg>

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left */}
          <div>
            <p className={`text-xs tracking-[0.3em] uppercase text-terracotta mb-6 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
              Анкета гостя
            </p>
            <h2 className={`font-serif text-4xl md:text-5xl lg:text-6xl font-light text-foreground mb-8 text-balance transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              Подтвердите<br />
              <span className="italic">присутствие</span>
            </h2>
            <p className={`text-muted-foreground leading-relaxed mb-12 max-w-md transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              Пожалуйста, заполните анкету до <em className="text-foreground">1 августа 2026</em>, чтобы мы успели подготовиться и встретить вас наилучшим образом.
            </p>

            {/* Couple info */}
            <div className={`space-y-4 transition-all duration-1000 delay-400 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              <div>
                <p className="text-xs tracking-widest uppercase text-muted-foreground mb-2">Дата</p>
                <p className="text-foreground">9 августа 2026 · 17:00</p>
              </div>
              <div>
                <p className="text-xs tracking-widest uppercase text-muted-foreground mb-2">Место</p>
                <p className="text-foreground">Банкетный зал Сокол</p>
                <p className="text-sm text-muted-foreground">г. Курган, ул. Карла Маркса, 58</p>
              </div>
            </div>
          </div>

          {/* Right — Form */}
          <div className={`transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            {status === "success" ? (
              <div className="flex flex-col items-center justify-center h-full min-h-[400px] text-center gap-6">
                <div className="font-serif text-6xl text-sage">♡</div>
                <h3 className="font-serif text-3xl text-foreground">Спасибо!</h3>
                <p className="text-muted-foreground leading-relaxed max-w-sm">
                  Ваша анкета принята. Мы с нетерпением ждём встречи с вами 9 августа!
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div>
                  <label htmlFor="name" className={labelClass}>Ваше имя</label>
                  <input
                    type="text"
                    id="name"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className={inputClass}
                    placeholder="Имя и фамилия"
                    required
                  />
                </div>

                <div>
                  <label className={labelClass}>Вы придёте на торжество?</label>
                  <div className="flex gap-6 mt-1">
                    {[
                      { val: "yes", label: "Да, буду!" },
                      { val: "no", label: "К сожалению, нет" },
                      { val: "maybe", label: "Пока не знаю" },
                    ].map(({ val, label }) => (
                      <label key={val} className="flex items-center gap-2 cursor-pointer group">
                        <span
                          className={`w-4 h-4 rounded-full border transition-colors duration-300 ${formState.attending === val ? "border-sage bg-sage" : "border-border bg-transparent group-hover:border-sage"}`}
                          onClick={() => setFormState({ ...formState, attending: val })}
                        />
                        <span className="text-sm text-foreground">{label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label htmlFor="guests" className={labelClass}>Количество гостей с вами</label>
                  <input
                    type="text"
                    id="guests"
                    value={formState.guests}
                    onChange={(e) => setFormState({ ...formState, guests: e.target.value })}
                    className={inputClass}
                    placeholder="Например: приду один / с партнёром"
                  />
                </div>

                <div>
                  <label htmlFor="allergies" className={labelClass}>Пищевые аллергии или ограничения</label>
                  <input
                    type="text"
                    id="allergies"
                    value={formState.allergies}
                    onChange={(e) => setFormState({ ...formState, allergies: e.target.value })}
                    className={inputClass}
                    placeholder="Если есть — укажите, если нет — оставьте пустым"
                  />
                </div>

                <div>
                  <label htmlFor="music" className={labelClass}>Пожелания по музыке</label>
                  <input
                    type="text"
                    id="music"
                    value={formState.music}
                    onChange={(e) => setFormState({ ...formState, music: e.target.value })}
                    className={inputClass}
                    placeholder="Любимый жанр или конкретная песня"
                  />
                </div>

                {status === "error" && (
                  <p className="text-sm text-destructive">Что-то пошло не так. Попробуйте ещё раз.</p>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="group inline-flex items-center gap-3 px-8 py-4 bg-sage text-primary-foreground text-sm tracking-widest uppercase hover:bg-sage/90 transition-all duration-500 disabled:opacity-60"
                >
                  {status === "loading" ? "Отправляем..." : "Отправить анкету"}
                  {status !== "loading" && (
                    <svg className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
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