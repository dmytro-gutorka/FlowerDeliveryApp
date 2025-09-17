import type { IShop, SortTypes } from '../types/types.ts';
import { useQuery } from '@tanstack/react-query';
import { SERVER_URL } from '../app/constants.ts';

export default function useShopWithProducts(
  page: number,
  shopId: string | null,
  sortType: SortTypes,
) {
  const { data: shops, isSuccess: isShopsSuccess } = useQuery<IShop[]>({
    queryKey: ['shops'],
    queryFn: (): Promise<IShop[]> => fetch(`${SERVER_URL}/api/v1/shops`).then((res) => res.json()),
  });

  const { data: products, isSuccess: isProductsSuccess } = useQuery({
    queryKey: ['products', page, shopId, sortType],
    queryFn: () =>
      fetch(`${SERVER_URL}/api/v1/shops/${shopId}/products?page=${page}&sort=${sortType}`, {
        credentials: 'include',
      })
        .then((res) => res.json())
        .catch(console.error),
    enabled: isShopsSuccess,
  });

  return {
    shops,
    products,
    isShopsSuccess,
    isProductsSuccess,
  };
}
