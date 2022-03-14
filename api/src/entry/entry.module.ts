import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import EntryController from './entry.controller';
import { EntryModel } from './entry.model';
import { EntryService } from './entry.service';

@Module({
	imports: [SequelizeModule.forFeature([EntryModel])],
	providers: [EntryService],
	controllers: [EntryController],
	exports: [EntryService],
})
export class EntryModule {}
