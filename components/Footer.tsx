export default function Footer() {
  return (
    <footer className="bg-brand-forest py-10">
      <div className="section-container flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <span className="text-xl">🌱</span>
          <span className="text-lg font-black text-white tracking-tight">
            We<span className="text-brand-sage"> Grow</span>
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
    </footer>
  )
}
