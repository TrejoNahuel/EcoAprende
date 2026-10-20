import { SequelizeOptions } from "sequelize-typescript";
import * as dotenv from "dotenv";

dotenv.config();

export const config: { [key: string]: SequelizeOptions } = {
  development: {
    username: process.env.DB_USER || "postgres",
    password: process.env.DB_PASS || "postgres",
    database: process.env.DB_NAME || "ecoaprende",
    host: process.env.DB_HOST || "localhost",
    port: parseInt(process.env.DB_PORT || "5432", 10),
    dialect: "postgres",
  },
};