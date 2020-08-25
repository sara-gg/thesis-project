export interface Product {
  id?: number;
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
}
