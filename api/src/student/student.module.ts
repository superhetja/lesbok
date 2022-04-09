import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { StudentModel } from './student.model';

@Module({
	imports: [SequelizeModule.forFeature([StudentModel])],
	providers: [],
	controllers: [],
	exports: [],
})
export class StudentModule {}
