'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const PILLARS = [
  {
    emoji:   '🌱',
    title:   'התפתחות לילד שלך',
    sub:     'מרחב עשיר ומוכל',
    color:   'from-brand-50 to-brand-100',
    border:  'border-brand-200',
    badge:   'bg-brand-green text-white',
    features: [
      'מטפלות מוסמכות ומנוסות',
      'פעילויות גיל-אדפטיביות',
      'משחקים חינוכיים ועשירים',
      'יחס אישי מלא',
      'דיווח בזמן אמת',
    ],
  },
  {
    emoji:   '🌸',
    title:   'המרחב שלך',
    sub:     'זמן אמיתי לעצמך',
    color:   'from-warm-peach/30 to-warm-amber/10',
    border:  'border-warm-amber/30',
    badge:   'bg-warm-amber text-white',
    features: [
      'מרחב שקט ומזמין',
      'אינטרנט מהיר ואמין',
      'חדרי שיחות אקוסטיים',
      'שתיה חמה כלולה',
      'סביבה שמזמינה ריכוז',
    ],
  },
  {
    emoji:   '🤝',
    title:   'קהילת אמהות',
    sub:     'חיבורים אמיתיים',
    color:   'from-purple-50 to-indigo-50',
    border:  'border-purple-200',
    badge:   'bg-purple-600 text-white',
    features: [
      'סדנאות והרצאות',
      'אירועי קהילה חודשיים',
      'חיבורים מקצועיים',
      'תמיכה הדדית',
      'נשים שמבינות אותך',
    ],
  },
]

export default function SolutionSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="solution" ref={ref} className="py-24 bg-brand-50">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="badge mb-4 inline-flex">🌱 &nbsp;מה שיצרנו בשבילך</span>
          <h2 className="section-title mb-4">לא רק לילדים. גם בשבילך.</h2>
          <p className="section-subtitle max-w-xl mx-auto">
            אנחנו מאמינות שאמהות לא צריכות להיעלם בתוך היומיום.
            <br />
            We Grow נוצר כדי לתת מקום גם להתפתחות של הילדים – וגם להתפתחות שלך.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PILLARS.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className={`rounded-3xl border-2 ${p.border} bg-gradient-to-br ${p.color} p-7 flex flex-col transition-all duration-300 hover:-translate-y-2 hover:shadow-card-hover`}
            >
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-4xl shadow-sm mb-5">
                {p.emoji}
              </div>
              <span className={`${p.badge} text-xs font-bold px-3 py-1 rounded-full self-start mb-3`}>
                {p.sub}
              </span>
              <h3 className="text-2xl font-black text-gray-800 mb-4">{p.title}</h3>
              <ul className="space-y-2.5 mt-auto">
                {p.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="w-5 h-5 rounded-full bg-white flex items-center justify-center flex-shrink-0 text-brand-green font-bold text-xs shadow-sm">
                      ✓
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
