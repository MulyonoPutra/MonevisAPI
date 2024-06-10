/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */

import { Injectable, NotFoundException } from '@nestjs/common';

import { CreateDaftarUnitDto } from './dto/create-daftar-unit.dto';
import { PrismaService } from 'src/app/prisma/prisma.service';
import { UpdateDaftarUnitDto } from './dto/update-daftar-unit.dto';

@Injectable()
export class DaftarUnitService {
  constructor(private prismaService: PrismaService) { }

  async create(createDaftarUnitDto: CreateDaftarUnitDto) {
    return await this.prismaService.daftarUnit.create({
      data: createDaftarUnitDto,
    });
  }

  async findAll() {
    return await this.prismaService.daftarUnit.findMany({});
  }

  async findOne(id: number) {
    const data = await this.prismaService.daftarUnit.findFirst({
      where: {
        id,
      },
    });

    if (!data) {
      throw new NotFoundException('data is not found!');
    }

    return data;
  }

  async update(id: number, updateDaftarUnitDto: UpdateDaftarUnitDto) {
    return await this.prismaService.daftarUnit.update({
      data: updateDaftarUnitDto,
      where: { id },
    });
  }

  async remove(id: number) {
    return await this.prismaService.daftarUnit.delete({
      where: { id },
    });
  }
}
