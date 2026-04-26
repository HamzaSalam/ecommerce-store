import { HeroSection } from '@/components/HeroSection';
import { FeaturedProducts } from '@/components/FeaturedProducts';
import { FeaturesSection } from '@/components/FeaturesSection';
import { Footer } from '@/components/Footer';

export default function HomePage() {


  return (
    <div className="min-h-screen">
      <HeroSection />
      <FeaturedProducts />
      <FeaturesSection />
      <Footer />
    </div>
  );
}