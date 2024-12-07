import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from './interfaces/jwt-payload.interface';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  async generateToken(user: any) {
    const payload: JwtPayload = {
      sub: user.id,
      username: user.username,
      locationId: user.locationId,
    };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
