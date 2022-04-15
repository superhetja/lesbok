import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { SchoolModel } from './school.model';
import SchoolsController from './school.controller';
import { SchoolsService } from './school.services';

@Module({
	imports: [SequelizeModule.forFeature([SchoolModel])],
	providers: [SchoolsService],
	controllers: [SchoolsController],
	exports: [SchoolsService],
})
export class SchoolModule {}
