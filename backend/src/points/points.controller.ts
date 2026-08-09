import { Controller, Post, Body, BadRequestException } from '@nestjs/common';
import { PointsService } from './points.service';
import { AddPointsDto } from './dto/add-points.dto';

@Controller('points')
export class PointsController {
  constructor(private readonly pointService: PointsService) {}

  @Post('add')
  async addPoints(@Body() addPointsDto: AddPointsDto) {
    console.log('DTO recibido:', addPointsDto);
    
    if (!addPointsDto) {
      throw new BadRequestException('Datos inválidos');
    }
    
    return this.pointService.addPoints(
      addPointsDto.userId, 
      addPointsDto.points
    );
  }
}