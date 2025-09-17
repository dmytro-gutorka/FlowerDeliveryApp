import type { ICartItem, ProductItem } from '../types/types.ts';

export default function addCartItemFields(
  items: ProductItem[],
  cartItems: ICartItem<ProductItem>[],
): any {
  return items?.map((product) => {
    const cartItem = cartItems.find((ci) => product.offerId === ci.offerId);
    if (!cartItem) return product;
    return {
      ...cartItem,
      ...product,
    };
  });
}
