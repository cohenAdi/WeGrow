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
    title: 'הילדים נכנסים למרחב ההתפתחות',
    desc:  'הילדים מקבלים קבלת פנים חמה, נכנסים לסביבה עשירה ומגרה — ולמטפלות המוסמכות שמחכות להם.',
  },
  {
    num:   '03',
    icon:  '🧘',
    title: 'אתם עובדים בראש שקט',
    desc:  'שבו ליד שולחן, פתחו מחשב ועבדו. עדכון בזמן אמת אם הילד צריך אתכם — ובינתיים, פגישות, ריכוז ופרודוקטיביות.',
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
            שלושה צעדים ואתם בפנים — הורים מרוצים, ילדים שמחים.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="hidden md:block absolute top-12 right-[16.666%] left-[16.666%] h-0.5 bg-gradient-to-l from-brand-sage via-brand-mint to-brand-sage opacity-40" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
            {STEPS.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className="flex flex-col items-center text-center"
              >
                {/* Number bubble */}
                <div className="relative mb-6">
                  <div className="w-24 h-24 rounded-full bg-brand-50 border-4 border-brand-pale flex items-center justify-center shadow-brand-sm">
                    <span className="text-4xl">{step.icon}</span>
                  </div>
                  <span className="absolute -top-2 -right-2 w-8 h-8 bg-brand-green text-white text-xs font-black rounded-full flex items-center justify-center shadow-brand-sm">
                    {step.num}
                  </span>
                </div>

                <h3 className="text-xl font-black text-gray-800 mb-3">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed max-w-xs">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Result banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-16 bg-gradient-to-r from-brand-50 via-white to-brand-50 rounded-2xl border border-brand-200 p-8 text-center max-w-2xl mx-auto"
        >
          <span className="text-3xl mb-3 block">🎉</span>
          <p className="text-xl font-bold text-brand-forest">
            תסיימו יום עבודה שלם — וילדיכם חזרו הביתה שמחים ומלאי סיפורים
          </p>
        </motion.div>
      </div>
    </section>
  )
}
