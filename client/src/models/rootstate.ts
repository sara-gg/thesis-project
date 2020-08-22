export interface RootState {
  id: number;
  name: string;
  lastname: string;
  username: string;
  email: string;
  password: string;
  birthdate: string;
  gender: string;
  address: string;
  isAuthenticated: boolean;
  telephone: string;
  title: string;
  description: string;
  images: string;
  // images: string[],
  location: string;
  price: number;
  quantity: number;
  height: number;
  width: number;
  depth: number;
  material: string;
  categoryName: string;
  categories: [];
  category_id: string;
}
