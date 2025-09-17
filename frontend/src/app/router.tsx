import { createBrowserRouter } from 'react-router';
import OrderHistory from '../pages/OrderHistory';
import OrderDetails from '../pages/OrderDetails';
import AppLayout from '../components/AppLayout';
import Homepage from '../pages/Homepage';
import Cart from '../pages/Cart';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: AppLayout,
    children: [
      {
        index: true,
        Component: Homepage,
      },
      {
        path: '/cart',
        Component: Cart,
      },
      {
        path: '/orders',
        Component: OrderHistory,
      },
      {
        path: '/orders/:orderId',
        Component: OrderDetails,
      },
    ],
  },
]);
