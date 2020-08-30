export interface Product {
  id?: number;
  user_id?: number;
  category_id: string;
  title: string;
  description: string;
  images: File | null;
  location: string | undefined;
  price: number;
  quantity: number;
  material?: string;
  height?: number;
  depth?: number;
  width?: number;
  createdAt?: any;
  updatedAt?: any;
  basket_quantity?: number;
}
