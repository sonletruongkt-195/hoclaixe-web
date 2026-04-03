import { login, signup } from './actions'
import styles from './page.module.css'
import Link from 'next/link'

export default function LoginPage({
  searchParams,
}: {
  searchParams: { message: string }
}) {
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
            </div>

            {searchParams?.message && (
              <div className={styles.errorBox}>
                <svg className={styles.errorIcon} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="8" x2="12" y2="12"></line>
                  <line x1="12" y1="16" x2="12.01" y2="16"></line>
                </svg>
                <span>{searchParams.message}</span>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  )
}
