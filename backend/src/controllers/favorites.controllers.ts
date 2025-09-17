import { Request, Response } from 'express';
import {favoritesService} from "../services/favorites.service";

export async function getFavorites(req: Request, res: Response) {
    const clientId = req.clientId!

    try {
        const favorites = await favoritesService.getFavorites(clientId)
        res.status(200).json(favorites)
    } catch (e) {
        res.status(500).json({message: 'Internal server error'})
    }
}


export async function createFavorite(req: Request, res: Response) {
    const clientId = req.clientId!
    const { productId } = req.body;

    try {
        await favoritesService.createFavorite(clientId, productId)

        res.status(200).json({message: 'Favorite created'})
    }
    catch (e: any) {
        res.status(400).json({message: e?.message || 'Invalid input'})
    }
}

export async function deleteFavorite(req: Request, res: Response) {
    const clientId = req.clientId!
    const { productId } = req.params;

    try {
        await favoritesService.deleteFavorite(clientId, productId)

        res.status(200).json({message: 'Favorite deleted'})
    }
    catch (e: any) {
        res.status(400).json({message: e?.message || 'Invalid input'})
    }
}