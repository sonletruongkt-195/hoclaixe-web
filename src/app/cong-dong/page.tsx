import type { Metadata } from 'next';
import Link from 'next/link';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Study Buddy & Cộng đồng - Học lái xe cùng nhau',
};

const buddies = [
  { id: 1, name: 'Nguyễn Minh Tuấn', area: 'Hoàn Kiếm, Hà Nội', course: 'B2', schedule: 'Thứ 2, 4, 6 - Sáng', avatar: 'N' },
  { id: 2, name: 'Trần Phương Linh', area: 'Cầu Giấy, Hà Nội', course: 'B1', schedule: 'Thứ 3, 5, 7 - Chiều', avatar: 'T' },
  { id: 3, name: 'Lê Văn Hùng', area: 'Đống Đa, Hà Nội', course: 'B2', schedule: 'Thứ 2 đến 6 - Sáng', avatar: 'L' },
  { id: 4, name: 'Phạm Thị Mai', area: 'Ba Đình, Hà Nội', course: 'B1', schedule: 'Cuối tuần - Cả ngày', avatar: 'P' },
];

const posts = [
  { id: 1, author: 'Trần Hữu Đức', time: '2 giờ trước', content: 'Mọi người ơi, bài thi đề-pa ngang dốc mình hay bị trôi xe. Có mẹo gì không ạ?', likes: 24, comments: 8, avatar: 'T' },
  { id: 2, author: 'Nguyễn Thị Hoa', time: '5 giờ trước', content: 'Hôm nay thi thử được 45/50 điểm rồi 🎉 Cảm ơn app đã giúp mình ôn luyện hiệu quả!', likes: 56, comments: 12, avatar: 'N' },
  { id: 3, author: 'Lê Quang Khải', time: 'Hôm qua', content: 'Chia sẻ một mẹo: Để nhớ các câu điểm liệt, mình tạo flashcard và ôn mỗi ngày 15 phút. Kết quả rất tốt!', likes: 89, comments: 21, avatar: 'L' },
];

const leaderboard = [
  { rank: 1, name: 'Minh Châu', score: 98, badge: '🥇' },
  { rank: 2, name: 'Tuấn Anh', score: 95, badge: '🥈' },
  { rank: 3, name: 'Phương Linh', score: 93, badge: '🥉' },
  { rank: 4, name: 'Hữu Đức', score: 91, badge: '' },
  { rank: 5, name: 'Thị Mai', score: 89, badge: '' },
];

export default function CongDongPage() {
  return (
    <div className={styles.page}>
      <div className={styles.hero}>
        <div className="container">
          <div className={styles.breadcrumb}>
            <Link href="/">Trang chủ</Link><span>/</span><span>Cộng đồng</span>
          </div>
          <h1 className={styles.heroTitle}>Study Buddy & Cộng đồng</h1>
          <p className={styles.heroDesc}>Ghép đôi học viên cùng khu vực, học chung xe tiết kiệm chi phí, và chia sẻ kinh nghiệm</p>
        </div>
      </div>

      <div className="container" style={{ padding: '2rem 1.5rem 4rem' }}>
        <div className={styles.layout}>
          <main className={styles.main}>
            {/* Study Buddy matching */}
            <section className={styles.section}>
              <div className={styles.sectionHeader}>
                <h2 className={styles.sectionTitle}>🤝 Ghép đôi Study Buddy</h2>
                <button className="btn btn-cta btn-sm">+ Tham gia matching</button>
              </div>
              <p className={styles.sectionDesc}>Tìm người học cùng sân tập hoặc cùng khu vực để chia sẻ xe tip — giảm 30-50% chi phí!</p>
              <div className={styles.buddyGrid}>
                {buddies.map(b => (
                  <div key={b.id} className={`card ${styles.buddyCard}`}>
                    <div className={styles.buddyAvatar}>{b.avatar}</div>
                    <div className={styles.buddyInfo}>
                      <div className={styles.buddyName}>{b.name}</div>
                      <div className={styles.buddyMeta}>
                        <span>📍 {b.area}</span>
                        <span className="badge badge-primary" style={{ fontSize: '0.625rem' }}>{b.course}</span>
                      </div>
                      <div className={styles.buddySchedule}>🕐 {b.schedule}</div>
                    </div>
                    <button className="btn btn-ghost btn-sm">Kết nối</button>
                  </div>
                ))}
              </div>
            </section>

            {/* Forum */}
            <section className={styles.section}>
              <div className={styles.sectionHeader}>
                <h2 className={styles.sectionTitle}>💬 Diễn đàn cộng đồng</h2>
                <button className="btn btn-primary btn-sm">✏ Đăng bài</button>
              </div>
              <div className={styles.postList}>
                {posts.map(post => (
                  <div key={post.id} className={`card ${styles.postCard}`}>
                    <div className={styles.postHeader}>
                      <div className={styles.postAvatar}>{post.avatar}</div>
                      <div>
                        <div className={styles.postAuthor}>{post.author}</div>
                        <div className={styles.postTime}>{post.time}</div>
                      </div>
                    </div>
                    <p className={styles.postContent}>{post.content}</p>
                    <div className={styles.postActions}>
                      <button className={styles.postAction}>❤️ {post.likes}</button>
                      <button className={styles.postAction}>💬 {post.comments} bình luận</button>
                      <button className={styles.postAction}>↗ Chia sẻ</button>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </main>

          {/* Sidebar */}
          <aside className={styles.sidebar}>
            {/* Leaderboard */}
            <div className={`card ${styles.lbCard}`}>
              <h3 className={styles.sideTitle}>🏆 Bảng xếp hạng tuần</h3>
              <div className={styles.lbList}>
                {leaderboard.map(item => (
                  <div key={item.rank} className={`${styles.lbItem} ${item.rank <= 3 ? styles.lbTop : ''}`}>
                    <span className={styles.lbRank}>
                      {item.badge || `#${item.rank}`}
                    </span>
                    <span className={styles.lbName}>{item.name}</span>
                    <span className={styles.lbScore}>{item.score} điểm</span>
                  </div>
                ))}
              </div>
              <button className="btn btn-ghost btn-sm" style={{ width: '100%', marginTop: '0.75rem' }}>
                Xem đầy đủ →
              </button>
            </div>

            {/* Quick links */}
            <div className={`card ${styles.quickCard}`}>
              <h3 className={styles.sideTitle}>⚡ Học ngay</h3>
              <div className={styles.quickLinks}>
                {[
                  { href: '/ly-thuyet', icon: '📚', label: 'Ôn lý thuyết' },
                  { href: '/mo-phong', icon: '🎬', label: 'Mô phỏng' },
                  { href: '/sa-hinh', icon: '🗺️', label: 'Sa hình' },
                  { href: '/dashboard', icon: '📊', label: 'Tiến độ' },
                ].map(l => (
                  <Link key={l.href} href={l.href} className={styles.quickLink}>
                    <span className={styles.quickIcon}>{l.icon}</span>
                    {l.label}
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
