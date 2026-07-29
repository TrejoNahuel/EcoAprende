import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Module as ModuleModel } from './models/module.model';

@Injectable()
export class ModulesService {
  constructor(
    @InjectModel(ModuleModel)
    private moduleModel: typeof ModuleModel,
  ) {}

  async findAll() {
    // Esto va a la base de datos y trae todos los registros
    return this.moduleModel.findAll();
  }
}
