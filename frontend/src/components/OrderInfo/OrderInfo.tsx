import { Divider, Stack } from '@mui/material';
import { useCartStore } from '../../app/store/cart/store.ts';
import Typography from '@mui/material/Typography';
import { useShallow } from 'zustand/shallow';
import getFormatedCurrency from '../../utils/getFormatedCurrency.ts';
import convertCentsToUsd from '../../utils/convertCentsToUsd.ts';

export default function OrderInfo() {
  const { totalPrice, subtotalItems, totalItems } = useCartStore(
    useShallow((s) => ({
      totalPrice: s.totalPrice,
      subtotalItems: s.subtotalItems,
      totalItems: s.totalItems,
    })),
  );

  const price = getFormatedCurrency(convertCentsToUsd(totalPrice));

  return (
    <>
      <Divider sx={{ marginTop: 2 }} />
      <Stack>
        <Typography variant="body1" fontWeight={700} mb={1}>
          Order Summary
        </Typography>
        <Stack direction="row" justifyContent="space-between" mb={0.5}>
          <Typography>Total items</Typography>
          <Typography> {totalItems}</Typography>
        </Stack>

        <Stack direction="row" justifyContent="space-between" mb={0.5}>
          <Typography>Subtotal items</Typography>
          <Typography> {subtotalItems}</Typography>
        </Stack>

        <Stack direction="row" justifyContent="space-between">
          <Typography>Delivery Fee:</Typography>
          <Typography>Free</Typography>
        </Stack>

        <Divider sx={{ marginTop: 2, marginBottom: 2 }} />

        <Stack direction="row" justifyContent="space-between" aria-live="polite" aria-atomic="true">
          <Typography variant="body1" fontWeight={700}>
            Total
          </Typography>
          <Typography variant="body1" fontWeight={700}>
            {price}
          </Typography>
        </Stack>
      </Stack>
    </>
  );
}
