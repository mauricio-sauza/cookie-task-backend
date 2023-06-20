import { Controller, Delete, Get, Post, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { CookieService } from '../../service/cookie/cookie.service';

@Controller('cookies')
export class CookiesController {
    constructor(private readonly cookieService: CookieService) {}

    @Get()
    setCookie(@Req() req: Request, @Res() res: Response): void {
        const cookie = this.cookieService.getCookie(req);
        res.send(cookie);
    }

    @Post()
    createCookie(@Req() req: Request, @Res() res: Response): void {
        this.cookieService.createCookie(req, res);
        res.send("Cookie created");
    }

    @Delete()
    deleteCookie(@Res() res: Response) {
        this.cookieService.deleteCookie(res);
        res.send('Cookie eliminated');
    }
    
}
