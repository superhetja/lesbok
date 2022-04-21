import { BadRequestException, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateStudentDto, UpdateStudentDto } from './dto';
import { Student } from './student.model';

export class StudentService {
	constructor(
		@InjectModel(Student)
		private student: typeof Student
	) {}

	async findAll(): Promise<Student[]> {
		return this.student.findAll();
	}

	async findById(id: string): Promise<Student> {
		const student = this.student.findOne({
			where: { id },
		});
		if (!student) {
			throw new NotFoundException(`Student ${id} does not exist`);
		}
		return student;
	}

	async create(input: CreateStudentDto): Promise<Student> {
		const student = await this.student
			.create({
				...input,
			})
			.catch(() => {
				throw new BadRequestException('Cannot create student');
			});
		return student;
	}

	async update(id: string, input: UpdateStudentDto): Promise<number> {
		const [numberOfAffectedRows] = await this.student.update(input, {
			where: { id },
		});
		return numberOfAffectedRows;
	}
}
