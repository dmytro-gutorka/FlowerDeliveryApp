import type { BaseItem, CartItem } from '../../../types/types.ts';
import type { CartStore } from './types.ts';

export function handleIncrementQuantity(item: CartItem<BaseItem>, set) {
  set((state: CartStore<BaseItem>) => ({
    items: state.items.map((ci) => {
      const newQuantity = ci.quantity + 1;
      return ci.id === item.id
        ? { ...ci, quantity: newQuantity, lineTotal: ci.price * newQuantity }
        : ci;
    }),
  }));
}

export function handleDecrementQuantity(item: CartItem<BaseItem>, set) {
  if (item.quantity === 1) return handleRemoveItem(item, set);

  set((state: CartStore<BaseItem>) => ({
    items: state.items.map((ci) => {
      const newQuantity = ci.quantity - 1;
      return ci.id === item.id
        ? { ...ci, quantity: newQuantity, lineTotal: ci.price * newQuantity }
        : ci;
    }),
  }));
}

export function handleAddItem(item: CartItem<BaseItem>, set) {
  set((state: CartStore<BaseItem>) => ({
    items: [...state.items, { ...item, quantity: 1, lineTotal: item.price }],
    isCartEmpty: false,
  }));
}

export function handleRemoveItem(item: CartItem<BaseItem>, set) {
  set((state: CartStore<BaseItem>) => ({
    items: state.items.filter((ci) => ci.id !== item.id),
    isCartEmpty: state.items.length === 0,
  }));
}

export function handleClearCart(set) {
  set(() => ({ items: [], isCartEmpty: true }));
}
