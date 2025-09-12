import { create } from 'zustand';

type CartStore = {
  products: number[];
};

export const useCartStore = create<CartStore>(() => ({
  products: [1, 2, 3],
}));
