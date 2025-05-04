
export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  tag: string;
  category: ProductCategory;
  description: string;
  featured?: boolean;
}

export type ProductCategory = 
  | "electric-rides"
  | "drones-robots"
  | "retro-tech"
  | "solar-eco"
  | "cool-weird";

export const ProductCategoryLabels: Record<ProductCategory, string> = {
  "electric-rides": "Electric Rides",
  "drones-robots": "Drones & Robots",
  "retro-tech": "Retro Tech & Gadgets",
  "solar-eco": "Solar & Eco Products",
  "cool-weird": "Cool & Weird"
};
