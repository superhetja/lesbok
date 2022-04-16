import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Book } from './book.model';
import EntryController from './entry.controller';
import { Entry } from './entry.model';
import { EntryService } from './entry.service';

@Module({
	imports: [SequelizeModule.forFeature([Entry, Book])],
	providers: [EntryService],
	controllers: [EntryController],
	exports: [EntryService],
})
export class EntryModule {}
