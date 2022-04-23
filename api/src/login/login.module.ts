import { Module } from '@nestjs/common';
import { UserModule } from 'user/user.module';
import { LoginController } from './login.controller';

@Module({
	imports: [UserModule],
	providers: [],
	controllers: [LoginController],
})
export class LoginModule {}
