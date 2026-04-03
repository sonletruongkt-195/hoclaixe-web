import type { Metadata } from 'next';
import HeroSection from '@/components/sections/HeroSection';
import QuickLinksSection from '@/components/sections/QuickLinksSection';
import ProgressWidget from '@/components/sections/ProgressWidget';
import FuelPriceWidget from '@/components/sections/FuelPriceWidget';
import NewsSection from '@/components/sections/NewsSection';
import SocialProof from '@/components/sections/SocialProof';
import FeaturesSection from '@/components/sections/FeaturesSection';

export const metadata: Metadata = {
  title: 'Trang chủ - Nền tảng học lái xe thông minh hàng đầu Việt Nam',
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <QuickLinksSection />
      <div className="container" style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '1.5rem', padding: '0 1.5rem', margin: '0 auto', maxWidth: '1280px' }}>
        <ProgressWidget />
        <FuelPriceWidget />
      </div>
      <NewsSection />
      <SocialProof />
      <FeaturesSection />
    </>
  );
}
