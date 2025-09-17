import { Stack, useTheme } from '@mui/material';
import type { IShop } from '../../types/types.ts';
import Typography from '@mui/material/Typography';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import Box from '@mui/material/Box';

interface ShopProps {
  shop: IShop;
  shopId: string | null;
  setShop: (shopId: string | null) => void;
}

export default function Shop({ shop, shopId, setShop }: ShopProps) {
  const { address, imagePath, name } = shop;

  const theme = useTheme();
  return (
    <Stack
      onClick={() => setShop(shop.id)}
      sx={{
        display: 'flex',
        flexDirection: 'row',
        padding: 1,
        gap: 2,
        borderRadius: theme.shape.borderRadiusScale.sm,
        border: `1px solid ${theme.palette.grey[200]}`,
        alignItems: 'center',
        cursor: 'pointer',
        backgroundColor: shopId === shop.id ? theme.palette.grey[100] : 'white',
        '&:hover': {
          backgroundColor: theme.palette.grey[100],
        },
      }}
    >
      <Box
        component="img"
        src={`./shop-card-images/${imagePath}`}
        sx={{ width: 100, height: 120, borderRadius: theme.shape.borderRadiusScale.sm }}
      />
      <Stack>
        <Typography variant="h6" fontWeight={700}>
          {name}
        </Typography>
        <Stack direction="row" gap={0.5} color={theme.palette.grey[500]} alignItems="center">
          <FmdGoodOutlinedIcon />
          <Typography variant="body2" color={theme.palette.grey[700]}>
            {address}
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
}
