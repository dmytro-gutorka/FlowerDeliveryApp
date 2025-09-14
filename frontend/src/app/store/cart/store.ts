import type { CartStore } from './types.ts';
import type { BaseItem } from '../../../types/types.ts';
import { create } from 'zustand';
import {
  handleAddItem,
  handleClearCart,
  handleDecrementQuantity,
  handleIncrementQuantity,
  handleRemoveItem,
} from './handlers.ts';

export const useCartStore = create<CartStore<BaseItem>>((set) => ({
  items: [],
  totalPrice: 0,
  subtotalItems: 0,
  isCartEmpty: true,
  actions: {
    incrementQuantity: (item) => handleIncrementQuantity(item, set),
    decrementQuantity: (item) => handleDecrementQuantity(item, set),
    addProduct: (item) => handleAddItem(item, set),
    removeProduct: (item) => handleRemoveItem(item, set),
    clearCart: () => handleClearCart(set),
  },
}));
