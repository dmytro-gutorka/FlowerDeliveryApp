import type { CartItem, ProductItem } from '../../types/types.ts';
import { Stack } from '@mui/material';
import { useCartStore } from '../../app/store/cart/store.ts';
import CartProduct from '../CartProduct';

export default function CartProductList() {
  const cartItems: CartItem<ProductItem>[] = useCartStore((state) => state.items);

  return (
    <Stack spacing={2}>
      {cartItems.map((ci: CartItem<ProductItem>) => (
        <CartProduct item={ci} key={ci.offerId} />
      ))}
    </Stack>
  );
}
