import {
	Body,
	Controller,
	Get,
	NotFoundException,
	Param,
	Post,
	Put,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateStudentDto, UpdateStudentDto } from './dto';
import { Student } from './student.model';
import { StudentService } from './student.service';

@Controller('students')
@ApiTags('students')
export default class StudentController {
	constructor(private readonly studentService: StudentService) {}

	/**
	 * Gets list of all students
	 */
	@Get()
	async findAll(): Promise<Student[]> {
		return this.studentService.findAll();
	}

	/**
	 * Finds student by student id
	 */
	@Get(':id')
	async findById(@Param('id') id: string): Promise<Student> {
		return this.studentService.findById(id);
	}

	/**
	 * Creates new student
	 */
	@Post()
	async createStudent(@Body() input: CreateStudentDto) {
		return this.studentService.create(input);
	}

	/**
	 * Updates student with id
	 */
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
