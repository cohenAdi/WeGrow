'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const PAINS = [
  {
    icon: '😩',
    color: 'bg-warm-peach/40 border-warm-terracotta/20',
    iconBg: 'bg-warm-terracotta/15',
    title: 'קשה לעבוד מהבית עם פעוטות',
    desc: 'להתרכז כשהילד צועק, בוכה או פשוט רוצה את תשומת הלב שלכם — כמעט בלתי אפשרי.',
  },
  {
    icon: '☕',
    color: 'bg-warm-sand border-warm-amber/30',
    iconBg: 'bg-warm-amber/20',
    title: 'בתי קפה אינם מותאמים להורים',
    desc: 'רועשים, אין מקום לילד, לא נוח לפגישות — ובכלל זה פשוט לא מסתדר.',
  },
  {
    icon: '🏫',
    color: 'bg-brand-50 border-brand-sage/30',
    iconBg: 'bg-brand-sage/20',
    title: 'גן מלא הוא לא תמיד הפתרון',
    desc: 'שעות קבועות, ימים קבועים. מה קורה כשאתם צריכים גמישות אמיתית?',
  },
  {
    icon: '🫂',
    color: 'bg-brand-pale/60 border-brand-mint/40',
    iconBg: 'bg-brand-green/10',
    title: 'הורים רבים מחפשים גם קהילה',
    desc: 'לא רק מסגרת — אלא אנשים שמבינים אותם, שיש להם ילדים בגיל דומה, שאפשר לדבר איתם.',
  },
]

export default function ProblemSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="py-24 bg-white">
      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="badge mb-4 inline-flex">😮‍💨 &nbsp;אתם לא לבד</span>
          <h2 className="section-title mb-4">
            גם אתם מרגישים שאין פתרון שבאמת מתאים?
          </h2>
          <p className="section-subtitle">
            אלפי הורים בישראל מתמודדים עם אותה בעיה בדיוק — בחירה בין קריירה לבין להיות עם הילדים.
          </p>
        </motion.div>

        {/* Pain cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-4xl mx-auto">
          {PAINS.map((pain, i) => (
            <motion.div
              key={pain.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className={`rounded-2xl border-2 p-6 ${pain.color} transition-all duration-300 hover:-translate-y-1 hover:shadow-md`}
            >
              <div className={`w-12 h-12 ${pain.iconBg} rounded-xl flex items-center justify-center text-2xl mb-4`}>
                {pain.icon}
              </div>
              <h3 className="font-bold text-gray-800 text-lg mb-2">{pain.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{pain.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Transition */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="text-xl font-bold text-brand-green">
            אז מה אם הייתה דרך אחרת? ✨
          </p>
        </motion.div>
      </div>
    </section>
  )
}
