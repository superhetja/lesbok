import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { GroupModel } from './group.model';

@Module({
	imports: [SequelizeModule.forFeature([GroupModel])],
	providers: [],
	controllers: [],
	exports: [],
})
export class GroupModule {}
