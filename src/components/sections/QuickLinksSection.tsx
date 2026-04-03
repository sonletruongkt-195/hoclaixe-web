import Link from 'next/link';
import styles from './QuickLinksSection.module.css';

const quickLinks = [
  {
    href: '/ly-thuyet',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
        <line x1="9" y1="9" x2="15" y2="9"/><line x1="9" y1="13" x2="15" y2="13"/>
      </svg>
    ),
    title: 'Ôn tập 600 câu',
    desc: 'Bộ đề lý thuyết mới nhất 2024',
    color: 'primary',
    badge: '600 câu',
  },
  {
    href: '/mo-phong',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
        <polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/>
      </svg>
    ),
    title: '120 Tình huống',
    desc: 'Phần mềm mô phỏng thực tế',
    color: 'secondary',
    badge: 'Mới',
  },
  {
    href: '/sa-hinh',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
        <polygon points="3 11 22 2 13 21 11 13 3 11"/>
      </svg>
    ),
    title: 'Sa hình 3D',
    desc: 'Mẹo thi 11 bài thi sa hình B2',
    color: 'tertiary',
    badge: '11 bài',
  },
  {
    href: '/cong-cu',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
        <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
      </svg>
    ),
    title: 'Phạt nguội',
    desc: 'Tra cứu vi phạm giao thông',
    color: 'warning',
    badge: 'Miễn phí',
  },
];

export default function QuickLinksSection() {
  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        <div className={styles.label}>
          <span className="section-label">Truy cập nhanh</span>
        </div>
        <div className={styles.grid}>
          {quickLinks.map((link) => (
            <Link key={link.href} href={link.href} className={`card ${styles.card} ${styles[`card-${link.color}`]}`}>
              <div className={styles.iconWrap}>
                {link.icon}
              </div>
              <div className={styles.cardContent}>
                <div className={styles.cardHeader}>
                  <h3 className={styles.cardTitle}>{link.title}</h3>
                  <span className={`badge ${styles[`badge-${link.color}`]}`}>{link.badge}</span>
                </div>
                <p className={styles.cardDesc}>{link.desc}</p>
              </div>
              <div className={styles.arrow}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
