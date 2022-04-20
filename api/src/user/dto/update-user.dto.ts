import { Roles } from 'lib/enums';
import { Access, UserStudent } from 'user/models';

export class UpdateUserDto {
	name?: string;

	email?: string;

	children?: string[];

	groups?: { group_id: Roles };

	students?: UserStudent[];

	access?: Access[];
}
