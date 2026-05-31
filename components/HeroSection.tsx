'use client'

import { motion } from 'framer-motion'

const fadeUp = (delay = 0) => ({
  initial:    { opacity: 0, y: 30 },
  animate:    { opacity: 1, y: 0 },
  transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
})

const CARDS = [
  {
    icon: '👩‍💻',
    title: 'עבדו בשקט',
    desc:  'חלל מאובזר עם WiFi מהיר, חדרי ישיבות ואווירה מקצועית',
    delay: 0,
  },
  {
    icon: '🧸',
    title: 'ילדים מתפתחים',
    desc:  'פעילויות התפתחות עם מטפלות מוסמכות בסביבה צבעונית ועשירה',
    delay: 0.8,
  },
  {
    icon: '🤝',
    title: 'קהילה חמה',
    desc:  'הכירו הורים כמוכם, שתפו חוויות וצרו חברויות אמיתיות',
    delay: 1.6,
  },
]

export default function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-hero-gradient">
      {/* ── Animated blobs ─────────────────────────────────── */}
      <div
        className="absolute -top-24 -right-24 w-[500px] h-[500px] rounded-full opacity-40 animate-blob"
        style={{ background: 'radial-gradient(circle, #95D5B2 0%, transparent 70%)' }}
      />
      <div
        className="absolute top-48 -left-32 w-[380px] h-[380px] rounded-full opacity-35 animate-blob animation-delay-2000"
        style={{ background: 'radial-gradient(circle, #FDDCB5 0%, transparent 70%)' }}
      />
      <div
        className="absolute bottom-32 right-1/3 w-[320px] h-[320px] rounded-full opacity-25 animate-blob animation-delay-4000"
        style={{ background: 'radial-gradient(circle, #D8F3DC 0%, transparent 70%)' }}
      />

      {/* ── Content ────────────────────────────────────────── */}
      <div className="relative z-10 section-container pt-28 pb-16 flex flex-col items-center text-center">

        {/* Badge */}
        <motion.div {...fadeUp(0)}>
          <span className="badge mb-8">
            <span className="w-2 h-2 bg-brand-sage rounded-full animate-pulse-slow" />
            🇮🇱 &nbsp;בקרוב בישראל — Coming Soon
          </span>
        </motion.div>

        {/* Brand name */}
        <motion.h1
          {...fadeUp(0.1)}
          className="text-7xl sm:text-8xl lg:text-9xl font-black tracking-tight mb-3"
        >
          <span className="gradient-text">We Grow</span>
        </motion.h1>

        {/* Hebrew tagline */}
        <motion.p
          {...fadeUp(0.2)}
          className="text-2xl sm:text-3xl lg:text-4xl font-bold text-brand-green mb-5"
        >
          מקום שבו הורים עובדים וילדים צומחים
        </motion.p>

        {/* Supporting copy */}
        <motion.p
          {...fadeUp(0.3)}
          className="section-subtitle mb-10 max-w-xl"
        >
          חלל עבודה להורים, מרחב התפתחות לילדים וקהילה למשפחות צעירות –
          הכל תחת קורת גג אחת.
        </motion.p>

        {/* CTA cluster */}
        <motion.div {...fadeUp(0.4)} className="flex flex-col sm:flex-row gap-4 mb-14">
          <a href="#waitlist" className="btn-primary text-lg">
            הצטרפו לרשימת ההמתנה
            <svg className="w-5 h-5 rtl-flip" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4-4 4M21 12H3" />
            </svg>
          </a>
          <a href="#solution" className="btn-secondary text-lg">
            גלו עוד
          </a>
        </motion.div>

        {/* Pill chips */}
        <motion.div
          {...fadeUp(0.5)}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {['💻 חלל עבודה', '👶 מרחב התפתחות', '☕ קהילה', '🎓 הרצאות וסדנאות', '🍰 קפה ובייגלה'].map((item) => (
            <span
              key={item}
              className="glass rounded-full px-4 py-2 text-sm font-semibold text-gray-700 shadow-sm"
            >
              {item}
            </span>
          ))}
        </motion.div>

        {/* Floating feature cards */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-5 w-full max-w-3xl"
        >
          {CARDS.map((card) => (
            <motion.div
              key={card.title}
              animate={{ y: [0, -12, 0] }}
              transition={{
                duration: 5,
                delay: card.delay,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="glass rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-shadow text-right"
            >
              <span className="text-4xl mb-4 block">{card.icon}</span>
              <h3 className="font-bold text-gray-800 text-lg mb-2">{card.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{card.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* ── Wave divider ───────────────────────────────────── */}
      <div className="absolute bottom-0 inset-x-0 pointer-events-none">
        <svg viewBox="0 0 1440 90" preserveAspectRatio="none" className="w-full h-16 md:h-20 fill-white">
          <path d="M0,48 C360,96 1080,0 1440,48 L1440,90 L0,90 Z" />
        </svg>
      </div>
    </section>
  )
}
