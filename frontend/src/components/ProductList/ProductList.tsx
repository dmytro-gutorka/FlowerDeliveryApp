import type { ICartItem, PaginatedResponse, ProductItem, SortTypes } from '../../types/types.ts';
import { Pagination, Stack } from '@mui/material';
import { useCartStore } from '../../app/store/cart/store.ts';
import LocalFloristOutlinedIcon from '@mui/icons-material/LocalFloristOutlined';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import SortSelect from '../SortSelect';
import Product from '../Product';
import addCartItemFields from '../../utils/addCartItemFields.ts';

interface ProductListProps {
  products: PaginatedResponse<ProductItem[]>;
  page: number;
  onPageChange: (page: number) => void;
  onSortChange: (sortType: SortTypes) => void;
  sortType: SortTypes;
}

export default function ProductList({ products, onSortChange, sortType }: ProductListProps) {
  const cartItems = useCartStore((state) => state.items);
  const { results: items } = products;

  const cartItemsModified = addCartItemFields(items, cartItems);

  return (
    <Box>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        gap={1}
        flexWrap="wrap"
        sx={{ width: '100%' }}
      >
        <Stack direction="row" alignItems="center" gap={1} mb={2}>
          <LocalFloristOutlinedIcon fontSize="large" />
          <Typography variant="h4" fontWeight={700}>
            Products
          </Typography>
        </Stack>
        <SortSelect onSortChange={onSortChange} sortType={sortType} />
      </Stack>
      <Stack gap={8}>
        <Stack direction="row" gap={3} flexWrap="wrap" justifyContent="space-between">
          {cartItemsModified.map((item: ICartItem<ProductItem>) => (
            <Product key={item.offerId} item={item} cardWidth={300} imgHeight={220} />
          ))}
        </Stack>
        <Pagination count={10} sx={{ placeSelf: 'center' }} />
      </Stack>
    </Box>
  );
}
