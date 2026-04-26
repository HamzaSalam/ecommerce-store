import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-r from-pink-50 to-purple-50 py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
            Latest Ladies Suits Collection
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            Discover our premium collection of handcrafted ladies suits. Perfect
            designs for every occasion with quality fabrics.
          </p>
          <Button variant="outline">Shop Now</Button>
        </div>
      </div>
    </section>
  );
}
