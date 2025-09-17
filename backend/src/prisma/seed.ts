import { PrismaClient, ProductType } from '@prisma/client';

const prisma = new PrismaClient();

// helpers
const rnd = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;
const sample = <T,>(arr: T[]) => arr[rnd(0, arr.length - 1)];

async function main() {

    const shopsData = [
        { name: 'Bloom & Co',       address: '12 Rose Street',      lat: '40.7128', lan: '-74.0060', imagePath: 'flower_shop_1.jpeg' },
        { name: 'Petal Palace',     address: '48 Daisy Avenue',     lat: '34.0522', lan: '-118.2437', imagePath: 'flower_shop_2.jpeg' },
        { name: 'Flora Boutique',   address: '27 Orchid Boulevard', lat: '41.8781', lan: '-87.6298', imagePath: 'flower_shop_3.jpeg'},
        { name: 'Sunflower Market', address: '91 Sun Street',       lat: '29.7604', lan: '-95.3698', imagePath: 'flower_shop_4.jpeg'},
    ];
    await prisma.shop.createMany({ data: shopsData });
    const shops = await prisma.shop.findMany({ orderBy: { createdAt: 'asc' } });
    console.log(`Created ${shops.length} shops`);

    const productsData = [
        { title: 'Red Rose Bouquet',        description: '12 premium red roses tied with satin ribbon.', imagePath: 'flower_bouquet_1.jpeg',        type: ProductType.BOUQUET },
        { title: 'Pink Peony Bouquet',      description: 'Soft pink peonies for romantic moments.',     imagePath: 'flower_bouquet_2.jpeg',      type: ProductType.BOUQUET },
        { title: 'Mixed Spring Bouquet',    description: 'Vibrant tulips, daffodils and daisies mix.',  imagePath: 'flower_bouquet_3.jpeg',    type: ProductType.BOUQUET },
        { title: 'White Lily Arrangement',  description: 'Elegant white lilies in a glass vase.',       imagePath: 'flower_bouquet_4.jpeg',  type: ProductType.BOUQUET },
        { title: 'Sunflower Sunshine',      description: 'Bright yellow sunflowers to light up a room.',imagePath: 'flower_bouquet_5.jpeg',      type: ProductType.BOUQUET },
        { title: 'Romantic Roses Box',      description: 'Square box with 25 premium red roses.',       imagePath: 'flower_bouquet_7.jpeg',      type: ProductType.BOUQUET },
        { title: 'Wildflower Mix',          description: 'Rustic wildflowers for a natural look.',      imagePath: 'flower_bouquet_8.jpeg',          type: ProductType.BOUQUET },
        { title: 'Orange Tulip Bundle',     description: 'Bundle of 7 bright orange tulips.',           imagePath: 'flower_bouquet_9.jpeg',     type: ProductType.BOUQUET },
        { title: 'White Rose Bouquet',      description: 'Pure white roses for elegant occasions.',     imagePath: 'flower_bouquet_10.jpeg',      type: ProductType.BOUQUET },
        { title: 'Purple Iris Bouquet',     description: 'Exotic bouquet of purple irises.',            imagePath: 'flower_bouquet_11.jpeg',     type: ProductType.BOUQUET },
        { title: 'Exotic Tropical Mix',     description: 'Bold tropical flowers arrangement.',          imagePath: 'flower_bouquet_12.jpeg',     type: ProductType.BOUQUET },
        { title: 'Orchid Elegance',         description: 'Graceful purple orchid in a ceramic pot.',    imagePath: 'single_flower_1.jpeg',         type: ProductType.SINGLE_FLOWER },
        { title: 'Single Red Rose',         description: 'Long-stemmed red rose, individually wrapped.',imagePath: 'single_flower_2.jpeg',         type: ProductType.SINGLE_FLOWER },
        { title: 'Single White Lily',       description: 'Pure white lily stem with soft fragrance.',   imagePath: 'single_flower_3.jpeg',       type: ProductType.SINGLE_FLOWER },
        { title: 'Cherry Blossom Branch',   description: 'Delicate pink cherry blossom branch.',        imagePath: 'single_flower_4.jpeg',   type: ProductType.SINGLE_FLOWER },
        { title: 'Single Yellow Tulip',     description: 'Cheerful yellow tulip in craft paper.',       imagePath: 'single_flower_5.jpeg',     type: ProductType.SINGLE_FLOWER },
        { title: 'Mini Succulent Pot',      description: 'Cute small succulent in ceramic pot.',        imagePath: 'single_flower_6.jpeg',      type: ProductType.SINGLE_FLOWER },
        { title: 'Lavender Sprig',          description: 'Fragrant lavender sprig for serenity.',       imagePath: 'single_flower_7.jpeg',          type: ProductType.SINGLE_FLOWER },
        { title: 'Blue Hydrangea Stem',     description: 'Fluffy blue hydrangea stem.',                 imagePath: 'single_flower_8.jpeg',     type: ProductType.SINGLE_FLOWER },
        { title: 'Single Pink Gerbera',     description: 'Vibrant pink gerbera daisy stem.',            imagePath: 'single_flower_8.jpeg',     type: ProductType.SINGLE_FLOWER },
    ];
    await prisma.product.createMany({ data: productsData });
    const products = await prisma.product.findMany({ orderBy: { createdAt: 'asc' } });
    console.log(`Created ${products.length} products`);


    const uniquePairs = new Set<string>();
    const offersData: {
        stock: number;
        isActive: boolean;
        priceCents: number;
        productId: string;
        shopId: string;
    }[] = [];

    const TARGET = 45;
    let guard = 0;
    while (offersData.length < TARGET && guard < 1000) {
        guard++;
        const shop = sample(shops);
        const product = sample(products);
        const key = `${shop.id}::${product.id}`;
        if (uniquePairs.has(key)) continue;
        uniquePairs.add(key);

        const base =
            product.type === ProductType.BOUQUET
                ? rnd(1800, 4500)
                : rnd(500, 2000);
        const priceCents = Math.max(300, base + rnd(-200, 250));

        const stock = rnd(0, 30);
        const isActive = stock === 0 ? false : Math.random() > 0.15;

        offersData.push({
            stock,
            isActive,
            priceCents,
            productId: product.id,
            shopId: shop.id,
        });
    }

    await prisma.shopProduct.createMany({ data: offersData });
    const cnt = await prisma.shopProduct.count();
    console.log(`Created ${offersData.length} shop offers (total now: ${cnt})`);
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
