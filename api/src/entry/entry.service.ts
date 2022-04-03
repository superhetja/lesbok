import {
	BadRequestException,
	NotFoundException,
	NotImplementedException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { BookModel } from './book.model';
import { CreateEntryDto, UpdateEntryDto } from './dto';
import { EntryModel } from './entry.model';

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

	// eslint-disable-next-line class-methods-use-this, @typescript-eslint/no-unused-vars
	async findByStudentId(id: string): Promise<EntryModel[]> {
		throw new NotImplementedException('Todo!');
	}

	async create(input: CreateEntryDto): Promise<EntryModel> {
		const entry = await this.entryModel
			.create(
				{
					...input,
					book: {
						name: input.book_name,
					},
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
