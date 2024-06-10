import { Test, TestingModule } from '@nestjs/testing';
import { DaftarUnitService } from './daftar-unit.service';

describe('DaftarUnitService', () => {
  let service: DaftarUnitService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DaftarUnitService],
    }).compile();

    service = module.get<DaftarUnitService>(DaftarUnitService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
