import Link from 'next/link';
import styles from './Footer.module.css';

const products = [
  { href: '/ly-thuyet', label: 'Ôn tập lý thuyết 600 câu' },
  { href: '/mo-phong', label: 'Mô phỏng 120 tình huống' },
  { href: '/sa-hinh', label: 'Thử thách sa hình' },
  { href: '/cong-cu', label: 'Tra cứu luật giao thông' },
  { href: '/checklist', label: 'Checklist đường trường' },
];

const support = [
  { href: '#', label: 'Hướng dẫn sử dụng' },
  { href: '#', label: 'Điều khoản dịch vụ' },
  { href: '#', label: 'Chính sách bảo mật' },
  { href: '#', label: 'Liên hệ chúng tôi' },
];

const features = [
  { href: '/truong-dao-tao', label: 'Tìm trường đào tạo' },
  { href: '/cong-dong', label: 'Study Buddy' },
  { href: '/dashboard', label: 'Dashboard tiến độ' },
  { href: '/cong-cu', label: 'Công cụ tính thuế' },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className="container">
          <div className={styles.grid}>
            {/* Brand */}
            <div className={styles.brand}>
              <div className={styles.logo}>
                <div className={styles.logoIcon}>
                  <svg width="32" height="32" viewBox="0 0 28 28" fill="none">
                    <circle cx="14" cy="14" r="13" stroke="currentColor" strokeWidth="2"/>
                    <path d="M8 18 L14 8 L20 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="14" cy="18" r="2" fill="currentColor"/>
                  </svg>
                </div>
                <div>
                  <div className={styles.logoMain}>Học Lái Xe Thông Minh</div>
                  <div className={styles.logoSub}>The Precision Path</div>
                </div>
              </div>
              <p className={styles.brand_desc}>
                Nền tảng học lái xe thông minh giúp bạn làm chủ vô lăng và nắm chắc tấm bằng lái trong tay.
              </p>
              <div className={styles.social}>
                <a href="#" className={styles.socialLink} aria-label="Facebook">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                  </svg>
                </a>
                <a href="#" className={styles.socialLink} aria-label="YouTube">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.96-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
                    <polygon fill="white" points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/>
                  </svg>
                </a>
                <a href="#" className={styles.socialLink} aria-label="TikTok">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.36 6.36 0 0 0-.79-.05 6.33 6.33 0 0 0-6.33 6.33 6.33 6.33 0 0 0 6.33 6.33 6.33 6.33 0 0 0 6.33-6.33V8.77a8.22 8.22 0 0 0 4.8 1.52V6.84a4.84 4.84 0 0 1-1.03-.15z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Products */}
            <div className={styles.linkGroup}>
              <h4 className={styles.linkGroupTitle}>Sản phẩm</h4>
              <ul>
                {products.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className={styles.footerLink}>{item.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Features */}
            <div className={styles.linkGroup}>
              <h4 className={styles.linkGroupTitle}>Tính năng</h4>
              <ul>
                {features.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className={styles.footerLink}>{item.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div className={styles.linkGroup}>
              <h4 className={styles.linkGroupTitle}>Hỗ trợ</h4>
              <ul>
                {support.map((item) => (
                  <li key={item.label}>
                    <Link href={item.href} className={styles.footerLink}>{item.label}</Link>
                  </li>
                ))}
              </ul>
              {/* App badges */}
              <div className={styles.apps}>
                <a href="#" className={styles.appBadge}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                  App Store
                </a>
                <a href="#" className={styles.appBadge}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3 20.5v-17c0-.83.94-1.3 1.6-.8l15 8.5c.6.34.6 1.26 0 1.6l-15 8.5c-.66.5-1.6.03-1.6-.8z"/>
                  </svg>
                  Google Play
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className={styles.bottom}>
        <div className="container">
          <div className={styles.bottomInner}>
            <p className={styles.copyright}>
              © 2024 Học Lái Xe Thông Minh. The Precision Path.
            </p>
            <div className={styles.bottomLinks}>
              <a href="#" className={styles.bottomLink}>Điều khoản</a>
              <a href="#" className={styles.bottomLink}>Bảo mật</a>
              <a href="#" className={styles.bottomLink}>Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
