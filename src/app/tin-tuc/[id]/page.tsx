import { createClient } from '@/utils/supabase/server';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import styles from './page.module.css';

export default async function NewsDetail({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const supabase = await createClient();

  const { data: article, error } = await supabase
    .from('news')
    .select('*')
    .eq('id', resolvedParams.id)
    .single();

  if (error || !article) {
    notFound();
  }

  return (
    <div className={styles.page}>
      <div className="container" style={{ padding: '3rem 1.5rem', maxWidth: '800px' }}>
        
        {/* Breadcrumbs */}
        <div className={styles.breadcrumb}>
          <Link href="/">Trang chủ</Link>
          <span>/</span>
          <Link href="/cong-cu">Tin tức & Công cụ</Link>
          <span>/</span>
          <span style={{ color: 'var(--color-on-surface)' }}>{article.title}</span>
        </div>

        {/* Bài Báo */}
        <article className={styles.article}>
          <div className={styles.meta}>
            <span className={styles.source}>{article.source}</span>
            <span className={styles.time}>{article.time_posted}</span>
          </div>

          <h1 className={styles.title}>{article.title}</h1>

          {article.image_url && (
            <div className={styles.imageWrapper}>
              <img src={article.image_url} alt={article.title} className={styles.featuredImage} />
            </div>
          )}

          <div className={styles.content}>
            {article.content.split('\n').map((paragraph: string, index: number) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </article>

        <div className={styles.backWrapper}>
           <Link href="/cong-cu" className="btn btn-ghost" style={{ paddingLeft: 0 }}>
             &larr; Quay lại danh sách tin
           </Link>
        </div>

      </div>
    </div>
  );
}
