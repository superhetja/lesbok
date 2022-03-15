import SchoolsController from 'Schools/schools.controller';
import { SchoolsService } from 'Schools/schools.services';

describe('SchoolController', () => {
	let schoolController: SchoolsController;
	let schoolService: SchoolsService;

	beforeEach(() => {
		schoolService = new SchoolsService();
		schoolController = new SchoolsController(schoolService);
	});

	describe('findAll', () => {
		it('should return an array of cats', async () => {
			const result = ['test'];
			jest.spyOn(schoolService, 'findAll').mockImplementation(() => result);

			expect(await schoolController.findAll()).toBe(result);
		});
	});
});
