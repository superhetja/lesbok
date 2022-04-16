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
import { Entry } from './entry.model';
import { EntryService } from './entry.service';

@Controller('entries')
export default class EntryController {
	constructor(private readonly entryService: EntryService) {}

	@Get()
	async findAll(): Promise<Entry[]> {
		return await this.entryService.findAll();
	}

	@Get('thisWeek/:id')
	async readThisWeek(@Param('id') id: string): Promise<number> {
		return await this.entryService.readThisWeek(id);
	}

	@Get('score/:id')
	async studentScore(@Param('id') id: string): Promise<number> {
		return await this.entryService.studentScore(id);
	}

	@Post()
	async createEntry(@Body() createEntryInput: CreateEntryDto): Promise<Entry> {
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
