'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function FounderSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="about" ref={ref} className="py-24 bg-warm-cream relative overflow-hidden">
      {/* Background plant blobs */}
      <div
        className="absolute -top-16 -left-16 w-72 h-72 rounded-full opacity-20 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #C2D0A0 0%, transparent 70%)' }}
      />
      <div
        className="absolute -bottom-16 -right-16 w-80 h-80 rounded-full opacity-15 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #F2DDD0 0%, transparent 70%)' }}
      />

      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <span className="badge mb-2 inline-flex">💚 &nbsp;הסיפור שלנו</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="max-w-[700px] mx-auto"
        >
          <div className="bg-white rounded-3xl shadow-card border border-warm-peach p-8 md:p-12">

            {/* Photo placeholder + name */}
            <div className="flex flex-col items-center mb-10">
              <div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-warm-peach via-warm-cream to-brand-pale flex items-center justify-center shadow-warm-sm border-4 border-warm-peach/40 mb-3 select-none">
                <span className="text-6xl">🤱</span>
              </div>
              <p className="text-xs text-gray-400 font-semibold tracking-wide uppercase">
                עדי ואֵלה • תמונה בקרוב
              </p>
            </div>

            {/* Story */}
            <div className="space-y-5 text-gray-700 text-lg leading-relaxed text-right" dir="rtl">
              <p className="text-2xl font-black text-brand-forest">
                היי, אני עדי.
              </p>

              <p>
                אני אמא לאלה, בת שנה וחצי.
              </p>

              <p>
                כמו הרבה אמהות, גם אני ניסיתי למצוא את האיזון בין הרצון להיות נוכחת עבורה
                לבין הרצון להמשיך לעבוד, ליצור ולהתפתח.
              </p>

              <p>
                עבדתי מהבית עם פעוטה לצידי, ניסיתי מטפלת פרטית, חיפשתי מסגרות גמישות
                וביליתי לא מעט שעות עם לפטופ וצעצועים בתיק בניסיון למצוא פתרון שיעבוד בשביל שתינו.
              </p>

              <p className="font-semibold text-brand-forest text-xl">
                בכל פעם הרגשתי שמשהו חסר.
              </p>

              <p>
                או שהייתי רחוקה מדי ממנה, או שלא באמת הצלחתי לעבוד.
              </p>

              <p>
                הבנתי שאני כנראה לא היחידה שמרגישה ככה.
                <br />
                שיש עוד הורים שמחפשים דרך אחרת.
              </p>

              <p>
                מקום שמאפשר להיות קרובים לילדים שלנו, בלי לוותר על עצמנו בדרך.
                <br />
                מקום שבו גם ההורים וגם הילדים יכולים לצמוח.
              </p>

              <p className="font-bold text-brand-forest text-xl">
                וככה נולד We Grow.
              </p>
            </div>

            {/* Signature */}
            <div className="mt-10 pt-6 border-t border-warm-peach/50 flex items-center justify-center gap-2">
              <span className="text-2xl">💚</span>
              <p className="font-black text-brand-forest text-lg">עדי ואֵלה</p>
            </div>
          </div>

          {/* Inclusive note */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center text-gray-400 text-sm mt-6 px-2 leading-relaxed"
          >
            למרות שחלק מהטקסט באתר כתוב בלשון נקבה, We Grow מיועד כמובן גם לאבות, לאמהות
            ולכל הורה שמחפש דרך חדשה לשלב בין משפחה, עבודה וקהילה.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
