/* eslint-disable no-return-assign */
// import { v4 as uuid } from 'uuid';
import { CreateSchoolDto } from '../dto';
import { SchoolModel } from '../school.model';
import { createTestingSchoolModule } from './createTestingSchoolModule';

interface Then {
	result: SchoolModel;
	error: Error;
}

type GivenWhenThen = (createSchoolInput: CreateSchoolDto) => Promise<Then>;

describe('SchoolController - createSchool', () => {
	let mockSchoolModel: typeof SchoolModel;
	let givenWhenThen: GivenWhenThen;

	beforeEach(async () => {
		const { schoolModel, schoolController } = await createTestingSchoolModule();

		mockSchoolModel = schoolModel;

		givenWhenThen = async (
			createSchoolInput: CreateSchoolDto
		): Promise<Then> => {
			const then = {} as Then;

			await schoolController
				.create(createSchoolInput)
				.then((result) => (then.result = result))
				.catch((error) => (then.error = error));

			return then;
		};
	});

	describe('database query', () => {
		// const id = uuid();
		const input: CreateSchoolDto = {
			name: 'Im a test',
			location: 'Arnarheiði 10, 810 Hveragerði',
			phone: '5812345',
			email: 'test@test.is',
		};

		let mockUpdate: jest.Mock;

		beforeEach(async () => {
			mockUpdate = mockSchoolModel.create as jest.Mock;

			await givenWhenThen(input);
		});

		it('should run create query', () => {
			expect(mockUpdate).toHaveBeenCalledWith({
				name: input.name,
				email: input.email,
				location: input.location,
				phone: input.phone,
				active: true,
			});
		});
	});

	describe('successful creation', () => {
		// const id = uuid();
		const input: CreateSchoolDto = {
			name: 'Im a test',
			email: 'test@test.is',
			phone: '5812345',
			location: 'Arnarhóll, 101 Reykjavík',
		};

		let then: Then;

		beforeEach(async () => {
			const mockUpdate = mockSchoolModel.create as jest.Mock;
			mockUpdate.mockResolvedValueOnce(input);

			then = await givenWhenThen(input);
		});

		it('should create school', () => {
			expect(then.result).toEqual(input);
		});
	});

	describe('database query fails', () => {
		const input: CreateSchoolDto = {
			name: 'Im a test',
			email: 'test@test.is',
			phone: '5812345',
			location: 'Arnarhóll, 101 Reykjavík',
		};
		let then: Then;

		beforeEach(async () => {
			const mockFindById = mockSchoolModel.create as jest.Mock;
			mockFindById.mockRejectedValueOnce(new Error('Some error'));
			then = await givenWhenThen(input);
		});

		it('should throw error', () => {
			expect(then.error).toBeInstanceOf(Error);
			expect(then.error.message).toBe('Cannot create school');
		});
	});
});
