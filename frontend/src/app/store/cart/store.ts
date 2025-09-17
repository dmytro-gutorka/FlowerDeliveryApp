import type { CartStore } from './types.ts';
import type { ProductItem } from '../../../types/types.ts';
import { persist, createJSONStorage } from 'zustand/middleware';

import { create } from 'zustand';
import {
  handleAddItem,
  handleClearCart,
  handleDecrementQuantity,
  handleIncrementQuantity,
  handleRemoveItem,
} from './handlers.ts';
import { computeTotals } from '../../../utils/cumputeCartTotals.ts';

export const useCartStore = create<CartStore<ProductItem>>()(
  persist(
    (set) => ({
      items: [],
      totalPrice: 0,
      totalItems: 0,
      subtotalItems: 0,
      isCartEmpty: true,
      actions: {
        incrementQuantity: (item) => handleIncrementQuantity(item, set),
        decrementQuantity: (item) => handleDecrementQuantity(item, set),
        addProduct: (item) => handleAddItem(item, set),
        removeProduct: (item) => handleRemoveItem(item, set),
        clearCart: () => handleClearCart(set),
      },
    }),
    {
      name: 'flower-cart',
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({ items: state.items }),
      version: 1,
      onRehydrateStorage: () => (_, error) => {
        if (error) {
          console.error('error', error);
          return;
        }
        requestAnimationFrame(() => {
          const s = useCartStore.getState();
          const totals = computeTotals(s.items);
          useCartStore.setState(totals);
        });
      },
    },
  ),
);
