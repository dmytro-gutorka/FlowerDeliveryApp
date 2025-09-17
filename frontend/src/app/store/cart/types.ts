import type { ICartItem, ProductItem } from '../../../types/types.ts';

interface CartStoreActions<T> {
  addProduct: (item: ICartItem<T>) => void;
  removeProduct: (item: ICartItem<T>) => void;
  incrementQuantity: (item: ICartItem<T>) => void;
  decrementQuantity: (item: ICartItem<T>) => void;
  clearCart: () => void;
}

export type CartStore<T extends ProductItem> = {
  items: ICartItem<T>[];
  totalPrice: number;
  totalItems: number;
  subtotalItems: number;
  isCartEmpty: boolean;
  actions: CartStoreActions<T>;
};
