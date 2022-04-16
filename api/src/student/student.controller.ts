import {
	Body,
	Controller,
	Get,
	NotFoundException,
	Param,
	Post,
	Put,
} from '@nestjs/common';
import { CreateStudentDto, UpdateStudentDto } from './dto';
import { Student } from './student.model';
import { StudentService } from './student.service';

@Controller('students')
export default class StudentController {
	constructor(private readonly studentService: StudentService) {}

	@Get()
	async findAll(): Promise<Student[]> {
		return this.studentService.findAll();
	}

	@Get(':id')
	async findById(@Param('id') id: string): Promise<Student> {
		return this.studentService.findById(id);
	}

	@Post()
	async createStudent(@Body() input: CreateStudentDto) {
		return this.studentService.create(input);
	}

	@Put(':id')
	async updateStudent(
		@Param('id') id: string,
		@Body() input: UpdateStudentDto
	): Promise<number> {
		const numberOfAffectedRows = await this.studentService.update(id, input);

		if (numberOfAffectedRows === 0) {
			throw new NotFoundException(`Student ${id} does not exist`);
		}

		return numberOfAffectedRows;
	}
}
