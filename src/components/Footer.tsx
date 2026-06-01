export function Footer() {
  return (
    <footer className="py-16 px-6 lg:px-12 border-t border-border relative overflow-hidden">
      {/* Top flora */}
      <svg className="absolute right-12 top-0 w-36 opacity-35 pointer-events-none" viewBox="0 0 140 160" fill="none">
        <path d="M70 0 Q50 40 55 80 Q60 120 40 155" stroke="#8fad8f" strokeWidth="1.2" fill="none"/>
        <ellipse cx="52" cy="25" rx="17" ry="8" fill="#a8c5a0" fillOpacity="0.55" transform="rotate(-20 52 25)"/>
        <ellipse cx="62" cy="55" rx="16" ry="8" fill="#b5cdb0" fillOpacity="0.5" transform="rotate(15 62 55)"/>
        <ellipse cx="48" cy="85" rx="18" ry="8" fill="#9dbf97" fillOpacity="0.55" transform="rotate(-10 48 85)"/>
        <ellipse cx="58" cy="115" rx="16" ry="7" fill="#a8c5a0" fillOpacity="0.45" transform="rotate(20 58 115)"/>
        {/* Small peony */}
        <circle cx="85" cy="40" r="17" fill="#f0c4c4" fillOpacity="0.4"/>
        <ellipse cx="85" cy="31" rx="9" ry="12" fill="#f5d0d0" fillOpacity="0.5" transform="rotate(-8 85 31)"/>
        <ellipse cx="94" cy="42" rx="9" ry="11" fill="#f5d0d0" fillOpacity="0.45" transform="rotate(18 94 42)"/>
        <ellipse cx="76" cy="43" rx="9" ry="11" fill="#f5d0d0" fillOpacity="0.45" transform="rotate(-18 76 43)"/>
        <circle cx="85" cy="39" r="5" fill="#f9e4e4" fillOpacity="0.75"/>
      </svg>

      <div className="max-w-7xl mx-auto">
        {/* Questions block */}
        <div className="text-center mb-16 py-12 border-y border-border">
          <p className="font-serif text-2xl md:text-3xl text-foreground mb-4">Остались вопросы?</p>
          <p className="text-muted-foreground mb-8">Будем рады ответить — напишите жениху или невесте в ВКонтакте</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://vk.com/tohne"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-3 border border-border text-sm tracking-widest uppercase text-foreground hover:border-sage hover:text-sage transition-all duration-500"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M15.684 0H8.316C1.592 0 0 1.592 0 8.316v7.368C0 22.408 1.592 24 8.316 24h7.368C22.408 24 24 22.408 24 15.684V8.316C24 1.592 22.408 0 15.684 0zm3.692 17.123h-1.744c-.66 0-.862-.525-2.049-1.714-1.033-1.01-1.49-.748-1.49.302v1.412c0 .41-.287.644-.864.644-1.306 0-2.765-.713-3.858-2.032C7.879 13.378 7 11.37 7 10.46c0-.365.149-.581.621-.581h1.744c.46 0 .635.277.812.744.895 2.388 2.388 4.475 3.009 4.475.229 0 .333-.108.333-.7v-2.14c-.066-1.26-.74-1.365-.74-1.818 0-.222.18-.444.468-.444h2.745c.39 0 .526.208.526.656v2.895c0 .39.168.526.271.526.23 0 .42-.136.839-.555 1.303-1.458 2.231-3.705 2.231-3.705.12-.265.348-.524.81-.524h1.744c.524 0 .637.277.524.644-.219.98-2.324 3.981-2.324 3.981-.185.303-.254.44 0 .783.185.265.793.812 1.198 1.303.742.903 1.305 1.661 1.458 2.185.136.521-.148.786-.633.786z"/>
              </svg>
              Антон (жених)
            </a>
            <a
              href="https://vk.com/urdumbass"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-3 border border-border text-sm tracking-widest uppercase text-foreground hover:border-sage hover:text-sage transition-all duration-500"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M15.684 0H8.316C1.592 0 0 1.592 0 8.316v7.368C0 22.408 1.592 24 8.316 24h7.368C22.408 24 24 22.408 24 15.684V8.316C24 1.592 22.408 0 15.684 0zm3.692 17.123h-1.744c-.66 0-.862-.525-2.049-1.714-1.033-1.01-1.49-.748-1.49.302v1.412c0 .41-.287.644-.864.644-1.306 0-2.765-.713-3.858-2.032C7.879 13.378 7 11.37 7 10.46c0-.365.149-.581.621-.581h1.744c.46 0 .635.277.812.744.895 2.388 2.388 4.475 3.009 4.475.229 0 .333-.108.333-.7v-2.14c-.066-1.26-.74-1.365-.74-1.818 0-.222.18-.444.468-.444h2.745c.39 0 .526.208.526.656v2.895c0 .39.168.526.271.526.23 0 .42-.136.839-.555 1.303-1.458 2.231-3.705 2.231-3.705.12-.265.348-.524.81-.524h1.744c.524 0 .637.277.524.644-.219.98-2.324 3.981-2.324 3.981-.185.303-.254.44 0 .783.185.265.793.812 1.198 1.303.742.903 1.305 1.661 1.458 2.185.136.521-.148.786-.633.786z"/>
              </svg>
              Виктория (невеста)
            </a>
          </div>
        </div>

        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <p className="font-serif text-2xl tracking-wide text-foreground mb-4">А & В</p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              09 · 08 · 2026 · г. Курган
            </p>
          </div>

          <div className="md:col-span-2 md:col-start-7">
            <p className="text-xs tracking-widest uppercase text-muted-foreground mb-4">Навигация</p>
            <nav className="flex flex-col gap-3">
              <a href="#details" className="text-sm text-foreground hover:text-sage transition-colors">Детали</a>
              <a href="#dresscode" className="text-sm text-foreground hover:text-sage transition-colors">Дресс-код</a>
              <a href="#schedule" className="text-sm text-foreground hover:text-sage transition-colors">Программа</a>
              <a href="#rsvp" className="text-sm text-foreground hover:text-sage transition-colors">Анкета</a>
            </nav>
          </div>

          <div className="md:col-span-2">
            <p className="text-xs tracking-widest uppercase text-muted-foreground mb-4">ВКонтакте</p>
            <nav className="flex flex-col gap-3">
              <a href="https://vk.com/tohne" target="_blank" rel="noopener noreferrer" className="text-sm text-foreground hover:text-sage transition-colors">
                Антон
              </a>
              <a href="https://vk.com/urdumbass" target="_blank" rel="noopener noreferrer" className="text-sm text-foreground hover:text-sage transition-colors">
                Виктория
              </a>
            </nav>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            Антон & Виктория · 09.08.2026
          </p>
          <p className="text-xs text-muted-foreground">С любовью ♡</p>
        </div>
      </div>
    </footer>
  )
}
