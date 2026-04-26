import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useProducts } from "@/hooks/useProducts";

export function NewArrivals() {
  const { data: products = [] } = useProducts();
  const newProducts = products.slice(0, 3);

  if (newProducts.length === 0) return null;

  return (
    <section className="py-12 ">
      <div className="container mx-auto px-4">
        <h2 className="text-6xl font-bold text-center mb-4 text-[#260b05]">
          | New Collections |
        </h2>
        <h6 className="text-center text-[#260b05] mb-8">
          where fashion meet elegance
        </h6>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {newProducts.map((product) => (
            <div
              key={product._id}
              className="group relative overflow-hidden rounded-lg"
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={
                    product.images[0] ||
                    "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400"
                  }
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4 flex justify-center">
                <Link to="/products">
                  <Button className="w-full bg-[#d2a292] text-[#260b05] hover:bg-[#d2a292]/90 py-5 px-5">
                    Shop Now
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
