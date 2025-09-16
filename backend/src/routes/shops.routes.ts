import {Router} from "express";
import {listShopProducts, listShops} from "../controllers/shops.controllers";

export const router: Router = Router();

router.get("/shops", listShops)
router.get("/shops/:shopId/products", listShopProducts)

