import { IsInt, IsPositive } from 'class-validator';

export class AddPointsDto {
  @IsInt()
  userId: number;

  @IsInt()
  @IsPositive()
  points: number;
}