'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function ComingSoonSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const fade = (delay = 0) => ({
    initial: { opacity: 0, y: 20 },
    animate: inView ? { opacity: 1, y: 0 } : {},
    transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
  })

  return (
    <section ref={ref} className="py-24 bg-warm-cream relative overflow-hidden">
      {/* Background blobs */}
      <div
        className="absolute top-0 left-1/4 w-96 h-96 rounded-full opacity-20 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #C2D0A0 0%, transparent 70%)' }}
      />
      <div
        className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full opacity-15 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #F2DDD0 0%, transparent 70%)' }}
      />

      <div className="section-container relative z-10">
        <div className="max-w-[620px] mx-auto text-center">

          {/* Title */}
          <motion.div {...fade(0)}>
            <h2 className="text-3xl sm:text-4xl font-black text-brand-forest mb-6 leading-tight">
              🌱 We Grow נמצא בשלבי הקמה
            </h2>
          </motion.div>

          {/* Body */}
          <motion.div {...fade(0.1)} className="space-y-4 text-gray-600 text-lg leading-relaxed mb-10">
            <p>
              אנחנו בונים את We Grow מתוך צורך אמיתי שחווינו כהורים,
              ומעצבים אותו יחד עם הקהילה.
            </p>
            <p>
              כל הרשמה, רעיון או שיתוף עוזרים לנו ליצור מקום שבו
              הורים עובדים וילדים צומחים.
            </p>
          </motion.div>

          {/* Timeline box */}
          <motion.div
            {...fade(0.2)}
            className="bg-white border border-warm-peach rounded-2xl px-8 py-7 mb-4 shadow-sm text-right"
            dir="rtl"
          >
            <div className="space-y-5">
              <div className="flex items-start gap-3">
                <span className="text-xl mt-0.5">📍</span>
                <div>
                  <p className="font-bold text-gray-800 text-base mb-0.5">אזור הפעילות הראשון</p>
                  <p className="text-brand-green font-semibold">רחובות | נס ציונה | יבנה</p>
                </div>
              </div>
              <div className="border-t border-warm-peach/50" />
              <div className="flex items-start gap-3">
                <span className="text-xl mt-0.5">📅</span>
                <div>
                  <p className="font-bold text-gray-800 text-base mb-0.5">פתיחה משוערת</p>
                  <p className="text-brand-green font-semibold">תחילת 2027</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Small note */}
          <motion.p {...fade(0.25)} className="text-gray-400 text-sm mb-12 leading-relaxed">
            התאריך עשוי להשתנות בהתאם לקצב ההקמה, למציאת המיקום המתאים
            ולבניית הקהילה הראשונה.
          </motion.p>

          {/* CTA */}
          <motion.div {...fade(0.35)}>
            <p className="text-xl font-black text-brand-forest mb-6">
              רוצים להיות הראשונים לשמוע כשנתקדם?
            </p>

            <a href="#waitlist" className="btn-primary text-base inline-flex">
              אני רוצה להצטרף לרשימת ההמתנה 🌱
            </a>

            <p className="text-sm text-gray-400 mt-5 leading-relaxed">
              ✨ הנרשמים יקבלו עדכונים בלעדיים, הזמנות למפגשי היכרות
              וגישה מוקדמת להרשמה.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
