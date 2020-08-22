export interface Product {
  id: number;
  user_id: number;
  category_id: string;
  title: string;
  description: string;
  created_at: string;
  images: string;
  location: string;
  price: number;
  quantity: number;
  height?: number;
  depth?: number;
  width?: number;
}