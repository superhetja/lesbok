import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import GroupController from './group.controller';
import { Group } from './group.model';
import { GroupService } from './group.service';
import { EntryModule } from '../entry/entry.module';

@Module({
	imports: [EntryModule, SequelizeModule.forFeature([Group])],
	providers: [GroupService],
	controllers: [GroupController],
	exports: [GroupService],
})
export class GroupModule {}
