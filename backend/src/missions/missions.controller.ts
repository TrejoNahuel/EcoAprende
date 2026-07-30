import type{ RequestWithUser } from '../shared/request-with-user.type';
import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { MissionsService } from './missions.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@Controller('missions')
export class MissionsController {
  constructor(private readonly missionsService: MissionsService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  findUserMissions(@Req() req: RequestWithUser) {
    return this.missionsService.findUserMissions(req.user.id);
  }
}
