import { login, signup, signInWithGoogle } from './actions'
import styles from './page.module.css'
import Link from 'next/link'

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ message: string }>
}) {
  const resolvedParams = await searchParams

  return (
    <div className={styles.page}>
      <div className={styles.bgBlob1} />
      <div className={styles.bgBlob2} />

      <div className={styles.cardContainer}>
        <div className={styles.loginCard}>
          <div className={styles.header}>
            <div className={styles.brand}>
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                <circle cx="14" cy="14" r="13" stroke="currentColor" strokeWidth="2"/>
                <path d="M8 18 L14 8 L20 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="14" cy="18" r="2" fill="currentColor"/>
              </svg>
            </div>
            <h1 className={styles.title}>Đăng nhập</h1>
            <p className={styles.desc}>
              Hệ thống quản lý học lái xe thông minh. Hãy truy cập để theo dõi tiến độ của bạn.
            </p>
          </div>

          <form>
            <div className={styles.formGroup}>
              <div className={styles.label}>
                <label htmlFor="email">Địa chỉ Email</label>
              </div>
              <input
                id="email"
                name="email"
                className={styles.input}
                placeholder="you@example.com"
                type="email"
                required
                autoComplete="email"
              />
            </div>

            <div className={styles.formGroup}>
              <div className={styles.label}>
                <label htmlFor="password">Mật khẩu</label>
                <Link href="#" className={styles.forgotLink}>Quên mật khẩu?</Link>
              </div>
              <input
                id="password"
                type="password"
                name="password"
                className={styles.input}
                placeholder="••••••••"
                required
                autoComplete="current-password"
              />
            </div>

            <div className={styles.buttonGroup}>
              <button
                formAction={login}
                className="btn btn-primary"
                style={{ width: '100%', justifyContent: 'center' }}
              >
                Đăng nhập
              </button>
              
              <div className={styles.divider}>
                <span className={styles.dividerText}>Hoặc</span>
              </div>

              <button
                formAction={signup}
                className="btn btn-ghost"
                style={{ width: '100%', justifyContent: 'center' }}
              >
                Tạo tài khoản mới
              </button>
              
              <div className={styles.divider}>
                <span className={styles.dividerText}>Hoặc kết nối</span>
              </div>

              <button
                formAction={signInWithGoogle}
                className={styles.oauthButton}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                Tiếp tục với Google
              </button>
            </div>

            {resolvedParams?.message && (
              <div className={styles.errorBox}>
                <svg className={styles.errorIcon} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="8" x2="12" y2="12"></line>
                  <line x1="12" y1="16" x2="12.01" y2="16"></line>
                </svg>
                <span>{resolvedParams.message}</span>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  )
}
