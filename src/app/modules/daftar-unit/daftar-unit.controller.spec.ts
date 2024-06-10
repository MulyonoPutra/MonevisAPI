import { Test, TestingModule } from '@nestjs/testing';
import { DaftarUnitController } from './daftar-unit.controller';
import { DaftarUnitService } from './daftar-unit.service';

describe('DaftarUnitController', () => {
  let controller: DaftarUnitController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DaftarUnitController],
      providers: [DaftarUnitService],
    }).compile();

    controller = module.get<DaftarUnitController>(DaftarUnitController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
