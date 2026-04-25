import mongoose from 'mongoose';
import Product from '../models/product.model.ts';
import 'dotenv/config';

const products = [
  {
    title: 'Embroidered Lawn Suit',
    description: 'Beautiful hand-embroidered lawn suit with delicate chikan work. Perfect for summer festivities.',
    price: 4500,
    images: [
      'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400',
      'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=400',
    ],
    category: 'ladies-suits',
    sizes: ['S', 'M', 'L', 'XL'],
    stock: 25,
  },
  {
    title: 'Silk Printed Suit',
    description: 'Premium silk printed suit with matching dupatta. Elegant design for formal occasions.',
    price: 6200,
    images: [
      'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400',
    ],
    category: 'ladies-suits',
    sizes: ['M', 'L', 'XL'],
    stock: 15,
  },
  {
    title: 'Cotton Chikan Suit',
    description: 'Classic white cotton chikan suit with intricate thread work. Comfortable and stylish.',
    price: 3800,
    images: [
      'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=400',
    ],
    category: 'ladies-suits',
    sizes: ['S', 'M', 'L'],
    stock: 30,
  },
  {
    title: 'Bridal Heavy Suit',
    description: 'Luxurious bridal wear with heavy embellishments and sequin work. Make your special day memorable.',
    price: 15000,
    images: [
      'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400',
      'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=400',
    ],
    category: 'ladies-suits',
    sizes: ['M', 'L', 'XL'],
    stock: 5,
  },
  {
    title: 'Designer Digital Print Suit',
    description: 'Modern digital printed suit with vibrant colors. Trendy and comfortable for everyday wear.',
    price: 2800,
    images: [
      'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400',
    ],
    category: 'ladies-suits',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    stock: 40,
  },
  {
    title: 'Georgette Party Suit',
    description: 'Stylish georgette suit perfect for parties and celebrations. Shimmer finish with elegant drape.',
    price: 5500,
    images: [
      'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=400',
    ],
    category: 'ladies-suits',
    sizes: ['S', 'M', 'L', 'XL'],
    stock: 20,
  },
  {
    title: 'Linen Summer Suit',
    description: 'Lightweight linen suit ideal for hot summer days. Breathable fabric with minimal design.',
    price: 3200,
    images: [
      'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400',
    ],
    category: 'ladies-suits',
    sizes: ['S', 'M', 'L', 'XL'],
    stock: 35,
  },
  {
    title: 'Velvet Winter Suit',
    description: 'Rich velvet suit perfect for winter gatherings. Warm, cozy, and incredibly elegant.',
    price: 7500,
    images: [
      'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=400',
      'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400',
    ],
    category: 'ladies-suits',
    sizes: ['M', 'L', 'XL'],
    stock: 12,
  },
  {
    title: 'Organza Embroidered Suit',
    description: 'Delicate organza fabric with subtle embroidery. Perfect for evening wear and formal events.',
    price: 5800,
    images: [
      'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400',
    ],
    category: 'ladies-suits',
    sizes: ['S', 'M', 'L'],
    stock: 18,
  },
  {
    title: 'Cambric Daily Wear Suit',
    description: 'Simple and comfortable cambric suit for everyday use. Easy to maintain and wear.',
    price: 1800,
    images: [
      'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=400',
    ],
    category: 'ladies-suits',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    stock: 50,
  },
];

async function seedProducts() {
  try {
    if (!process.env.MONGO_URI) {
      throw new Error('MONGO_URI not defined in .env');
    }

    console.log('Connecting to MongoDB...');
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Connected!\n');

    console.log('Clearing existing products...');
    await Product.deleteMany({});
    console.log('Cleared!\n');

    console.log('Inserting products...');
    const inserted = await Product.insertMany(products);
    console.log(`Inserted ${inserted.length} products!\n`);

    inserted.forEach((p, i) => {
      console.log(`${i + 1}. ${p.title} - Rs.${p.price}`);
    });

    console.log('\nSeeding complete!');
    process.exit(0);
  } catch (error) {
    console.error('Error:', error);
    process.exit(1);
  }
}

seedProducts();