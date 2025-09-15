import type { BaseItem, CartItem } from '../../../types/types.ts';

interface CartStoreActions<T> {
  addProduct: (item: CartItem<T>) => void;
  removeProduct: (item: CartItem<T>) => void;
  incrementQuantity: (item: CartItem<T>) => void;
  decrementQuantity: (item: CartItem<T>) => void;
  clearCart: () => void;
}

export type CartStore<T extends BaseItem> = {
  items: CartItem<T>[];
  totalPrice: number;
  totalItems: number;
  subtotalItems: number;
  isCartEmpty: boolean;
  actions: CartStoreActions<T>;
};
