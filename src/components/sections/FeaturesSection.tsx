import Link from 'next/link';
import styles from './FeaturesSection.module.css';

const features = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
        <line x1="9" y1="9" x2="15" y2="9"/>
        <line x1="9" y1="13" x2="15" y2="13"/>
      </svg>
    ),
    color: 'blue',
    title: 'Lý thuyết 600 câu',
    desc: 'Học theo bộ đề, theo chương, hoặc tập trung vào câu điểm liệt với hệ thống "Kho đề yếu" AI thông minh.',
    items: ['Phân loại dễ/khó/điểm liệt', 'Nút giải thích tức thì', 'So sánh mẹo cộng đồng'],
    href: '/ly-thuyet',
    cta: 'Ôn tập ngay',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
        <polygon points="23 7 16 12 23 17 23 7"/>
        <rect x="1" y="5" width="15" height="14" rx="2" ry="2"/>
      </svg>
    ),
    color: 'orange',
    title: 'Mô phỏng 120 tình huống',
    desc: 'Video chất lượng cao với thanh tiến trình căn thời điểm bấm Space. Phân tích lỗi sai theo từng mili giây.',
    items: ['Video HD thực tế', 'Phân tích phản xạ (ms)', 'Replay & giải thích'],
    href: '/mo-phong',
    cta: 'Xem mô phỏng',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
        <polygon points="3 11 22 2 13 21 11 13 3 11"/>
      </svg>
    ),
    color: 'green',
    title: 'Sa hình 3D & Đường trường',
    desc: 'Sơ đồ 11 bài thi 3D tương tác kết hợp checklist lỗi trừ điểm phổ biến giúp bạn làm chủ sa hình.',
    items: ['Sơ đồ 3D tương tác', 'Checklist lỗi phổ biến', 'Video thực tế từng bài'],
    href: '/sa-hinh',
    cta: 'Xem sa hình',
  },
];

export default function FeaturesSection() {
  return (
    <section className={`section-lg ${styles.section}`}>
      <div className="container">
        <div className={styles.header}>
          <span className="section-label">Tại sao chọn chúng tôi</span>
          <h2 className={styles.headline}>
            Đồng hành cùng bạn trên mọi<br />
            <span className={styles.accent}>hành trình chinh phục bằng lái</span>
          </h2>
          <p className={styles.sub}>
            Từ ôn lý thuyết → mô phỏng thực tế → sa hình → kết nối giáo viên, chúng tôi có đủ công cụ để bạn tự tin thi đỗ.
          </p>
        </div>

        <div className={styles.grid}>
          {features.map((feature) => (
            <div key={feature.title} className={`card ${styles.featureCard} ${styles[`card-${feature.color}`]}`}>
              <div className={styles.featureIcon}>{feature.icon}</div>
              <h3 className={styles.featureTitle}>{feature.title}</h3>
              <p className={styles.featureDesc}>{feature.desc}</p>
              <ul className={styles.featureItems}>
                {feature.items.map((item) => (
                  <li key={item} className={styles.featureItem}>
                    <span className={styles.checkmark}>✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <Link href={feature.href} className={`btn ${styles.featureBtn} ${styles[`btn-${feature.color}`]}`}>
                {feature.cta}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="m9 18 6-6-6-6"/>
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
