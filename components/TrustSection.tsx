'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const PERSONAS = [
  {
    icon:  '👶',
    title: 'הורים בחופשת לידה',
    desc:  'רוצים לשמור על קשר עם העולם המקצועי, בלי לוותר על הילד.',
    color: 'bg-warm-peach/40 border-warm-terracotta/25',
    iconBg: 'bg-warm-terracotta/15',
  },
  {
    icon:  '💻',
    title: 'עובדים מהבית',
    desc:  'צריכים שקט ופרודוקטיביות אמיתית, ולדעת שהילד קרוב ומטופל.',
    color: 'bg-brand-50 border-brand-sage/30',
    iconBg: 'bg-brand-green/10',
  },
  {
    icon:  '👨‍👩‍👧',
    title: 'כל הורה',
    desc:  'שמחפש דרך חדשה לשלב בין משפחה, עבודה וקהילה.',
    color: 'bg-warm-sand border-warm-amber/30',
    iconBg: 'bg-warm-amber/20',
  },
  {
    icon:  '🌱',
    title: 'הורים שמחפשים קהילה',
    desc:  'רוצים להכיר הורים כמוהם — לשתף, להתחבר ולא להרגיש לבד.',
    color: 'bg-brand-pale/50 border-brand-mint/40',
    iconBg: 'bg-brand-sage/20',
  },
]

export default function TrustSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="py-24 bg-warm-cream">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="badge mb-4 inline-flex">🙋 &nbsp;זה בשבילכם</span>
          <h2 className="section-title mb-4">למי We Grow מתאים?</h2>
          <p className="section-subtitle">
            אם אחד מהתיאורים הבאים מדבר אליכם — We Grow נבנה בדיוק בשבילכם.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
          {PERSONAS.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className={`rounded-2xl border-2 p-6 ${p.color} transition-all duration-300 hover:-translate-y-1 hover:shadow-md text-center`}
            >
              <div className={`w-14 h-14 ${p.iconBg} rounded-2xl flex items-center justify-center text-3xl mx-auto mb-4`}>
                {p.icon}
              </div>
              <h3 className="font-black text-gray-800 text-base mb-2">{p.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-14"
        >
          <a href="#waitlist" className="btn-primary">
            זה אני — אני רוצה לשמוע כשנפתח 🌱
          </a>
        </motion.div>
      </div>
    </section>
  )
}
