import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'
import { z } from 'zod'

const schema = z.object({
  full_name:          z.string().min(2),
  email:              z.string().email(),
  phone:              z.string().optional(),
  city:               z.string().min(1),
  child_age:          z.string().min(1),
  usage_expectation:  z.string().optional(),
  most_important:     z.array(z.string()).min(1),
  free_text:          z.string().optional(),
  days_per_week:      z.string().optional(),
  time_slots:         z.array(z.string()).optional(),
  join_whatsapp:      z.boolean().optional(),
  privacy_consent:    z.boolean().optional(),
})

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const parsed = schema.safeParse(body)

    if (!parsed.success) {
      return NextResponse.json(
        { error: 'נתונים לא תקינים', details: parsed.error.flatten() },
        { status: 400 }
      )
    }

    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!
    )

    const { error } = await supabase.from('waitlist').insert([parsed.data])

    if (error) {
      if (error.code === '23505') {
        return NextResponse.json(
          { error: 'כתובת האימייל כבר רשומה' },
          { status: 409 }
        )
      }
      console.error('Supabase error:', error)
      return NextResponse.json({ error: 'שגיאה בשמירת הנתונים' }, { status: 500 })
    }

    return NextResponse.json({ success: true }, { status: 201 })
  } catch (err) {
    console.error('Waitlist API error:', err)
    return NextResponse.json({ error: 'שגיאה פנימית' }, { status: 500 })
  }
}
