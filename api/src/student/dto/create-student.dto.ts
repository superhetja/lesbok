import { Gender } from '../../lib/enums';

export class CreateStudentDto {
	readonly name: string;

	readonly gender: Gender;

	readonly national_id!: string;

	readonly group_id!: string;
}
