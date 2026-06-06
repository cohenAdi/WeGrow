import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'הצהרת נגישות | We Grow',
}

export default function AccessibilityPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-warm-cream py-16 px-4" dir="rtl">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-3xl shadow-card border border-warm-peach p-8 md:p-12">

            <div className="flex items-center gap-3 mb-8">
              <span className="text-3xl" aria-hidden="true">♿</span>
              <h1 className="text-2xl sm:text-3xl font-black text-brand-forest leading-tight">
                הצהרת נגישות – We Grow
              </h1>
            </div>

            <div className="space-y-6 text-gray-700 leading-relaxed text-base">

              <p>
                We Grow רואה חשיבות רבה בהנגשת האתר לכלל המשתמשים,
                לרבות אנשים עם מוגבלויות.
              </p>

              <p>
                אנו פועלים כדי שהאתר יהיה נגיש, ברור ונוח לשימוש,
                בהתאם לעקרונות הנגישות המקובלים.
              </p>

              <div>
                <p className="font-semibold text-gray-800 mb-3">
                  באתר בוצעו התאמות נגישות בסיסיות, לרבות:
                </p>
                <ul className="space-y-2 pr-2">
                  {[
                    'מבנה כותרות תקין',
                    'תמיכה בניווט באמצעות מקלדת',
                    'טקסט חלופי לתמונות',
                    'ניגודיות צבעים נוחה לקריאה',
                    'טפסים עם תוויות ברורות',
                    'התאמה לשימוש במובייל',
                    'תמיכה בכיוון כתיבה בעברית מימין לשמאל',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="text-brand-green font-bold mt-1 flex-shrink-0" aria-hidden="true">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <p>
                ייתכן שחלקים מסוימים באתר עדיין נמצאים בתהליך שיפור והנגשה.
              </p>

              <p>
                אם נתקלתם בקושי בגלישה באתר או יש לכם הצעה לשיפור הנגישות,
                נשמח שתפנו אלינו:
              </p>

              <p>
                <a
                  href="mailto:info@wegrow.co.il"
                  className="text-brand-green font-semibold hover:text-brand-forest hover:underline transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green focus-visible:rounded-sm"
                >
                  info@wegrow.co.il
                </a>
              </p>

              <p>נשתדל לטפל בפנייה בהקדם האפשרי.</p>

              <div className="border-t border-warm-peach pt-6">
                <p className="text-gray-500 text-sm">
                  <span className="font-semibold">תאריך עדכון אחרון:</span>
                  <br />
                  יוני 2026
                </p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-warm-peach flex flex-wrap gap-4">
              <a
                href="/"
                className="inline-flex items-center gap-2 text-brand-green font-semibold hover:text-brand-forest transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green focus-visible:rounded-sm"
              >
                ← חזרה לאתר
              </a>
              <a
                href="/privacy"
                className="inline-flex items-center gap-2 text-gray-400 hover:text-brand-green transition-colors text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green focus-visible:rounded-sm"
              >
                מדיניות פרטיות
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
