import { Stack } from '@mui/material';
import ProductCard from '../ProductCard/ProductCard.tsx';

interface ProductCardList {}

const flowers = [
  {
    id: 1,
    description: 'Colorful spring flowers in a stunning arrangement',
    name: 'Mixed Spring Bouquet',
    price: 52.99,
    shop: 'Petals Paradise',
    imagePath: 'flower_1.jpeg',
    isSingleFlower: true,
    isFavorite: true,
  },
  {
    id: 2,
    description: 'Fresh pink tulips for a touch of elegance',
    name: 'Pink Tulips',
    price: 23.15,
    shop: 'Garden Delights',
    imagePath: 'flower_2.webp',
    isSingleFlower: false,
    isFavorite: false,
  },
  {
    id: 3,
    description: 'Premium white roses perfect for weddings',
    name: 'Mixed Spring Bouquet',
    price: 9.99,
    shop: 'Petals Paradise',
    imagePath: 'flower_3.jpeg',
    isSingleFlower: true,
    isFavorite: false,
  },
  {
    id: 4,
    description: 'Cheerful yellow daffodils to welcome spring',
    name: 'Red Rose Bouquet',
    price: 109.5,
    shop: 'Bloom & Blossom',
    imagePath: 'flower_4.webp',
    isSingleFlower: false,
    isFavorite: true,
  },
];

export default function ProductCardList() {
  return (
    <Stack direction="row" gap={3} flexWrap="wrap">
      {flowers.map((flower) => (
        <ProductCard flower={flower} cardWidth={300} imgHeight={220} />
      ))}
    </Stack>
  );
}
