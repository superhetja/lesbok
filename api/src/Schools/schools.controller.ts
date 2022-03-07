import { Controller, Get, Post, Body, Param, NotFoundException } from '@nestjs/common';
import { CreateSchoolDto } from './dto';
import { SchoolModel } from './school.model';
import { SchoolsService } from './schools.services';

@Controller('schools')
export default class SchoolsController {
	constructor(private readonly schoolService: SchoolsService) {}

	@Post()
	static create(@Body() createSchoolDto: CreateSchoolDto): string {
		return 'This actions adds new school';
	}

	@Get()
	async findAll(): Promise<SchoolModel[]> {
		return this.schoolService.findAll();
	}

	@Get(':id')
	async getSchoolById(@Param('id') id: string): Promise<SchoolModel> {
		const school = await this.schoolService.findById(id);
		if (school === null) {
			throw new NotFoundException('School not found');
		}
		return school;
	}
}
