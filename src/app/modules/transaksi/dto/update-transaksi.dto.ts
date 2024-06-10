/* eslint-disable prettier/prettier */

import { CreateTransaksiDto } from './create-transaksi.dto';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateTransaksiDto extends PartialType(CreateTransaksiDto) {}
