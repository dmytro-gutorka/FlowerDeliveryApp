import type { CartStore } from '../app/store/cart/types.ts';
import type { ProductItem } from '../types/types.ts';

export function computeTotals(items: CartStore<ProductItem>['items']) {
  const subtotalItems = items.reduce((acc, i) => acc + i.quantity, 0);
  const totalPrice = items.reduce((acc, i) => acc + i.lineTotal, 0);
  const totalItems = items.length;
  const isCartEmpty = items.length === 0;
  return { subtotalItems, totalPrice, totalItems, isCartEmpty };
}
