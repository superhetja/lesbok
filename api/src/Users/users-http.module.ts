import { Module } from '@nestjs/common';

import { UsersModule } from 'user.module';
import { UsersController } from './users.controller';
import { UsersService } from './users.services';

@Module({
	imports: [UsersModule],
	providers: [UsersService],
	controllers: [UsersController],
})
export class UserHttpModule {}
