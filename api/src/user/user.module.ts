import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Access, User, UserStudent } from './models';

@Module({
	imports: [SequelizeModule.forFeature([User, UserStudent, Access])],
	providers: [],
	controllers: [],
	exports: [],
})
export class UserModule {}
