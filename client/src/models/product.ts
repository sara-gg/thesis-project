export interface Product {
  id?: number;
  user_id?: number;
  category_id: string;
  title: string;
  description: string;
  images: File;
  location: string | undefined;
  price: number;
  quantity: number;
  height?: number;
  depth?: number;
  width?: number;
  updatedAt?: any;
  basket_quantity?: number;
}
