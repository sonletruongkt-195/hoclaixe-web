import styles from './FuelPriceWidget.module.css';

const fuelPrices = [
  { type: 'RON 95-III', price: '24.990', unit: 'đ/lít', change: '-500', up: false },
  { type: 'E5 RON 92', price: '23.750', unit: 'đ/lít', change: '+200', up: true },
  { type: 'Diesel 0.05S', price: '20.430', unit: 'đ/lít', change: '-300', up: false },
];

export default function FuelPriceWidget() {
  const now = new Date();
  const dateStr = now.toLocaleDateString('vi-VN', { day: '2-digit', month: '2-digit', year: 'numeric' });

  return (
    <div className={`card ${styles.widget}`} style={{ marginTop: '1.5rem', marginBottom: '1.5rem' }}>
      <div className={styles.header}>
        <div>
          <span className="section-label">Cập nhật hôm nay</span>
          <h3 className={styles.title}>Giá xăng dầu</h3>
        </div>
        <span className={styles.date}>{dateStr}</span>
      </div>

      <div className={styles.list}>
        {fuelPrices.map((fuel) => (
          <div key={fuel.type} className={styles.fuelItem}>
            <div className={styles.fuelIcon}>⛽</div>
            <div className={styles.fuelInfo}>
              <div className={styles.fuelType}>{fuel.type}</div>
              <div className={styles.fuelUnit}>{fuel.unit}</div>
            </div>
            <div className={styles.fuelRight}>
              <div className={styles.fuelPrice}>{fuel.price}</div>
              <div className={`${styles.fuelChange} ${fuel.up ? styles.up : styles.down}`}>
                {fuel.up ? '↑' : '↓'} {fuel.change}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.note}>
        Nguồn: Bộ Công Thương · Cập nhật định kỳ
      </div>
    </div>
  );
}
