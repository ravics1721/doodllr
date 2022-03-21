import { Injectable } from '@nestjs/common';
import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

@Injectable()
export class AuthService {
  signup() {
    return 'signing up...';
  }
  login(req: Request, res: Response) {
    if (req.user) {
      // return {
      //   message: 'Welcome to doodllr',
      //   user: req.user,
      // };
      res.cookie('auth', req.user);
      return res.redirect('http://localhost:4200/dashboard');
    }
    return 'Oops 😞 , not authorize';
  }
  async createOrSigninUser(req, provider) {
    //Todo: add new user create or signup
    const user = await prisma.user.findUnique({
      where: {
        id: req.user.id,
      },
    });
    console.log(provider, user);
    return 'In development ...';
  }
}
