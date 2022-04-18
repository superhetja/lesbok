import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Access, User, UserStudent } from './models';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
	imports: [SequelizeModule.forFeature([User, UserStudent, Access])],
	providers: [UserService],
	controllers: [UserController],
	exports: [UserService],
})
export class UserModule {}
