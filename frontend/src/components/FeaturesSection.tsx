import { Shield, Truck, CreditCard } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Premium Quality',
    description: 'Handpicked fabrics with finest craftsmanship',
  },
  {
    icon: Truck,
    title: 'Fast Delivery',
    description: 'Quick and reliable shipping across Pakistan',
  },
  {
    icon: CreditCard,
    title: 'Cash on Delivery',
    description: 'Pay when you receive your order',
  },
];

export function FeaturesSection() {
  return (
    <section className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-12">Why Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center p-6">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}