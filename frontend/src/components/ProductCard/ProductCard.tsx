import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from '@mui/material';
import { theme } from '../../app/theme.ts';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import StoreOutlinedIcon from '@mui/icons-material/StoreOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import IconButton from '@mui/material/IconButton';

interface ProductCard {
  description: string;
  name: string;
  price: number;
  shop: string;
  imagePath: string;
  isSingleFlower: boolean;
  isFavorite: boolean;
}

interface ProductCardProps {
  flower: ProductCard;
  cardWidth: number;
  imgHeight: number;
}

export default function ProductCard({ flower, cardWidth, imgHeight }: ProductCardProps) {
  const { description, name, price, shop, imagePath, isSingleFlower, isFavorite } = flower;

  return (
    <Card
      sx={{
        width: cardWidth,
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'column',
        transition: theme.transitions.create('all'),
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
        <IconButton
          sx={{
            backgroundColor: isFavorite ? 'red' : theme.palette.grey.A100,
            '&:hover .MuiSvgIcon-root': {
              fill: 'red',
              stroke: 'red',
            },
          }}
        >
          <FavoriteBorderIcon color="white" fontSize="medium" />
        </IconButton>
      </CardActions>
    </Card>
  );
}
