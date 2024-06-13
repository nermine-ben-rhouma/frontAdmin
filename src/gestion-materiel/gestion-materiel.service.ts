import { Injectable } from '@nestjs/common';
import { CreateGestionMaterielDto } from './dto/create-gestion-materiel.dto';
import { UpdateGestionMaterielDto } from './dto/update-gestion-materiel.dto';

@Injectable()
export class GestionMaterielService {
  create(createGestionMaterielDto: CreateGestionMaterielDto) {
    return 'This action adds a new gestionMateriel';
  }

  findAll() {
    return `This action returns all gestionMateriel`;
  }

  findOne(id: number) {
    return `This action returns a #${id} gestionMateriel`;
  }

  update(id: number, updateGestionMaterielDto: UpdateGestionMaterielDto) {
    return `This action updates a #${id} gestionMateriel`;
  }

  remove(id: number) {
    return `This action removes a #${id} gestionMateriel`;
  }
}
