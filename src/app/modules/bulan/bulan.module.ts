/* eslint-disable prettier/prettier */

import { BulanController } from './bulan.controller';
import { BulanService } from './bulan.service';
import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/app/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [BulanController],
  providers: [BulanService],
})
export class BulanModule {}
