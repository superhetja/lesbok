import { Module } from '@nestjs/common';
import { UsersModule } from 'src/user.module';
import { UsersService } from 'src/Users/users.services';
import { UsersController } from 'src/Users/users.controller';

@Module({
  imports: [UsersModule],
  providers: [UsersService],
  controllers: [UsersController],
})
export class UserHttpModule {}
