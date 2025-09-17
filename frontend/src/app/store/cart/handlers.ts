import type { ICartItem, ProductItem } from '../../../types/types.ts';
import type { CartStore } from './types.ts';

export function handleIncrementQuantity(item: ICartItem<ProductItem>, set: any) {
  set((state: CartStore<ProductItem>) => ({
    subtotalItems: state.subtotalItems + 1,
    totalPrice: state.totalPrice + item.priceCents,
    items: state.items.map((ci) => {
      const newQuantity = ci.quantity + 1;
      return ci.offerId === item.offerId
        ? { ...ci, quantity: newQuantity, lineTotal: ci.priceCents * newQuantity }
        : ci;
    }),
  }));
}

export function handleDecrementQuantity(item: ICartItem<ProductItem>, set: any) {
  if (item.quantity <= 1) return handleRemoveItem(item, set);

  set((state: CartStore<ProductItem>) => ({
    subtotalItems: state.subtotalItems - 1,
    totalPrice: state.totalPrice - item.priceCents,
    items: state.items.map((ci) => {
      const newQuantity = ci.quantity - 1;
      return ci.offerId === item.offerId
        ? { ...ci, quantity: newQuantity, lineTotal: ci.priceCents * newQuantity }
        : ci;
    }),
  }));
}

export function handleAddItem(item: ICartItem<ProductItem>, set: any) {
  set((state: CartStore<ProductItem>) => ({
    subtotalItems: state.subtotalItems + 1,
    totalPrice: state.totalPrice + item.priceCents,
    totalItems: state.totalItems + 1,
    isCartEmpty: false,
    items: [...state.items, { ...item, quantity: 1, lineTotal: item.priceCents }],
  }));
}

export function handleRemoveItem(item: ICartItem<ProductItem>, set: any) {
  set((state: CartStore<ProductItem>) => ({
    subtotalItems: state.subtotalItems - item.quantity,
    totalPrice: state.totalPrice - item.priceCents * item.quantity,
    totalItems: state.totalItems - 1,
    isCartEmpty: state.items.length <= 1,
    items: state.items.filter((ci) => ci.offerId !== item.offerId),
  }));
}

export function handleClearCart(set: any) {
  set(() => ({
    items: [],
    isCartEmpty: true,
    subtotalItems: 0,
    totalItems: 0,
    totalPrice: 0,
  }));
}
