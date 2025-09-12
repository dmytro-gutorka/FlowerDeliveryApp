import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Chip,
  Stack,
  Typography,
  CardActions,
  useTheme,
} from '@mui/material';
import StoreOutlinedIcon from '@mui/icons-material/StoreOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import LikeButton from '../LikeButton';
import type { Flower } from '../../types/types.ts';

interface ProductProps {
  product: Flower;
  cardWidth: number;
  imgHeight: number;
}

export default function Product({ product, cardWidth, imgHeight }: ProductProps) {
  const { description, name, price, shop, imagePath, isBouquet, isFavorite } = product;
  const theme = useTheme();

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
        <CardMedia component="img" height={imgHeight} image={imagePath} alt={name} />
        <CardContent>
          <Stack direction="row" alignItems="end" gap={0.5}>
            <StoreOutlinedIcon />
            <Typography gutterBottom variant="subtitle2" component="div" lineHeight={0.8}>
              {shop}
            </Typography>
          </Stack>
          <Typography gutterBottom variant="h5" component="div" fontWeight={700}>
            {name}
          </Typography>
          <Typography variant="body2">{description}</Typography>
        </CardContent>
      </CardActionArea>
      <CardActions
        sx={{ color: theme.palette.accent, justifyContent: 'space-between', padding: 2 }}
      >
        <Typography variant="h5" fontWeight={900}>
          ${price}
        </Typography>
        <Button startIcon={<ShoppingCartOutlinedIcon />}>Add to cart</Button>
      </CardActions>

      <LikeButton isActive={isFavorite} />

      {isBouquet && (
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
