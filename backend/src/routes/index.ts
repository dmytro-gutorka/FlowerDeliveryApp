import {Router} from "express";
import {router as shopRoutes } from "./shops.routes";
import {router as orderRoutes } from "./orders.routes";
import {router as favoriteRoutes } from "./favorites.routes";

const routes: Router = Router();

routes.use(shopRoutes)
routes.use(orderRoutes)
routes.use(favoriteRoutes)

export { routes }
