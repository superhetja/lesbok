/* eslint-disable @typescript-eslint/return-await */
import {
	Body,
	Controller,
	Get,
	NotFoundException,
	Param,
	Post,
	Put,
} from '@nestjs/common';
import { CreateEntryDto, UpdateEntryDto } from './dto';
import { EntryModel } from './entry.model';
import { EntryService } from './entry.service';

@Controller('entries')
export default class EntryController {
	constructor(private readonly entryService: EntryService) {}

	@Get()
	async findAll(): Promise<EntryModel[]> {
		return await this.entryService.findAll();
	}

	@Get('thisWeek/:id')
	async readThisWeek(@Param('id') id: string): Promise<number> {
		return await this.entryService.readThisWeek(id);
	}

	@Post()
	async createEntry(
		@Body() createEntryInput: CreateEntryDto
	): Promise<EntryModel> {
		return await this.entryService.create(createEntryInput);
	}

	@Put(':id')
	async updateEntry(
		@Param('id') id: string,
		@Body() entryUpdateInput: UpdateEntryDto
	): Promise<number> {
		const numberOfAffectedRows = await this.entryService.update(
			id,
			entryUpdateInput
		);

		if (numberOfAffectedRows === 0) {
			throw new NotFoundException(`Entry ${id} does not exist`);
		}

		return numberOfAffectedRows;
	}
}
