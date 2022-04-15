import {
	BadRequestException,
	NotFoundException,
	NotImplementedException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Op } from 'sequelize';
import { BookModel } from './book.model';
import { CreateEntryDto, UpdateEntryDto } from './dto';
import { EntryModel } from './entry.model';

const START_OF_SCHOOL = new Date('August 19, 2021 23:15:30')

export class EntryService {
	constructor(
		@InjectModel(EntryModel)
		private entryModel: typeof EntryModel
	) {}

	async findAll(): Promise<EntryModel[]> {
		return this.entryModel.findAll({
			order: [
				['date_of_entry', 'DESC'],
				['created', 'DESC'],
			],
			include: [{ model: BookModel, as: 'book' }],
		});
	}

	async findById(id: string): Promise<EntryModel> {
		const entry = this.entryModel.findOne({
			where: { id },
			include: [{ model: BookModel, as: 'book' }],
		});
		if (!entry) {
			throw new NotFoundException(`Entry ${id} does not exist`);
		}

		return entry;
	}

	async readThisWeek(student_id: string): Promise<number> {
		const now = new Date();

		const count = this.entryModel.count({
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
		const diff = new Date().valueOf() - START_OF_SCHOOL.valueOf();
		const score = await this.entryModel.count({
			where: {
				student_id,
				date_of_entry: {
					[Op.gt]: START_OF_SCHOOL,
				},
			},
		});
		return score/;
	}

	// eslint-disable-next-line class-methods-use-this, @typescript-eslint/no-unused-vars
	async findByStudentId(id: string): Promise<EntryModel[]> {
		throw new NotImplementedException('Todo!');
	}

	async create(input: CreateEntryDto): Promise<EntryModel> {
		const book = input.book_id
			? { book_id: input.book_id }
			: { book: { name: input.book_name } };

		const entry = await this.entryModel
			.create(
				{
					...input,
					...book,
				},
				{
					include: [{ model: BookModel, as: 'book' }],
				}
			)
			.catch(() => {
				throw new BadRequestException('Cannot create entry!');
			});

		return entry;
	}

	async update(id: string, update: UpdateEntryDto): Promise<number> {
		const [numberOfAffectedRows] = await this.entryModel.update(update, {
			where: { id },
		});
		return numberOfAffectedRows;
	}
}
