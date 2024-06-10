/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DaftarUnitService } from './daftar-unit.service';
import { CreateDaftarUnitDto } from './dto/create-daftar-unit.dto';
import { UpdateDaftarUnitDto } from './dto/update-daftar-unit.dto';

@Controller('daftar-unit')
export class DaftarUnitController {
  constructor(private readonly daftarUnitService: DaftarUnitService) {}

  @Post()
  create(@Body() createDaftarUnitDto: CreateDaftarUnitDto) {
    return this.daftarUnitService.create(createDaftarUnitDto);
  }

  @Get()
  findAll() {
    return this.daftarUnitService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.daftarUnitService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDaftarUnitDto: UpdateDaftarUnitDto) {
    return this.daftarUnitService.update(+id, updateDaftarUnitDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.daftarUnitService.remove(+id);
  }
}
