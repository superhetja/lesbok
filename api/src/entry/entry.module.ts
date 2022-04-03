import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { BookModel } from './book.model';
import EntryController from './entry.controller';
import { EntryModel } from './entry.model';
import { EntryService } from './entry.service';

@Module({
	imports: [SequelizeModule.forFeature([EntryModel, BookModel])],
	providers: [EntryService],
	controllers: [EntryController],
	exports: [EntryService],
})
export class EntryModule {}
