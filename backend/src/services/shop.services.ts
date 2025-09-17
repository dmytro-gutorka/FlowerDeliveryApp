import { Shop, ShopProduct } from '@prisma/client';
import { PaginatedResponse, ProductSortBy } from "../sharedTypes";
import { prisma } from "../index";
import { PRODUCTS_PAGE_PAGINATION } from "../constants";


class ShopServices {

    async listShops(): Promise<Shop[]> {
        return prisma.shop.findMany();
    }

    async listShopProducts(shopId: string, page: number, sortBy: ProductSortBy): Promise<PaginatedResponse<ShopProduct[]>> {
        const [by, mod] = sortBy.split('.')

        const shopsWithProducts = await prisma.shopProduct.findMany(
            { where: { shopId }, include: { product: true } })
        const totalResults = shopsWithProducts.length
        const totalPages = Math.ceil(totalResults / PRODUCTS_PAGE_PAGINATION)

        const sortedPaginatedResult = await prisma.shopProduct.findMany({
            where: { shopId },
            orderBy: { [by]: mod },
            skip: (page - 1) * PRODUCTS_PAGE_PAGINATION,
            take: PRODUCTS_PAGE_PAGINATION,
            include: { product: true }
        })

        return {
            page,
            results: sortedPaginatedResult,
            totalPages,
            totalResults
        }
    }
}

export const shopService = new ShopServices();