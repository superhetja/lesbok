import { getModelToken } from '@nestjs/sequelize';
import { Test } from '@nestjs/testing';
import { SchoolModel } from '../school.model';
import { SchoolsService } from '../schools.services';

const testSchool = {
	name: 'Sunnulækjarskóli',
	active: true,
	phoneNumer: '5812345',
	location: 'Sunnutorg 5, 800 Selfoss',
	email: 'sunnulaekjarskoli@sunnulaek.is',
};

describe('SchoolService', () => {
	let service: SchoolsService;
	let model: typeof SchoolModel;

	beforeEach(async () => {
		const modRef = await Test.createTestingModule({
			providers: [
				SchoolsService,
				{
					provide: getModelToken(SchoolModel),
					useValue: {
						findAll: jest.fn(() => [testSchool]),
						findOne: jest.fn(),
						create: jest.fn(() => testSchool),
						update: jest.fn(),
					},
				},
			],
		}).compile();
		service = modRef.get(SchoolsService);
		model = modRef.get<typeof SchoolModel>(getModelToken(SchoolModel));
	});

	it('should get the schools', async () => {
		expect(await service.findAll()).toEqual([testSchool]);
	});

	it('should get a single school', () => {
		const findSpy = jest.spyOn(model, 'findOne');
		expect(service.findById('abc'));
		expect(findSpy).toBeCalledWith({ where: { id: 'abc' } });
	});
});
