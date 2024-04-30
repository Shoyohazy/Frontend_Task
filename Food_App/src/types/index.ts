export interface User {
  email: string;
  password: string;
}

export interface CartItem {
  id: string;
  name: string;
  image: string;
  price: number;
  totalPrice: number;
  quantity: number;
}
