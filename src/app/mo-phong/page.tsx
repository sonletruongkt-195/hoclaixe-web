'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './page.module.css';

const situations = Array.from({ length: 24 }, (_, i) => ({
  id: i + 1,
  title: `Tình huống ${i + 1}`,
  category: i % 3 === 0 ? 'Giao lộ' : i % 3 === 1 ? 'Đường đô thị' : 'Đường cao tốc',
  difficulty: i % 4 === 0 ? 'Khó' : i % 2 === 0 ? 'Trung bình' : 'Dễ',
  done: i < 12,
  reactionTime: i < 12 ? `${(Math.random() * 0.8 + 0.3).toFixed(2)}s` : null,
}));

const categories = ['Tất cả', 'Giao lộ', 'Đường đô thị', 'Đường cao tốc'];

export default function MoPhongPage() {
  const [activeCategory, setActiveCategory] = useState('Tất cả');
  const [selected, setSelected] = useState<number | null>(null);

  const filtered = activeCategory === 'Tất cả'
    ? situations
    : situations.filter(s => s.category === activeCategory);

  const doneCnt = situations.filter(s => s.done).length;

  return (
    <div className={styles.page}>
      <div className={styles.hero}>
        <div className="container">
          <div className={styles.breadcrumb}>
            <Link href="/">Trang chủ</Link><span>/</span><span>Mô phỏng</span>
          </div>
          <h1 className={styles.heroTitle}>Mô phỏng 120 Tình huống Giao thông</h1>
          <p className={styles.heroDesc}>Video HD thực tế — Phân tích phản xạ từng mili giây — Replay & giải thích chi tiết</p>
          <div className={styles.heroRow}>
            <div className={styles.heroStats}>
              <div className={styles.hStat}><span className={styles.hNum}>{doneCnt}/120</span><span className={styles.hLabel}>Đã xem</span></div>
              <div className={styles.hStat}><span className={styles.hNum}>{Math.round(doneCnt/120*100)}%</span><span className={styles.hLabel}>Hoàn thành</span></div>
              <div className={styles.hStat}><span className={styles.hNum}>0.62s</span><span className={styles.hLabel}>Phản xạ TB</span></div>
            </div>
          </div>
        </div>
      </div>

      <div className="container" style={{ padding: '2rem 1.5rem 4rem' }}>
        {/* Current playing */}
        <div className={`card ${styles.playerCard}`}>
          <div className={styles.playerLeft}>
            <div className={styles.videoPlaceholder}>
              <div className={styles.playBtn}>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="white">
                  <polygon points="5 3 19 12 5 21 5 3"/>
                </svg>
              </div>
              <div className={styles.videoLabel}>Tình huống 13: Xe vượt đèn đỏ</div>
              <div className={styles.videoBar}>
                <div className={styles.videoProgress} style={{ width: '35%' }} />
                <div className={styles.videoThumb} style={{ left: '35%' }} />
              </div>
              <div className={styles.videoTime}>0:14 / 0:40</div>
            </div>
          </div>
          <div className={styles.playerRight}>
            <h3 className={styles.playerTitle}>Tình huống 13 — Xe vượt đèn đỏ</h3>
            <p className={styles.playerDesc}>Phương tiện phía trước vượt đèn đỏ. Bạn cần nhấn phanh tại thời điểm đúng để an toàn nhất.</p>
            <div className={styles.playerMeta}>
              <span className="badge badge-error">⚠ Nhận diện nguy hiểm</span>
              <span className="badge badge-primary">Đường đô thị</span>
            </div>
            <div className={styles.tip}>
              💡 <strong>Mẹo:</strong> Nhấn Space khi xe phía trước bắt đầu vượt đèn — không phải khi xe đã vượt.
            </div>
            <button className="btn btn-primary" style={{ marginTop: '1rem' }}>
              ▶ Bắt đầu luyện tập
            </button>
          </div>
        </div>

        {/* Filter */}
        <div className={styles.filterRow}>
          <h2 className={styles.sectionTitle}>Danh sách 120 tình huống</h2>
          <div className={styles.categoryTabs}>
            {categories.map(cat => (
              <button
                key={cat}
                className={`${styles.catTab} ${activeCategory === cat ? styles.catActive : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className={styles.grid}>
          {filtered.map((sit) => (
            <button
              key={sit.id}
              className={`${styles.situCard} ${sit.done ? styles.sitDone : ''} ${selected === sit.id ? styles.sitSelected : ''}`}
              onClick={() => setSelected(sit.id)}
            >
              <div className={styles.sitNum}>{sit.id}</div>
              <div className={styles.sitContent}>
                <div className={styles.sitTitle}>{sit.title}</div>
                <div className={styles.sitMeta}>{sit.category}</div>
              </div>
              {sit.done ? (
                <div className={styles.sitDoneIcon}>✓</div>
              ) : (
                <div className={styles.sitPlay}>▶</div>
              )}
              {sit.reactionTime && (
                <div className={styles.sitTime}>{sit.reactionTime}</div>
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
