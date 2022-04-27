import { BadRequestException, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Book, Entry } from 'entry';
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

	async getStudentEntries(id: string): Promise<Student> {
		const student = await this.student.findOne({
			attributes: ['id'],
			where: { id },
			include: [
				{
					model: Entry,
					as: 'entries',
					include: [
						{
							model: Book,
							as: 'book',
						},
					],
				},
			],
		});
		if (!student) {
			throw new NotFoundException(`Student ${id} does not exist`);
		}

		return student;
	}

	// /**
	//  * Gets number of entries of given week.
	//  * @param id
	//  * @param week Optional. Defaults to currentWeek
	//  */
	// async readByWeek(id: string, week?: number): Promise<number> {
	// 	if( !week ) { week = getCurrentWeek() }

	// 	const {start, end} =

	// 	const count = this.student.count({
	// 		include: {
	// 			model: Entry,
	// 			as: 'entries',
	// 			where: {
	// 				date_of_entry:{
	// 					[Op.lte]: new Date(),
	// 					[Op.gt]: new Date(now.valueOf() - now.getDay() * 24 * 60 * 60 * 1000),
	// 				}
	// 			}
	// 		},

	// 	})
	// 	return count;
	// }

	// /**
	//  * Calculates student score based on number of reads!
	//  * @param id string
	//  */
	// async getStudentScore(id: string): Promise<number> {
	// 	const diff =
	// 		(Math.floor(
	// 			(new Date().valueOf() - START_OF_SCHOOL.valueOf()) /
	// 		) /
	// 			7) *
	// 		5;
	// 	const score = await this.entry.count({

	// 	})
	// }
}
