export interface Product {
  image: any;
  name: string;
  slug: any;
  price: number;
  description: string;  
  categories: string;
  popularproducts: boolean;
}

export interface PageProps {
  params: {
    slug: string;
  };
}
