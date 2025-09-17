import type { IShop } from '../../types/types.ts';
import { Stack } from '@mui/material';
import Shop from '../Shop';
import StoreOutlinedIcon from '@mui/icons-material/StoreOutlined';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

interface ShopListProps {
  shops: IShop[];
  shopId: string | null;
  setShop: (id: string | null) => void;
}

export default function ShopList({ shops, shopId, setShop }: ShopListProps) {
  return (
    <Box>
      <Stack>
        <Stack direction="row" alignItems="center" gap={1} mb={2}>
          <StoreOutlinedIcon fontSize="large" />
          <Typography variant="h4" fontWeight={700}>
            Available Shops
          </Typography>
        </Stack>
        <Stack gap={2}>
          {shops?.map((shop) => (
            <Shop key={shop.id} shop={shop} shopId={shopId} setShop={setShop} />
          ))}
        </Stack>{' '}
      </Stack>
    </Box>
  );
}
