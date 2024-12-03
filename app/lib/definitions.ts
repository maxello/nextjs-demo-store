export type Product = {
  id: number;
  title: string;
  price: number,
  brand: string;
  thumbnail: string;
  images: string[];
  created_at: string;
  quantity: number;
}

export type CartStateProp = {
  cart: {
    isOpen: boolean;
    items: Product[];
    totalAmount: number;
  }
}

export type LinkProp = {
  name: string;
  href: string;
}
