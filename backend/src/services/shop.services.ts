import { Shop, ShopProduct } from '@prisma/client';
import {PaginatedResponse, ProductItem, ProductSortBy} from "../types/sharedTypes";
import { prisma } from "../index";
import { PRODUCTS_PAGE_PAGINATION } from "../constants";


class ShopServices {

    async listShops(): Promise<Shop[]> {
        return prisma.shop.findMany();
    }

    async listShopProducts(shopId: string, page: number, sortBy: ProductSortBy, clientId: string): Promise<PaginatedResponse<ProductItem[]>> {
        const [by, mod] = sortBy.split('.')

        const shopsWithProducts = await prisma.shopProduct.findMany(
            { where: { shopId }, include: { product: true }, })
        const totalResults = shopsWithProducts.length
        const totalPages = Math.ceil(totalResults / PRODUCTS_PAGE_PAGINATION)

        const sortedPaginatedResult = await prisma.shopProduct.findMany({
            where: { shopId },
            orderBy: { [by]: mod },
            skip: (page - 1) * PRODUCTS_PAGE_PAGINATION,
            take: PRODUCTS_PAGE_PAGINATION,
            include: {
                shop: true,
                product: {
                    include: {
                        favorites: {
                            where: { clientId },
                            select: { id: true },
                            take: 1,
                        }
                    }
                }
            }
        })

        const flatItems = sortedPaginatedResult.map(i => ({
            offerId: i.id,
            isActive: i.isActive,
            priceCents: i.priceCents,
            stock: i.stock,
            productId: i.product.id,
            description: i.product.description,
            isFavorite: i.product.favorites?.length > 0,
            imagePath: i.product.imagePath,
            title: i.product.title,
            type: i.product.type,
            shopName: i.shop.name,
            shopId: i.shopId
        }))

        return {
            page,
            results: flatItems,
            totalPages,
            totalResults
        }
    }
}

export const shopService = new ShopServices();