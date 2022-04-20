import { Roles } from 'lib/enums';

export class UpdateUserDto {
	name?: string;

	email?: string;

	children?: string[];

	groups?: { group_id: Roles };
}
