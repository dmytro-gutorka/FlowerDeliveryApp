import BookmarkAddOutlinedIcon from '@mui/icons-material/BookmarkAddOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Badge from '@mui/material/Badge';
import {Container, Icon, Stack, SvgIcon} from "@mui/material";

export default function Header() {
    const cartItems = 1
    const favoriteItems = 1

    return (

        <AppBar position="static">
        <Container maxWidth="xl">
                <Toolbar >

                    <Stack direction="row" gap={1} alignItems="center">
                    <SvgIcon fontSize="large">
                        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24"
                             fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                             stroke-linejoin="round" className="lucide lucide-flower2 h-8 w-8">
                            <path
                                d="M12 5a3 3 0 1 1 3 3m-3-3a3 3 0 1 0-3 3m3-3v1M9 8a3 3 0 1 0 3 3M9 8h1m5 0a3 3 0 1 1-3 3m3-3h-1m-2 3v-1"></path>
                            <circle cx="12" cy="8" r="2"></circle>
                            <path d="M12 10v12"></path>
                            <path d="M12 22c4.2 0 7-1.667 7-5-4.2 0-7 1.667-7 5Z"></path>
                            <path d="M12 22c-4.2 0-7-1.667-7-5 4.2 0 7 1.667 7 5Z"></path>
                        </svg>
                    </SvgIcon>
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


                    <Box>
                        <IconButton size="large" aria-label="Open favorites">
                            <Badge badgeContent={favoriteItems} color="error">
                                <BookmarkAddOutlinedIcon/>
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


                </Toolbar>
        </Container>
        </AppBar>

    );
}
