import { HeroSection } from "@/components/HeroSection";
import { FeaturedProducts } from "@/components/FeaturedProducts";
import { FeaturesSection } from "@/components/FeaturesSection";
import { Footer } from "@/components/Footer";
import NavBar from "@/components/NavBar";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <NavBar />
      <HeroSection />
      <FeaturedProducts />
      <FeaturesSection />
      <Footer />
    </div>
  );
}
