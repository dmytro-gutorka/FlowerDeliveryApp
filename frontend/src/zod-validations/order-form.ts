import { z } from 'zod';

export const CartItem = z.object({
  offerId: z.uuid(),
  quantity: z.number().int().min(1),
});

export const orderShema = z.object({
  fullName: z
    .string()
    .min(2, 'Your name should be longer than 2 character.')
    .max(50, 'Your name should not exceed 50 characters.'),
  email: z.email('Invalid email address.'),
  phone: z
    .string()
    .regex(
      /^[\\+]?[(]?[0-9]{3}[)]?[-\\s\\.]?[0-9]{3}[-\\s\\.]?[0-9]{4,6}$/,
      'Invalid phone number address.',
    ),
  shopId: z.uuid(),
  address: z
    .string()
    .min(10, 'Your address should be longer than 10 characters.')
    .max(255, 'Your address should not exceed 255 characters.'),

  items: z.array(CartItem).min(1),
  geo: z.object({ lat: z.number(), lng: z.number() }),
  clientTz: z.string(),
  clientOffsetMinutes: z.number().int(),
});

export type OrderFormInputs = z.infer<typeof orderShema>;
