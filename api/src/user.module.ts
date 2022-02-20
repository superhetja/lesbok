import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
// import { User } from './user.model';
import { User } from './Models/user.model';
// import { UsersController } from './users.controller';
// import { UsersService } from './us.service';
import { UsersService } from './Services/users.services';
import { UsersController } from './Controllers/users.controller';

@Module({
  // define which models are registered in the current scope
  imports: [SequelizeModule.forFeature([User])],
  providers: [UsersService],
  controllers: [UsersController],
})
export class UsersModule {}
