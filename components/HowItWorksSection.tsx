'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const STEPS = [
  {
    num:   '01',
    icon:  '🚗',
    title: 'מגיעים ל-We Grow',
    desc:  'מגיעים עם הילדים בבוקר — ממוקם נגיש, חניה נוחה, ועם כוס קפה ביד.',
  },
  {
    num:   '02',
    icon:  '🎠',
    title: 'הילדים מצטרפים למרחב ההתפתחות',
    desc:  'הילדים מקבלים קבלת פנים חמה ונכנסים לסביבה עשירה עם מטפלות מוסמכות שמחכות להם.',
  },
  {
    num:   '03',
    icon:  '🧘',
    title: 'אתם עובדים בחלל העבודה',
    desc:  'שבו ליד שולחן, פתחו מחשב ועבדו. עדכון בזמן אמת אם הילד צריך אתכם — ובינתיים, ריכוז ופרודוקטיביות.',
  },
  {
    num:   '04',
    icon:  '🌿',
    title: 'נפגשים שוב, מתחברים לקהילה',
    desc:  'בסוף היום — הורים ילדים נפגשים מחדש. מתחברים לקהילה, משתפים ונהנים מהיום.',
  },
]

export default function HowItWorksSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="how" ref={ref} className="py-24 bg-white">
      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="badge mb-4 inline-flex">⚡ &nbsp;פשוט ומהיר</span>
          <h2 className="section-title mb-4">איך זה עובד?</h2>
          <p className="section-subtitle">
            ארבעה צעדים ואתם בפנים — הורים מרוצים, ילדים שמחים.
          </p>
        </motion.div>

        {/* Steps — 2x2 grid on mobile, single row on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {STEPS.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="flex flex-col items-center text-center"
            >
              {/* Number bubble */}
              <div className="relative mb-6">
                <div className="w-20 h-20 rounded-full bg-warm-cream border-4 border-warm-peach flex items-center justify-center shadow-warm-sm">
                  <span className="text-3xl">{step.icon}</span>
                </div>
                <span className="absolute -top-2 -right-2 w-7 h-7 bg-warm-terracotta text-white text-xs font-black rounded-full flex items-center justify-center shadow-warm-sm">
                  {step.num}
                </span>
              </div>

              <h3 className="text-lg font-black text-gray-800 mb-2 leading-snug">{step.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>

              {/* Connector arrow — only between steps on large screens */}
              {i < STEPS.length - 1 && (
                <div className="hidden lg:block absolute" style={{ display: 'none' }} />
              )}
            </motion.div>
          ))}
        </div>

        {/* Result banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-16 bg-gradient-to-r from-warm-cream via-white to-warm-cream rounded-2xl border border-warm-peach p-8 text-center max-w-2xl mx-auto"
        >
          <span className="text-3xl mb-3 block">🎉</span>
          <p className="text-xl font-bold text-brand-forest">
            עובדים בראש שקט, בזמן שהילדים שלכם חוקרים, משחקים ומתפתחים.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
