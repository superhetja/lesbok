import { Injectable } from '@nestjs/common';
import { Sequelize } from 'sequelize-typescript';

@Injectable()
export class AppService {
  constructor(private Sequelize: Sequelize) {}

  getHello(): string {
    return 'Hello World! This works kúl jess';
  }
}
