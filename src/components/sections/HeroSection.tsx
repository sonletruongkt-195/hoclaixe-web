'use client';

import Link from 'next/link';
import styles from './HeroSection.module.css';
import { useState } from 'react';

export default function HeroSection() {
  const [search, setSearch] = useState('');

  return (
    <section className={styles.hero}>
      <div className={styles.bgBlob1} />
      <div className={styles.bgBlob2} />
      <div className={styles.bgBlob3} />

      <div className={`container ${styles.inner}`}>
        <div className={styles.content}>
          {/* Label */}
          <div className={`badge badge-primary ${styles.badge}`}>
            <span>🚗</span>
            Nền tảng #1 Việt Nam
          </div>

          {/* Headline */}
          <h1 className={styles.headline}>
            Lái xe an toàn,
            <br />
            <span className={styles.headlineAccent}>thi là đỗ</span>
          </h1>

          <p className={styles.subtext}>
            Nền tảng học lái xe thông minh giúp bạn làm chủ vô lăng và nắm chắc tấm bằng lái trong tay. 
            Ôn tập khoa học — Mô phỏng thực tế — Kết nối giáo viên tốt nhất.
          </p>

          {/* Search bar */}
          <div className={styles.searchBar}>
            <svg className={styles.searchIcon} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8"/>
              <path d="m21 21-4.35-4.35"/>
            </svg>
            <input
              type="text"
              placeholder="Tìm trung tâm hoặc giáo viên dạy lái xe gần bạn..."
              className={styles.searchInput}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <Link href={`/truong-dao-tao${search ? `?q=${encodeURIComponent(search)}` : ''}`} className={`btn btn-primary ${styles.searchBtn}`}>
              Tìm kiếm
            </Link>
          </div>

          {/* CTA buttons */}
          <div className={styles.ctas}>
            <Link href="/ly-thuyet" className="btn btn-cta btn-lg">
              Bắt đầu ôn tập miễn phí
            </Link>
            <Link href="/mo-phong" className="btn btn-ghost btn-lg">
              Xem mô phỏng
            </Link>
          </div>

          {/* Stats row */}
          <div className={styles.stats}>
            {[
              { value: '100K+', label: 'Học viên đã đỗ' },
              { value: '600', label: 'Câu hỏi lý thuyết' },
              { value: '120', label: 'Tình huống mô phỏng' },
              { value: '98%', label: 'Tỷ lệ đỗ lần đầu' },
            ].map((stat) => (
              <div key={stat.label} className={styles.stat}>
                <div className={styles.statValue}>{stat.value}</div>
                <div className={styles.statLabel}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Hero visual */}
        <div className={styles.visual}>
          <div className={styles.visualCard}>
            <div className={styles.visualHeader}>
              <div className={styles.visualDot} style={{ background: '#ef4444' }} />
              <div className={styles.visualDot} style={{ background: '#f59e0b' }} />
              <div className={styles.visualDot} style={{ background: '#10b981' }} />
              <span className={styles.visualTitle}>Đề thi thử số 47</span>
            </div>
            <div className={styles.questionCard}>
              <div className={styles.questionNum}>Câu 15 / 35</div>
              <div className={styles.questionText}>
                Khi đèn tín hiệu giao thông màu vàng bật sáng, người điều khiển phương tiện phải xử lý như thế nào?
              </div>
              <div className={styles.options}>
                {['Dừng lại trước vạch dừng', 'Tiếp tục đi nếu đã qua vạch dừng', 'Tăng tốc để vượt qua', 'Rẽ trái'].map((opt, i) => (
                  <div key={i} className={`${styles.option} ${i === 0 ? styles.optionCorrect : i === 2 ? styles.optionSelected : ''}`}>
                    <span className={styles.optionLetter}>{String.fromCharCode(65 + i)}</span>
                    {opt}
                    {i === 0 && <span className={styles.optionCheck}>✓</span>}
                    {i === 2 && <span className={styles.optionX}>✗</span>}
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.progressRow}>
              <span className={styles.progressLabel}>Tiến độ bài thi</span>
              <span className={styles.progressNum}>15/35</span>
            </div>
            <div className="progress-track">
              <div className="progress-fill" style={{ width: '42.8%' }} />
            </div>
          </div>

          {/* Floating badges */}
          <div className={`${styles.floatBadge} ${styles.floatBadge1}`}>
            <span>🎯</span> AI gợi ý câu yếu
          </div>
          <div className={`${styles.floatBadge} ${styles.floatBadge2}`}>
            <span>✅</span> Đỗ lần đầu!
          </div>
        </div>
      </div>
    </section>
  );
}
