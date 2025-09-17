import { customAlphabet } from 'nanoid'
import { prisma} from "../index";
import { OrderInput } from "../controllers/orders.controllers";
import {OrderItemPartial} from "../types/sharedTypes";

const makeUid = customAlphabet('ABCDEFGHJKLMNPQRSTUVWXYZ23456789', 8)

export async function createOrderWithItems(data: OrderInput, totalCents: number, orderItems: OrderItemPartial[]){
    const orderUid = `FLR-${makeUid()}`

    return prisma.order.create({
        data: {
            orderUid,
            email: data.email,
            phone: data.phone,
            address: data.address,
            lat: data.geo.lat,
            lng: data.geo.lng,
            totalCents: totalCents,
            clientTz: data.clientTz,
            clientOffsetMinutes: data.clientOffsetMinutes,
            shopId: data.shopId,
            items: {
                createMany: {
                    data: orderItems.map(i => ({
                        imageSnapshot: i.imageSnapshot,
                        titleSnapshot: i.titleSnapshot,
                        quantity: i.quantity,
                        priceCents: i.priceCents,
                        offerId: i.offerId
                    }))
                },
            },
        },
        include: {
            items: true,
        }
    });
}