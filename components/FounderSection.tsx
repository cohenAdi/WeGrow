'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function FounderSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="about" ref={ref} className="py-24 bg-warm-cream">
      <div className="section-container">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <span className="badge mb-4 inline-flex">💚 &nbsp;הסיפור שלנו</span>
            <h2 className="section-title mb-4">למה הקמנו את We Grow?</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="bg-white rounded-3xl shadow-card border border-warm-peach p-8 md:p-12"
          >
            <div className="text-7xl text-warm-peach font-serif leading-none mb-4 select-none" aria-hidden>
              ❝
            </div>

            <div className="space-y-5 text-gray-700 text-lg leading-relaxed mb-8 text-right">
              <p>
                כשהפכתי לאמא גיליתי שהעולם מציע לי שתי אפשרויות:
                <br />
                להיות עם הילדה שלי,
                <br />
                או לעבוד.
              </p>
              <p>אבל לא מצאתי מקום שאפשר בו גם וגם.</p>
              <p className="font-semibold text-brand-forest">
                We Grow נולד מתוך הצורך האישי הזה.
              </p>
            </div>

            <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-warm-peach to-warm-terracotta flex items-center justify-center text-2xl shadow-warm-sm flex-shrink-0">
                🌱
              </div>
              <div>
                <p className="font-black text-gray-800">מייסדת We Grow</p>
                <p className="text-sm text-gray-500">אמא, יזמית ומאמינה שאפשר אחרת</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-3 gap-4 mt-8"
          >
            {[
              { icon: '❤️', val: 'זהות', sub: 'לא רק אמא' },
              { icon: '🌱', val: 'צמיחה', sub: 'שלך ושל ילדך' },
              { icon: '🤝', val: 'קהילה', sub: 'של אמהות אמיתיות' },
            ].map((v) => (
              <div
                key={v.val}
                className="bg-white rounded-2xl border border-warm-peach p-5 text-center shadow-sm"
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
