import { Access, UserStudent } from 'user/models';

export class CreateUserDto {
	name!: string;

	national_id!: string;

	email: string;

	access!: Access[];

	childrens?: string[];

	students?: UserStudent[];
}
