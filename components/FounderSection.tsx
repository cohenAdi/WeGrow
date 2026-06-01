'use client'

import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function FounderSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="about" ref={ref} className="py-24 bg-warm-cream relative overflow-hidden">
      {/* Background decorations */}
      <div
        className="absolute -top-20 -left-20 w-80 h-80 rounded-full opacity-25 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #C2D0A0 0%, transparent 70%)' }}
      />
      <div
        className="absolute -bottom-20 -right-20 w-96 h-96 rounded-full opacity-15 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #F2DDD0 0%, transparent 70%)' }}
      />

      <div className="section-container">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Photo — left on desktop, top on mobile */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-[32px] shadow-[0_24px_64px_rgba(0,0,0,0.13)]">
                <Image
                  src="/adi-and-ela.jpeg"
                  alt="עדי ואלה, מייסדת We Grow"
                  width={600}
                  height={760}
                  className="w-full object-cover"
                  style={{ objectPosition: '50% 12%', maxHeight: '620px' }}
                  priority
                />
                {/* Subtle warm gradient at bottom */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      'linear-gradient(to top, rgba(196,132,90,0.08) 0%, transparent 40%)',
                  }}
                />
              </div>
            </motion.div>

            {/* Story — right on desktop */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.75, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col justify-center"
              dir="rtl"
            >
              <span className="badge mb-6 self-start">💚 &nbsp;הסיפור שלנו</span>

              <h2 className="text-3xl sm:text-4xl font-black text-brand-forest mb-8 leading-tight">
                היי, אני עדי.
              </h2>

              <div className="space-y-4 text-gray-700 leading-relaxed" style={{ fontSize: '17px' }}>
                <p>אני אמא לאלה.</p>

                <p>
                  כמו הרבה הורים, גם אני ניסיתי למצוא את האיזון בין הרצון להיות נוכחת עבורה
                  לבין הרצון להמשיך לעבוד, ליצור ולהתפתח.
                </p>

                <p>
                  עבדתי מהבית עם פעוטה לצידי, ניסיתי מטפלת פרטית, חיפשתי מסגרות גמישות
                  וביליתי לא מעט שעות עם לפטופ וצעצועים בתיק בניסיון למצוא פתרון שיעבוד
                  בשביל שתינו.
                </p>

                <p className="font-semibold text-brand-forest text-[18px]">
                  בכל פעם הרגשתי שמשהו חסר.
                </p>

                <p>או שהייתי רחוקה מדי ממנה, או שלא באמת הצלחתי לעבוד.</p>

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

                <p className="font-bold text-brand-forest text-[18px]">
                  וככה נולד We Grow.
                </p>
              </div>

              {/* Signature */}
              <div className="mt-8 flex items-center gap-3">
                <span className="text-2xl">💚</span>
                <p className="font-black text-brand-forest text-xl">עדי ואלה</p>
              </div>

            </motion.div>

          </div>
        </div>
      </div>
    </section>
  )
}
