import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { School } from './school.model';
import SchoolsController from './school.controller';
import { SchoolsService } from './school.services';

@Module({
	imports: [SequelizeModule.forFeature([School])],
	providers: [SchoolsService],
	controllers: [SchoolsController],
	exports: [SchoolsService],
})
export class SchoolModule {}
