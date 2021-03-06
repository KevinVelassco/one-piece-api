import {
  Injectable,
  Inject,
  UnauthorizedException,
  ForbiddenException
} from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt } from 'passport-jwt';
import { Request } from 'express';

import appConfig from '../../../config/app.config';
import { UserService } from '../../../modules/user/user.service';

@Injectable()
export class JwtRefreshStrategy extends PassportStrategy(
  Strategy,
  'jwt-refresh'
) {
  constructor(
    @Inject(appConfig.KEY) configService: ConfigType<typeof appConfig>,
    private readonly userService: UserService
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: configService.app.refreshTokenSecret,
      passReqToCallback: true
    });
  }

  async validate(req: Request, payload: any) {
    const refreshToken = <string>req.headers.authorization.split(' ')[1];

    if (!refreshToken) {
      throw new UnauthorizedException('authorization header not found');
    }

    const { authUid } = payload;

    const existingUser = await this.userService.findOne({ authUid });

    if (!existingUser) {
      throw new UnauthorizedException();
    }

    if (!existingUser.verifiedEmail) {
      throw new ForbiddenException(
        'your account must be verified to access resources.'
      );
    }

    const { password, ...user } = existingUser;

    return { ...user, refreshToken };
  }
}
