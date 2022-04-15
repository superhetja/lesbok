import { SchoolModel } from '../school.model';
import { SchoolsService } from '../school.services';
import { createTestingSchoolModule } from './createTestingSchoolModule';

const testSchool = {
	name: 'Sunnulækjarskóli',
	active: true,
	phoneNumer: '5812345',
	location: 'Sunnutorg 5, 800 Selfoss',
	email: 'sunnulaekjarskoli@sunnulaek.is',
};

describe('SchoolService', () => {
	let schoolService: SchoolsService;
	let schoolModel: typeof SchoolModel;

	beforeEach(async () => {
		// const modRef = await Test.createTestingModule({
		// 	providers: [
		// 		SchoolsService,
		// 		{
		// 			provide: getModelToken(SchoolModel),
		// 			useValue: {
		// 				findAll: jest.fn(() => [testSchool]),
		// 				findOne: jest.fn(),
		// 				create: jest.fn(() => testSchool),
		// 				update: jest.fn(),
		// 			},
		// 		},
		// 	],
		// }).compile();
		// service = modRef.get(SchoolsService);
		// model = modRef.get<typeof SchoolModel>(getModelToken(SchoolModel));
		({ schoolModel, schoolService } = await createTestingSchoolModule());
	});

	it('should get the schools', async () => {
		expect(await schoolService.findAll()).toEqual([testSchool]);
	});

	it('should get a single school', () => {
		const findSpy = jest.spyOn(schoolModel, 'findByPk');
		expect(schoolService.findById('abc'));
		expect(findSpy).toBeCalledWith('abc');
	});
});
