export type Product = {
  id: string;
  title: string;
  price: number,
  brand: string;
  thumbnail: string;
  images: string[];
  created_at: string;
  quantity: number;
  description: string;
}

export type CartProps = {
  items: Product[];
  isOpen: boolean;
  totalAmount: number;
  subtotal: number;
}

export type StateProps = {
  cart: CartProps;
}

export type LinkProp = {
  name: string;
  href: string;
}
export type actionProps = {
  type: string;
  payload: CartProps;
}
