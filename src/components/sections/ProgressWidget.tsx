import Link from 'next/link';
import styles from './ProgressWidget.module.css';

export default function ProgressWidget() {
  const theoryProgress = 450;
  const theoryTotal = 600;
  const simProgress = 87;
  const simTotal = 120;

  const theoryPct = Math.round((theoryProgress / theoryTotal) * 100);
  const simPct = Math.round((simProgress / simTotal) * 100);

  return (
    <div className={`card ${styles.widget}`} style={{ marginTop: '1.5rem', marginBottom: '1.5rem' }}>
      <div className={styles.header}>
        <div>
          <span className="section-label">Tiến độ của bạn</span>
          <h3 className={styles.title}>Bảng tóm tắt học tập</h3>
        </div>
        <Link href="/dashboard" className="btn btn-ghost btn-sm">
          Xem chi tiết
        </Link>
      </div>

      <div className={styles.progressItems}>
        {/* Theory */}
        <div className={styles.progressItem}>
          <div className={styles.progressHeader}>
            <div className={styles.progressIcon} style={{ background: 'var(--color-primary-fixed)', color: 'var(--color-primary)' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
              </svg>
            </div>
            <div>
              <div className={styles.progressName}>Lý thuyết 600 câu</div>
              <div className={styles.progressSub}>{theoryProgress}/{theoryTotal} câu hoàn thành</div>
            </div>
            <div className={styles.progressPct}>{theoryPct}%</div>
          </div>
          <div className="progress-track">
            <div className="progress-fill" style={{ width: `${theoryPct}%` }} />
          </div>
        </div>

        {/* Simulation */}
        <div className={styles.progressItem}>
          <div className={styles.progressHeader}>
            <div className={styles.progressIcon} style={{ background: 'var(--color-secondary-fixed)', color: 'var(--color-secondary)' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2"/>
              </svg>
            </div>
            <div>
              <div className={styles.progressName}>Mô phỏng tình huống</div>
              <div className={styles.progressSub}>{simProgress}/{simTotal} tình huống đã xem</div>
            </div>
            <div className={styles.progressPct} style={{ color: 'var(--color-secondary)' }}>{simPct}%</div>
          </div>
          <div className="progress-track">
            <div className="progress-fill progress-fill-green" style={{ width: `${simPct}%` }} />
          </div>
        </div>
      </div>

      {/* Prediction */}
      <div className={styles.prediction}>
        <div className={styles.predictionIcon}>🎯</div>
        <div>
          <div className={styles.predictionTitle}>Dự đoán tỷ lệ đỗ</div>
          <div className={styles.predictionDesc}>Dựa trên kết quả ôn tập của bạn</div>
        </div>
        <div className={styles.predictionScore}>87%</div>
      </div>

      <p className={styles.encouragement}>
        💪 Bạn đã hoàn thành <strong>{theoryProgress}/{theoryTotal} câu</strong> lý thuyết. Tiếp tục cố gắng nhé!
      </p>
    </div>
  );
}
