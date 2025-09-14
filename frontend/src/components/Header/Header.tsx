import { Button, Container, Stack, useTheme } from '@mui/material';
import BookmarkAddOutlinedIcon from '@mui/icons-material/BookmarkAddOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Badge from '@mui/material/Badge';
import FlowerIcon from '../../assets/FlowerIcon';
import { useNavigate } from 'react-router';
import { useCartStore } from '../../app/store/cart/store.ts';

export default function Header() {
  const favoriteItems = 1;

  const theme = useTheme();
  const navigation = useNavigate();
  const itemsInCart = useCartStore((state) => state.items)?.length;

  return (
    <AppBar position="sticky" sx={{ backgroundColor: theme.palette.background.paper }}>
      <Container maxWidth="xl">
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Stack
            direction="row"
            gap={1}
            alignItems="center"
            onClick={() => navigation('/')}
            sx={{ cursor: 'pointer' }}
          >
            <FlowerIcon size={32} color={theme.palette.accent} />
            <Typography
              color={theme.palette.accent}
              variant="h5"
              component="div"
              fontWeight={900}
              noWrap
              sx={{ display: { xs: 'none', sm: 'block' } }}
            >
              FlowerShop
            </Typography>
          </Stack>
          <Stack direction="row" gap={1} alignItems="center">
            <Box>
              <Button
                variant="text"
                aria-label="Open favorites"
                startIcon={
                  <Badge badgeContent={favoriteItems} color="error">
                    <BookmarkAddOutlinedIcon />
                  </Badge>
                }
              >
                Favorites
              </Button>
            </Box>

            <Box>
              <Button
                onClick={() => navigation('/cart')}
                variant="text"
                aria-label="Open cart"
                startIcon={
                  <Badge badgeContent={itemsInCart}>
                    <ShoppingCartOutlinedIcon />
                  </Badge>
                }
              >
                Cart
              </Button>
            </Box>
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
