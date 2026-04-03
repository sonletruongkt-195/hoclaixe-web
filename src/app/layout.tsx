import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: {
    template: '%s | Học Lái Xe Thông Minh',
    default: 'Học Lái Xe Thông Minh - Lái xe an toàn, thi là đỗ',
  },
  description:
    'Nền tảng học lái xe thông minh giúp bạn làm chủ vô lăng và nắm chắc tấm bằng lái. Ôn tập 600 câu lý thuyết, 120 tình huống mô phỏng, sa hình 3D và kết nối trung tâm đào tạo.',
  keywords: ['học lái xe', 'thi bằng lái', 'lý thuyết lái xe', '600 câu hỏi', 'mô phỏng lái xe', 'sa hình'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        <Navbar />
        <main style={{ paddingTop: '64px', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
