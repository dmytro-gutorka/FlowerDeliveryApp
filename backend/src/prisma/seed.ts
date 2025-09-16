import { PrismaClient, ProductType } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
    const shopsData = [
        { name: 'Bloom & Co', address: '12 Rose Street', lat: '40.7128', lan: '-74.0060' },
        { name: 'Petal Palace', address: '48 Daisy Avenue', lat: '34.0522', lan: '-118.2437' },
        { name: 'Flora Boutique', address: '27 Orchid Blvd', lat: '41.8781', lan: '-87.6298' },
        { name: 'Sunflower Market', address: '91 Sun St', lat: '29.7604', lan: '-95.3698' },
        { name: 'Lavender Lane', address: '6 Lavender Dr', lat: '33.4484', lan: '-112.0740' },
        { name: 'Gardenia House', address: '72 Blossom Rd', lat: '39.7392', lan: '-104.9903' },
        { name: 'Rosewood Flowers', address: '15 Cherry Ln', lat: '32.7157', lan: '-117.1611' },
        { name: 'Magnolia Studio', address: '44 Magnolia Way', lat: '47.6062', lan: '-122.3321' },
        { name: 'Daisy Dreams', address: '59 Meadow Path', lat: '37.7749', lan: '-122.4194' },
        { name: 'Peony Place', address: '19 Garden Gate', lat: '30.2672', lan: '-97.7431' },
        { name: 'Iris & Ivy', address: '84 Ivy Court', lat: '42.3601', lan: '-71.0589' },
        { name: 'Lily Loft', address: '23 Lily Lane', lat: '38.9072', lan: '-77.0369' },
        { name: 'Orchid Oasis', address: '77 Orchid Hill', lat: '36.1627', lan: '-86.7816' },
        { name: 'Tulip Town', address: '10 Tulip Trail', lat: '39.9526', lan: '-75.1652' },
        { name: 'Camellia Corner', address: '31 Camellia Rd', lat: '25.7617', lan: '-80.1918' },
    ];
    await prisma.shop.createMany({ data: shopsData });
    console.log(`Created ${shopsData.length} shops`);

    const productsData = [
        {
            title: 'Red Rose Bouquet',
            description: 'A classic bouquet of 12 fresh red roses tied with satin ribbon.',
            imagePath: '/images/red_rose_bouquet.jpg',
            type: ProductType.BOUQUET,
        },
        {
            title: 'Pink Peony Bouquet',
            description: 'A lush bouquet of soft pink peonies for romantic moments.',
            imagePath: '/images/pink_peony_bouquet.jpg',
            type: ProductType.BOUQUET,
        },
        {
            title: 'Mixed Spring Bouquet',
            description: 'A vibrant mix of tulips, daffodils and daisies.',
            imagePath: '/images/mixed_spring_bouquet.jpg',
            type: ProductType.BOUQUET,
        },
        {
            title: 'White Lily Arrangement',
            description: 'Elegant white lilies in a tall glass vase.',
            imagePath: '/images/white_lily_arrangement.jpg',
            type: ProductType.BOUQUET,
        },
        {
            title: 'Sunflower Sunshine',
            description: 'Bright yellow sunflowers to light up any room.',
            imagePath: '/images/sunflower_sunshine.jpg',
            type: ProductType.BOUQUET,
        },
        {
            title: 'Orchid Elegance',
            description: 'A graceful purple orchid in a ceramic pot.',
            imagePath: '/images/orchid_elegance.jpg',
            type: ProductType.SINGLE_FLOWER,
        },
        {
            title: 'Single Red Rose',
            description: 'A single long-stemmed red rose, wrapped individually.',
            imagePath: '/images/single_red_rose.jpg',
            type: ProductType.SINGLE_FLOWER,
        },
        {
            title: 'Single White Lily',
            description: 'Pure white lily stem with subtle fragrance.',
            imagePath: '/images/single_white_lily.jpg',
            type: ProductType.SINGLE_FLOWER,
        },
        {
            title: 'Single Yellow Tulip',
            description: 'Cheerful yellow tulip wrapped in craft paper.',
            imagePath: '/images/single_yellow_tulip.jpg',
            type: ProductType.SINGLE_FLOWER,
        },
        {
            title: 'Single Pink Gerbera',
            description: 'A single pink gerbera daisy, vibrant and cheerful.',
            imagePath: '/images/single_pink_gerbera.jpg',
            type: ProductType.SINGLE_FLOWER,
        },
        {
            title: 'Romantic Roses Box',
            description: 'A square box filled with 25 premium red roses.',
            imagePath: '/images/romantic_roses_box.jpg',
            type: ProductType.BOUQUET,
        },
        {
            title: 'Wildflower Mix',
            description: 'Rustic wildflowers for a natural boho style.',
            imagePath: '/images/wildflower_mix.jpg',
            type: ProductType.BOUQUET,
        },
        {
            title: 'Blue Hydrangea Stem',
            description: 'A fluffy blue hydrangea stem.',
            imagePath: '/images/blue_hydrangea_stem.jpg',
            type: ProductType.SINGLE_FLOWER,
        },
        {
            title: 'Orange Tulip Bundle',
            description: 'Bundle of 7 orange tulips, vibrant and joyful.',
            imagePath: '/images/orange_tulip_bundle.jpg',
            type: ProductType.BOUQUET,
        },
        {
            title: 'White Rose Bouquet',
            description: 'Pure white roses for elegant occasions.',
            imagePath: '/images/white_rose_bouquet.jpg',
            type: ProductType.BOUQUET,
        },
        {
            title: 'Lavender Sprig',
            description: 'Fragrant lavender stem for calm and serenity.',
            imagePath: '/images/lavender_sprig.jpg',
            type: ProductType.SINGLE_FLOWER,
        },
        {
            title: 'Purple Iris Bouquet',
            description: 'A bouquet of exotic purple irises.',
            imagePath: '/images/purple_iris_bouquet.jpg',
            type: ProductType.BOUQUET,
        },
        {
            title: 'Mini Succulent Pot',
            description: 'Cute small succulent in a ceramic pot.',
            imagePath: '/images/mini_succulent_pot.jpg',
            type: ProductType.SINGLE_FLOWER,
        },
        {
            title: 'Cherry Blossom Branch',
            description: 'Delicate pink cherry blossom branch.',
            imagePath: '/images/cherry_blossom_branch.jpg',
            type: ProductType.SINGLE_FLOWER,
        },
        {
            title: 'Exotic Tropical Mix',
            description: 'Bright tropical flowers with bold colors.',
            imagePath: '/images/exotic_tropical_mix.jpg',
            type: ProductType.BOUQUET,
        },
    ];
    await prisma.product.createMany({ data: productsData });
    console.log(`Created ${productsData.length} products`);
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => await prisma.$disconnect());
