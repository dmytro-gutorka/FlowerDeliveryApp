import { Request, Response, NextFunction } from 'express';
import {v4 as uuid } from 'uuid';

export function clientId(req: Request, res: Response, next: NextFunction) {
    let cid = req.cookies.clientId
    if (!cid) {
        cid = uuid()
        res.cookie('clientId', cid, {
            maxAge: 1000 * 60 * 60 * 24 * 365,
            httpOnly: true,
            sameSite: 'lax',
            path: '/'
        })
    }

    req.clientId = cid
    next()
}