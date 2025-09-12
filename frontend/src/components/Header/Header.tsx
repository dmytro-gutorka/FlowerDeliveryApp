import BookmarkAddOutlinedIcon from '@mui/icons-material/BookmarkAddOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Badge from '@mui/material/Badge';
import FlowerIcon from '../../assets/FlowerIcon';
import { Button, Container, Stack, useTheme } from '@mui/material';

export default function Header() {
  const cartItems = 1;
  const favoriteItems = 1;

  const theme = useTheme();

  return (
    <AppBar position="sticky" sx={{ backgroundColor: theme.palette.background.paper }}>
      <Container maxWidth="xl">
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Stack direction="row" gap={1} alignItems="center">
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
                variant="text"
                aria-label="Open cart"
                startIcon={
                  <Badge badgeContent={cartItems}>
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
