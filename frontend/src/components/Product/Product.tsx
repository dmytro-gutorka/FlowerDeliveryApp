import type { ProductItem } from '../../types/types.ts';
import { useCartStore } from '../../app/store/cart/store.ts';
import {
  CardActionArea,
  CardContent,
  Typography,
  CardMedia,
  Button,
  Stack,
  Chip,
  Card,
  CardActions,
  useTheme,
} from '@mui/material';
import LikeButton from '../LikeButton';
import StoreOutlinedIcon from '@mui/icons-material/StoreOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import IconButton from '@mui/material/IconButton';
import convertCentsToUsd from '../../utils/convertCentsToUsd.ts';
import getFormatedCurrency from '../../utils/getFormatedCurrency.ts';

interface ProductProps {
  item: ProductItem & {
    lineTotal: number;
    quantity: number;
  };
  cardWidth: number;
  imgHeight: number;
}

export default function Product({ item, cardWidth, imgHeight }: ProductProps) {
  const theme = useTheme();

  const { description, title, priceCents, imagePath, type, isFavorite, shopName } = item;

  const isSingleFlower = type === 'SINGLE_FLOWER';
  const imgPath = `./${isSingleFlower ? 'single-flower-card-images' : 'bouquet-flower-card-images'}/${imagePath}`;

  const { addProduct, incrementQuantity, decrementQuantity } = useCartStore(
    (state) => state.actions,
  );

  const price = getFormatedCurrency(convertCentsToUsd(priceCents));

  return (
    <Card
      sx={{
        width: cardWidth,
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'column',
        transition: theme.transitions.create('all'),
        position: 'relative',
        '&:hover': {
          transform: 'scale(1.05)',
        },
      }}
    >
      <CardActionArea>
        <CardMedia component="img" height={imgHeight} image={imgPath} alt={title} />
        <CardContent>
          <Stack direction="row" alignItems="end" gap={0.5}>
            <StoreOutlinedIcon />
            <Typography gutterBottom variant="subtitle2" component="div" lineHeight={0.8}>
              {shopName}
            </Typography>
          </Stack>
          <Typography gutterBottom variant="h5" component="div" fontWeight={700}>
            {title}
          </Typography>
          <Typography variant="body2">{description}</Typography>
        </CardContent>
      </CardActionArea>
      <CardActions
        sx={{ color: theme.palette.accent, justifyContent: 'space-between', padding: 2 }}
      >
        <Typography variant="h5" fontWeight={900}>
          {price}
        </Typography>
        {Boolean(!item?.quantity || item.quantity === 0) && (
          <Button startIcon={<ShoppingCartOutlinedIcon />} onClick={() => addProduct(item)}>
            Add to cart
          </Button>
        )}

        {Boolean(item?.quantity && item?.quantity > 0) && (
          <Stack
            minWidth={theme.spacing(18)}
            bgcolor={theme.palette.accent}
            borderRadius={1}
            pb={0.5}
          >
            <Stack direction="row" alignItems="center" alignSelf="center" justifySelf="center">
              <IconButton
                onClick={() => decrementQuantity(item)}
                sx={{ color: theme.palette.common.white }}
              >
                <RemoveIcon />
              </IconButton>
              <Typography color={theme.palette.common.white} fontWeight={700}>
                {item.quantity} items
              </Typography>

              <IconButton
                onClick={() => incrementQuantity(item)}
                sx={{ color: theme.palette.common.white }}
              >
                <AddIcon />
              </IconButton>
            </Stack>
          </Stack>
        )}
      </CardActions>
      <LikeButton isActive={isFavorite} />
      {!isSingleFlower && (
        <Chip
          label="Bouquet"
          sx={{
            position: 'absolute',
            top: 10,
            left: 10,
            backgroundColor: theme.palette.accent,
            color: theme.palette.common.white,
            fontWeight: 600,
          }}
        />
      )}
    </Card>
  );
}
