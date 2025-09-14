import type { FlowerItem } from '../../types/types.ts';
import { Stack } from '@mui/material';
import { useCartStore } from '../../app/store/cart/store.ts';
import Product from '../Product';

const products: FlowerItem[] = [
  {
    id: 1,
    description: 'Colorful spring flowers in a stunning arrangement',
    name: 'Mixed Spring Bouquet',
    price: 52.99,
    shop: 'Petals Paradise',
    imagePath: 'flower_1.jpeg',
    isBouquet: true,
    isFavorite: true,
  },
  {
    id: 2,
    description: 'Fresh pink tulips for a touch of elegance',
    name: 'Pink Tulips',
    price: 23.15,
    shop: 'Garden Delights',
    imagePath: 'flower_2.webp',
    isBouquet: false,
    isFavorite: false,
  },
  {
    id: 3,
    description: 'Premium white roses perfect for weddings',
    name: 'Mixed Spring Bouquet',
    price: 9.99,
    shop: 'Petals Paradise',
    imagePath: 'flower_3.jpeg',
    isBouquet: true,
    isFavorite: false,
  },
  {
    id: 4,
    description: 'Cheerful yellow daffodils to welcome spring',
    name: 'Red Rose Bouquet',
    price: 109.5,
    shop: 'Bloom & Blossom',
    imagePath: 'flower_4.webp',
    isBouquet: false,
    isFavorite: true,
  },
  {
    id: 5,
    description: 'Colorful spring flowers in a stunning arrangement',
    name: 'Mixed Spring Bouquet',
    price: 52.99,
    shop: 'Petals Paradise',
    imagePath: 'flower_1.jpeg',
    isBouquet: true,
    isFavorite: true,
  },
  {
    id: 6,
    description: 'Fresh pink tulips for a touch of elegance',
    name: 'Pink Tulips',
    price: 23.15,
    shop: 'Garden Delights',
    imagePath: 'flower_2.webp',
    isBouquet: false,
    isFavorite: false,
  },
  {
    id: 7,
    description: 'Premium white roses perfect for weddings',
    name: 'Mixed Spring Bouquet',
    price: 9.99,
    shop: 'Petals Paradise',
    imagePath: 'flower_3.jpeg',
    isBouquet: true,
    isFavorite: false,
  },
  {
    id: 8,
    description: 'Cheerful yellow daffodils to welcome spring',
    name: 'Red Rose Bouquet',
    price: 109.5,
    shop: 'Bloom & Blossom',
    imagePath: 'flower_4.webp',
    isBouquet: false,
    isFavorite: true,
  },
  {
    id: 9,
    description: 'Colorful spring flowers in a stunning arrangement',
    name: 'Mixed Spring Bouquet',
    price: 52.99,
    shop: 'Petals Paradise',
    imagePath: 'flower_1.jpeg',
    isBouquet: true,
    isFavorite: true,
  },
  {
    id: 10,
    description: 'Fresh pink tulips for a touch of elegance',
    name: 'Pink Tulips',
    price: 23.15,
    shop: 'Garden Delights',
    imagePath: 'flower_2.webp',
    isBouquet: false,
    isFavorite: false,
  },
  {
    id: 11,
    description: 'Premium white roses perfect for weddings',
    name: 'Mixed Spring Bouquet',
    price: 9.99,
    shop: 'Petals Paradise',
    imagePath: 'flower_3.jpeg',
    isBouquet: true,
    isFavorite: false,
  },
  {
    id: 12,
    description: 'Cheerful yellow daffodils to welcome spring',
    name: 'Red Rose Bouquet',
    price: 109.5,
    shop: 'Bloom & Blossom',
    imagePath: 'flower_4.webp',
    isBouquet: false,
    isFavorite: true,
  },
  {
    id: 13,
    description: 'Colorful spring flowers in a stunning arrangement',
    name: 'Mixed Spring Bouquet',
    price: 52.99,
    shop: 'Petals Paradise',
    imagePath: 'flower_1.jpeg',
    isBouquet: true,
    isFavorite: true,
  },
  {
    id: 14,
    description: 'Fresh pink tulips for a touch of elegance',
    name: 'Pink Tulips',
    price: 23.15,
    shop: 'Garden Delights',
    imagePath: 'flower_2.webp',
    isBouquet: false,
    isFavorite: false,
  },
  {
    id: 15,
    description: 'Premium white roses perfect for weddings',
    name: 'Mixed Spring Bouquet',
    price: 9.99,
    shop: 'Petals Paradise',
    imagePath: 'flower_3.jpeg',
    isBouquet: true,
    isFavorite: false,
  },
];

export default function ProductList() {
  const cartItems = useCartStore((state) => state.items);

  const mergedItems = products.map((baseItem) => {
    const cartItem = cartItems.find((ci) => baseItem.id === ci.id);
    if (!cartItem) return baseItem;
    return {
      ...cartItem,
      ...baseItem,
    };
  });

  return (
    <Stack direction="row" gap={3} flexWrap="wrap">
      {mergedItems.map((item: FlowerItem) => (
        <Product key={item.id} item={item} cardWidth={300} imgHeight={220} />
      ))}
    </Stack>
  );
}
