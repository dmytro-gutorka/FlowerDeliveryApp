import {Router} from "express";
import {router as shopRoutes } from "./shops.routes";
import {router as orderRoutes } from "./orders.routes";

const routes: Router = Router();

routes.use(shopRoutes)
routes.use(orderRoutes)

export { routes }
