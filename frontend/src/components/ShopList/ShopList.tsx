import { useQuery } from '@tanstack/react-query';
import type { IShop } from '../../types/types.ts';
import { Stack } from '@mui/material';
import Shop from '../Shop';

export default function ShopList() {
  const { data: shops, isSuccess } = useQuery({
    queryKey: ['shops'],
    queryFn: (): Promise<IShop[]> =>
      fetch('http://localhost:3000/api/v1/shops').then((res) => res.json()),
  });

  if (isSuccess)
    return (
      <Stack gap={2}>
        {shops?.map((shop) => (
          <Shop key={shop.id} shop={shop} />
        ))}
      </Stack>
    );
}
