import {Router} from "express";
import {createFavorite, deleteFavorite, getFavorites} from "../controllers/favorites.controllers";

export const router: Router = Router();

router.get("/favorites", getFavorites)
router.post("/favorites", createFavorite)
router.delete("/favorites/:productId", deleteFavorite)
