import SchoolsController from 'Schools/schools.controller';
// import { SchoolsService } from 'Schools/schools.services';
import {
	createTestingSchoolModule,
	testSchool,
} from './createTestingSchoolModule';

describe('SchoolController', () => {
	let schoolController: SchoolsController;
	// let schoolService: SchoolsService;

	beforeEach(async () => {
		({ schoolController } = await createTestingSchoolModule());
	});

	it('should return an array of schools', async () => {
		expect(await schoolController.findAll()).toEqual([testSchool]);
	});
});
