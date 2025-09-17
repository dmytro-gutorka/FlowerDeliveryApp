import type { SortTypes } from '../../types/types.ts';
import { PRODUCT_SORT_BY } from '../../app/constants.ts';
import { Stack } from '@mui/material';
import { useEffect, useState } from 'react';
import useShopWithProducts from '../../hooks/useShopWithProducts.ts';
import ShopList from '../../components/ShopList';
import ProductList from '../../components/ProductList';

export default function Homepage() {
  const [page, setPage] = useState<number>(1);
  const [shopId, setShop] = useState<string | null>(null);
  const [sortType, setSortType] = useState<SortTypes>(PRODUCT_SORT_BY.PRICE_ASC);

  const { isShopsSuccess, isProductsSuccess, shops, products } = useShopWithProducts(
    page,
    shopId,
    sortType,
  );

  useEffect(() => {
    if (isShopsSuccess && !shopId && shops?.length) {
      setShop(shops[0].id);
    }
  }, [isShopsSuccess, shops, shopId]);

  if (!(isProductsSuccess && isShopsSuccess)) return null;
  return (
    <Stack gap={5}>
      <ShopList shops={shops} shopId={shopId} setShop={setShop} />
      {products && (
        <ProductList
          products={products}
          page={page}
          onPageChange={setPage}
          onSortChange={setSortType}
          sortType={sortType}
        />
      )}
    </Stack>
  );
}
