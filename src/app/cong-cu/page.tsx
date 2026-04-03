import Link from 'next/link';
import { createClient } from '@/utils/supabase/server';
import styles from './page.module.css';
import ToolsSidebar from './ToolsSidebar';

export default async function CongCuPage() {
  const supabase = await createClient();
  
  // Real-time Fetch from Database
  const { data: newsItems } = await supabase
    .from('news')
    .select('*')
    .order('created_at', { ascending: false });

  return (
    <div className={styles.page}>
      <div className={styles.hero}>
        <div className="container">
          <div className={styles.breadcrumb}>
            <Link href="/">Trang chủ</Link><span>/</span><span>Tin tức & Công cụ</span>
          </div>
          <h1 className={styles.heroTitle}>Cập nhật Tin tức Giao thông </h1>
          <p className={styles.heroDesc}>Đọc bản tin nóng mỗi ngày và sử dụng bộ công cụ hỗ trợ tài xế đắc lực ngay trên điện thoại</p>
        </div>
      </div>

      <div className="container" style={{ padding: '3rem 1.5rem 5rem' }}>
        <div className={styles.pageLayout}>
          
          {/* Cột chính: Tin tức (Render Server-Side) */}
          <div className={styles.mainContent}>
            <h2 className={styles.sectionTitle}>Bản tin Giao thông nổi bật hôm nay</h2>
            <div className={styles.newsList}>
              {newsItems && newsItems.map((item: any) => (
                <Link href={`/tin-tuc/${item.id}`} key={item.id} className={styles.newsCard}>
                  {item.image_url ? (
                    <img src={item.image_url} alt={item.title} className={styles.newsImage} />
                  ) : (
                    <div className={styles.newsImage} style={{ background: 'var(--color-surface-container-high)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem' }}>
                      {item.icon || '📰'}
                    </div>
                  )}
                  <div className={styles.newsInfo}>
                    <h3 className={styles.newsTitle}>{item.title}</h3>
                    <p className={styles.newsExcerpt}>
                      {item.content}
                    </p>
                    <div className={styles.newsMeta}>
                      <span className={styles.newsSource}>{item.source}</span>
                      <span>{item.time_posted}</span>
                    </div>
                  </div>
                </Link>
              ))}
              
              {!newsItems || newsItems.length === 0 && (
                <p>Đang tải tin tức...</p>
              )}
            </div>
          </div>

          {/* Cột bên: Trợ lý tài khoản & Công cụ (Client Component) */}
          <ToolsSidebar />
        </div>
      </div>
    </div>
  );
}
