import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import StudentController from './student.controller';
import { Student } from './student.model';
import { StudentService } from './student.service';

@Module({
	imports: [SequelizeModule.forFeature([Student])],
	providers: [StudentService],
	controllers: [StudentController],
	exports: [StudentService],
})
export class StudentModule {}
