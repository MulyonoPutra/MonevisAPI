/* eslint-disable prettier/prettier */

import { DaftarUnitController } from './daftar-unit.controller';
import { DaftarUnitService } from './daftar-unit.service';
import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/app/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [DaftarUnitController],
  providers: [DaftarUnitService],
})
export class DaftarUnitModule {}
