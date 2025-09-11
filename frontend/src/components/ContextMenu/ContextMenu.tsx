import MenuItem from '@mui/material/MenuItem';
import BookmarkAddOutlinedIcon from '@mui/icons-material/BookmarkAddOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Menu from '@mui/material/Menu';
import { Badge } from '@mui/material';
import IconButton from "@mui/material/IconButton";

interface ContextMenu {
}

export default function ContextMenu({}: ContextMenu) {
    return (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={Boolean(mobileMoreAnchorEl)}
            onClose={() => setMobileMoreAnchorEl(null)}
        >
            <MenuItem>
                <IconButton size="large" aria-label={`${favoriteItems} items in your favorite list`} color="inherit">
                    <Badge badgeContent={favoriteItems} color="error">
                        <ShoppingCartOutlinedIcon />
                    </Badge>
                </IconButton>
                <p>Cart</p>
            </MenuItem>
            <MenuItem>
                <IconButton
                    size="large"
                    aria-label={`${cartItems} items in your cart`}
                    color="inherit"
                >
                    <Badge badgeContent={cartItems} color="error">
                        <BookmarkAddOutlinedIcon />
                    </Badge>
                </IconButton>
                <p>Favorites</p>
            </MenuItem>
        </Menu>
    )
}