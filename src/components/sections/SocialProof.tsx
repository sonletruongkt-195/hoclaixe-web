import styles from './SocialProof.module.css';

const features = [
  {
    icon: '📊',
    title: 'Dữ liệu chuẩn 2024',
    desc: 'Luôn cập nhật các bộ đề thi mới nhất từ Tổng cục Đường bộ.',
  },
  {
    icon: '📱',
    title: 'Học mọi lúc mọi nơi',
    desc: 'Ứng dụng đa nền tảng, đồng bộ dữ liệu ngay lập tức.',
  },
  {
    icon: '🤖',
    title: 'Gợi ý thông minh (AI)',
    desc: 'Tập trung ôn luyện những câu hỏi bạn thường xuyên trả lời sai.',
  },
];

const reviews = [
  { name: 'Nguyễn Văn An', badge: 'B2', text: 'Học app này 2 tuần là đỗ luôn! Thi thử được 96/100 điểm.', stars: 5, location: 'Hà Nội' },
  { name: 'Trần Thị Bích', badge: 'B1', text: 'Phần mô phỏng rất thực tế, giúp mình phản xạ nhanh hơn rất nhiều.', stars: 5, location: 'TP.HCM' },
  { name: 'Lê Quang Tuấn', badge: 'A2', text: 'AI gợi ý câu yếu cực kỳ hữu ích, tiết kiệm nhiều thời gian ôn luyện.', stars: 5, location: 'Đà Nẵng' },
];

export default function SocialProof() {
  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        {/* Stats banner */}
        <div className={styles.statBanner}>
          <div className={styles.statBannerInner}>
            <div className={styles.statBig}>
              <div className={styles.statNumber}>100K+</div>
              <div className={styles.statDesc}>Học viên đã đỗ bằng lái cùng chúng tôi</div>
            </div>
            <div className={styles.statDivider} />
            <p className={styles.statText}>
              Chúng tôi cung cấp lộ trình học tập tối ưu, được cá nhân hóa cho từng học viên. 
              Không còn nỗi lo lắng về các câu hỏi khó hay những bài sa hình phức tạp.
            </p>
            <ul className={styles.featureList}>
              {features.map((f) => (
                <li key={f.title} className={styles.featureItem}>
                  <span className={styles.featureCheck}>✓</span>
                  <div>
                    <strong>{f.title}</strong>
                    <p className={styles.featureDesc}>{f.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Reviews */}
        <div className={styles.reviewsHeader}>
          <span className="section-label">Học viên nói gì</span>
          <h2 className="headline-md" style={{ marginTop: '0.5rem' }}>Đồng hành cùng hàng trăm nghìn học viên</h2>
        </div>

        <div className={styles.reviewGrid}>
          {reviews.map((review) => (
            <div key={review.name} className={`card ${styles.reviewCard}`}>
              <div className={styles.stars}>
                {'★'.repeat(review.stars)}
              </div>
              <p className={styles.reviewText}>"{review.text}"</p>
              <div className={styles.reviewer}>
                <div className={styles.avatar}>
                  {review.name.charAt(0)}
                </div>
                <div>
                  <div className={styles.reviewerName}>{review.name}</div>
                  <div className={styles.reviewerMeta}>
                    <span className="badge badge-primary" style={{ fontSize: '0.625rem' }}>Bằng {review.badge}</span>
                    <span className={styles.reviewerLocation}>· {review.location}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
