import { Test, TestingModule } from '@nestjs/testing';
import { GestionMaterielService } from './gestion-materiel.service';

describe('GestionMaterielService', () => {
  let service: GestionMaterielService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GestionMaterielService],
    }).compile();

    service = module.get<GestionMaterielService>(GestionMaterielService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
