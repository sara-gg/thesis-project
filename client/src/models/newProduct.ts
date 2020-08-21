export interface NewProduct {
  title: string;
  description: string;
  images: string[];
  location?: string;
  price: number;
  quantity: number;
  height: number;
  width: number;
  depth: number;
  materials: string;
}
