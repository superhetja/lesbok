import { BadRequestException, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Op } from 'sequelize';
import { User } from 'user';
import { Book } from './book.model';
import { CreateEntryDto, UpdateEntryDto } from './dto';
import { Entry } from './entry.model';

const START_OF_SCHOOL = new Date('Januar 6, 2022 23:15:30');

export class EntryService {
	constructor(
		@InjectModel(Entry)
		private entry: typeof Entry
	) {}

	async findAll(): Promise<Entry[]> {
		return this.entry.findAll({
			order: [
				['date_of_entry', 'DESC'],
				['created', 'DESC'],
			],
			include: [{ model: Book, as: 'book' }],
		});
	}

	async findById(id: string): Promise<Entry> {
		const entry = this.entry.findOne({
			where: { id },
			include: [
				{ model: Book, as: 'book' },
				{ model: User, as: 'user' },
			],
		});
		if (!entry) {
			throw new NotFoundException(`Entry ${id} does not exist`);
		}

		return entry;
	}

	async readThisWeek(student_id: string): Promise<number> {
		const now = new Date();

		const count = this.entry.count({
			where: {
				student_id,
				date_of_entry: {
					[Op.lte]: new Date(),
					[Op.gt]: new Date(now.valueOf() - now.getDay() * 24 * 60 * 60 * 1000),
				},
			},
			distinct: true,
			col: 'date_of_entry',
		});
		return count;
	}

	async studentScore(student_id: string): Promise<number> {
		// const now = new Date();

		// const diff =
		// 	Math.floor(
		// 		(now.valueOf() - START_OF_SCHOOL.valueOf()) / (1000 * 3600 * 24) / 7
		// 	) * 5;
		const score = await this.entry.count({
			where: {
				student_id,
				date_of_entry: {
					[Op.gt]: START_OF_SCHOOL,
				},
			},
			distinct: true,
			col: 'date_of_entry',
		});
		// return Math.ceil((score / diff) * 100);
		return score;
	}

	// eslint-disable-next-line class-methods-use-this, @typescript-eslint/no-unused-vars
	async findByStudentId(student_id: string): Promise<Entry[]> {
		return this.entry.findAll({
			where: { student_id },
		});
	}

	async create(input: CreateEntryDto): Promise<Entry> {
		const book = input.book_id
			? { book_id: input.book_id }
			: { book: { name: input.book_name } };

		const entry = await this.entry
			.create(
				{
					...input,
					...book,
				},
				{
					include: [{ model: Book, as: 'book' }],
				}
			)
			.catch(() => {
				throw new BadRequestException('Cannot create entry!');
			});

		return entry;
	}

	async update(id: string, update: UpdateEntryDto): Promise<number> {
		const [numberOfAffectedRows] = await this.entry.update(update, {
			where: { id },
		});
		return numberOfAffectedRows;
	}
}
