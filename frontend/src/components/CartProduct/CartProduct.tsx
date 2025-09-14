import type { FlowerCartItem, FlowerItem } from '../../types/types.ts';
import { useTheme } from '@mui/material/styles';
import { Stack } from '@mui/material';
import DeleteOutlineRoundedIcon from '@mui/icons-material/DeleteOutlineRounded';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import RemoveIcon from '@mui/icons-material/Remove';
import CardMedia from '@mui/material/CardMedia';
import AddIcon from '@mui/icons-material/Add';
import Card from '@mui/material/Card';
import { useCartStore } from '../../app/store/cart/store.ts';

interface CartProductProps {
  item: FlowerCartItem;
}

export default function CartProduct({ item }: CartProductProps) {
  const { shop, name, price, imagePath, quantity, lineTotal } = item;
  const { removeProduct, incrementQuantity, decrementQuantity } = useCartStore(
    (state) => state.actions,
  );
  const theme = useTheme();

  console.log(item);

  return (
    <Card sx={{ display: 'flex' }}>
      <CardMedia
        component="img"
        image={imagePath}
        alt={name}
        sx={{
          width: 130,
          height: 130,
          padding: 1.5,
          borderRadius: theme.shape.borderRadiusScale.md,
        }}
      />
      <CardContent sx={{ flexGrow: 1, padding: 2 }}>
        <Stack direction="row" justifyContent="space-between">
          <Stack>
            <Typography component="div" variant="h6" fontWeight={700}>
              {name}
            </Typography>
            <Typography
              variant="subtitle2"
              component="div"
              fontWeight={400}
              color={theme.palette.grey[700]}
              mb={2}
            >
              {shop}
            </Typography>

            <Stack direction="row" alignItems="end" gap={1}>
              <Typography
                variant="subtitle1"
                component="div"
                color={theme.palette.accent}
                fontWeight={800}
              >
                ${lineTotal.toFixed(2)}
              </Typography>
              <Typography
                variant="subtitle2"
                component="div"
                color={theme.palette.accent}
                fontWeight={800}
              >
                (${price} each)
              </Typography>
            </Stack>
          </Stack>

          <Stack direction="row" alignItems="center" gap={5}>
            <Stack direction="row" alignItems="center" gap={0.5}>
              <IconButton
                aria-label="decrement product quantity"
                onClick={() => decrementQuantity(item)}
              >
                <RemoveIcon />
              </IconButton>
              <Typography>{quantity}</Typography>
              <IconButton
                aria-label="increment product quantity"
                onClick={() => incrementQuantity(item)}
              >
                <AddIcon />
              </IconButton>
            </Stack>
            <IconButton aria-label="remove item from a cart" onClick={() => removeProduct(item)}>
              <DeleteOutlineRoundedIcon color="error" />
            </IconButton>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
}
