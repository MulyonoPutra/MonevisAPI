import { PartialType } from '@nestjs/mapped-types';
import { CreateDaftarUnitDto } from './create-daftar-unit.dto';

export class UpdateDaftarUnitDto extends PartialType(CreateDaftarUnitDto) {}
