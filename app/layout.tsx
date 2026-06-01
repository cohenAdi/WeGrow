import type { Metadata } from 'next'
import { Rubik } from 'next/font/google'
import './globals.css'

const rubik = Rubik({
  subsets: ['latin', 'hebrew'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-rubik',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'We Grow | מקום שבו הורים עובדים וילדים צומחים',
  description:
    'חלל עבודה להורים, מרחב התפתחות לילדים וקהילה למשפחות צעירות – הכל תחת קורת גג אחת. בקרוב באזור רחובות, נס ציונה, יבנה.',
  keywords: [
    'coworking',
    'parents',
    'childcare',
    'development',
    'community',
    'Rehovot',
    'רחובות',
    'הורים',
    'חלל עבודה',
    'מרחב התפתחות',
    'We Grow',
  ],
  openGraph: {
    title: 'We Grow | מקום שבו הורים עובדים וילדים צומחים',
    description:
      'חלל עבודה להורים, מרחב התפתחות לילדים וקהילה למשפחות צעירות.',
    url: 'https://wegrow.co.il',
    siteName: 'We Grow',
    locale: 'he_IL',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'We Grow | מקום שבו הורים עובדים וילדים צומחים',
    description:
      'חלל עבודה להורים, מרחב התפתחות לילדים וקהילה למשפחות צעירות.',
  },
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://wegrow.co.il' },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="he" dir="rtl" className={rubik.variable}>
      <body className={`${rubik.className} antialiased`}>{children}</body>
    </html>
  )
}
