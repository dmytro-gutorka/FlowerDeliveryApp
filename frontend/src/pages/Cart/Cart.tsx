import CartProductList from '../../components/CartProductList';
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/material';
import EmptyCart from '../../components/EmptyCart';
import { useCartStore } from '../../app/store/cart/store.ts';

export default function Cart() {
  const isCartEmpty = useCartStore((state) => state.isCartEmpty);
  console.log(isCartEmpty);

  return (
    <>
      {!isCartEmpty ? (
        <Stack>
          <Typography>Total price:</Typography>
          <CartProductList />
          <Typography>Total items:</Typography>
        </Stack>
      ) : (
        <EmptyCart />
      )}
    </>
  );
}
