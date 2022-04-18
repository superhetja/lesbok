import { Roles } from 'lib/enums';

export class CreateUserDto {
	name!: string;

	national_id!: string;

	email: string;

	access!: [{ group_id: string; role: Roles }];

	childrens?: string[];
}
