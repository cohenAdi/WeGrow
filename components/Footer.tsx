import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-brand-forest py-10">
      <div className="section-container flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Logo */}
        <div className="flex items-center">
          <Image
            src="/logo.png"
            alt="We Grow"
            width={100}
            height={40}
            className="h-10 w-auto object-contain brightness-0 invert"
          />
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
