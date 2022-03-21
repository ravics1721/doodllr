import { Controller, Get, Post, Req, Res, UseGuards, Param } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Get()
  @UseGuards(AuthGuard('google'))
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  async googleAuth() {}

  @Get('/callback/google')
  @UseGuards(AuthGuard('google'))
  async googleAuthRedirect(@Req() req, @Res() res) {
    return this.authService.login(req, res);
  }

  @Post('/user/:provider')
  async createOrSigninUser(@Param('provider') provider: string, @Req() req: Request) {
    return this.authService.createOrSigninUser(req, provider);
  }
}
