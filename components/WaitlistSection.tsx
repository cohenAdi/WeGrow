'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { useRef } from 'react'

const baseSchema = z.object({
  full_name:       z.string().min(2, 'שם חייב להכיל לפחות 2 תווים'),
  email:           z.string().email('אנא הזינו כתובת אימייל תקינה'),
  phone:           z.string().min(9, 'אנא הזינו מספר טלפון תקין'),
  city:            z.string().min(1, 'אנא בחרו עיר'),
  other_city:      z.string().optional(),
  child_age:       z.string().min(1, 'אנא בחרו גיל ילד'),
  time_slots:      z.array(z.string()).optional(),
  most_important:  z.array(z.string()).min(1, 'אנא בחרו לפחות אחד'),
})

const schema = baseSchema.refine(
  (d) => d.city !== 'אחר' || (d.other_city && d.other_city.trim().length >= 2),
  { message: 'אנא ציינו את העיר', path: ['other_city'] }
)

type FormData = z.infer<typeof baseSchema>

const CITIES  = ['רחובות', 'נס ציונה', 'יבנה', 'גדרה', 'מזכרת בתיה', 'אחר']
const AGES    = ['בהריון', '0-1', '1-2', '2-3']
const HOURS   = ['בוקר (8:00–12:00)', 'אחה"צ (12:00–16:00)', 'יום מלא', 'גמיש']
const MOST_IMPORTANT = ['חלל עבודה', 'מרחב התפתחות לילדים', 'קהילה', 'הרצאות', 'חוגים']

function ErrorMsg({ msg }: { msg?: string }) {
  if (!msg) return null
  return <p className="text-red-500 text-xs mt-1 font-medium">{msg}</p>
}

export default function WaitlistSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [success, setSuccess] = useState(false)
  const [serverError, setServerError] = useState('')
  const [loading, setLoading] = useState(false)

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { most_important: [], time_slots: [] },
  })

  const selectedCity      = watch('city')
  const selectedImportant = watch('most_important') ?? []
  const selectedHours     = watch('time_slots') ?? []

  function toggleImportant(item: string) {
    const next = selectedImportant.includes(item)
      ? selectedImportant.filter((x) => x !== item)
      : [...selectedImportant, item]
    setValue('most_important', next, { shouldValidate: true })
  }

  function toggleHour(item: string) {
    const next = selectedHours.includes(item)
      ? selectedHours.filter((x) => x !== item)
      : [...selectedHours, item]
    setValue('time_slots', next)
  }

  async function onSubmit(data: FormData) {
    setLoading(true)
    setServerError('')
    try {
      const payload = {
        ...data,
        city: data.city === 'אחר' && data.other_city ? data.other_city : data.city,
      }
      const res = await fetch('/api/waitlist', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify(payload),
      })
      const json = await res.json()
      if (!res.ok) {
        setServerError(json.error ?? 'אירעה שגיאה, אנא נסו שנית')
      } else {
        setSuccess(true)
        setTimeout(() => {
          document.getElementById('coming-soon')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }, 600)
      }
    } catch {
      setServerError('שגיאה בשליחה — אנא בדקו חיבור לאינטרנט')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="waitlist" ref={ref} className="py-24 bg-white">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="badge mb-4 inline-flex">✉️ &nbsp;רשימת המתנה</span>
          <h2 className="section-title mb-4">השאירו פרטים ונעדכן אתכם ראשונים</h2>
          <p className="section-subtitle">
            בלי ספאם. רק עדכון אחד — כשנפתח.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="max-w-2xl mx-auto"
        >
          <AnimatePresence mode="wait">
            {success ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-warm-cream border-2 border-warm-peach rounded-3xl p-12 text-center"
              >
                <span className="text-6xl mb-5 block">🎉</span>
                <h3 className="text-2xl font-black text-brand-forest mb-3">
                  הצטרפתם לרשימת ההמתנה!
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  תודה רבה! נעדכן אתכם ראשונים ברגע שנפתח בסביבתכם.
                  <br />
                  <span className="font-semibold text-warm-terracotta">הישארו איתנו 🌱</span>
                </p>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                onSubmit={handleSubmit(onSubmit)}
                className="bg-white rounded-3xl border-2 border-warm-peach/60 shadow-card p-8 md:p-10 space-y-7"
              >
                {/* Row: name + phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="form-label">שם מלא *</label>
                    <input
                      {...register('full_name')}
                      placeholder="ישראל ישראלי"
                      className="form-input"
                    />
                    <ErrorMsg msg={errors.full_name?.message} />
                  </div>
                  <div>
                    <label className="form-label">טלפון *</label>
                    <input
                      {...register('phone')}
                      type="tel"
                      placeholder="05X-XXXXXXX"
                      className="form-input"
                      dir="ltr"
                    />
                    <ErrorMsg msg={errors.phone?.message} />
                  </div>
                </div>

                {/* Row: email + city */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="form-label">אימייל *</label>
                    <input
                      {...register('email')}
                      type="email"
                      placeholder="israel@example.com"
                      className="form-input"
                      dir="ltr"
                    />
                    <ErrorMsg msg={errors.email?.message} />
                  </div>
                  <div>
                    <label className="form-label">עיר מגורים *</label>
                    <select {...register('city')} className="form-input">
                      <option value="">בחרו עיר...</option>
                      {CITIES.map((c) => (
                        <option key={c} value={c}>{c}</option>
                      ))}
                    </select>
                    <ErrorMsg msg={errors.city?.message} />
                  </div>
                </div>

                {/* Other city — shown only when "אחר" is selected */}
                <AnimatePresence>
                  {selectedCity === 'אחר' && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <label className="form-label">באיזו עיר? *</label>
                      <input
                        {...register('other_city')}
                        placeholder="שם העיר"
                        className="form-input"
                      />
                      <ErrorMsg msg={errors.other_city?.message} />
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Child age */}
                <div>
                  <label className="form-label">גיל הילד *</label>
                  <div className="flex flex-wrap gap-3 mt-1">
                    {AGES.map((age) => (
                      <label key={age} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          value={age}
                          {...register('child_age')}
                          className="sr-only peer"
                        />
                        <span className="px-4 py-2 rounded-full border-2 border-gray-200 text-sm font-semibold text-gray-600 cursor-pointer peer-checked:border-warm-terracotta peer-checked:bg-warm-peach/40 peer-checked:text-warm-terracotta transition-all select-none">
                          {age}
                        </span>
                      </label>
                    ))}
                  </div>
                  <ErrorMsg msg={errors.child_age?.message} />
                </div>

                {/* Preferred hours */}
                <div>
                  <label className="form-label">אילו שעות מתאימות לך? (אפשר לבחור כמה)</label>
                  <div className="flex flex-wrap gap-3 mt-1">
                    {HOURS.map((hour) => {
                      const active = selectedHours.includes(hour)
                      return (
                        <button
                          key={hour}
                          type="button"
                          onClick={() => toggleHour(hour)}
                          className={`px-4 py-2 rounded-full border-2 text-sm font-semibold transition-all select-none ${
                            active
                              ? 'border-warm-terracotta bg-warm-peach/40 text-warm-terracotta'
                              : 'border-gray-200 text-gray-600 hover:border-warm-peach'
                          }`}
                        >
                          {active ? '✓ ' : ''}{hour}
                        </button>
                      )
                    })}
                  </div>
                </div>

                {/* Most important */}
                <div>
                  <label className="form-label">מה הכי מעניין אותך? (אפשר לבחור כמה) *</label>
                  <div className="flex flex-wrap gap-3 mt-1">
                    {MOST_IMPORTANT.map((item) => {
                      const active = selectedImportant.includes(item)
                      return (
                        <button
                          key={item}
                          type="button"
                          onClick={() => toggleImportant(item)}
                          className={`px-4 py-2 rounded-full border-2 text-sm font-semibold transition-all select-none ${
                            active
                              ? 'border-brand-green bg-brand-50 text-brand-green'
                              : 'border-gray-200 text-gray-600 hover:border-brand-sage'
                          }`}
                        >
                          {active ? '✓ ' : ''}{item}
                        </button>
                      )
                    })}
                  </div>
                  <ErrorMsg msg={errors.most_important?.message} />
                </div>

                {/* Server error */}
                {serverError && (
                  <p className="text-red-500 text-sm font-medium text-center bg-red-50 border border-red-200 rounded-xl px-4 py-3">
                    {serverError}
                  </p>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full justify-center text-base font-black py-4 px-8 rounded-full
                    bg-warm-terracotta hover:bg-brand-forest text-white
                    shadow-warm-md hover:shadow-warm-md
                    transition-all duration-300 hover:-translate-y-0.5
                    disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0
                    flex items-center gap-2"
                >
                  {loading ? (
                    <>
                      <svg className="w-5 h-5 animate-spin" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                      </svg>
                      שולחים...
                    </>
                  ) : (
                    'אני רוצה להיות בין הראשונים 🌱'
                  )}
                </button>

                <p className="text-xs text-gray-400 text-center">
                  אנחנו שומרים על פרטיותכם. לא נשתף את הפרטים שלכם עם שום גורם.
                </p>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
