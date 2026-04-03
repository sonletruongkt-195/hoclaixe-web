'use client';

import { useState } from 'react';
import styles from './page.module.css';

export default function ToolsSidebar() {
  const [licensePlate, setLicensePlate] = useState('');
  const [carPrice, setCarPrice] = useState('');
  const [province, setProvince] = useState('Hà Nội');

  const carPriceNum = parseFloat(carPrice.replace(/,/g, '')) || 0;
  const registrationFee = province === 'Hà Nội' || province === 'TP. Hồ Chí Minh' ? carPriceNum * 0.12 : carPriceNum * 0.11;
  const insurance = 1500000;
  const licensePlateFee = 20000000;
  const total = carPriceNum + registrationFee + insurance + licensePlateFee;

  const formatVND = (n: number) => n.toLocaleString('vi-VN') + ' đ';

  return (
    <div className={styles.sidebar}>
      {/* Widget 1: Tra cứu phạt nguội */}
      <div className={styles.lookupCard}>
        <h2 className={styles.lookupTitle}>Tra cứu rủi ro (phạt nguội)</h2>
        <p className={styles.lookupDesc}>Kiểm tra lỗi vi phạm giao thông chưa đóng phạt của xe bạn</p>

        <div className={styles.lookupForm}>
          <div className={styles.inputGroup} style={{ width: '100%' }}>
            <label className={styles.label}>Nhập biển số xe (VD: 51A-12345)</label>
            <div className={styles.plateInput}>
              <span className={styles.plateFlag}>🇻🇳</span>
              <input
                type="text"
                className={styles.plateField}
                value={licensePlate}
                onChange={e => setLicensePlate(e.target.value.toUpperCase())}
              />
            </div>
          </div>
          <button className="btn btn-primary" style={{ width: '100%', marginTop: '0.75rem', justifyContent: 'center' }}>
            🔍 Tra cứu ngay
          </button>
        </div>

        <div className={styles.lookupResult}>
          <div className={styles.resultEmpty}>
            <div className={styles.resultEmptyIcon}>🔰</div>
            <p className={styles.resultNote}>Dữ liệu được cập nhật từ Cục CSGT</p>
          </div>
        </div>
      </div>

      {/* Widget 2: Tính thuế */}
      <div className={styles.taxCard}>
        <h2 className={styles.lookupTitle}>Dự toán giá lăn bánh xe ô tô</h2>

        <div className={styles.taxForm}>
          <div className={styles.inputGroup}>
            <label className={styles.label}>Nhập giá xe (VNĐ)</label>
            <input
              type="text"
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
              <option>Tỉnh khác</option>
            </select>
          </div>
        </div>

        {carPriceNum > 0 && (
          <div className={styles.taxResult}>
            <h3 className={styles.taxResultTitle}>Chi phí ước tính</h3>
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
  );
}
