import { BadRequestException, NotImplementedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateEntryDto, UpdateEntryDto } from './dto';
import { EntryModel } from './entry.model';

export class EntryService {
	constructor(
		@InjectModel(EntryModel)
		private entryModel: typeof EntryModel
	) {}

	async findAll(): Promise<EntryModel[]> {
		return this.entryModel.findAll({
			order: [['date_of_entry', 'DESC']],
		});
	}

	async findById(id: string): Promise<EntryModel> {
		return this.entryModel.findByPk(id);
	}

	// eslint-disable-next-line class-methods-use-this, @typescript-eslint/no-unused-vars
	async findByStudentId(id: string): Promise<EntryModel[]> {
		throw new NotImplementedException('Todo!');
	}

	async create(input: CreateEntryDto): Promise<EntryModel> {
		const entry = await this.entryModel.create({ ...input }).catch(() => {
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
