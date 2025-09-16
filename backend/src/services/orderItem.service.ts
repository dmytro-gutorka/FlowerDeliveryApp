import {CartItem} from "../controllers/orders.controllers";
import {OfferWithProduct, OrderItemPartial} from "../sharedTypes";

export async function getOrderItems(cartItems: CartItem[], offers: OfferWithProduct[]): Promise<OrderItemPartial[]> {
    return cartItems.map(({ quantity, offerId}) => {
      const oi = offers.find(o => o.id === offerId)!
        return {
            offerId,
            quantity,
            priceCents: oi.priceCents,
            imageSnapshot: oi.product.imagePath,
            titleSnapshot: oi.product.title,
        }
    })
}