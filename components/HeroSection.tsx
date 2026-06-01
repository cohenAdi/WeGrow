'use client'

import { motion } from 'framer-motion'

const fadeUp = (delay = 0) => ({
  initial:    { opacity: 0, y: 24 },
  animate:    { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
})

export default function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-hero-gradient">
      <div
        className="absolute -top-24 -right-24 w-[480px] h-[480px] rounded-full opacity-30 animate-blob"
        style={{ background: 'radial-gradient(circle, #C2D0A0 0%, transparent 70%)' }}
      />
      <div
        className="absolute top-1/2 -left-32 w-[360px] h-[360px] rounded-full opacity-20 animate-blob animation-delay-2000"
        style={{ background: 'radial-gradient(circle, #F2DDD0 0%, transparent 70%)' }}
      />
      <div
        className="absolute bottom-40 right-1/4 w-[280px] h-[280px] rounded-full opacity-15 animate-blob animation-delay-4000"
        style={{ background: 'radial-gradient(circle, #E5EDD5 0%, transparent 70%)' }}
      />

      <div className="relative z-10 section-container pt-24 pb-24 flex flex-col items-center text-center">

        <motion.div {...fadeUp(0)}>
          <span className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-warm-terracotta/40 text-warm-terracotta rounded-full px-5 py-2 text-sm font-bold mb-8 shadow-sm">
            📍 יפתח באזור רחובות-נס ציונה
          </span>
        </motion.div>

        <motion.h1
          {...fadeUp(0.1)}
          className="text-4xl sm:text-5xl lg:text-6xl font-black text-brand-forest leading-tight mb-6 max-w-2xl"
        >
          את לא אמורה לבחור
          <br />
          <span className="text-warm-terracotta">בין הקריירה שלך</span>
          <br />
          לבין להיות עם הילד שלך.
        </motion.h1>

        <motion.p
          {...fadeUp(0.2)}
          className="text-xl sm:text-2xl font-medium text-brand-green mb-10 max-w-lg leading-relaxed"
        >
          יצרנו מקום שבו אפשר להיות קרובה לילד שלך,
          <br />
          ועדיין לפנות מקום גם לעצמך.
        </motion.p>

        <motion.div
          {...fadeUp(0.3)}
          className="flex flex-col sm:flex-row gap-3 mb-14 w-full sm:w-auto"
        >
          <a href="#waitlist" className="btn-primary text-base sm:text-lg justify-center">
            אני רוצה לשמוע כשנפתח 🌱
          </a>
          <a href="#how" className="btn-secondary text-base sm:text-lg justify-center">
            גלי איך זה עובד
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-2 gap-4 w-full max-w-sm sm:max-w-md mb-6"
        >
          <div className="bg-white/85 backdrop-blur-sm rounded-2xl p-5 sm:p-6 text-center shadow-card border border-brand-pale">
            <span className="text-4xl sm:text-5xl mb-3 block">🌸</span>
            <p className="font-black text-brand-forest text-sm sm:text-base">מרחב לעצמך</p>
            <p className="text-xs sm:text-sm text-gray-500 mt-1">כי גם את צריכה לגדול</p>
          </div>
          <div className="bg-white/85 backdrop-blur-sm rounded-2xl p-5 sm:p-6 text-center shadow-card border border-warm-peach">
            <span className="text-4xl sm:text-5xl mb-3 block">🧸</span>
            <p className="font-black text-warm-terracotta text-sm sm:text-base">הילד לידך</p>
            <p className="text-xs sm:text-sm text-gray-500 mt-1">תמיד בהישג יד</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <span className="inline-flex items-center gap-2 bg-brand-forest/10 text-brand-forest rounded-full px-5 py-2.5 text-sm font-bold">
            ❤️&nbsp; שניכם יחד — תחת קורת גג אחת
          </span>
        </motion.div>
      </div>

      <div className="absolute bottom-0 inset-x-0 pointer-events-none">
        <svg viewBox="0 0 1440 90" preserveAspectRatio="none" className="w-full h-16 md:h-20 fill-white">
          <path d="M0,48 C360,96 1080,0 1440,48 L1440,90 L0,90 Z" />
        </svg>
      </div>
    </section>
  )
}
