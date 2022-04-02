// eslint-disable-next-line import/no-extraneous-dependencies
import { Test } from '@nestjs/testing';
import { getModelToken } from '@nestjs/sequelize';
import { EntryModel } from '../entry.model';
import { EntryService } from '../entry.service';
import EntryController from '../entry.controller';
// import { DATE } from 'sequelize/types';

const date = new Date('2019-01-16');

export const testEntry = {
	student_id: 'test_student_id',
	book_name: 'book_name',
	registered_by: 'registered_test_enty',
	page_from: 1,
	page_to: 5,
	date_of_entry: date,
	comment: 'test_comment',
};

export const createTestingEntryModule = async () => {
	const entryModule = await Test.createTestingModule({
		imports: [],
		controllers: [EntryController],
		providers: [
			{
				provide: getModelToken(EntryModel),
				useValue: {
					create: jest.fn(() => testEntry),
					findAll: jest.fn(() => [testEntry]),
					findOne: jest.fn(),
					update: jest.fn(),
					findByPk: jest.fn(() => testEntry),
				},
			},
			EntryService,
		],
	}).compile();

	const entryModel = await entryModule.resolve<typeof EntryModel>(
		getModelToken(EntryModel)
	);

	const entryService = entryModule.get<EntryService>(EntryService);

	const entryController = entryModule.get<EntryController>(EntryController);

	return { entryModel, entryService, entryController };
};
