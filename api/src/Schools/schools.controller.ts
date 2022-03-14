import {
	Controller,
	Get,
	Post,
	Body,
	Param,
	NotFoundException,
	Put,
} from '@nestjs/common';
import { CreateSchoolDto, UpdateSchoolDto } from './dto';
import { SchoolModel } from './school.model';
import { SchoolsService } from './schools.services';

@Controller('schools')
export default class SchoolsController {
	constructor(private readonly schoolService: SchoolsService) {}

	@Post()
	async create(
		@Body() createSchoolInput: CreateSchoolDto
	): Promise<SchoolModel> {
		return this.schoolService.create(createSchoolInput);
	}

	@Get()
	async findAll(): Promise<SchoolModel[]> {
		return this.schoolService.findAll();
	}

	@Get(':id')
	async findOne(@Param('id') id: string): Promise<SchoolModel> {
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
	): Promise<SchoolModel> {
		const { numberOfAffectedRows, updatedSchool } =
			await this.schoolService.update(id, schoolUpdateInput);

		if (numberOfAffectedRows === 0) {
			throw new NotFoundException(`School ${id} does not exist`);
		}

		return updatedSchool;
	}
}
