import { Body, Controller, Get, Post } from '@nestjs/common';
import CreateStudentDto from './create-student.dto';

@Controller('student')
export default class StudentsController {
	@Post()
	static create(@Body() createStudentDto: CreateStudentDto): string {
		return 'This action adds new student';
	}

	@Get()
	static findAll(): string {
		return 'This action calls students';
	}

	@Get(':id')
	static findOne(id: string): string {
		return `This action calls student with id: ${id}`;
	}
}
