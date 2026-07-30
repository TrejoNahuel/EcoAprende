import { Module } from '@nestjs/common';
import { ModulesService } from './modules.service';
import { ModulesController } from './modules.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Module as ModuleModel } from './models/module.model';

@Module({
  imports: [SequelizeModule.forFeature([ModuleModel])],
  controllers: [ModulesController],
  providers: [ModulesService],
})
export class ModulesModule {}
