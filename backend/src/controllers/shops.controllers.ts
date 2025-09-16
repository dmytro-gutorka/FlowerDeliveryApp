import { Request, Response } from 'express';

export async function listShops(req: Request, res: Response) {

    res.status(200).json({message: 'ok'})

}

export async function listShopProducts(req: Request, res: Response) {


    res.status(200).json({message: 'ok'})

}