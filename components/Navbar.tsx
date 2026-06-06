'use client'

import { useEffect, useState } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navLinks = [
    { href: '#solution', label: 'הפתרון' },
    { href: '#how',      label: 'איך זה עובד' },
    { href: '#about',    label: 'עלינו' },
  ]

  return (
    <nav
      aria-label="ניווט ראשי"
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-xl shadow-sm border-b border-gray-100'
          : 'bg-transparent'
      }`}
    >
      <div className="section-container h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" aria-label="We Grow — דף הבית" className="flex items-center gap-2 group">
          <span className="text-2xl transition-transform group-hover:rotate-12 duration-300" aria-hidden="true">🌱</span>
          <span className="text-xl font-black text-brand-forest tracking-tight">
            We<span className="text-warm-terracotta"> Grow</span>
          </span>
        </a>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-gray-600 hover:text-brand-green transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-sage rounded-sm"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA + mobile toggle */}
        <div className="flex items-center gap-3">
          <a
            href="#waitlist"
            className="hidden sm:inline-flex items-center gap-1.5 bg-brand-green hover:bg-brand-forest text-white text-sm font-bold px-5 py-2.5 rounded-full shadow-brand-sm hover:shadow-brand-md transition-all duration-300 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-sage/40"
          >
            הצטרפו לרשימת ההמתנה
          </a>

          <button
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? 'סגור תפריט' : 'פתח תפריט'}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-sage"
          >
            {menuOpen ? (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          id="mobile-menu"
          className="md:hidden bg-white/95 backdrop-blur-xl border-t border-gray-100 px-6 py-4 flex flex-col gap-4 shadow-lg"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-base font-semibold text-gray-700 hover:text-brand-green transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-sage rounded-sm"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#waitlist"
            onClick={() => setMenuOpen(false)}
            className="btn-primary justify-center text-sm"
          >
            הצטרפו לרשימת ההמתנה
          </a>
        </div>
      )}
    </nav>
  )
}
