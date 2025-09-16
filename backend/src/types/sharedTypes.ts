import {Prisma} from "@prisma/client";

export enum ProductType {
    BOUQUET = "bouquet",
    SINGLE_FLOWER = "single_flower"
}

export type OfferWithProduct = Prisma.ShopProductGetPayload<{include: { product: true}}>


export interface OrderItemPartial {
    imageSnapshot: string
    offerId: string;
    quantity: number;
    priceCents: number;
    titleSnapshot: string;
}