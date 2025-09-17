import { SERVER_URL } from '../../app/constants.ts';
import { Divider, Stack, useTheme } from '@mui/material';
import Typography from '@mui/material/Typography';
import { useParams } from 'react-router';
import { useQuery } from '@tanstack/react-query';
import getFormatedCurrency from '../../utils/getFormatedCurrency.ts';
import convertCentsToUsd from '../../utils/convertCentsToUsd.ts';
import getFormatedDateTime from '../../utils/getFormatedDateTime.ts';
import Box from '@mui/material/Box';

export default function OrderDetails() {
  const { orderId } = useParams();
  const theme = useTheme();

  const { data: orderDetails, isSuccess } = useQuery({
    queryKey: ['order', orderId],
    queryFn: async () => {
      const response = await fetch(`${SERVER_URL}/api/v1/orders/${orderId}`);
      return await response.json();
    },
  });

  if (!isSuccess) return null;

  const { address, createdAt: orderDate, orderUid, totalCents, items } = orderDetails;
  const totalPrice = getFormatedCurrency(convertCentsToUsd(totalCents));
  const formatedDT = getFormatedDateTime(orderDate);

  return (
    <Stack boxShadow={3} padding={10}>
      <Stack maxWidth={500} alignSelf="center">
        <Stack mb={5}>
          <Typography variant="h4" fontWeight={700} alignSelf="center">
            Order Details:
          </Typography>
          <Typography variant="h6" alignSelf="center">
            Order #{orderUid}
          </Typography>
        </Stack>

        <Stack gap={1}>
          {items.map(({ imageSnapshot, titleSnapshot, quantity, id }) => {
            const imgPath = imageSnapshot.includes('single_flower')
              ? `/single-flower-card-images/${imageSnapshot}`
              : `/bouquet-flower-card-images/${imageSnapshot}`;

            console.log(imgPath);

            return (
              <Stack direction="row" justifyContent="space-between" alignItems="center" gap={3}>
                <Stack direction="row" gap={1} alignItems="center" key={id}>
                  <Box
                    component="img"
                    src={imgPath}
                    sx={{ width: 80, height: 80, borderRadius: theme.shape.borderRadiusScale.sm }}
                  />
                  <Typography variant="h6" fontWeight={500}>
                    {titleSnapshot}
                  </Typography>
                </Stack>
                <Typography variant="h6" fontWeight={700}>
                  x {quantity}
                </Typography>
              </Stack>
            );
          })}
        </Stack>

        <Divider sx={{ marginBlock: 3, backgroundColor: 'black' }} />

        <Stack>
          <Stack direction="row" justifyContent="space-between" mb={0.5}>
            <Typography fontWeight={600}>Total:</Typography>
            <Typography fontWeight={600}>{totalPrice}</Typography>
          </Stack>

          <Stack direction="row" justifyContent="space-between" mb={0.5}>
            <Typography fontWeight={600}>Delivery Address:</Typography>
            <Typography fontWeight={600}>{address}</Typography>
          </Stack>

          <Stack direction="row" justifyContent="space-between" mb={0.5}>
            <Typography fontWeight={600}>Date:</Typography>
            <Typography fontWeight={600}>{formatedDT}</Typography>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}
