import type { Metadata } from 'next';
import styles from './page.module.css';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Ôn luyện Lý thuyết 600 câu - Hệ thống học thông minh',
  description: 'Học và ôn luyện 600 câu hỏi lý thuyết lái xe mới nhất 2024. AI gợi ý câu yếu, giải thích chi tiết, thi thử ngay lập tức.',
};

const chapters = [
  { id: 1, name: 'Khái niệm và quy tắc', total: 85, done: 80, color: '#003d9b' },
  { id: 2, name: 'Nghiệp vụ vận tải', total: 42, done: 42, color: '#004e33' },
  { id: 3, name: 'Kỹ thuật lái xe', total: 64, done: 60, color: '#9d4300' },
  { id: 4, name: 'Biển báo đường bộ', total: 120, done: 85, color: '#6b21a8' },
  { id: 5, name: 'Sa hình & Đường trường', total: 78, done: 55, color: '#0891b2' },
  { id: 6, name: 'Sức khoẻ & Đạo đức', total: 38, done: 38, color: '#15803d' },
  { id: 7, name: 'Bảo vệ môi trường', total: 32, done: 20, color: '#b45309' },
  { id: 8, name: 'Câu hỏi điểm liệt', total: 141, done: 70, color: '#ba1a1a' },
];

const questions = [
  { id: 1, text: 'Khi gặp biển báo P.102a, người điều khiển phương tiện phải làm gì?', type: 'theory', difficulty: 'easy', done: true },
  { id: 2, text: 'Trên đường có dải phân cách giữa, xe cơ giới đi lên dốc hoặc xuống dốc phải đi về phần đường nào?', type: 'theory', difficulty: 'medium', done: true },
  { id: 3, text: 'Hành vi nào dưới đây của người điều khiển xe mô tô bị phạt tiền từ 6.000.000 đồng đến 8.000.000 đồng?', type: 'critical', difficulty: 'hard', done: false },
  { id: 4, text: 'Tốc độ tối đa cho phép xe con khi tham gia giao thông trong khu dân cư là bao nhiêu?', type: 'theory', difficulty: 'easy', done: true },
  { id: 5, text: 'Xe ô tô tải kéo một rơ moóc được phép chạy tốc độ tối đa bao nhiêu km/h trên đường cao tốc?', type: 'theory', difficulty: 'medium', done: false },
  { id: 6, text: 'Người điều khiển phương tiện bị thu hồi GPLX trong trường hợp nào theo quy định mới nhất?', type: 'critical', difficulty: 'hard', done: false },
];

const difficultyLabel: Record<string, string> = { easy: 'Dễ', medium: 'Trung bình', hard: 'Khó' };
const difficultyColor: Record<string, string> = { easy: 'var(--color-tertiary)', medium: '#b45309', hard: 'var(--color-error)' };
const difficultyBg: Record<string, string> = { easy: 'var(--color-tertiary-fixed)', medium: '#fff3cd', hard: 'var(--color-error-container)' };

export default function LyThuyetPage() {
  const totalDone = chapters.reduce((acc, c) => acc + c.done, 0);
  const totalAll = chapters.reduce((acc, c) => acc + c.total, 0);

  return (
    <div className={styles.page}>
      {/* Hero */}
      <div className={styles.hero}>
        <div className="container">
          <div className={styles.heroBreadcrumb}>
            <Link href="/">Trang chủ</Link>
            <span>/</span>
            <span>Lý thuyết</span>
          </div>
          <h1 className={styles.heroTitle}>Hệ thống Ôn luyện Lý thuyết</h1>
          <p className={styles.heroDesc}>600 câu hỏi chính thức từ Tổng cục Đường bộ, phân loại thông minh và cập nhật liên tục.</p>

          <div className={styles.heroStats}>
            <div className={styles.heroStat}>
              <span className={styles.heroStatNum}>{totalDone}/{totalAll}</span>
              <span className={styles.heroStatLabel}>Câu đã học</span>
            </div>
            <div className={styles.heroStat}>
              <span className={styles.heroStatNum}>{Math.round((totalDone / totalAll) * 100)}%</span>
              <span className={styles.heroStatLabel}>Hoàn thành</span>
            </div>
            <div className={styles.heroStat}>
              <span className={styles.heroStatNum}>8</span>
              <span className={styles.heroStatLabel}>Chương</span>
            </div>
            <div className={styles.heroStat}>
              <span className={styles.heroStatNum}>141</span>
              <span className={styles.heroStatLabel}>Câu điểm liệt</span>
            </div>

            <Link href="/ly-thuyet/thi-thu" className="btn btn-cta btn-lg">
              Thi thử ngẫu nhiên
            </Link>
          </div>
        </div>
      </div>

      <div className="container">
        <div className={styles.layout}>
          {/* Sidebar */}
          <aside className={styles.sidebar}>
            <div className={styles.tabs}>
              {['Theo chương', 'Điểm liệt', 'Đề yếu của tôi', 'Bộ đề'].map((tab, i) => (
                <button key={tab} className={`${styles.sideTab} ${i === 0 ? styles.sideTabActive : ''}`}>{tab}</button>
              ))}
            </div>

            <div className={styles.chapterList}>
              {chapters.map((ch) => {
                const pct = Math.round((ch.done / ch.total) * 100);
                return (
                  <button key={ch.id} className={styles.chapterItem}>
                    <div className={styles.chapterLeft}>
                      <div className={styles.chapterDot} style={{ background: ch.color }} />
                      <div>
                        <div className={styles.chapterName}>{ch.name}</div>
                        <div className={styles.chapterCount}>{ch.done}/{ch.total} câu</div>
                      </div>
                    </div>
                    <div className={styles.chapterRight}>
                      <div className={styles.chapterPct} style={{ color: ch.color }}>{pct}%</div>
                    </div>
                  </button>
                );
              })}
            </div>
          </aside>

          {/* Main content */}
          <main className={styles.main}>
            <div className={styles.mainHeader}>
              <div>
                <h2 className={styles.mainTitle}>Tất cả câu hỏi</h2>
                <p className={styles.mainSub}>Hiển thị 6 trong số 600 câu hỏi</p>
              </div>
              <div className={styles.filters}>
                <select className={styles.filterSelect}>
                  <option>Tất cả</option>
                  <option>Chưa học</option>
                  <option>Đã học</option>
                  <option>Câu sai</option>
                </select>
                <select className={styles.filterSelect}>
                  <option>Mức độ</option>
                  <option>Dễ</option>
                  <option>Trung bình</option>
                  <option>Khó</option>
                </select>
              </div>
            </div>

            <div className={styles.questionList}>
              {questions.map((q) => (
                <div key={q.id} className={`${styles.questionCard} ${q.done ? styles.questionDone : ''}`}>
                  <div className={styles.questionLeft}>
                    <div className={`${styles.questionCheck} ${q.done ? styles.questionChecked : ''}`}>
                      {q.done ? '✓' : q.id}
                    </div>
                  </div>
                  <div className={styles.questionContent}>
                    <p className={styles.questionText}>{q.text}</p>
                    <div className={styles.questionMeta}>
                      <span
                        className="badge"
                        style={{ background: difficultyBg[q.difficulty], color: difficultyColor[q.difficulty] }}
                      >
                        {difficultyLabel[q.difficulty]}
                      </span>
                      {q.type === 'critical' && (
                        <span className="badge badge-error">⚠ Điểm liệt</span>
                      )}
                    </div>
                  </div>
                  <button className={`btn btn-ghost btn-sm ${styles.questionBtn}`}>
                    {q.done ? 'Ôn lại' : 'Học'}
                  </button>
                </div>
              ))}
            </div>

            <div className={styles.loadMore}>
              <button className="btn btn-ghost">Xem thêm câu hỏi →</button>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
