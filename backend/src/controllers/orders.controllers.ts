import { Request, Response } from 'express';
import {OfferWithProduct} from "../types/sharedTypes";
import { z } from 'zod';
import {calculateTotalCents, loadOffers } from "../services/offer.service";
import {checkStock} from "../services/stock.service";
import {createOrderWithItems} from "../services/order.services";
import {getOrderItems} from "../services/orderItem.service";

export const CreateOrderItem = z.object({
    offerId: z.uuid(),
    quantity: z.number().int().min(1),
});

export const CreateOrderInput = z.object({
    shopId: z.uuid(),
    items: z.array(CreateOrderItem).min(1),
    fullName: z.string().min(5).max(70),
    email: z.email(),
    phone: z.string().min(5),
    address: z.string().min(5),
    geo: z.object({ lat: z.number(), lng: z.number() }),
    clientTz: z.string(),
    clientOffsetMinutes: z.number().int(),
});

export type CartItem = z.infer<typeof CreateOrderItem>;
export type OrderInput = z.infer<typeof CreateOrderInput>;


export async function createOrder(req: Request<any, any, OrderInput, any>, res: Response) {
    try {
        const offerIds: string[] = req.body.items.map(item => item.offerId)
        const offers: OfferWithProduct[] = await loadOffers(offerIds);

        // await ensureSingleActiveShop(offers, req.body.shopId); feature have some glitches
        await checkStock(req.body.items);

        const orderItems = await getOrderItems(req.body.items, offers)
        const totalCents: number = await calculateTotalCents(orderItems);
        const orderReceipt =  await createOrderWithItems(req.body, totalCents, orderItems)

        res.status(200).json(orderReceipt)
    } catch(e: Error | any) {
        return res.status(400).json({message: e?.message || 'Invalid input'})
    }
}