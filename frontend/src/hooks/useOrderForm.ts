import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import getClientOrderMetadata from '../utils/getClientOrderMetadata.ts';
import type { ICartItem, ProductItem } from '../types/types.ts';
import { useCartStore } from '../app/store/cart/store.ts';
import { type OrderFormInputs, orderShema } from '../zod-validations/order-form.ts';
import { useEffect } from 'react';

export default function useOrderForm() {
  const { lng, lat, clientOffsetMinutes, clientTz } = getClientOrderMetadata();
  const cartItems: ICartItem<ProductItem>[] = useCartStore((state) => state.items);

  const shopId = cartItems[0]?.shopId;

  const {
    control,
    handleSubmit,
    register,
    setValue,
    formState: { errors, isDirty, isValid },
  } = useForm<OrderFormInputs>({
    resolver: zodResolver(orderShema),
    mode: 'onChange',
    defaultValues: {
      fullName: '',
      email: '',
      phone: '',
      address: '',
      shopId,
      clientTz,
      clientOffsetMinutes,
    },
  });

  useEffect(() => {
    setValue(
      'items',
      cartItems.map((i) => ({ offerId: i.offerId, quantity: i.quantity })),
      {
        shouldDirty: true,
        shouldValidate: true,
      },
    );

    setValue('geo', { lat: lat ?? 0, lng: lng ?? 0 }, { shouldDirty: true, shouldValidate: true });
  }, [cartItems, lat, lng, setValue]);

  return {
    control,
    handleSubmit,
    register,
    setValue,
    formState: { errors, isDirty, isValid },
  };
}
