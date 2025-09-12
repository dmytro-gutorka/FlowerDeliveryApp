import type { FlowerCartItem } from '../../types/types.ts';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/material';
import RemoveIcon from '@mui/icons-material/Remove';

import AddIcon from '@mui/icons-material/Add';
import DeleteOutlineRoundedIcon from '@mui/icons-material/DeleteOutlineRounded';

interface CartProductProps {
  product: FlowerCartItem;
}

export default function CartProduct({ product }: CartProductProps) {
  const { shop, name, price, imagePath, totalPrice, quantity } = product;

  const theme = useTheme();

  return (
    <Card sx={{ display: 'flex' }}>
      <CardMedia component="img" sx={{ width: 200 }} image={imagePath} alt={name} />
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Stack justifyContent="space-between">
            <Box>
              <Typography component="div" variant="h6" fontWeight={700}>
                {name}
              </Typography>
              <Typography
                variant="subtitle2"
                component="div"
                fontWeight={400}
                color={theme.palette.grey[700]}
              >
                {shop}
              </Typography>
            </Box>
            <Typography
              variant="subtitle1"
              component="div"
              color={theme.palette.accent}
              fontWeight={700}
            >
              ${price} each
            </Typography>
          </Stack>
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
          <IconButton aria-label="decrement product quantity">
            <RemoveIcon />
          </IconButton>
          <Typography>{quantity}</Typography>
          <IconButton aria-label="increment product quantity">
            <AddIcon />
          </IconButton>
          <IconButton aria-label="remove item from a cart">
            <DeleteOutlineRoundedIcon />
          </IconButton>
        </Box>
      </Box>
    </Card>
  );
}
