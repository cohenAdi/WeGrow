'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const PAINS = [
  {
    icon: '😩',
    color: 'bg-red-50 border-red-100',
    iconBg: 'bg-red-100',
    title: 'עבודה מהבית עם ילדים',
    desc: 'להתרכז כשהילד צועק, בוכה או רק רוצה את תשומת הלב שלכם — כמעט בלתי אפשרי.',
  },
  {
    icon: '☕',
    color: 'bg-orange-50 border-orange-100',
    iconBg: 'bg-orange-100',
    title: 'בתי קפה לא מתאימים',
    desc: 'בתי קפה רועשים, אין מקום לילד, לא נוח לפגישות — ובכלל זה פשוט לא מסתדר.',
  },
  {
    icon: '🏫',
    color: 'bg-yellow-50 border-yellow-100',
    iconBg: 'bg-yellow-100',
    title: 'גנים לא גמישים',
    desc: 'שעות קבועות, ימים קבועים. מה קורה כשאתם צריכים לעבוד מוקדם, מאוחר, או ביומיים בלבד?',
  },
  {
    icon: '🫂',
    color: 'bg-purple-50 border-purple-100',
    iconBg: 'bg-purple-100',
    title: 'ניתוק מקהילה',
    desc: 'הורים רבים מרגישים לבד. מחפשים אנשים שמבינים אותם, שיש להם ילדים בגיל דומה, שאפשר לדבר איתם.',
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
          <h2 className="section-title mb-4">מכירים את ההרגשה?</h2>
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

        {/* Transition line */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={inView ? { opacity: 1, scaleX: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
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
