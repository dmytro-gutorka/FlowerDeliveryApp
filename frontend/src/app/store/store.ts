import { create } from 'zustand';
import type { CartItem, Flower, FlowerCartItem } from '../../types/types.ts';

type CartStore = {
  products: CartItem<Flower>[];
  totalPrice: number;
  totalQuantity: number;
  addProduct: (product: CartItem) => void;
  removeProduct: (product: CartItem) => void;
  clearCart: () => void;
  isCartEmpty: boolean;
  incrementQuantity: (product: CartItem) => void;
  decrementQuantity: (product: CartItem) => void;
};

export const useCartStore = create<CartStore>((set, get) => ({
  products: [],
  totalPrice: 0,
  totalQuantity: 0,
  isCartEmpty: true,
  addProduct: (product) => {
    set((state) => ({ products: [...state.products, product], isCartEmpty: false }));
  },
  removeProduct: () => {},
  clearCart: () => {},
  incrementQuantity: () => {},
  decrementQuantity: () => {},
}));
