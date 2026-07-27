import { Controller, Get, UseGuards } from '@nestjs/common';
import { ModulesService } from './modules.service';
import { JwtAuthGuard } from 'src/auth/guards/jw-auth.guard';

@Controller('modules')
export class ModulesController {
  constructor(private readonly modulesService: ModulesService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll() {
    return this.modulesService.findAll();
  }
}
