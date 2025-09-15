import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, useForm } from 'react-hook-form';
import { Button, Stack, TextField, useTheme } from '@mui/material';
import { z } from 'zod';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import Typography from '@mui/material/Typography';
import OrderInfo from '../OrderInfo';
import Box from '@mui/material/Box';

const orderShema = z.object({
  fullName: z
    .string()
    .min(2, 'Your name should be longer than 2 character.')
    .max(50, 'Your name should not exceed 50 characters.'),
  email: z.email('Invalid email address.'),
  phoneNumber: z
    .string()
    .regex(
      /^[\\+]?[(]?[0-9]{3}[)]?[-\\s\\.]?[0-9]{3}[-\\s\\.]?[0-9]{4,6}$/,
      'Invalid phone number address.',
    ),
  deliveryAddress: z
    .string()
    .min(10, 'Your address should be longer than 10 characters.')
    .max(255, 'Your address should not exceed 255 characters.'),
});

type OrderFormInputs = z.infer<typeof orderShema>;

export function OrderForm() {
  const {
    control,
    handleSubmit,
    formState: { errors, isDirty, isValid },
  } = useForm<OrderFormInputs>({
    resolver: zodResolver(orderShema),
    mode: 'onChange',
    defaultValues: {
      fullName: '',
      email: '',
      phoneNumber: '',
      deliveryAddress: '',
    },
  });

  const onSubmit = (data: OrderFormInputs) => console.log(data);
  const theme = useTheme();

  return (
    <Box
      component="form"
      minWidth={theme.spacing(30)}
      borderRadius={theme.shape.borderRadiusScale.sm}
      boxShadow={1}
      p={2.5}
    >
      <Stack component="fieldset" onSubmit={handleSubmit(onSubmit)} gap={2} border={0} p={0} m={0}>
        <Typography variant="h6" component="legend" fontWeight={700} mb={2}>
          Delivery Information
        </Typography>
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
          name="phoneNumber"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              label="Phone Number"
              type="tel"
              autoComplete="tel"
              inputMode="tel"
              helperText={errors.phoneNumber?.message}
              error={Boolean(errors.phoneNumber)}
            />
          )}
        />
        <Controller
          name="deliveryAddress"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              label="Delivery Address"
              autoComplete="shipping street-address"
              multiline
              minRows={3}
              helperText={errors.deliveryAddress?.message}
              error={Boolean(errors.deliveryAddress)}
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
