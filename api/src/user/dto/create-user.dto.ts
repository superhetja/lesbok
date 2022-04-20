import { Access, UserStudent } from 'user/models';

export class CreateUserDto {
	name!: string;

	national_id!: string;

	email: string;

	access!: Access[];

	/**
	 * Array of student ids
	 */
	childrens?: string[];

	students?: UserStudent[];
}
