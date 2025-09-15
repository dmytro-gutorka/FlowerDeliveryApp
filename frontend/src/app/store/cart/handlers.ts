import type { BaseItem, CartItem } from '../../../types/types.ts';
import type { CartStore } from './types.ts';

export function handleIncrementQuantity(item: CartItem<BaseItem>, set) {
  set((state: CartStore<BaseItem>) => ({
    subtotalItems: state.subtotalItems + 1,
    totalPrice: state.totalPrice + item.price,
    items: state.items.map((ci) => {
      const newQuantity = ci.quantity + 1;
      return ci.id === item.id
        ? { ...ci, quantity: newQuantity, lineTotal: ci.price * newQuantity }
        : ci;
    }),
  }));
}

export function handleDecrementQuantity(item: CartItem<BaseItem>, set) {
  if (item.quantity <= 1) return handleRemoveItem(item, set);

  set((state: CartStore<BaseItem>) => ({
    subtotalItems: state.subtotalItems - 1,
    totalPrice: state.totalPrice - item.price,
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
    subtotalItems: state.subtotalItems + 1,
    totalPrice: state.totalPrice + item.price,
    totalItems: state.totalItems + 1,
    isCartEmpty: false,
    items: [...state.items, { ...item, quantity: 1, lineTotal: item.price }],
  }));
}

export function handleRemoveItem(item: CartItem<BaseItem>, set) {
  set((state: CartStore<BaseItem>) => ({
    subtotalItems: state.subtotalItems - item.quantity,
    totalPrice: state.totalPrice - item.price * item.quantity,
    totalItems: state.totalItems - 1,
    isCartEmpty: state.items.length <= 1,
    items: state.items.filter((ci) => ci.id !== item.id),
  }));
}

export function handleClearCart(set) {
  set(() => ({
    items: [],
    isCartEmpty: true,
    subtotalItems: 0,
    totalItems: 0,
    totalPrice: 0,
  }));
}
