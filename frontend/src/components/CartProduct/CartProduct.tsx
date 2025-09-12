import type { FlowerCartItem } from '../../types/types.ts';
import { Stack } from '@mui/material';

interface CartProductProps {
  product: FlowerCartItem;
}

export default function CartProduct({ product }: CartProductProps) {
  return <Stack></Stack>;
}
