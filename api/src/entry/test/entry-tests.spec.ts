import { Test } from '@nestjs/testing';
import { getModelToken } from '@nestjs/sequelize';
import { EntryModel } from 'entry/entry.model';
import { EntryService } from 'entry/entry.service';
// import { DATE } from 'sequelize/types';

const date = new Date('2019-01-16');

const testEntry = {
	student_id: 'test_student_id',
	book_name: 'book_name',
	registered_by: 'registered_test_enty',
	page_from: 1,
	page_to: 5,
	date_of_entry: date,
	comment: 'test_comment',
};

describe('EntryService', () => {
	let service: EntryService;
	let model: typeof EntryModel;

	beforeEach(async () => {
		const testModule = await Test.createTestingModule({
			providers: [
				EntryService,
				{
					provide: getModelToken(EntryModel),
					useValue: {
						findAll: jest.fn(() => [testEntry]),
						findById: jest.fn(),
						create: jest.fn(() => testEntry),
					},
				},
			],
		}).compile();
		service = testModule.get(EntryService);
		model = testModule.get<typeof EntryModel>(getModelToken(EntryModel));
	});

	it('should add the testEntry', async () => {
		expect(await service.create(testEntry)).toEqual(model);
	});
});
