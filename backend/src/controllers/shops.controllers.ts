import { Request, Response } from 'express';
import { Shop, ShopProduct } from '@prisma/client';
import {shopService} from "../services/shop.services";


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

    try {
        const products: ShopProduct[] = await shopService.listShopProducts(shopId)
        res.status(200).json(products)
    } catch(e) {
        res.status(500).json({message: 'Internal server error'})
    }
}