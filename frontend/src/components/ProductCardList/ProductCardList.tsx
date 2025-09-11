import {Stack} from "@mui/material";

interface ProductCardList {
}

const flowers = [
    {
        id: 1,
        description: 'Colorful spring flowers in a stunning arrangement',
        name: 'Mixed Spring Bouquet',
        price: 52.99,
        shop: 'Petals Paradise',
        imagePath: 'flower_1',
        isSingleFlower: true,
        isFavorite: true,
    },
    {
        id: 2,
        description: 'Fresh pink tulips for a touch of elegance',
        name: 'Pink Tulips',
        price: 23.15,
        shop: 'Garden Delights',
        imagePath: 'flower_2',
        isSingleFlower: false,
        isFavorite: false,
    },
    {
        id: 3,
        description: 'Premium white roses perfect for weddings',
        name: 'Mixed Spring Bouquet',
        price: 9.99,
        shop: 'Petals Paradise',
        imagePath: 'flower_3',
        isSingleFlower: true,
        isFavorite: false,
    },
    {
        id: 4,
        description: 'Cheerful yellow daffodils to welcome spring',
        name: 'Red Rose Bouquet',
        price: 109.50,
        shop: 'Bloom & Blossom',
        imagePath: 'flower_4',
        isSingleFlower: false,
        isFavorite: true,
    }
]



export default function ProductCardList({}: ProductCardList) {

    return (
        <Stack>
            {flowers.map(flower => (

            ))}
        </Stack>
    )
}