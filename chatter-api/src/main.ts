import { NestFactory } from '@nestjs/core';
import { json } from 'express';
import { AppModule } from './app.module';
import  "dotenv/config";
require("dotenv").config();

const PORT = process.env.PORT || 4200;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(json({ limit: '25mb' }));
  app.enableCors();
  await app.listen(PORT);
}
bootstrap();
