import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './Users/user.model';
import { UsersController } from './Users/users.controller';
import { UsersService } from './Users/users.services';

@Module({
	// define which models are registered in the current scope
	imports: [SequelizeModule.forFeature([User])],
	providers: [UsersService],
	controllers: [UsersController],
})
export class UsersModule {}
