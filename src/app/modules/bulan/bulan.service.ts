/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */

import { Injectable, NotFoundException } from '@nestjs/common';

import { CreateBulanDto } from './dto/create-bulan.dto';
import { PrismaService } from 'src/app/prisma/prisma.service';
import { UpdateBulanDto } from './dto/update-bulan.dto';

@Injectable()
export class BulanService {

  constructor(private prismaService: PrismaService) { }
  
  async create(createBulanDto: CreateBulanDto): Promise<CreateBulanDto>{
    return await this.prismaService.bulan.create({
      data: createBulanDto,
    });
  }

  async findAll() {
    return await this.prismaService.bulan.findMany({});
  }

  async findOne(id: number) {
    const data = await this.prismaService.bulan.findFirst({
      where: {
        id,
      },
    });

    if (!data) {
      throw new NotFoundException('data is not found!');
    }

    return data;
  }

  async update(id: number, updateBulanDto: UpdateBulanDto) {
    return await this.prismaService.bulan.update({
      data: updateBulanDto,
      where: { id },
    });
  }

  async remove(id: number) {
    return await this.prismaService.bulan.delete({
      where: { id },
    });
  }
}
