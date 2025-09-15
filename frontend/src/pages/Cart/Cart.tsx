import { Stack } from '@mui/material';
import { useCartStore } from '../../app/store/cart/store.ts';
import CartProductList from '../../components/CartProductList';
import EmptyCart from '../../components/EmptyCart';
import OrderForm from '../../components/OrderForm';
import Box from '@mui/material/Box';
import NavigationArrowButton from '../../components/NavigationArrowButton';

export default function Cart() {
  const isCartEmpty = useCartStore((state) => state.isCartEmpty);

  return (
    <>
      {!isCartEmpty ? (
        <>
          <NavigationArrowButton />
          <Stack direction="row" gap={6} flexWrap="wrap">
            <Box flexGrow={1}>
              <CartProductList />
            </Box>
            <Box flexGrow={1}>
              <OrderForm />
            </Box>
          </Stack>
        </>
      ) : (
        <EmptyCart />
      )}
    </>
  );
}
