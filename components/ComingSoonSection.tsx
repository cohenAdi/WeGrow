'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const CITIES = [
  { name: 'רחובות',         pop: 1, status: 'hot' },
  { name: 'נס ציונה',       pop: 2, status: 'hot' },
  { name: 'יבנה',           pop: 3, status: 'warm' },
  { name: 'גדרה',           pop: 4, status: 'warm' },
  { name: 'מזכרת בתיה',     pop: 5, status: 'coming' },
]

const statusConfig = {
  hot:    { bg: 'bg-red-50   border-red-200',   dot: 'bg-red-500',    label: 'ביקוש גבוה' },
  warm:   { bg: 'bg-amber-50 border-amber-200', dot: 'bg-amber-500',  label: 'עניין רב' },
  coming: { bg: 'bg-gray-50  border-gray-200',  dot: 'bg-gray-400',   label: 'בדיקה' },
}

export default function ComingSoonSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="py-24 bg-gradient-to-br from-warm-sand via-warm-cream to-warm-peach/30">
      <div className="section-container text-center">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="badge mb-5 inline-flex bg-warm-amber/20 border-warm-amber/40 text-warm-amber font-bold">
            📍 &nbsp;המיקום הבא שלנו
          </span>

          <h2 className="section-title mb-4">
            בקרוב באזור
            <span className="text-brand-green"> רחובות </span>|
            <span className="text-brand-green"> נס ציונה </span>|
            <span className="text-brand-green"> יבנה</span>
          </h2>
          <p className="section-subtitle mb-12">
            אנחנו בודקים את הביקוש לקראת הפתיחה הראשונה.
            הצטרפו לרשימת ההמתנה ותהיו הראשונים לדעת.
          </p>
        </motion.div>

        {/* City cards */}
        <div className="flex flex-wrap justify-center gap-4 mb-14">
          {CITIES.map((city, i) => {
            const cfg = statusConfig[city.status as keyof typeof statusConfig]
            return (
              <motion.div
                key={city.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.45, delay: i * 0.1 }}
                className={`${cfg.bg} border-2 rounded-2xl px-6 py-4 flex items-center gap-3 min-w-[160px] shadow-sm`}
              >
                <span className={`w-3 h-3 ${cfg.dot} rounded-full animate-pulse-slow flex-shrink-0`} />
                <div className="text-right">
                  <p className="font-bold text-gray-800 text-base">{city.name}</p>
                  <p className="text-xs text-gray-500 mt-0.5">{cfg.label}</p>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Demand meter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-white rounded-2xl shadow-card max-w-md mx-auto p-6 mb-10"
        >
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-semibold text-gray-500">מד עניין — רחובות</span>
            <span className="text-sm font-black text-brand-green">73%</span>
          </div>
          <div className="h-3 bg-brand-pale rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={inView ? { width: '73%' } : {}}
              transition={{ duration: 1.2, delay: 0.7, ease: 'easeOut' }}
              className="h-full bg-gradient-to-l from-brand-sage to-brand-green rounded-full"
            />
          </div>
          <p className="text-xs text-gray-400 mt-3 text-center">
            מבוסס על תגובות מהסקר הראשוני שלנו
          </p>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <a href="#waitlist" className="btn-primary text-base">
            אני רוצה להיות ראשון לשמוע
          </a>
        </motion.div>
      </div>
    </section>
  )
}
