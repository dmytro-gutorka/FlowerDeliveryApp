import { Divider, Stack } from '@mui/material';
import { useCartStore } from '../../app/store/cart/store.ts';
import Typography from '@mui/material/Typography';

export default function OrderInfo() {
  const totalPrice = useCartStore((state) => state.totalPrice);
  const subtotalItems = useCartStore((state) => state.subtotalItems);
  return (
    <>
      <Divider sx={{ marginTop: 4 }} />
      <Stack marginBlock={2}>
        <Typography variant="body1" fontWeight={700} mb={1}>
          Order Summary
        </Typography>
        <Stack direction="row" justifyContent="space-between" mb={0.5}>
          <Typography>Total items</Typography>
          <Typography> {subtotalItems}</Typography>
        </Stack>

        <Stack direction="row" justifyContent="space-between">
          <Typography>Delivery Fee: </Typography>
          <Typography>Free </Typography>
        </Stack>

        <Divider sx={{ marginTop: 2, marginBottom: 2 }} />

        <Stack direction="row" justifyContent="space-between">
          <Typography variant="body1" fontWeight={700}>
            Total
          </Typography>
          <Typography variant="body1" fontWeight={700}>
            ${totalPrice}
          </Typography>
        </Stack>
      </Stack>
    </>
  );
}
