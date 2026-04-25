import { useQuery } from '@tanstack/react-query';
import { request } from '@/utils/request';
import { API_URLS } from '@/utils/API_URLS';
import { Product } from '@/types/product';

export function useProducts() {
  return useQuery({
    queryKey: ['products'],
    queryFn: () => request<Product[]>({ url: API_URLS.GET_PRODUCTS }),
  });
}

export function useProduct(id: string) {
  return useQuery({
    queryKey: ['product', id],
    queryFn: () => request<Product>({ 
      url: `${API_URLS.GET_PRODUCT}/${id}` 
    }),
    enabled: !!id,
  });
}