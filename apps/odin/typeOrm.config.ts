import { DataSource } from 'typeorm';
import { ConfigService } from '@nestjs/config';
import { config } from 'dotenv';

config();

const configService = new ConfigService();

const dbPort = configService.get<number>('DB_PORT');
const port = dbPort !== undefined ? +dbPort : 3333;

export default new DataSource({
  type: 'postgres',
  host: configService.get('DB_HOST'),
  port,
  username: configService.get('DB_USERNAME'),
  password: configService.get('DB_PASSWORD'),
  database: configService.get('DB_NAME'),
});
