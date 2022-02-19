import { Module } from '@nestjs/common';
import { UsersModule } from 'src/user.module';
import { UsersService } from 'src/Services/users.services';
import { UsersController } from 'src/Controllers/users.controller';

@Module({
  imports: [UsersModule],
  providers: [UsersService],
  controllers: [UsersController]
})
export class UserHttpModule {}
