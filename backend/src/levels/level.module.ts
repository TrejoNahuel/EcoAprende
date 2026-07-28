import { Module } from "@nestjs/common";
import { Level } from "./models/level.model";
import { SequelizeModule } from "@nestjs/sequelize";

@Module({
    imports: [SequelizeModule.forFeature([Level])]
})
export class LevelModule{}