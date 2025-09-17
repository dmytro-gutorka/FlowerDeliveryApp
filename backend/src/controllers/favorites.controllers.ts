import { Request, Response } from 'express';
import {favoritesService} from "../services/favorites.service";

export async function getFavorites(req: Request, res: Response) {
    const clientId = (req as any).clientId as string;

    try {
        const favorites = await favoritesService.getFavorites(clientId)
        res.status(200).json(favorites)
    } catch (e) {
        res.status(500).json({message: 'Internal server error'})
    }
}


export async function createFavorite(req: Request, res: Response) {
    const clientId = (req as any).clientId as string;
    const { productId } = req.params;

    try {

    }
    catch (e: any) {
        res.status(400).json({message: e?.message || 'Invalid input'})
    }
}

export async function deleteFavorite(req: Request, res: Response) {
    const clientId = (req as any).clientId as string;
    const { productId } = req.params;


    try {

    }
    catch (e: any) {
        res.status(400).json({message: e?.message || 'Invalid input'})
    }

}