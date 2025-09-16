import {Router} from "express";
import {createOrder} from "../controllers/orders.controllers";

export const router: Router = Router();

router.post("/orders", createOrder)
// router.get("/orders/:orderId")
