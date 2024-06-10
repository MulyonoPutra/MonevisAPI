/* eslint-disable prettier/prettier */

import { GroupController } from './group.controller';
import { GroupService } from './group.service';
import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/app/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [GroupController],
  providers: [GroupService],
})
export class GroupModule {}
