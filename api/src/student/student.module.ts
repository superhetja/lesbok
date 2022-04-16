import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Student } from './student.model';

@Module({
	imports: [SequelizeModule.forFeature([Student])],
	providers: [],
	controllers: [],
	exports: [],
})
export class StudentModule {}
