export default function Footer() {
  return (
    <footer className="bg-brand-forest py-10">
      <div className="section-container flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <span className="text-xl" aria-hidden="true">🌱</span>
          <span className="text-lg font-black text-white tracking-tight">
            We<span className="text-warm-rose"> Grow</span>
          </span>
        </div>

        {/* Tagline */}
        <p className="text-white/50 text-sm text-center">
          מקום שבו הורים עובדים וילדים צומחים
        </p>

        {/* Copyright */}
        <p className="text-white/40 text-sm">
          © {new Date().getFullYear()} We Grow. כל הזכויות שמורות.
        </p>
      </div>

      {/* Links */}
      <div className="section-container mt-5 border-t border-white/10 pt-5 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-sm">
        <a
          href="/privacy"
          className="text-white/50 hover:text-white transition-colors underline-offset-2 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 rounded-sm"
        >
          מדיניות פרטיות
        </a>
        <span className="text-white/20" aria-hidden="true">|</span>
        <a
          href="/accessibility"
          className="text-white/50 hover:text-white transition-colors underline-offset-2 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 rounded-sm"
        >
          הצהרת נגישות
        </a>
        <span className="text-white/20" aria-hidden="true">|</span>
        <span className="text-white/40">
          צור קשר:{' '}
          <a
            href="mailto:info@wegrow.co.il"
            className="text-white/60 hover:text-white transition-colors hover:underline underline-offset-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 rounded-sm"
          >
            info@wegrow.co.il
          </a>
        </span>
      </div>

      {/* Gender note */}
      <div className="section-container mt-3">
        <p className="text-white/25 text-xs text-center">
          הטקסט באתר כתוב בלשון נקבה מטעמי נוחות, אך We Grow מיועד לכל ההורים.
        </p>
      </div>
    </footer>
  )
}
