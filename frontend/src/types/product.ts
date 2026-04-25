export interface Product {
  _id: string;
  title: string;
  description?: string;
  price: number;
  images: string[];
  category: string;
  sizes: string[];
  stock: number;
  createdAt?: string;
  updatedAt?: string;
}

export interface ApiResponse<T> {
  data?: T;
  message?: string;
}