import {CartItem } from "../controllers/orders.controllers";
import { prisma } from "../index";

export async function checkStock(cartItems: CartItem[]) {
    await prisma.$transaction(async (tx) => {
        for (const { offerId, quantity} of cartItems) {
            const updated = await tx.shopProduct.updateMany({
                where: { id: offerId, stock: { gte: quantity } },
                data: { stock: { decrement: quantity } }
            })
            if (updated.count === 0) throw new Error('Not enough stock')
        }
    })
}
