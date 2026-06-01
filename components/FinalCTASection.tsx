'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function FinalCTASection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="py-24 bg-cta-gradient relative overflow-hidden">
      {/* Decorative blobs */}
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-20"
        style={{ background: 'radial-gradient(circle, #C2D0A0 0%, transparent 70%)' }}
      />
      <div
        className="absolute bottom-0 left-0 w-80 h-80 rounded-full opacity-15"
        style={{ background: 'radial-gradient(circle, #F2DDD0 0%, transparent 70%)' }}
      />

      <div className="section-container relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65 }}
          className="max-w-2xl mx-auto"
        >
          <span className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 text-sm font-semibold text-white/90 mb-6">
            ⏰ &nbsp;מקומות מוגבלים בפתיחה
          </span>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
            מוכנים לגדול איתנו?
          </h2>

          <p className="text-lg text-white/80 leading-relaxed mb-10">
            השאירו פרטים והיו הראשונים לקבל עדכון על פתיחת We Grow —
            עם <span className="text-white font-semibold">מחיר השקה מיוחד</span> ועדיפות בהגשת מועמדות.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#waitlist"
              className="inline-flex items-center justify-center gap-2 bg-white text-warm-terracotta hover:bg-warm-cream font-black text-lg px-10 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
            >
              אני רוצה לשמוע כשנפתח 🌱
            </a>
          </div>

          {/* Social proof */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-8 mt-14"
          >
            {[
              { num: '200+', label: 'הורים ברשימת ההמתנה' },
              { num: '3',    label: 'ערים מתוכננות' },
              { num: '0',    label: 'ספאם — מובטח' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl font-black text-white">{stat.num}</p>
                <p className="text-sm text-white/70 mt-1">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
