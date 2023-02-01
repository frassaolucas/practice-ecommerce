export type CartContextValues = {
  cartList: CartItem[];
  addToCart: (productId: number, quantity: number) => void;
};

export type CartItem = {
  id: number;
  quantity: number;
};
