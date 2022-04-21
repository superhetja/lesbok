import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { StudentModule } from 'student/student.module';
import { Access, User, UserStudent } from './models';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
	imports: [
		StudentModule,
		SequelizeModule.forFeature([User, UserStudent, Access]),
	],
	providers: [UserService],
	controllers: [UserController],
	exports: [UserService],
})
export class UserModule {}
