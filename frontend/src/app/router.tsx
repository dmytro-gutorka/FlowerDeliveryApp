import { createBrowserRouter } from "react-router";
import AppLayout from "../components/AppLayout";
import Shops from "../pages/Shops";
import Cart from "../pages/Cart";
import OrderHistory from "../pages/OrderHistory";
import OrderDetails from "../pages/OrderDetails";
import ProductCardList from "../components/ProductCardList";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: AppLayout,
        children: [
            {
                index: true,
                Component: Shops,
            },
            {
                path: "/products",
                Component: ProductCardList,
            },
            {
                path: "/cart",
                Component: Cart
            },
            {
                path: "/orders",
                Component: OrderHistory
            },
            {
                path: "/orders/:orderId",
                Component: OrderDetails
            },
        ]
    },

]);