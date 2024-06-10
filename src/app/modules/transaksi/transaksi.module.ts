/* eslint-disable prettier/prettier */

import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/app/prisma/prisma.module';
import { TransaksiController } from './transaksi.controller';
import { TransaksiService } from './transaksi.service';

@Module({
  imports: [PrismaModule],
  controllers: [TransaksiController],
  providers: [TransaksiService],
})
export class TransaksiModule {}
