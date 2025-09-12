import type { FlowerCartItem } from '../../types/types.ts';
import { Stack } from '@mui/material';
import CartProduct from '../CartProduct';

const products: FlowerCartItem[] = [
  {
    id: 1,
    shop: 'Colorful spring flowers in a stunning arrangement',
    name: 'Bloom & Blossom',
    price: 52.99,
    imagePath: 'flower_1.jpeg',
    totalPrice: 52.99,
    quantity: 1,
  },
  {
    id: 2,
    shop: 'Petals Paradise',
    name: 'Pink Tulips',
    price: 23.15,
    imagePath: 'flower_2.webp',
    totalPrice: 26.3,
    quantity: 2,
  },
  {
    id: 3,
    shop: 'Premium white roses perfect for weddings',
    name: 'Mixed Spring Bouquet',
    price: 9.99,
    imagePath: 'flower_3.jpeg',
    totalPrice: 99.99,
    quantity: 10,
  },
  {
    id: 4,
    shop: 'Cheerful yellow daffodils to welcome spring',
    name: 'Garden Delights',
    price: 109.5,
    imagePath: 'flower_4.webp',
    totalPrice: 145.25,
    quantity: 5,
  },
  {
    id: 5,
    shop: 'Petals Paradise',
    name: 'Mixed Rose Bouquet',
    price: 77.15,
    imagePath: 'flower_1.jpeg',
    totalPrice: 77.15,
    quantity: 1,
  },
];

export default function CartProductList() {
  return (
    <Stack>
      {products.map((product: FlowerCartItem) => (
        <CartProduct product={product} key={product.id} />
      ))}
    </Stack>
  );
}
