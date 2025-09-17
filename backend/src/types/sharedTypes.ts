import {Prisma} from "@prisma/client";
import {PRODUCT_SORT_BY, PRODUCT_TYPE} from "../constants";

export interface OrderItemPartial {
    imageSnapshot: string
    offerId: string;
    quantity: number;
    priceCents: number;
    titleSnapshot: string;
}

export interface PaginatedResponse<T> {
    results: T
    page: number;
    totalPages: number,
    totalResults: number
}

export type OfferWithProduct = Prisma.ShopProductGetPayload<{include: { product: true}}>

export type ProductSortBy = typeof PRODUCT_SORT_BY [keyof typeof PRODUCT_SORT_BY]

export type ProductType = typeof PRODUCT_TYPE[keyof typeof PRODUCT_TYPE]