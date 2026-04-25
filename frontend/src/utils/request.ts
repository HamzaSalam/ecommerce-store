import apiClient from './client';

interface RequestOptions {
  url: string;
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  data?: unknown;
  params?: Record<string, string>;
}

export async function request<T>(options: RequestOptions): Promise<T> {
  const { data } = await apiClient.request<T>(options);
  return data;
}