import { HeroSection } from "@/components/HeroSection";
import { NewArrivals } from "@/components/NewArrivals";
import { FeaturedProducts } from "@/components/FeaturedProducts";
import { FeaturesSection } from "@/components/FeaturesSection";
import { Footer } from "@/components/Footer";
import NavBar from "@/components/NavBar";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-1">
        <HeroSection />
        <NewArrivals />
        <FeaturedProducts />
        <FeaturesSection />
      </main>
      <Footer />
    </div>
  );
}
