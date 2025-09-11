import {Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Stack, Typography} from "@mui/material";
import StoreOutlinedIcon from '@mui/icons-material/StoreOutlined';
import {theme} from "../../app/theme.ts";

interface ProductCard {
}

export default function ProductCard({flower}: ProductCard) {
    const {description, name, price, shop, imagePath, isSingleFlower, isFavorite} = flower

    return (
        <Card sx={{ width: 300 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="220"
                    image={imagePath}
                    alt={name}
                />
                <CardContent>
                    <Stack direction="row" alignItems="center">
                        <StoreOutlinedIcon/>
                        <Typography gutterBottom variant="subtitle2" component="div">
                            {shop}
                        </Typography>
                    </Stack>
                    <Typography gutterBottom variant="h5" component="div" fontWeight={600}>
                        {name}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        {description}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions sx={{ color: theme.palette.accent.main}}>
                <Typography variant="h5" fontWeight={900}>
                    ${price}
                </Typography>
                <Button size="small"
                        variant="contained"
                        sx={{ paddingInline: 2, paddingBlock: 1, backgroundColor:  theme.palette.accent.main}}
                >
                    Add to cart
                </Button>
            </CardActions>
        </Card>
    )
}