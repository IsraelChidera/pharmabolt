export interface Product {
  idx: number;
  image: any;
  name: string;
  slug: any;
  price: number;
  description: string;
  categories: string;
  popularproducts: boolean;
}

export type ProductType = {
  idx: number,
  image: any,
  name: string,
  slug: any,
  price: number,
  description: string,
  categories: string,
  popularproducts: boolean,
}

export interface PageProps {
  params: {
    slug: string;
  };
}

export interface ProductContextType {
  products: Product[];
  loading: Boolean;
  error: string | null;
}
