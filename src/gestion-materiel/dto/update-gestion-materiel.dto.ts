import { PartialType } from '@nestjs/mapped-types';
import { CreateGestionMaterielDto } from './create-gestion-materiel.dto';

export class UpdateGestionMaterielDto extends PartialType(CreateGestionMaterielDto) {}
