import Link from 'next/link';
import styles from './NewsSection.module.css';

const news = [
  {
    id: 1,
    tag: 'Luật mới',
    tagColor: 'warning',
    date: '15/07/2024',
    title: 'Quy định mới về việc thu hồi giấy phép lái xe từ tháng 7/2024',
    excerpt: 'Nghị định 100/2024 quy định các trường hợp thu hồi GPLX mới nhất cần biết khi tham gia giao thông.',
    readTime: '3 phút đọc',
  },
  {
    id: 2,
    tag: 'Mẹo thi',
    tagColor: 'primary',
    date: '10/07/2024',
    title: '5 Mẹo giúp bạn vượt qua bài thi đề-pa ngang dốc cực dễ',
    excerpt: 'Những kỹ thuật thực hành đơn giản giúp học viên tự tin vượt qua bài thi đề-pa ngang dốc trong sa hình B2.',
    readTime: '5 phút đọc',
  },
  {
    id: 3,
    tag: 'Lịch thi',
    tagColor: 'tertiary',
    date: '05/07/2024',
    title: 'Lịch thi sát hạch lái xe tháng 8 tại khu vực Hà Nội',
    excerpt: 'Tổng hợp lịch thi sát hạch lái xe tháng 8/2024 tại các Trung tâm sát hạch ở Hà Nội và vùng phụ cận.',
    readTime: '2 phút đọc',
  },
];

const tagColorMap: Record<string, string> = {
  warning: '#856404',
  primary: 'var(--color-primary)',
  tertiary: 'var(--color-tertiary)',
};

const tagBgMap: Record<string, string> = {
  warning: '#fff3cd',
  primary: 'var(--color-primary-fixed)',
  tertiary: 'var(--color-tertiary-fixed)',
};

export default function NewsSection() {
  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        <div className={styles.header}>
          <div>
            <span className="section-label">Thông tin mới nhất</span>
            <h2 className="headline-lg" style={{ marginTop: '0.5rem' }}>Tin tức giao thông</h2>
          </div>
          <Link href="/cong-cu" className="btn btn-ghost">
            Xem tất cả
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
            </svg>
          </Link>
        </div>

        <div className={styles.grid}>
          {news.map((item) => (
            <article key={item.id} className={`card ${styles.newsCard}`}>
              <div className={styles.cardTop}>
                <span
                  className="badge"
                  style={{ background: tagBgMap[item.tagColor], color: tagColorMap[item.tagColor] }}
                >
                  {item.tag}
                </span>
                <span className={styles.date}>{item.date}</span>
              </div>
              <h3 className={styles.newsTitle}>{item.title}</h3>
              <p className={styles.newsExcerpt}>{item.excerpt}</p>
              <div className={styles.cardBottom}>
                <span className={styles.readTime}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                  </svg>
                  {item.readTime}
                </span>
                <a href="#" className={styles.readMore}>
                  Đọc thêm →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
