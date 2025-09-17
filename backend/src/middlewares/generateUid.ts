import {v4 as uuid } from 'uuid';

export default function generateUid(res, req, next) {
    let cid = req.cookies.clientId
    if (!cid) {
        cid = uuid()
        res.cookie('clientId', cid, {
            maxAge: 1000 * 60 * 60 * 24 * 365,
            httpOnly: true,
        })

    }

    (req as any).clientId = cid
    next()
}