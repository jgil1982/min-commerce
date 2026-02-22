export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  description?: string;
  inStock: boolean;
}

export type CartItem = Product & { quantity: number };
