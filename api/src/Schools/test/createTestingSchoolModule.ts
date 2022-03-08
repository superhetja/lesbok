import { getModelToken } from '@nestjs/sequelize';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Test } from '@nestjs/testing';
import { SchoolModel } from '../school.model';
import SchoolsController from '../schools.controller';
import { SchoolsService } from '../schools.services';

export const createTestingSchoolModule = async () => {
	const schoolModule = await Test.createTestingModule({
		imports: [],
		controllers: [SchoolsController],
		providers: [
			{
				provide: getModelToken(SchoolModel),
				useValue: {
					create: jest.fn(),
					findAll: jest.fn(),
					findOne: jest.fn(),
					update: jest.fn(),
				},
			},
			SchoolsService,
		],
	}).compile();

	const schoolModel = await schoolModule.resolve<typeof SchoolModel>(
		getModelToken(SchoolModel)
	);

	const schoolService = schoolModule.get<SchoolsService>(SchoolsService);

	const schoolController =
		schoolModule.get<SchoolsController>(SchoolsController);

	return { schoolModel, schoolService, schoolController };
};
