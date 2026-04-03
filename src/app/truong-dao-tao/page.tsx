import type { Metadata } from 'next';
import Link from 'next/link';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Trường đào tạo & Giáo viên lái xe - Marketplace kết nối toàn quốc',
};

const schools = [
  { id: 1, name: 'Trung tâm Đào tạo Lái xe Trường Sa', location: 'Quận Hoàn Kiếm, Hà Nội', rating: 4.9, reviews: 1240, price: '9.500.000', courses: ['B1', 'B2', 'C'], badge: 'Đề xuất' },
  { id: 2, name: 'Trường Đào tạo Lái xe Thăng Long', location: 'Quận Cầu Giấy, Hà Nội', rating: 4.7, reviews: 856, price: '8.200.000', courses: ['B1', 'B2'], badge: null },
  { id: 3, name: 'Trung tâm Lái xe An Phát', location: 'Quận Bình Thạnh, TP.HCM', rating: 4.8, reviews: 2100, price: '10.000.000', courses: ['B1', 'B2', 'C', 'D'], badge: 'Phổ biến' },
  { id: 4, name: 'Trường Đào tạo Bình Dương Motor', location: 'TP. Thủ Dầu Một, Bình Dương', rating: 4.6, reviews: 445, price: '7.500.000', courses: ['B1', 'B2'], badge: null },
  { id: 5, name: 'Trung tâm Lái xe Miền Trung', location: 'Quận Hải Châu, Đà Nẵng', rating: 4.8, reviews: 690, price: '8.800.000', courses: ['B1', 'B2', 'C'], badge: null },
  { id: 6, name: 'Trường Đào tạo Lái xe Thành Phố', location: 'Quận 7, TP.HCM', rating: 4.5, reviews: 380, price: '9.000.000', courses: ['B1', 'B2'], badge: null },
];

export default function TruongDaoTaoPage() {
  return (
    <div className={styles.page}>
      <div className={styles.hero}>
        <div className="container">
          <div className={styles.breadcrumb}>
            <Link href="/">Trang chủ</Link><span>/</span><span>Trường đào tạo</span>
          </div>
          <h1 className={styles.heroTitle}>Tìm Trường & Giáo viên Lái xe</h1>
          <p className={styles.heroDesc}>Kết nối hàng nghìn trung tâm và giáo viên lái xe uy tín trên toàn quốc. Đặt lịch học thử ngay!</p>

          {/* Search */}
          <div className={styles.searchBar}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
            </svg>
            <input placeholder="Tìm trung tâm hoặc giáo viên..." className={styles.searchInput} />
            <select className={styles.locationSelect}>
              <option>📍 Tất cả tỉnh thành</option>
              <option>Hà Nội</option>
              <option>TP. Hồ Chí Minh</option>
              <option>Đà Nẵng</option>
              <option>Hải Phòng</option>
            </select>
            <button className="btn btn-primary">Tìm kiếm</button>
          </div>
        </div>
      </div>

      <div className="container" style={{ padding: '2rem 1.5rem 4rem' }}>
        {/* Filters */}
        <div className={styles.filterRow}>
          <div className={styles.filterGroup}>
            <span className={styles.filterLabel}>Loại bằng:</span>
            {['Tất cả', 'B1', 'B2', 'C', 'D', 'E'].map(f => (
              <button key={f} className={`${styles.filterChip} ${f === 'Tất cả' ? styles.chipActive : ''}`}>{f}</button>
            ))}
          </div>
          <div className={styles.sortSelect}>
            <label>Sắp xếp:</label>
            <select>
              <option>Đánh giá cao nhất</option>
              <option>Giá thấp nhất</option>
              <option>Gần nhất</option>
            </select>
          </div>
        </div>

        {/* Results */}
        <div className={styles.results}>
          <p className={styles.resultCount}>{schools.length} trung tâm được tìm thấy</p>
          <div className={styles.schoolGrid}>
            {schools.map((school) => (
              <div key={school.id} className={`card ${styles.schoolCard}`}>
                {school.badge && (
                  <div className={`badge ${styles.schoolBadge} ${school.badge === 'Đề xuất' ? 'badge-primary' : 'badge-secondary'}`}>
                    {school.badge === 'Đề xuất' ? '⭐ ' : '🔥 '}{school.badge}
                  </div>
                )}
                <div className={styles.schoolImg}>
                  <div className={styles.schoolImgPlaceholder}>🏫</div>
                </div>
                <div className={styles.schoolInfo}>
                  <h3 className={styles.schoolName}>{school.name}</h3>
                  <div className={styles.schoolLocation}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                    {school.location}
                  </div>
                  <div className={styles.schoolRating}>
                    <span className={styles.stars}>{'★'.repeat(Math.floor(school.rating))}</span>
                    <span className={styles.ratingNum}>{school.rating}</span>
                    <span className={styles.reviewCount}>({school.reviews} đánh giá)</span>
                  </div>
                  <div className={styles.courses}>
                    {school.courses.map(c => (
                      <span key={c} className="badge badge-primary" style={{ fontSize: '0.625rem' }}>Bằng {c}</span>
                    ))}
                  </div>
                </div>
                <div className={styles.schoolFooter}>
                  <div>
                    <div className={styles.priceLabel}>Học phí từ</div>
                    <div className={styles.price}>{school.price}đ</div>
                  </div>
                  <Link href={`/truong-dao-tao/${school.id}`} className="btn btn-cta btn-sm">
                    Đặt lịch học
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
