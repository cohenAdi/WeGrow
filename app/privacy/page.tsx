import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'מדיניות פרטיות | We Grow',
}

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-warm-cream py-16 px-4" dir="rtl">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-3xl shadow-card border border-warm-peach p-8 md:p-12">

            <div className="flex items-center gap-3 mb-8">
              <span className="text-3xl">🌱</span>
              <h1 className="text-2xl sm:text-3xl font-black text-brand-forest leading-tight">
                מדיניות פרטיות – We Grow
              </h1>
            </div>

            <div className="space-y-6 text-gray-700 leading-relaxed text-base">

              <p>We Grow מכבדת את פרטיות המשתמשים באתר.</p>

              <p>
                המידע הנאסף באמצעות טפסי ההרשמה באתר, לרבות שם, כתובת דוא"ל, מספר טלפון
                ופרטים נוספים הנמסרים על ידי המשתמש, ישמש לצורך:
              </p>

              <ul className="space-y-2 pr-2">
                {[
                  'יצירת קשר עם מתעניינים',
                  'עדכון לגבי התקדמות המיזם',
                  'הזמנות לאירועים, סקרים ופעילויות',
                  'שיפור השירות והמוצר',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-brand-green font-bold mt-1 flex-shrink-0">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <p>המידע לא יימכר ולא יועבר לצדדים שלישיים, למעט אם יידרש על פי דין.</p>

              <p>
                ניתן לבקש בכל עת להסיר את הפרטים ממאגר המידע באמצעות פנייה לכתובת:
              </p>

              <p>
                <a
                  href="mailto:info@wegrow.co.il"
                  className="text-brand-green font-semibold hover:text-brand-forest hover:underline transition-colors"
                >
                  info@wegrow.co.il
                </a>
              </p>

              <p className="text-gray-500 text-sm border-t border-warm-peach pt-6">
                השימוש באתר מהווה הסכמה למדיניות פרטיות זו.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-warm-peach">
              <a
                href="/"
                className="inline-flex items-center gap-2 text-brand-green font-semibold hover:text-brand-forest transition-colors"
              >
                ← חזרה לאתר
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
