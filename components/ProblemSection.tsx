'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function ProblemSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="py-24 bg-white">
      <div className="section-container">
        <div className="max-w-2xl mx-auto text-center">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="badge mb-4 inline-flex">💛 &nbsp;את לא לבד בזה</span>
            <h2 className="section-title mb-10">
              מכירה את התחושה?
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="bg-warm-cream rounded-3xl p-8 md:p-12 text-right border border-warm-peach shadow-sm"
          >
            <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
              <p>את מנסה לעבוד בזמן שהפעוט לידך.</p>
              <p>הזום מתחיל בדיוק כשהוא צריך אותך.</p>
              <p>בתי קפה כבר לא באמת עובדים.</p>
              <p>
                והימים עוברים בין כביסות, משימות
                <br />
                וניסיון למצוא רגע לעצמך.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-warm-peach/60 space-y-4">
              <p className="font-bold text-brand-forest text-lg">
                אנחנו מכירות את זה, כי גם אנחנו שם.
              </p>
              <p className="text-gray-400 text-sm leading-relaxed">
                למרות שחלק מהטקסט באתר כתוב בלשון נקבה, We Grow מיועד כמובן גם לאבות, לאמהות ולכל הורה שמחפש דרך חדשה לשלב בין משפחה, עבודה וקהילה.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
