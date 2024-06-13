import { Module } from '@nestjs/common';
import { GestionMaterielService } from './gestion-materiel.service';
import { GestionMaterielController } from './gestion-materiel.controller';

@Module({
  controllers: [GestionMaterielController],
  providers: [GestionMaterielService],
})
export class GestionMaterielModule {}
