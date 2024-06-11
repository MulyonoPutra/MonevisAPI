/* eslint-disable prettier/prettier */

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './app/modules/auth/auth.module';
import { BulanModule } from './app/modules/bulan/bulan.module';
import { DaftarUnitModule } from './app/modules/daftar-unit/daftar-unit.module';
import { GroupModule } from './app/modules/group/group.module';
import { Module } from '@nestjs/common';
import { PrismaModule } from './app/prisma/prisma.module';
import { TransaksiModule } from './app/modules/transaksi/transaksi.module';
import { UserModule } from './app/modules/user/user.module';

@Module({
  imports: [PrismaModule, BulanModule, TransaksiModule, DaftarUnitModule, GroupModule, UserModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
