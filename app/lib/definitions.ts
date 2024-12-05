export type Product = {
  // rows: any;
  id: string;
  title: string;
  price: number,
  brand: string;
  thumbnail: string;
  images: string[];
  created_at: string;
  quantity: number;
}

export type CartProps = {
  items: Product[],
  isOpen: boolean,
  totalAmount: number;
  subtotal: number;
}

export type CartStateProp = {
  cart: CartProps
}

export type LinkProp = {
  name: string;
  href: string;
}
