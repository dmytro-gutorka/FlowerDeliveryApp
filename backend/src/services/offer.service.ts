import {prisma} from "../index";
import { ShopProduct} from '@prisma/client';
import {OfferWithProduct, OrderItemPartial} from "../sharedTypes";

export async function loadOffers(offersIds: string[]): Promise<OfferWithProduct[]> {
    const offers: OfferWithProduct[] = await prisma.shopProduct.findMany({
        where: { id: { in: offersIds }, isActive: true },
        include: { product: true }
    })

    if (offers.length !== offersIds.length)
        throw new Error('Some offers not found or inactive')

    return offers
}

export async function ensureSingleActiveShop(offers: ShopProduct[], shopId: string) {
    const shopIds = new Set(offers.map(o => o.shopId))

    if (!(shopIds.size === 1 && shopIds.has(shopId)))
        throw new Error('All items must belong to the same shop')
}

export async function calculateTotalCents(orderItem: OrderItemPartial[]) {
    return orderItem
        .map(oi => oi.priceCents * oi.priceCents)
        .reduce((acc, curr) => acc + curr, 0)
}