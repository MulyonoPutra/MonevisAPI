/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */

import { Injectable, NotFoundException } from '@nestjs/common';

import { CreateTransaksiDto } from './dto/create-transaksi.dto';
import { PrismaService } from 'src/app/prisma/prisma.service';
import { UpdateTransaksiDto } from './dto/update-transaksi.dto';

@Injectable()
export class TransaksiService {

  constructor(private prismaService: PrismaService) { }

  async create(createTransaksiDto: CreateTransaksiDto) {
    return await this.prismaService.realAnggaran.create({
      data: createTransaksiDto,
    });
  }

  async findAll() {
    return await this.prismaService.realAnggaran.findMany({
      select: {
        id: true,
        anggaran: true,
        real: true,
        keterangan: true,
        bulan: true,
        daftarUnit: true,
      }
    });
  }

  async findOne(id: number) {
    const data = await this.prismaService.realAnggaran.findFirst({
      where: {
        id,
      },
      select: {
        id: true,
        anggaran: true,
        real: true,
        keterangan: true,
        bulan: true,
        daftarUnit: true,
      }
    });

    if (!data) {
      throw new NotFoundException('data is not found!');
    }

    return data;
  }

  async update(id: number, updateTransaksiDto: UpdateTransaksiDto) {
    return await this.prismaService.realAnggaran.update({
      data: updateTransaksiDto,
      where: { id },
    });
  }

  async remove(id: number) {
    return await this.prismaService.realAnggaran.delete({
      where: { id },
    });
  }
}
