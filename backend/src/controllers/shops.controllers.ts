import { Request, Response } from 'express';
import { Shop, } from '@prisma/client';
import { PaginatedResponse, ProductItem, ProductSortBy} from "../types/sharedTypes";
import { shopService } from "../services/shop.services";


export async function listShops(req: Request, res: Response) {
    try {
        const shops: Shop[] = await shopService.listShops()
        res.status(200).json(shops)
    } catch(e) {
        res.status(500).json({message: 'Internal server error'})
    }
}


export async function listShopProducts(req: Request, res: Response) {
    const {shopId} = req.params;
    const clientId = req.cookies.clientId
    const page: number = Number(req.query.page) || 1;
    const sortBy: ProductSortBy = req.query.sort as ProductSortBy || 'priceCents.asc';

    try {
        const products: PaginatedResponse<ProductItem[]> = await shopService.listShopProducts(shopId, page, sortBy, clientId)
        res.status(200).json(products)
    } catch(e) {
        res.status(500).json({message: 'Internal server error'})
    }
}

