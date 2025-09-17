import type { OrderFormInputs } from '../../zod-validations/order-form.ts';
import { Controller } from 'react-hook-form';
import { useNavigate } from 'react-router';
import { Button, Stack, TextField, useTheme } from '@mui/material';
import { SERVER_URL } from '../../app/constants.ts';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import OrderInfo from '../OrderInfo';
import useOrderForm from '../../hooks/useOrderForm.ts';
import { useCartStore } from '../../app/store/cart/store.ts';

export function OrderForm() {
  const {
    control,
    handleSubmit,
    register,
    formState: { errors, isDirty, isValid },
  } = useOrderForm();

  const navigation = useNavigate();
  const clearCart = useCartStore((state) => state.actions.clearCart);

  const createOrder = async (data: OrderFormInputs) => {
    const res = await fetch(`${SERVER_URL}/api/v1/orders`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify(data),
    });

    const order = await res.json();
    await navigation(`/orders/${order.id}`);

    clearCart();
  };

  const theme = useTheme();

  return (
    <Box
      onSubmit={handleSubmit(createOrder)}
      component="form"
      minWidth={theme.spacing(30)}
      borderRadius={theme.shape.borderRadiusScale.sm}
      boxShadow={1}
      p={2.5}
    >
      <Stack component="fieldset" gap={2} border={0} p={0} m={0}>
        <Typography variant="h6" component="legend" fontWeight={700} mb={2}>
          Delivery Information
        </Typography>

        <input type="hidden" {...register('shopId')} />
        <input type="hidden" {...register('clientTz')} />
        <input type="hidden" {...register('clientOffsetMinutes')} />

        <Controller
          name="fullName"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              label="Full Name"
              type="text"
              autoComplete="name"
              helperText={errors.fullName?.message}
              error={Boolean(errors.fullName)}
            />
          )}
        />
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              label="Email"
              type="email"
              autoComplete="email"
              helperText={errors.email?.message}
              error={Boolean(errors.email)}
            />
          )}
        />
        <Controller
          name="phone"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              label="Phone Number"
              type="tel"
              autoComplete="tel"
              inputMode="tel"
              helperText={errors.phone?.message}
              error={Boolean(errors.phone)}
            />
          )}
        />
        <Controller
          name="address"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              label="Delivery Address"
              autoComplete="shipping street-address"
              multiline
              minRows={3}
              helperText={errors.address?.message}
              error={Boolean(errors.address)}
            />
          )}
        />
        <OrderInfo />
        <Button
          type="submit"
          disabled={!isValid || !isDirty}
          startIcon={<CreditCardOutlinedIcon />}
        >
          Create Order
        </Button>
        <Typography
          variant="body2"
          color={theme.palette.grey[600]}
          fontSize={theme.spacing(1.5)}
          align="center"
          mt={1}
        >
          * All fields are required
        </Typography>
      </Stack>
    </Box>
  );
}
