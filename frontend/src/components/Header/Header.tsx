import { Button, Container, Stack, useTheme } from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Badge from '@mui/material/Badge';
import FlowerIcon from '../../assets/FlowerIcon';
import { useCartStore } from '../../app/store/cart/store.ts';
import { Link } from '@tanstack/react-router';

export default function Header() {
  const theme = useTheme();
  const itemsInCart = useCartStore((state) => state.items)?.length;

  return (
    <AppBar position="sticky" sx={{ backgroundColor: theme.palette.background.paper }}>
      <Container maxWidth="xl">
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Stack
            component={Link}
            to="/"
            sx={{ cursor: 'pointer', alignItems: 'center', flexDirection: 'row', gap: 1 }}
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
                component={Link}
                to="/cart"
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
