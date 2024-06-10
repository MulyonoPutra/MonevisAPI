/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */

import { Injectable, NotFoundException } from '@nestjs/common';

import { CreateGroupDto } from './dto/create-group.dto';
import { PrismaService } from 'src/app/prisma/prisma.service';
import { UpdateGroupDto } from './dto/update-group.dto';

@Injectable()
export class GroupService {

  constructor(private prismaService: PrismaService) { }
  
  async create(createGroupDto: CreateGroupDto) {
    return await this.prismaService.group.create({
      data: createGroupDto,
    });
  }

  async findAll() {
    return await this.prismaService.group.findMany({});
  }

  async findOne(id: number) {
    const data = await this.prismaService.group.findFirst({
      where: {
        id,
      },
    });

    if (!data) {
      throw new NotFoundException('data is not found!');
    }

    return data;
  }

  async update(id: number, updateGroupDto: UpdateGroupDto) {
    return await this.prismaService.group.update({
      data: updateGroupDto,
      where: { id },
    });
  }

  async remove(id: number) {
    return await this.prismaService.group.delete({
      where: { id },
    });
  }
}
