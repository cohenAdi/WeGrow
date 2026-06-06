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
  days_per_week:   z.string().optional(),
  time_slots:      z.array(z.string()).optional(),
  most_important:  z.array(z.string()).min(1, 'אנא בחרו לפחות אחד'),
  join_whatsapp:   z.boolean().optional(),
  privacy_consent: z.boolean().refine((v) => v === true, { message: 'יש לאשר את מדיניות הפרטיות כדי להמשיך' }),
})

const schema = baseSchema.refine(
  (d) => d.city !== 'אחר' || (d.other_city && d.other_city.trim().length >= 2),
  { message: 'אנא ציינו את העיר', path: ['other_city'] }
)

type FormData = z.infer<typeof baseSchema>

const CITIES         = ['רחובות', 'נס ציונה', 'יבנה', 'גדרה', 'מזכרת בתיה', 'אחר']
const AGES           = ['בהריון', '0-1', '1-2', '2-3']
const DAYS_PER_WEEK  = ['1-2 ימים', '3-4 ימים', '5 ימים', 'גמיש']
const HOURS          = ['בוקר (8:00–12:00)', 'אחה"צ (12:00–16:00)', 'יום מלא', 'גמיש']
const MOST_IMPORTANT = ['חלל עבודה', 'מרחב התפתחות לילדים', 'קהילה', 'הרצאות', 'חוגים']

function ErrorMsg({ id, msg }: { id?: string; msg?: string }) {
  if (!msg) return null
  return (
    <p id={id} role="alert" aria-live="assertive" className="text-red-500 text-xs mt-1 font-medium">
      {msg}
    </p>
  )
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
          <span className="badge mb-4 inline-flex" aria-hidden="true">✉️ &nbsp;רשימת המתנה</span>
          <h2 className="section-title mb-4">השאירי פרטים ונעדכן אותך ראשונה</h2>
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
                role="status"
                aria-live="polite"
                className="bg-warm-cream border-2 border-warm-peach rounded-3xl p-12 text-center"
              >
                <span className="text-6xl mb-5 block" aria-hidden="true">🎉</span>
                <h3 className="text-2xl font-black text-brand-forest mb-3">
                  הצטרפת לרשימת ההמתנה!
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  תודה רבה! נעדכן אותך ראשונה ברגע שנפתח בסביבתך.
                  <br />
                  <span className="font-semibold text-warm-terracotta">הישארי איתנו 🌱</span>
                </p>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                onSubmit={handleSubmit(onSubmit)}
                noValidate
                aria-label="טופס הצטרפות לרשימת המתנה"
                className="bg-white rounded-3xl border-2 border-warm-peach/60 shadow-card p-8 md:p-10 space-y-7"
              >
                {/* Row: name + phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="full_name" className="form-label">שם מלא *</label>
                    <input
                      id="full_name"
                      {...register('full_name')}
                      placeholder="ישראל ישראלי"
                      autoComplete="name"
                      aria-required="true"
                      aria-describedby={errors.full_name ? 'err-full_name' : undefined}
                      aria-invalid={!!errors.full_name}
                      className="form-input"
                    />
                    <ErrorMsg id="err-full_name" msg={errors.full_name?.message} />
                  </div>
                  <div>
                    <label htmlFor="phone" className="form-label">טלפון *</label>
                    <input
                      id="phone"
                      {...register('phone')}
                      type="tel"
                      placeholder="05X-XXXXXXX"
                      autoComplete="tel"
                      aria-required="true"
                      aria-describedby={errors.phone ? 'err-phone' : undefined}
                      aria-invalid={!!errors.phone}
                      className="form-input"
                      dir="ltr"
                    />
                    <ErrorMsg id="err-phone" msg={errors.phone?.message} />
                  </div>
                </div>

                {/* Row: email + city */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="email" className="form-label">אימייל *</label>
                    <input
                      id="email"
                      {...register('email')}
                      type="email"
                      placeholder="israel@example.com"
                      autoComplete="email"
                      aria-required="true"
                      aria-describedby={errors.email ? 'err-email' : undefined}
                      aria-invalid={!!errors.email}
                      className="form-input"
                      dir="ltr"
                    />
                    <ErrorMsg id="err-email" msg={errors.email?.message} />
                  </div>
                  <div>
                    <label htmlFor="city" className="form-label">עיר מגורים *</label>
                    <select
                      id="city"
                      {...register('city')}
                      aria-required="true"
                      aria-describedby={errors.city ? 'err-city' : undefined}
                      aria-invalid={!!errors.city}
                      className="form-input"
                    >
                      <option value="">בחרו עיר...</option>
                      {CITIES.map((c) => (
                        <option key={c} value={c}>{c}</option>
                      ))}
                    </select>
                    <ErrorMsg id="err-city" msg={errors.city?.message} />
                  </div>
                </div>

                {/* Other city */}
                <AnimatePresence>
                  {selectedCity === 'אחר' && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <label htmlFor="other_city" className="form-label">באיזו עיר? *</label>
                      <input
                        id="other_city"
                        {...register('other_city')}
                        placeholder="שם העיר"
                        aria-required="true"
                        aria-describedby={errors.other_city ? 'err-other_city' : undefined}
                        aria-invalid={!!errors.other_city}
                        className="form-input"
                      />
                      <ErrorMsg id="err-other_city" msg={errors.other_city?.message} />
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Child age */}
                <fieldset>
                  <legend className="form-label">גיל הילד *</legend>
                  <div
                    className="flex flex-wrap gap-3 mt-1"
                    aria-describedby={errors.child_age ? 'err-child_age' : undefined}
                  >
                    {AGES.map((age) => (
                      <label key={age} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          value={age}
                          {...register('child_age')}
                          className="sr-only peer"
                        />
                        <span className="px-4 py-2 rounded-full border-2 border-gray-200 text-sm font-semibold text-gray-600 cursor-pointer peer-checked:border-warm-terracotta peer-checked:bg-warm-peach/40 peer-checked:text-warm-terracotta peer-focus-visible:ring-2 peer-focus-visible:ring-warm-terracotta peer-focus-visible:ring-offset-1 transition-all select-none">
                          {age}
                        </span>
                      </label>
                    ))}
                  </div>
                  <ErrorMsg id="err-child_age" msg={errors.child_age?.message} />
                </fieldset>

                {/* Days per week */}
                <fieldset>
                  <legend className="form-label">כמה ימים בשבוע תרצו להגיע?</legend>
                  <div className="flex flex-wrap gap-3 mt-1">
                    {DAYS_PER_WEEK.map((day) => (
                      <label key={day} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          value={day}
                          {...register('days_per_week')}
                          className="sr-only peer"
                        />
                        <span className="px-4 py-2 rounded-full border-2 border-gray-200 text-sm font-semibold text-gray-600 cursor-pointer peer-checked:border-warm-terracotta peer-checked:bg-warm-peach/40 peer-checked:text-warm-terracotta peer-focus-visible:ring-2 peer-focus-visible:ring-warm-terracotta peer-focus-visible:ring-offset-1 transition-all select-none">
                          {day}
                        </span>
                      </label>
                    ))}
                  </div>
                </fieldset>

                {/* Preferred hours */}
                <div role="group" aria-labelledby="hours-legend">
                  <p id="hours-legend" className="form-label">אילו שעות מתאימות לך? (אפשר לבחור כמה)</p>
                  <div className="flex flex-wrap gap-3 mt-1">
                    {HOURS.map((hour) => {
                      const active = selectedHours.includes(hour)
                      return (
                        <button
                          key={hour}
                          type="button"
                          aria-pressed={active}
                          onClick={() => toggleHour(hour)}
                          className={`px-4 py-2 rounded-full border-2 text-sm font-semibold transition-all select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-warm-terracotta focus-visible:ring-offset-1 ${
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
                <div
                  role="group"
                  aria-labelledby="important-legend"
                  aria-describedby={errors.most_important ? 'err-most_important' : undefined}
                >
                  <p id="important-legend" className="form-label">מה הכי מעניין אותך? (אפשר לבחור כמה) *</p>
                  <div className="flex flex-wrap gap-3 mt-1">
                    {MOST_IMPORTANT.map((item) => {
                      const active = selectedImportant.includes(item)
                      return (
                        <button
                          key={item}
                          type="button"
                          aria-pressed={active}
                          onClick={() => toggleImportant(item)}
                          className={`px-4 py-2 rounded-full border-2 text-sm font-semibold transition-all select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green focus-visible:ring-offset-1 ${
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
                  <ErrorMsg id="err-most_important" msg={errors.most_important?.message} />
                </div>

                {/* WhatsApp opt-in */}
                <div className="flex items-start gap-3">
                  <div className="relative flex-shrink-0 mt-0.5">
                    <input
                      id="join_whatsapp"
                      type="checkbox"
                      {...register('join_whatsapp')}
                      className="sr-only peer"
                    />
                    <div
                      className="w-6 h-6 rounded-md border-2 border-gray-300 bg-white peer-checked:bg-[#25D366] peer-checked:border-[#25D366] peer-focus-visible:ring-2 peer-focus-visible:ring-[#25D366] peer-focus-visible:ring-offset-1 transition-all flex items-center justify-center cursor-pointer"
                      onClick={() => document.getElementById('join_whatsapp')?.click()}
                      aria-hidden="true"
                    >
                      <svg className="w-3.5 h-3.5 text-white" viewBox="0 0 12 10" fill="none" aria-hidden="true">
                        <path d="M1 5l3.5 3.5L11 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
                  <label htmlFor="join_whatsapp" className="text-sm text-gray-600 leading-relaxed cursor-pointer" dir="rtl">
                    <span className="font-semibold text-gray-700">💬 אשמח להצטרף לקבוצת הווטסאפ של הקהילה</span>
                    <br />
                    <span className="text-gray-400">עדכונים שוטפים, הזמנות למפגשים ותחושת שייכות מהיום הראשון.</span>
                  </label>
                </div>

                {/* Privacy consent */}
                <div>
                  <div className="flex items-start gap-3">
                    <div className="relative flex-shrink-0 mt-0.5">
                      <input
                        id="privacy_consent"
                        type="checkbox"
                        {...register('privacy_consent')}
                        aria-required="true"
                        aria-describedby={errors.privacy_consent ? 'err-privacy_consent' : undefined}
                        aria-invalid={!!errors.privacy_consent}
                        className="sr-only peer"
                      />
                      <div
                        className="w-6 h-6 rounded-md border-2 border-gray-300 bg-white peer-checked:bg-warm-terracotta peer-checked:border-warm-terracotta peer-focus-visible:ring-2 peer-focus-visible:ring-warm-terracotta peer-focus-visible:ring-offset-1 transition-all flex items-center justify-center cursor-pointer"
                        onClick={() => document.getElementById('privacy_consent')?.click()}
                        aria-hidden="true"
                      >
                        <svg className="w-3.5 h-3.5 text-white" viewBox="0 0 12 10" fill="none" aria-hidden="true">
                          <path d="M1 5l3.5 3.5L11 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    </div>
                    <label htmlFor="privacy_consent" className="text-sm text-gray-600 leading-relaxed cursor-pointer" dir="rtl">
                      אני מאשר/ת את{' '}
                      <a
                        href="/privacy"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-brand-green font-semibold hover:text-brand-forest underline underline-offset-2 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green focus-visible:rounded-sm"
                        onClick={(e) => e.stopPropagation()}
                      >
                        מדיניות הפרטיות
                      </a>
                      {' '}ומסכים/ה לקבל עדכונים בנוגע ל-We Grow
                    </label>
                  </div>
                  <ErrorMsg id="err-privacy_consent" msg={errors.privacy_consent?.message} />
                </div>

                {/* Server error */}
                {serverError && (
                  <p role="alert" className="text-red-500 text-sm font-medium text-center bg-red-50 border border-red-200 rounded-xl px-4 py-3">
                    {serverError}
                  </p>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={loading}
                  aria-busy={loading}
                  className="w-full justify-center text-base font-black py-4 px-8 rounded-full
                    bg-warm-terracotta hover:bg-brand-forest text-white
                    shadow-warm-md hover:shadow-warm-md
                    transition-all duration-300 hover:-translate-y-0.5
                    disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0
                    focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-warm-terracotta/50
                    flex items-center gap-2"
                >
                  {loading ? (
                    <>
                      <svg className="w-5 h-5 animate-spin" viewBox="0 0 24 24" fill="none" aria-hidden="true">
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
                  הפרטים ישמשו ליצירת קשר ולעדכונים בנוגע ל-We Grow בלבד.
                </p>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
