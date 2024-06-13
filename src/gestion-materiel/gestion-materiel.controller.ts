import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GestionMaterielService } from './gestion-materiel.service';
import { CreateGestionMaterielDto } from './dto/create-gestion-materiel.dto';
import { UpdateGestionMaterielDto } from './dto/update-gestion-materiel.dto';

@Controller('gestion-materiel')
export class GestionMaterielController {
  constructor(private readonly gestionMaterielService: GestionMaterielService) {}

  @Post()
  create(@Body() createGestionMaterielDto: CreateGestionMaterielDto) {
    return this.gestionMaterielService.create(createGestionMaterielDto);
  }

  @Get()
  findAll() {
    return this.gestionMaterielService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.gestionMaterielService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGestionMaterielDto: UpdateGestionMaterielDto) {
    return this.gestionMaterielService.update(+id, updateGestionMaterielDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.gestionMaterielService.remove(+id);
  }
}
