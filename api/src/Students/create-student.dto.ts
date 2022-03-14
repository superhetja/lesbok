import { ParseUUIDPipe } from '@nestjs/common';

export default class CreateStudentDto {
	name: string;

	gender: string; // enum?

	ssid: string; // number?

	group_id: ParseUUIDPipe;
}
