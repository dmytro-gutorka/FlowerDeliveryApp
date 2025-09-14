import type { CartItem, FlowerCartItem, FlowerItem } from '../../types/types.ts';
import { Stack } from '@mui/material';
import { useCartStore } from '../../app/store/cart/store.ts';
import CartProduct from '../CartProduct';

export default function CartProductList() {
  const cartItems: FlowerCartItem[] = useCartStore((state) => state.items);

  return (
    <Stack>
      {cartItems.map((item: FlowerCartItem) => (
        <CartProduct item={item} key={item.id} />
      ))}
    </Stack>
  );
}
