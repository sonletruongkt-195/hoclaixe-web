'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './page.module.css';

const laws = [
  { id: 1, title: 'Nghị định 100/2019/NĐ-CP', desc: 'Quy định xử phạt vi phạm hành chính trong lĩnh vực giao thông đường bộ và đường sắt', date: '30/12/2019', isNew: false },
  { id: 2, title: 'Nghị định 123/2021/NĐ-CP', desc: 'Sửa đổi, bổ sung một số điều của Nghị định 100/2019', date: '28/12/2021', isNew: false },
  { id: 3, title: 'Luật Trật tự, an toàn giao thông đường bộ 2024', desc: 'Luật mới có hiệu lực từ 1/1/2025, nhiều thay đổi quan trọng về xử lý vi phạm', date: '27/06/2024', isNew: true },
];

export default function CongCuPage() {
  const [activeTab, setActiveTab] = useState(0);
  const [licensePlate, setLicensePlate] = useState('');
  const [carPrice, setCarPrice] = useState('');
  const [province, setProvince] = useState('Hà Nội');

  const carPriceNum = parseFloat(carPrice.replace(/,/g, '')) || 0;
  const registrationFee = province === 'Hà Nội' || province === 'TP. Hồ Chí Minh' ? carPriceNum * 0.12 : carPriceNum * 0.11;
  const insurance = 1500000;
  const licensePlateFee = 20000000;
  const total = carPriceNum + registrationFee + insurance + licensePlateFee;

  const formatVND = (n: number) => n.toLocaleString('vi-VN') + ' đ';

  const tabs = ['Tra cứu phạt nguội', 'Tính thuế & Lăn bánh', 'Thư viện Pháp luật'];

  return (
    <div className={styles.page}>
      <div className={styles.hero}>
        <div className="container">
          <div className={styles.breadcrumb}>
            <Link href="/">Trang chủ</Link><span>/</span><span>Công cụ</span>
          </div>
          <h1 className={styles.heroTitle}>Công cụ & Pháp luật Giao thông</h1>
          <p className={styles.heroDesc}>Tra cứu phạt nguội, tính thuế lăn bánh, và thư viện pháp luật giao thông cập nhật nhất</p>
        </div>
      </div>

      <div className="container" style={{ padding: '2rem 1.5rem 4rem' }}>
        {/* Tabs */}
        <div className={styles.tabs}>
          {tabs.map((tab, i) => (
            <button
              key={tab}
              className={`${styles.tab} ${activeTab === i ? styles.tabActive : ''}`}
              onClick={() => setActiveTab(i)}
            >
              {['🚔', '💰', '📋'][i]} {tab}
            </button>
          ))}
        </div>

        {/* Tab 0: Tra cứu phạt nguội */}
        {activeTab === 0 && (
          <div className={styles.tabContent}>
            <div className={styles.lookupCard}>
              <h2 className={styles.lookupTitle}>Tra cứu vi phạm giao thông (phạt nguội)</h2>
              <p className={styles.lookupDesc}>Nhập biển số xe để kiểm tra các vi phạm giao thông chưa xử lý</p>

              <div className={styles.lookupForm}>
                <div className={styles.inputGroup}>
                  <label className={styles.label}>Biển số xe</label>
                  <div className={styles.plateInput}>
                    <span className={styles.plateFlag}>🇻🇳</span>
                    <input
                      type="text"
                      placeholder="VD: 51A-12345"
                      className={styles.plateField}
                      value={licensePlate}
                      onChange={e => setLicensePlate(e.target.value.toUpperCase())}
                    />
                  </div>
                </div>
                <button className="btn btn-primary btn-lg">
                  🔍 Tra cứu ngay
                </button>
              </div>

              <div className={styles.lookupResult}>
                <div className={styles.resultEmpty}>
                  <div className={styles.resultEmptyIcon}>🔍</div>
                  <p>Nhập biển số xe và nhấn tra cứu để kiểm tra vi phạm giao thông</p>
                  <p className={styles.resultNote}>Dữ liệu được cập nhật từ hệ thống của Cục CSGT</p>
                </div>
              </div>

              <div className={styles.lookupNote}>
                <strong>Lưu ý:</strong> Tra cứu từ nguồn chính thống của Cục Cảnh sát giao thông - Bộ Công An. Kết quả chỉ mang tính tham khảo.
              </div>
            </div>
          </div>
        )}

        {/* Tab 1: Tính thuế */}
        {activeTab === 1 && (
          <div className={styles.tabContent}>
            <div className={styles.taxCard}>
              <h2 className={styles.lookupTitle}>Công cụ tính chi phí lăn bánh xe ô tô</h2>
              <p className={styles.lookupDesc}>Nhập giá xe và tỉnh thành để tính tổng chi phí thực tế</p>

              <div className={styles.taxForm}>
                <div className={styles.inputGroup}>
                  <label className={styles.label}>Giá xe (VNĐ)</label>
                  <input
                    type="text"
                    placeholder="VD: 500,000,000"
                    className={`${styles.taxInput}`}
                    value={carPrice}
                    onChange={e => setCarPrice(e.target.value)}
                  />
                </div>
                <div className={styles.inputGroup}>
                  <label className={styles.label}>Tỉnh / Thành phố</label>
                  <select className={styles.taxInput} value={province} onChange={e => setProvince(e.target.value)}>
                    <option>Hà Nội</option>
                    <option>TP. Hồ Chí Minh</option>
                    <option>Đà Nẵng</option>
                    <option>Hải Phòng</option>
                    <option>Tỉnh khác</option>
                  </select>
                </div>
              </div>

              {carPriceNum > 0 && (
                <div className={styles.taxResult}>
                  <h3 className={styles.taxResultTitle}>Chi phí lăn bánh ước tính</h3>
                  {[
                    { label: 'Giá xe', value: carPriceNum, highlight: false },
                    { label: `Phí trước bạ (${province === 'Hà Nội' || province === 'TP. Hồ Chí Minh' ? '12%' : '11%'})`, value: registrationFee, highlight: false },
                    { label: 'Phí cấp biển số', value: licensePlateFee, highlight: false },
                    { label: 'Bảo hiểm TNDS', value: insurance, highlight: false },
                    { label: 'Tổng chi phí thực tế', value: total, highlight: true },
                  ].map((row) => (
                    <div key={row.label} className={`${styles.taxRow} ${row.highlight ? styles.taxRowTotal : ''}`}>
                      <span>{row.label}</span>
                      <strong style={{ color: row.highlight ? 'var(--color-primary)' : 'var(--color-on-surface)' }}>
                        {formatVND(row.value)}
                      </strong>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {/* Tab 2: Pháp luật */}
        {activeTab === 2 && (
          <div className={styles.tabContent}>
            <h2 className={styles.sectionTitle}>Thư viện Văn bản Pháp luật Giao thông</h2>
            <div className={styles.lawList}>
              {laws.map(law => (
                <div key={law.id} className={`card ${styles.lawCard}`}>
                  <div className={styles.lawHeader}>
                    <div>
                      <div className={styles.lawTitle}>
                        {law.title}
                        {law.isNew && <span className="badge badge-error" style={{ marginLeft: '0.5rem' }}>Mới</span>}
                      </div>
                      <div className={styles.lawDate}>Ngày ban hành: {law.date}</div>
                    </div>
                    <button className="btn btn-ghost btn-sm">📄 Xem chi tiết</button>
                  </div>
                  <p className={styles.lawDesc}>{law.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
