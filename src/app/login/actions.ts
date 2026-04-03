'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { headers } from 'next/headers'
import { createClient } from '@/utils/supabase/server'

export async function login(formData: FormData) {
  const supabase = await createClient()

  const email = formData.get('email') as string
  const password = formData.get('password') as string

  if (!email || !password) {
    redirect('/login?message=Vui lòng nhập email và mật khẩu')
  }

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  })

  if (error) {
    redirect('/login?message=Email hoặc mật khẩu không chính xác')
  }

  revalidatePath('/', 'layout')
  redirect('/')
}

export async function signup(formData: FormData) {
  const supabase = await createClient()

  const email = formData.get('email') as string
  const password = formData.get('password') as string

  if (!email || !password) {
    redirect('/login?message=Vui lòng nhập email và mật khẩu')
  }

  const { error } = await supabase.auth.signUp({
    email,
    password,
  })

  if (error) {
    redirect('/login?message=Đã có lỗi xảy ra khi đăng ký')
  }

  revalidatePath('/', 'layout')
  redirect('/login?message=Hãy kiểm tra hộp thư email của bạn để xác nhận')
}

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
