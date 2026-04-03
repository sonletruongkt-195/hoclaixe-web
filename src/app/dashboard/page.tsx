import type { Metadata } from 'next';
import Link from 'next/link';
import styles from './page.module.css';
import { createClient } from '@/utils/supabase/server';

export const metadata: Metadata = {
  title: 'Dashboard Tiến độ Cá nhân - Theo dõi hành trình học lái xe',
  description: 'Dashboard phân tích tiến độ học tập cá nhân, dự đoán tỷ lệ đỗ, lịch sử thi thử và phân tích điểm yếu.',
};


const weakTopics = [
  { topic: 'Biển báo đường bộ', correct: 65, total: 120, color: '#003d9b' },
  { topic: 'Câu hỏi điểm liệt', correct: 50, total: 141, color: '#ba1a1a' },
  { topic: 'Sa hình & Đường trường', correct: 45, total: 78, color: '#9d4300' },
];

export default async function DashboardPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  const isBlurred = !user;

  // Lấy dữ liệu bài thi thật từ Supabase của riêng User
  let fetchedExams: any[] = [];
  if (user) {
    const { data } = await supabase
      .from('exam_histories')
      .select('*')
      .eq('user_id', user.id)
      .order('created_at', { ascending: false });
    if (data) fetchedExams = data;
  }

  return (
    <div className={styles.page}>
      <div className={styles.hero}>
        <div className="container">
          <div className={styles.heroBreadcrumb}>
            <Link href="/">Trang chủ</Link><span>/</span><span>Dashboard</span>
          </div>
          <h1 className={styles.heroTitle}>Dashboard Tiến độ</h1>
          <p className={styles.heroDesc}>Theo dõi hành trình học tập và dự đoán tỷ lệ đỗ của bạn.</p>
        </div>
      </div>

      <div className="container" style={{ padding: '2rem 1.5rem 4rem', position: 'relative' }}>
        <div style={{ filter: isBlurred ? 'blur(8px)' : 'none', pointerEvents: isBlurred ? 'none' : 'auto', userSelect: isBlurred ? 'none' : 'auto', transition: 'filter 0.3s' }}>
        {/* Top stats */}
        <div className={styles.statsRow}>
          {[
            { label: 'Câu đã học', value: '450/600', sub: 'Lý thuyết', color: 'blue' },
            { label: 'Mô phỏng', value: '87/120', sub: 'Tình huống', color: 'orange' },
            { label: 'Thi thử', value: '5', sub: 'Lần làm đề', color: 'green' },
            { label: 'Streak', value: '7 ngày', sub: 'Học liên tiếp', color: 'purple' },
          ].map((s) => (
            <div key={s.label} className={`card ${styles.statCard}`}>
              <div className={`${styles.statNum} ${styles[`color-${s.color}`]}`}>{s.value}</div>
              <div className={styles.statLabel}>{s.label}</div>
              <div className={styles.statSub}>{s.sub}</div>
            </div>
          ))}
        </div>

        {/* Prediction + Progress */}
        <div className={styles.midRow}>
          {/* Prediction */}
          <div className={`card ${styles.predictionCard}`}>
            <h3 className={styles.cardTitle}>Dự đoán tỷ lệ đỗ</h3>
            <div className={styles.predictionCircle}>
              <svg viewBox="0 0 120 120" className={styles.circleSvg}>
                <circle cx="60" cy="60" r="50" fill="none" stroke="var(--color-surface-container-high)" strokeWidth="12"/>
                <circle cx="60" cy="60" r="50" fill="none" stroke="var(--color-primary)" strokeWidth="12"
                  strokeDasharray={`${2 * Math.PI * 50 * 0.87} ${2 * Math.PI * 50}`}
                  strokeLinecap="round"
                  transform="rotate(-90 60 60)"
                />
              </svg>
              <div className={styles.circleInner}>
                <div className={styles.circleNum}>87%</div>
                <div className={styles.circleSub}>Tỷ lệ đỗ</div>
              </div>
            </div>
            <p className={styles.predDesc}>Dựa trên 5 bài thi thử gần nhất. Cần cải thiện phần <strong>Biển báo</strong> để đạt 95%+</p>
          </div>

          {/* Progress bars */}
          <div className={`card ${styles.progressCard}`}>
            <h3 className={styles.cardTitle}>Tiến độ tổng thể</h3>
            <div className={styles.progressList}>
              {[
                { label: 'Lý thuyết 600 câu', pct: 75, color: 'var(--color-primary)' },
                { label: 'Mô phỏng 120 tình huống', pct: 72, color: 'var(--color-secondary)' },
                { label: 'Câu điểm liệt (141)', pct: 50, color: 'var(--color-error)' },
                { label: 'Sa hình (11 bài)', pct: 90, color: 'var(--color-tertiary)' },
              ].map((item) => (
                <div key={item.label} className={styles.progressRow}>
                  <div className={styles.progressMeta}>
                    <span className={styles.progressLabel}>{item.label}</span>
                    <span className={styles.progressPct} style={{ color: item.color }}>{item.pct}%</span>
                  </div>
                  <div className="progress-track">
                    <div className="progress-fill" style={{ width: `${item.pct}%`, background: item.color }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Weak topics */}
        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>Điểm yếu cần cải thiện</h3>
          <div className={styles.weakGrid}>
            {weakTopics.map((topic) => {
              const pct = Math.round((topic.correct / topic.total) * 100);
              return (
                <div key={topic.topic} className={`card ${styles.weakCard}`}>
                  <div className={styles.weakHeader}>
                    <div className={styles.weakDot} style={{ background: topic.color }} />
                    <h4 className={styles.weakTitle}>{topic.topic}</h4>
                    <span className={styles.weakPct} style={{ color: topic.color }}>{pct}%</span>
                  </div>
                  <div className="progress-track">
                    <div className="progress-fill" style={{ width: `${pct}%`, background: topic.color }} />
                  </div>
                  <div className={styles.weakMeta}>{topic.correct}/{topic.total} câu đúng</div>
                  <Link href="/ly-thuyet" className="btn btn-ghost btn-sm" style={{ marginTop: '0.5rem' }}>
                    Ôn luyện ngay
                  </Link>
                </div>
              );
            })}
          </div>
        </div>

        {/* Exam history */}
        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>Lịch sử thi thử</h3>
          <div className="card" style={{ padding: '0', overflow: 'hidden' }}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Ngày thi</th>
                  <th>Điểm số</th>
                  <th>Thời gian làm</th>
                  <th>Kết quả</th>
                  <th>Hành động</th>
                </tr>
              </thead>
              <tbody>
                {fetchedExams.map((exam, i) => {
                  const dateObj = new Date(exam.created_at);
                  const dateStr = dateObj.toLocaleDateString('vi-VN');
                  const timeMin = Math.floor(exam.time_taken_seconds / 60);
                  const timeSec = exam.time_taken_seconds % 60;
                  
                  return (
                    <tr key={i}>
                      <td>{dateStr}</td>
                      <td className={styles.score}>{exam.score}/{exam.total_questions}</td>
                      <td>{timeMin}p {timeSec}s</td>
                      <td>
                        <span className={`badge ${exam.is_passed ? 'badge-success' : 'badge-error'}`}>
                          {exam.is_passed ? '✓ Đỗ' : '✗ Trượt'}
                        </span>
                      </td>
                      <td>
                        <button className="btn btn-ghost btn-sm">Xem chi tiết</button>
                      </td>
                    </tr>
                  )
                })}
                {fetchedExams.length === 0 && (
                  <tr>
                    <td colSpan={5} style={{textAlign: 'center', padding: '2rem'}}>Bạn chưa làm bài thi thử nào trên hệ thống</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          </div>
        </div>

        {isBlurred && (
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 10 }}>
            <div className="card" style={{ maxWidth: '400px', textAlign: 'center', padding: '2.5rem 2rem', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}>
               <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🔒</div>
               <h2 style={{ fontSize: '1.5rem', marginBottom: '0.75rem', fontWeight: 700 }}>Bạn chưa đăng nhập</h2>
               <p style={{ marginBottom: '1.5rem', color: 'var(--color-onsurface-variant)' }}>
                 Silicone hoặc một số tính năng đang được khoá. Hãy đăng nhập để theo dõi dự đoán tỷ lệ đỗ và lịch trình thi cá nhân nhé.
               </p>
               <Link href="/login" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                 Tạo tài khoản / Đăng nhập
               </Link>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
