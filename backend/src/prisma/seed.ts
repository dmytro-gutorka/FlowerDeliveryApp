import { PrismaClient, ProductType } from '@prisma/client';

const prisma = new PrismaClient();

// helpers
const rnd = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;
const sample = <T,>(arr: T[]) => arr[rnd(0, arr.length - 1)];

async function main() {

    const shopsData = [
        { name: 'Bloom & Co',       address: '12 Rose Street',      lat: '40.7128', lan: '-74.0060' },
        { name: 'Petal Palace',     address: '48 Daisy Avenue',     lat: '34.0522', lan: '-118.2437' },
        { name: 'Flora Boutique',   address: '27 Orchid Boulevard', lat: '41.8781', lan: '-87.6298' },
        { name: 'Sunflower Market', address: '91 Sun Street',       lat: '29.7604', lan: '-95.3698' },
        { name: 'Lavender Lane',    address: '6 Lavender Drive',    lat: '33.4484', lan: '-112.0740' },
    ];
    await prisma.shop.createMany({ data: shopsData });
    const shops = await prisma.shop.findMany({ orderBy: { createdAt: 'asc' } });
    console.log(`Created ${shops.length} shops`);

    const productsData = [
        { title: 'Red Rose Bouquet',        description: '12 premium red roses tied with satin ribbon.', imagePath: '/images/red_rose_bouquet.jpg',        type: ProductType.BOUQUET },
        { title: 'Pink Peony Bouquet',      description: 'Soft pink peonies for romantic moments.',     imagePath: '/images/pink_peony_bouquet.jpg',      type: ProductType.BOUQUET },
        { title: 'Mixed Spring Bouquet',    description: 'Vibrant tulips, daffodils and daisies mix.',  imagePath: '/images/mixed_spring_bouquet.jpg',    type: ProductType.BOUQUET },
        { title: 'White Lily Arrangement',  description: 'Elegant white lilies in a glass vase.',       imagePath: '/images/white_lily_arrangement.jpg',  type: ProductType.BOUQUET },
        { title: 'Sunflower Sunshine',      description: 'Bright yellow sunflowers to light up a room.',imagePath: '/images/sunflower_sunshine.jpg',      type: ProductType.BOUQUET },
        { title: 'Orchid Elegance',         description: 'Graceful purple orchid in a ceramic pot.',    imagePath: '/images/orchid_elegance.jpg',         type: ProductType.SINGLE_FLOWER },
        { title: 'Single Red Rose',         description: 'Long-stemmed red rose, individually wrapped.',imagePath: '/images/single_red_rose.jpg',         type: ProductType.SINGLE_FLOWER },
        { title: 'Single White Lily',       description: 'Pure white lily stem with soft fragrance.',   imagePath: '/images/single_white_lily.jpg',       type: ProductType.SINGLE_FLOWER },
        { title: 'Single Yellow Tulip',     description: 'Cheerful yellow tulip in craft paper.',       imagePath: '/images/single_yellow_tulip.jpg',     type: ProductType.SINGLE_FLOWER },
        { title: 'Single Pink Gerbera',     description: 'Vibrant pink gerbera daisy stem.',            imagePath: '/images/single_pink_gerbera.jpg',     type: ProductType.SINGLE_FLOWER },
        { title: 'Romantic Roses Box',      description: 'Square box with 25 premium red roses.',       imagePath: '/images/romantic_roses_box.jpg',      type: ProductType.BOUQUET },
        { title: 'Wildflower Mix',          description: 'Rustic wildflowers for a natural look.',      imagePath: '/images/wildflower_mix.jpg',          type: ProductType.BOUQUET },
        { title: 'Blue Hydrangea Stem',     description: 'Fluffy blue hydrangea stem.',                 imagePath: '/images/blue_hydrangea_stem.jpg',     type: ProductType.SINGLE_FLOWER },
        { title: 'Orange Tulip Bundle',     description: 'Bundle of 7 bright orange tulips.',           imagePath: '/images/orange_tulip_bundle.jpg',     type: ProductType.BOUQUET },
        { title: 'White Rose Bouquet',      description: 'Pure white roses for elegant occasions.',     imagePath: '/images/white_rose_bouquet.jpg',      type: ProductType.BOUQUET },
        { title: 'Lavender Sprig',          description: 'Fragrant lavender sprig for serenity.',       imagePath: '/images/lavender_sprig.jpg',          type: ProductType.SINGLE_FLOWER },
        { title: 'Purple Iris Bouquet',     description: 'Exotic bouquet of purple irises.',            imagePath: '/images/purple_iris_bouquet.jpg',     type: ProductType.BOUQUET },
        { title: 'Mini Succulent Pot',      description: 'Cute small succulent in ceramic pot.',        imagePath: '/images/mini_succulent_pot.jpg',      type: ProductType.SINGLE_FLOWER },
        { title: 'Cherry Blossom Branch',   description: 'Delicate pink cherry blossom branch.',        imagePath: '/images/cherry_blossom_branch.jpg',   type: ProductType.SINGLE_FLOWER },
        { title: 'Exotic Tropical Mix',     description: 'Bold tropical flowers arrangement.',          imagePath: '/images/exotic_tropical_mix.jpg',     type: ProductType.BOUQUET },
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
