import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Badge from '@mui/material/Badge';
import MoreIcon from '@mui/icons-material/MoreVert';
import BookmarkAddOutlinedIcon from '@mui/icons-material/BookmarkAddOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import React, {useState} from "react";


export default function PrimarySearchAppBar() {
    const cartItems = 1
    const favoriteItems = 1

    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState<null | HTMLElement>(null);

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography
                        variant="h6"
                        component="div"
                        noWrap
                        sx={{ display: { xs: 'none', sm: 'block' } }}
                    >
                        FlowerShop
                    </Typography>
                    <Box sx={{ flexGrow: 1 }} />
                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                        <IconButton
                            size="large"
                            aria-label={`${favoriteItems} items in your favorite list`}
                            color="inherit"
                        >
                            <Badge badgeContent={cartItems} color="error">
                                <BookmarkAddOutlinedIcon />
                            </Badge>
                        </IconButton>
                    </Box>
                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                        <IconButton
                            size="large"
                            aria-label={`${cartItems} items in your cart`}
                            color="inherit"
                        >
                            <Badge badgeContent={cartItems} color="error">
                                <ShoppingCartOutlinedIcon />
                            </Badge>
                        </IconButton>
                    </Box>
                    <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="show more"
                            aria-controls="mobile-menu-drawer"
                            aria-haspopup="true"
                            onClick={(e: React.MouseEvent<HTMLButtonElement>) => setMobileMoreAnchorEl(e.currentTarget)}
                            color="inherit"
                        >
                            <MoreIcon />
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>
            {/*<ContextMenu></ContextMenu>*/}

        </Box>
    );
}
