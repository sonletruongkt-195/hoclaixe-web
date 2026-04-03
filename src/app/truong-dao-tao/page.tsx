'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import styles from './page.module.css';

// Provider types
type ProviderType = 'center' | 'instructor';

interface Provider {
  id: number;
  name: string;
  type: ProviderType;
  location: string;
  rating: number;
  reviews: number;
  price: string;
  courses: string[];
  badge: string | null;
}

const mockProviders: Provider[] = [
  { id: 1, name: 'Trung tâm Đào tạo Lái xe Trường Sa', type: 'center', location: 'Hà Nội', rating: 4.9, reviews: 1240, price: '9.500.000', courses: ['B1', 'B2', 'C'], badge: 'Đề xuất' },
  { id: 2, name: 'Trường Đào tạo Lái xe Thăng Long', type: 'center', location: 'Hà Nội', rating: 4.7, reviews: 856, price: '8.200.000', courses: ['B1', 'B2'], badge: null },
  { id: 3, name: 'Trung tâm Lái xe An Phát', type: 'center', location: 'TP. Hồ Chí Minh', rating: 4.8, reviews: 2100, price: '10.000.000', courses: ['B1', 'B2', 'C', 'D'], badge: 'Phổ biến' },
  { id: 4, name: 'Trường Đào tạo Bình Dương Motor', type: 'center', location: 'Bình Dương', rating: 4.6, reviews: 445, price: '7.500.000', courses: ['B1', 'B2'], badge: null },
  { id: 5, name: 'Trung tâm Lái xe Miền Trung', type: 'center', location: 'Đà Nẵng', rating: 4.8, reviews: 690, price: '8.800.000', courses: ['B1', 'B2', 'C'], badge: null },
  { id: 6, name: 'Thầy Hùng Dạy Lái Chuyên Nghiệp', type: 'instructor', location: 'Hà Nội', rating: 4.5, reviews: 380, price: '4.000.000', courses: ['B1', 'B2'], badge: 'Thầy giỏi' },
  { id: 7, name: 'Cô Lan Bổ túc Tay lái', type: 'instructor', location: 'TP. Hồ Chí Minh', rating: 4.9, reviews: 520, price: '3.500.000', courses: ['B1', 'B2'], badge: 'Siêu nhiệt tình' },
  { id: 8, name: 'Thầy Minh Sa Hình Thực Chiến', type: 'instructor', location: 'Đà Nẵng', rating: 4.7, reviews: 140, price: '4.500.000', courses: ['B2', 'C'], badge: null },
];

export default function TruongDaoTaoPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [location, setLocation] = useState('Tất cả');
  const [providerType, setProviderType] = useState<'all' | 'center' | 'instructor'>('all');
  const [licenseType, setLicenseType] = useState('Tất cả');

  // Locations set
  const locations = useMemo(() => Array.from(new Set(mockProviders.map(p => p.location))), []);

  // Filtered providers
  const filteredProviders = useMemo(() => {
    return mockProviders.filter((p) => {
      // Filter by type
      if (providerType !== 'all' && p.type !== providerType) return false;
      // Filter by location
      if (location !== 'Tất cả' && p.location !== location) return false;
      // Filter by license
      if (licenseType !== 'Tất cả' && !p.courses.includes(licenseType)) return false;
      // Filter by search query
      if (searchQuery.trim() !== '' && !p.name.toLowerCase().includes(searchQuery.toLowerCase())) return false;
      
      return true;
    });
  }, [providerType, location, licenseType, searchQuery]);

  return (
    <div className={styles.page}>
      <div className={styles.hero}>
        <div className="container">
          <div className={styles.breadcrumb}>
            <Link href="/">Trang chủ</Link><span>/</span><span>Trường đào tạo</span>
          </div>
          <h1 className={styles.heroTitle}>Tìm Trường & Giáo viên Lái xe</h1>
          <p className={styles.heroDesc}>Kết nối hàng nghìn trung tâm và giáo viên lái xe uy tín trên toàn quốc. Đặt lịch học thử ngay!</p>

          {/* Search bar & Type Toggles */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '64rem', margin: '0 auto' }}>
            
            {/* Main Search Input */}
            <div className={styles.searchBar}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
              </svg>
              <input 
                placeholder="Tìm trung tâm hoặc tên thầy/cô..." 
                className={styles.searchInput} 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <select className={styles.locationSelect} value={location} onChange={(e) => setLocation(e.target.value)}>
                <option value="Tất cả">📍 Tất cả tỉnh thành</option>
                {locations.map(loc => (
                  <option key={loc} value={loc}>{loc}</option>
                ))}
              </select>
            </div>

            {/* Provider Type Filters */}
            <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center' }}>
              <button 
                onClick={() => setProviderType('all')}
                className={`btn btn-sm ${providerType === 'all' ? 'btn-primary' : 'btn-outline'}`}
                style={{ borderRadius: '2rem' }}
              >
                Tất cả loại hình
              </button>
              <button 
                onClick={() => setProviderType('center')}
                className={`btn btn-sm ${providerType === 'center' ? 'btn-primary' : 'btn-outline'}`}
                style={{ borderRadius: '2rem' }}
              >
                🏢 Trung tâm Đào tạo
              </button>
              <button 
                onClick={() => setProviderType('instructor')}
                className={`btn btn-sm ${providerType === 'instructor' ? 'btn-primary' : 'btn-outline'}`}
                style={{ borderRadius: '2rem' }}
              >
                👨‍🏫 Thầy/Cô Bổ túc
              </button>
            </div>

          </div>
        </div>
      </div>

      <div className="container" style={{ padding: '2rem 1.5rem 4rem' }}>
        {/* Course Filters */}
        <div className={styles.filterRow}>
          <div className={styles.filterGroup}>
            <span className={styles.filterLabel}>Hạng bằng:</span>
            {['Tất cả', 'B1', 'B2', 'C', 'D', 'E'].map(f => (
              <button 
                key={f} 
                onClick={() => setLicenseType(f)}
                className={`${styles.filterChip} ${licenseType === f ? styles.chipActive : ''}`}
              >
                {f}
              </button>
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
          <p className={styles.resultCount}>{filteredProviders.length} kết quả phù hợp</p>
          
          {filteredProviders.length === 0 ? (
            <div style={{ padding: '4rem', textAlign: 'center', color: 'var(--color-outline)' }}>
              <span className="material-symbols-outlined" style={{ fontSize: '3rem', marginBottom: '1rem' }}>search_off</span>
              <p>Không tìm thấy trung tâm hoặc giáo viên nào phù hợp với bộ lọc hiện tại.</p>
              <button onClick={() => { setLocation('Tất cả'); setProviderType('all'); setLicenseType('Tất cả'); setSearchQuery(''); }} className="btn btn-primary" style={{ marginTop: '1rem' }}>Xóa bộ lọc</button>
            </div>
          ) : (
            <div className={styles.schoolGrid}>
              {filteredProviders.map((provider) => (
                <div key={provider.id} className={`card ${styles.schoolCard}`}>
                  {provider.badge && (
                    <div className={`badge ${styles.schoolBadge} ${provider.badge === 'Đề xuất' ? 'badge-primary' : 'badge-secondary'}`}>
                      {provider.badge === 'Đề xuất' ? '⭐ ' : '🔥 '}{provider.badge}
                    </div>
                  )}
                  <Link href={`/truong-dao-tao/${provider.id}`} className={styles.schoolImg}>
                    <div className={styles.schoolImgPlaceholder}>
                      {provider.type === 'center' ? '🏫' : '👨‍🏫'}
                    </div>
                  </Link>
                  <div className={styles.schoolInfo}>
                    <div style={{ fontSize: '0.625rem', fontWeight: 700, color: 'var(--color-primary)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.25rem' }}>
                      {provider.type === 'center' ? 'TRUNG TÂM SÁT HẠCH' : 'GIÁO VIÊN BỔ TÚC'}
                    </div>
                    <Link href={`/truong-dao-tao/${provider.id}`}>
                      <h3 className={styles.schoolName} style={{ cursor: 'pointer' }}>{provider.name}</h3>
                    </Link>
                    <div className={styles.schoolLocation}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ flexShrink: 0 }}>
                        <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0z"/>
                        <circle cx="12" cy="10" r="3"/>
                      </svg>
                      {provider.location}
                    </div>
                    <div className={styles.schoolRating}>
                      <span className={styles.stars}>{'★'.repeat(Math.floor(provider.rating))}</span>
                      <span className={styles.ratingNum}>{provider.rating}</span>
                      <span className={styles.reviewCount}>({provider.reviews} đánh giá)</span>
                    </div>
                    <div className={styles.courses}>
                      {provider.courses.map(c => (
                        <span key={c} className="badge badge-primary" style={{ fontSize: '0.625rem' }}>Bằng {c}</span>
                      ))}
                    </div>
                  </div>
                  <div className={styles.schoolFooter}>
                    <div>
                      <div className={styles.priceLabel}>Học phí từ</div>
                      <div className={styles.price}>{provider.price}đ</div>
                    </div>
                    <Link href={`/truong-dao-tao/${provider.id}`} className="btn btn-cta btn-sm">
                      Đặt lịch học
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
