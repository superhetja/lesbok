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
import { EventEmitter2 } from '@nestjs/event-emitter';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { CreateEntryDto, UpdateEntryDto } from './dto';
import { Entry } from './entry.model';
import { EntryService } from './entry.service';

@Controller('entries')
@ApiTags('entries')
export default class EntryController {
	constructor(
		private readonly entryService: EntryService,
		private eventEmitter: EventEmitter2
	) {}

	@Get()
	@ApiOkResponse({
		type: Entry,
		isArray: true,
		description: 'Gets all existing entries',
	})
	async findAll(): Promise<Entry[]> {
		return await this.entryService.findAll();
	}

	@Get(':id')
	@ApiOkResponse({
		type: Entry,
		description: 'Gets entry with id',
	})
	async findById(@Param('id') id: string): Promise<Entry> {
		return await this.entryService.findById(id);
	}

	@Get('thisWeek/:id')
	@ApiOkResponse({
		type: Entry,
		description: 'Gets existing entry',
	})
	async readThisWeek(@Param('id') id: string): Promise<number> {
		return await this.entryService.readThisWeek(id);
	}

	@Get('score/:id')
	async studentScore(@Param('id') id: string): Promise<number> {
		return await this.entryService.studentScore(id);
	}

	@Post()
	@ApiCreatedResponse({
		type: Entry,
		description: 'Creates a new entry',
	})
	async createEntry(@Body() createEntryInput: CreateEntryDto): Promise<Entry> {
		const entry = await this.entryService.create(createEntryInput);
		this.eventEmitter.emit('entry.create', entry);
		return entry;
	}

	@Put(':id')
	@ApiOkResponse({
		type: Entry,
		description: 'Updates existing entry.',
	})
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
