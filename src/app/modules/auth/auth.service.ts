/* eslint-disable prettier/prettier */

import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

import { CreateLoginDto } from './dto/create-login.dto';
import { PrismaService } from 'src/app/prisma/prisma.service';

@Injectable()
export class AuthService {

  constructor(
    private prismaService: PrismaService,
  ) { }
  
  async login(data: CreateLoginDto) {
    const user = await this.prismaService.user.findFirst({
      where: {
        email: data.email
      }
    });

    if (!user) {
      throw new HttpException('User not found!', HttpStatus.NOT_FOUND);
    }

    const passwordMatches = data.password === user.password;
    if (!passwordMatches) {
      throw new HttpException(
        'Invalid email or password!',
        HttpStatus.FORBIDDEN,
      );
    }

    return user;
  }
}
