import { Gender } from '../../lib/enums';

export class UpdateStudentDto {
	readonly name?: string;

	readonly gender?: Gender;
}
