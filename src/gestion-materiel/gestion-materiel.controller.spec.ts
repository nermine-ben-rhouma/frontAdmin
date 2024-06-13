import { Test, TestingModule } from '@nestjs/testing';
import { GestionMaterielController } from './gestion-materiel.controller';
import { GestionMaterielService } from './gestion-materiel.service';

describe('GestionMaterielController', () => {
  let controller: GestionMaterielController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GestionMaterielController],
      providers: [GestionMaterielService],
    }).compile();

    controller = module.get<GestionMaterielController>(GestionMaterielController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
