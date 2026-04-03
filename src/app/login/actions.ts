'use server'

import { redirect } from 'next/navigation'
import { headers } from 'next/headers'
import { createClient } from '@/utils/supabase/server'

export async function signInWithGoogle() {
  const supabase = await createClient()
  const headerStore = await headers()
  const origin = headerStore.get('origin') || process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'

  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {
      redirectTo: `${origin}/auth/callback`,
    },
  })

  if (error) {
    console.error("Supabase OAuth Error:", error.message)
    redirect(`/login?message=${encodeURIComponent('Không thể kết nối với dịch vụ Google: ' + error.message)}`)
  }

  if (data.url) {
    redirect(data.url)
  }
}
