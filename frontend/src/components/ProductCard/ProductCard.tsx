import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Stack,
  Typography,
  useTheme,
} from '@mui/material';
import StoreOutlinedIcon from '@mui/icons-material/StoreOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import LikeButton from '../LikeButton';

interface ProductCard {
  description: string;
  name: string;
  price: number;
  shop: string;
  imagePath: string;
  isBouquet: boolean;
  isFavorite: boolean;
}

interface ProductCardProps {
  flower: ProductCard;
  cardWidth: number;
  imgHeight: number;
}

export default function ProductCard({ flower, cardWidth, imgHeight }: ProductCardProps) {
  const { description, name, price, shop, imagePath, isBouquet, isFavorite } = flower;
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
