import { PassportStrategy } from '@nestjs/passport';
import { Strategy, VerifyCallback } from 'passport-google-oauth20';
import { Injectable } from '@nestjs/common';

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
  constructor() {
    super({
      clientID: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
      callbackURL: 'http://localhost:3333/api/auth/callback/google',
      reidrectURL: 'http://localhost:4200',
      scope: ['openid', 'profile', 'email'],
    });
  }
  async validate(accessToken: string, refreshToken: string, profile: unknown, done: VerifyCallback): Promise<any> {
    const userData = {
      accessToken,
      refreshToken,
      profile,
    };
    done(null, userData);
  }
}
