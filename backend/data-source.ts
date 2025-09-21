import { DataSource } from "typeorm";
import 'dotenv/config';


export default new DataSource({
  type: 'postgres',
  url: process.env.DATABASE_URL,                   // 👈 usa la URL
  entities: ['./src/modules/**/infrastructure/persistence/*.orm-entity.{ts,js}'],
  migrations: ['./migrations/*.ts'],
  synchronize: false,
  logging: false,
});