'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function FounderSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="about" ref={ref} className="py-24 bg-brand-50">
      <div className="section-container">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <span className="badge mb-4 inline-flex">💚 &nbsp;הסיפור שלנו</span>
            <h2 className="section-title mb-4">למה אנחנו בונים את We Grow?</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="bg-white rounded-3xl shadow-card border border-gray-100 p-8 md:p-12"
          >
            {/* Quote mark */}
            <div className="text-7xl text-brand-pale font-serif leading-none mb-4 select-none" aria-hidden>
              ❝
            </div>

            <div className="space-y-5 text-gray-700 text-lg leading-relaxed mb-8">
              <p>
                כהורים לילדים צעירים, גילינו שהבחירה היא בדרך כלל בין עבודה לבין להיות עם הילדים.
                מצד אחד, עבודה מהבית עם תינוק זה מתיש ולא יעיל. מצד שני, להשאיר אותם בגן כל היום
                מרגיש כמו פספוס.
              </p>
              <p>
                חיפשנו מקום שבו אפשר לשבת ולעבוד בשקט, לדעת שהילד קרוב ומטופל באהבה — ולהיות חלק
                מקהילה של הורים שמבינים אותנו.
              </p>
              <p className="font-semibold text-brand-forest">
                לא מצאנו כזה מקום. אז החלטנו לבנות אותו.
              </p>
              <p>
                We Grow נולד כדי לאפשר להורים לעבוד, להתפתח ולהיות קרובים לילדים שלהם —
                בלי להתפשר.
              </p>
            </div>

            {/* Founder signature */}
            <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
              {/* Avatar placeholder */}
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-brand-sage to-brand-green flex items-center justify-center text-2xl shadow-brand-sm flex-shrink-0">
                🌱
              </div>
              <div>
                <p className="font-black text-gray-800">מייסדי We Grow</p>
                <p className="text-sm text-gray-500">הורים, יזמים, ומאמינים שאפשר אחרת</p>
              </div>
            </div>
          </motion.div>

          {/* Values */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-3 gap-4 mt-8"
          >
            {[
              { icon: '❤️', val: 'משפחה', sub: 'בראש ובראשונה' },
              { icon: '🌱', val: 'צמיחה', sub: 'לילדים ולהורים' },
              { icon: '🤝', val: 'קהילה', sub: 'אמיתית וחמה' },
            ].map((v) => (
              <div
                key={v.val}
                className="bg-white rounded-2xl border border-gray-100 p-5 text-center shadow-sm"
              >
                <span className="text-3xl mb-2 block">{v.icon}</span>
                <p className="font-black text-gray-800 text-sm">{v.val}</p>
                <p className="text-xs text-gray-400 mt-0.5">{v.sub}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
