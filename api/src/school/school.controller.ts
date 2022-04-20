import {
	Controller,
	Get,
	Post,
	Body,
	Param,
	NotFoundException,
	Put,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateSchoolDto, UpdateSchoolDto } from './dto';
import { School } from './school.model';
import { SchoolsService } from './school.services';

@Controller('schools')
@ApiTags('schools')
export default class SchoolsController {
	constructor(private readonly schoolService: SchoolsService) {}

	@Post()
	async create(@Body() createSchoolInput: CreateSchoolDto): Promise<School> {
		return this.schoolService.create(createSchoolInput);
	}

	@Get()
	async findAll(): Promise<School[]> {
		return this.schoolService.findAll();
	}

	@Get(':id')
	async findOne(@Param('id') id: string): Promise<School> {
		const school = await this.schoolService.findById(id);
		if (school === null) {
			throw new NotFoundException('School not found');
		}
		return school;
	}

	@Put(':id')
	async update(
		@Param('id') id: string,
		@Body() schoolUpdateInput: UpdateSchoolDto
	): Promise<School> {
		const { numberOfAffectedRows, updatedSchool } =
			await this.schoolService.update(id, schoolUpdateInput);

		if (numberOfAffectedRows === 0) {
			throw new NotFoundException(`School ${id} does not exist`);
		}

		return updatedSchool;
	}
}
