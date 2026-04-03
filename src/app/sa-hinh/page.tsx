import type { Metadata } from 'next';
import Link from 'next/link';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Sa hình 3D - 11 bài thi sa hình B2 chi tiết',
};

const exercises = [
  { id: 1, name: 'Xuất phát', desc: 'Kỹ thuật xuất phát an toàn, tín hiệu xin đường', difficulty: 'Dễ', donePct: 100 },
  { id: 2, name: 'Dừng xe, đỗ xe', desc: 'Dừng xe đúng vạch, tắt máy, rút chìa khoá', difficulty: 'Dễ', donePct: 100 },
  { id: 3, name: 'Đường vòng quanh co', desc: 'Điều khiển xe qua đường vòng có nhiều khúc cua', difficulty: 'Trung bình', donePct: 80 },
  { id: 4, name: 'Đường số 8', desc: 'Lái xe theo hình số 8 trong phạm vi hẹp', difficulty: 'Trung bình', donePct: 70 },
  { id: 5, name: 'Đường ngang dốc', desc: 'Điều khiển xe đi lên và xuống dốc ngang', difficulty: 'Khó', donePct: 60 },
  { id: 6, name: 'Đứng trên dốc', desc: 'Dừng và khởi hành xe trên đường dốc', difficulty: 'Khó', donePct: 55 },
  { id: 7, name: 'Qua đường sắt', desc: 'Kỹ thuật đi qua đường sắt an toàn', difficulty: 'Dễ', donePct: 100 },
  { id: 8, name: 'Nơi đường giao nhau', desc: 'Xử lý tình huống tại ngã tư, nhường đường', difficulty: 'Trung bình', donePct: 75 },
  { id: 9, name: 'Tránh vật cản', desc: 'Tránh xe hỏng, người đi bộ qua đường bất ngờ', difficulty: 'Trung bình', donePct: 65 },
  { id: 10, name: 'Ghép xe song song', desc: 'Đỗ xe vào ô đỗ song song với xe khác', difficulty: 'Khó', donePct: 40 },
  { id: 11, name: 'Ghép xe ngang', desc: 'Đưa xe vào ô đỗ vuông góc với đường', difficulty: 'Rất khó', donePct: 35 },
];

const diffBg: Record<string, string> = {
  'Dễ': 'var(--color-tertiary-fixed)',
  'Trung bình': '#fff3cd',
  'Khó': 'var(--color-secondary-fixed)',
  'Rất khó': 'var(--color-error-container)',
};
const diffColor: Record<string, string> = {
  'Dễ': 'var(--color-tertiary)',
  'Trung bình': '#856404',
  'Khó': 'var(--color-secondary)',
  'Rất khó': 'var(--color-error)',
};

const mistakes = [
  'Không tắt xi-nhan sau khi rẽ (-2đ)',
  'Bánh xe vượt quá vạch (-5đ điểm liệt)',
  'Không dừng đúng vạch dừng (-3đ)',
  'Quên nhìn gương chiếu hậu trước khi rẽ (-2đ)',
  'Không đặt số N khi dừng xe (-2đ)',
  'Đỗ xe cách vỉa hè hơn 30cm (-3đ)',
];

export default function SaHinhPage() {
  return (
    <div className={styles.page}>
      <div className={styles.hero}>
        <div className="container">
          <div className={styles.breadcrumb}>
            <Link href="/">Trang chủ</Link><span>/</span><span>Sa hình</span>
          </div>
          <h1 className={styles.heroTitle}>Sơ đồ 11 Bài thi Sa hình B2</h1>
          <p className={styles.heroDesc}>Sơ đồ 3D tương tác + Checklist lỗi trừ điểm phổ biến + Video hướng dẫn thực tế</p>
        </div>
      </div>

      <div className="container" style={{ padding: '2rem 1.5rem 4rem' }}>
        <div className={styles.layout}>
          <main className={styles.main}>
            <h2 className={styles.sectionTitle}>11 Bài thi sa hình</h2>
            <div className={styles.exerciseGrid}>
              {exercises.map((ex) => (
                <div key={ex.id} className={`card ${styles.exCard} ${ex.donePct >= 100 ? styles.exDone : ''}`}>
                  <div className={styles.exHeader}>
                    <div className={styles.exNum}>#{ex.id}</div>
                    <span
                      className="badge"
                      style={{ background: diffBg[ex.difficulty], color: diffColor[ex.difficulty] }}
                    >
                      {ex.difficulty}
                    </span>
                  </div>
                  <h3 className={styles.exTitle}>{ex.name}</h3>
                  <p className={styles.exDesc}>{ex.desc}</p>

                  {/* Progress */}
                  <div className={styles.exProgress}>
                    <span className={styles.exProgressLabel}>Thành thạo</span>
                    <span className={styles.exProgressPct} style={{ color: ex.donePct >= 100 ? 'var(--color-tertiary)' : 'var(--color-primary)' }}>
                      {ex.donePct}%
                    </span>
                  </div>
                  <div className="progress-track">
                    <div
                      className={`progress-fill ${ex.donePct >= 100 ? 'progress-fill-green' : ''}`}
                      style={{ width: `${ex.donePct}%` }}
                    />
                  </div>

                  <div className={styles.exActions}>
                    <button className="btn btn-ghost btn-sm">
                      🎥 Xem video
                    </button>
                    <button className="btn btn-primary btn-sm">
                      📋 Sơ đồ 3D
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </main>

          <aside className={styles.sidebar}>
            <div className={`card ${styles.mistakesCard}`}>
              <h3 className={styles.sideTitle}>⚠ Checklist lỗi trừ điểm</h3>
              <p className={styles.sideSub}>Những lỗi phổ biến nhất trong sa hình cần tránh</p>
              <ul className={styles.mistakeList}>
                {mistakes.map((m) => (
                  <li key={m} className={styles.mistakeItem}>
                    <span className={styles.mistakeIcon}>⚡</span>
                    <span>{m}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className={`card ${styles.tipCard}`}>
              <h3 className={styles.sideTitle}>💡 Mẹo vàng</h3>
              <ul className={styles.tipList}>
                {[
                  'Luôn nhìn gương trước khi rẽ',
                  'Giảm số trước khi vào dốc',
                  'Xi-nhan tối thiểu 30m trước khi rẽ',
                  'Giữ tốc độ đều 10-15 km/h trong sa hình',
                  'Quan sát gương chiếu hậu mỗi 5-8 giây',
                ].map((tip) => (
                  <li key={tip} className={styles.tipItem}>
                    <span className={styles.tipCheck}>✓</span>
                    {tip}
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
