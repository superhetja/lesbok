import {
	BadRequestException,
	NotFoundException,
	NotImplementedException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Op } from 'sequelize';
import { Book } from './book.model';
import { CreateEntryDto, UpdateEntryDto } from './dto';
import { Entry } from './entry.model';

const START_OF_SCHOOL = new Date('August 19, 2021 23:15:30');

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
			include: [{ model: Book, as: 'book' }],
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
		});
		return count;
	}

	async studentScore(student_id: string): Promise<number> {
		const diff =
			(Math.floor(
				(new Date().valueOf() - START_OF_SCHOOL.valueOf()) / (1000 * 3600 * 24)
			) /
				7) *
			5;
		const score = await this.entry.count({
			where: {
				student_id,
				date_of_entry: {
					[Op.gt]: START_OF_SCHOOL,
				},
			},
		});
		return Math.ceil((score / diff) * 100);
	}

	// eslint-disable-next-line class-methods-use-this, @typescript-eslint/no-unused-vars
	async findByStudentId(id: string): Promise<Entry[]> {
		throw new NotImplementedException('Todo!');
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
