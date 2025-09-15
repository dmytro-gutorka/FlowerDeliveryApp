import { Controller, useForm } from 'react-hook-form';
import { Button, Stack, TextField } from '@mui/material';
import { theme } from '../../app/theme.ts';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import Typography from '@mui/material/Typography';
import OrderInfo from '../OrderInfo';

export function OrderForm() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      fullName: '',
      email: '',
      phoneNumber: '',
      deliveryAddress: '',
    },
  });

  const onSubmit = (data) => console.log(data);

  const isValidationErrors: boolean = Object.entries(errors).length > 0;

  return (
    <Stack
      minWidth={theme.spacing(30)}
      borderRadius={theme.shape.borderRadiusScale.sm}
      boxShadow={1}
      p={2.5}
    >
      <Typography variant="h6" fontWeight={700} mb={2}>
        Delivery Information
      </Typography>
      <Stack id="orderForm" component="form" onSubmit={handleSubmit(onSubmit)} gap={2}>
        <Controller
          name="fullName"
          control={control}
          render={({ field }) => (
            <TextField {...field} label="Full Name" error={Boolean(errors.fullName)} />
          )}
        />
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <TextField {...field} label="Email" error={Boolean(errors.email)} />
          )}
        />
        <Controller
          name="phoneNumber"
          control={control}
          render={({ field }) => (
            <TextField {...field} label="Phone Number" error={Boolean(errors.phoneNumber)} />
          )}
        />
        <Controller
          name="deliveryAddress"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              label="Delivery Adress"
              multiline
              minRows={3}
              error={Boolean(errors.deliveryAddress)}
            />
          )}
        />
      </Stack>
      <OrderInfo />
      <Button
        type="submit"
        form="orderForm"
        disabled={isValidationErrors}
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
  );
}
