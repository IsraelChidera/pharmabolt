export interface Product {
  image: any;
  name: string;
  slug: any;
  price: number;
  description: string;
}

export interface PageProps {
  params: {
    slug: string;
  };
}
