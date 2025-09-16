import { Shop, ShopProduct } from '@prisma/client';
import {prisma} from "../index";


class ShopServices {

    async listShops(): Promise<Shop[]> {
        return prisma.shop.findMany();
    }

    async listShopProducts(shopId: string): Promise<ShopProduct[]> {
        return prisma.shopProduct.findMany({
            where: { shopId },
            include: { product: true }
        })
    }
}

export const shopService = new ShopServices();