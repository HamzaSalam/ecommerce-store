import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Product } from '@/types/product';
import { ShoppingCart } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const defaultImage = 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400';

  return (
    <Card className="overflow-hidden h-full flex flex-col">
      <div className="aspect-square relative bg-gray-100">
        <img
          src={product.images[0] || defaultImage}
          alt={product.title}
          className="object-cover w-full h-full"
        />
        <Badge className="absolute top-2 right-2" variant="secondary">
          {product.category}
        </Badge>
      </div>

      <CardHeader className="p-4 pb-0">
        <h3 className="font-semibold text-lg line-clamp-1">{product.title}</h3>
      </CardHeader>

      <CardContent className="p-4 pt-2 flex-1">
        <p className="text-sm text-muted-foreground line-clamp-2 mb-2">
          {product.description || 'No description available'}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold">Rs. {product.price.toLocaleString()}</span>
          <Badge variant={product.stock > 0 ? 'default' : 'destructive'}>
            {product.stock > 0 ? `${product.stock} in stock` : 'Out of stock'}
          </Badge>
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0">
        <Button className="w-full gap-2" disabled={product.stock === 0}>
          <ShoppingCart className="w-4 h-4" />
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
}