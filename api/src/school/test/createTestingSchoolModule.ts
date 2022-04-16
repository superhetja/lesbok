import { getModelToken } from '@nestjs/sequelize';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Test } from '@nestjs/testing';
import { School } from '../school.model';
import SchoolsController from '../school.controller';
import { SchoolsService } from '../school.services';

export const testSchool = {
	name: 'Sunnulækjarskóli',
	active: true,
	phoneNumer: '5812345',
	location: 'Sunnutorg 5, 800 Selfoss',
	email: 'sunnulaekjarskoli@sunnulaek.is',
};

export const createTestingSchoolModule = async () => {
	const schoolModule = await Test.createTestingModule({
		imports: [],
		controllers: [SchoolsController],
		providers: [
			{
				provide: getModelToken(School),
				useValue: {
					create: jest.fn(() => testSchool),
					findAll: jest.fn(() => [testSchool]),
					findOne: jest.fn(),
					update: jest.fn(),
					findByPk: jest.fn(() => testSchool),
				},
			},
			SchoolsService,
		],
	}).compile();

	const schoolModel = await schoolModule.resolve<typeof School>(
		getModelToken(School)
	);

	const schoolService = schoolModule.get<SchoolsService>(SchoolsService);

	const schoolController =
		schoolModule.get<SchoolsController>(SchoolsController);

	return { schoolModel, schoolService, schoolController };
};
