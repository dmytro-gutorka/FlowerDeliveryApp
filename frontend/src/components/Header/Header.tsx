import BookmarkAddOutlinedIcon from '@mui/icons-material/BookmarkAddOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Badge from '@mui/material/Badge';
import FlowerIcon from '../../assets/FlowerIcon';
import { Container, Stack, useTheme } from '@mui/material';

export default function Header() {
  const cartItems = 1;
  const favoriteItems = 1;

  const theme = useTheme();

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Stack direction="row" gap={1} alignItems="center" color={theme.palette.accent}>
            <FlowerIcon fontSize="large" />
            <Typography
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
              <IconButton size="large" aria-label="Open favorites" color="inherit">
                <Badge badgeContent={favoriteItems} color="error">
                  <BookmarkAddOutlinedIcon />
                </Badge>
              </IconButton>
            </Box>
            <Box>
              <IconButton size="large" aria-label="Open cart" color="inherit">
                <Badge badgeContent={cartItems} color="error">
                  <ShoppingCartOutlinedIcon />
                </Badge>
              </IconButton>
            </Box>
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
