/* eslint-disable prettier/prettier */

import { Injectable, NotFoundException } from '@nestjs/common';

import { PrismaService } from 'src/app/prisma/prisma.service';

@Injectable()
export class UserService {

  constructor(private prismaService: PrismaService) { }
  
  async create(createUserDto: any) {
    return await this.prismaService.user.create({
      data: createUserDto,
    });
  }

  async findAll() {
    return await this.prismaService.user.findMany({
      select: {
        id: true,
        nama: true,
        password: true,
        email: true,
        group: true,
        createdAt: true,
        createdBy: true,
        updateAt: true,
        updatedBy: true,
      }
    });
  }

  async findOne(id: number) {
    const data = await this.prismaService.user.findFirst({
      where: {
        id,
      },
      select: {
        id: true,
        nama: true,
        password: true,
        email: true,
        group: true,
        createdAt: true,
        createdBy: true,
        updateAt: true,
        updatedBy: true,
      }
    });

    if (!data) {
      throw new NotFoundException('data is not found!');
    }

    return data;
  }

  async update(id: number, updateUserDto: any) {
    return await this.prismaService.user.update({
      data: updateUserDto,
      where: { id },
    });
  }

  async remove(id: number) {
    return await this.prismaService.user.delete({
      where: { id },
    });
  }
}
