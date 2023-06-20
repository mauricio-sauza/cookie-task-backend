import { Injectable, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';

@Injectable()
export class CookieService {
    getCookie(@Req() req: Request): String {
        const myCookie = req.cookies['myCookie']
        if(myCookie) {
            return `The cookie value is: ${myCookie}`;
        }
        return `The cookie does not exist`;
    }

    createCookie(req: Request, res: Response) {
        res.cookie('myCookie', 'cookie', {
            expires: new Date(Date.now() + 60000),
            httpOnly: true,
        })
    }

    deleteCookie(res: Response) {
        res.clearCookie('myCookie');
    }
}
