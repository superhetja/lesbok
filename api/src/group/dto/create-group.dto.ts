import { ApiProperty } from '@nestjs/swagger';

export class CreateGroupDto {
	@ApiProperty()
	school_id!: string;

	@ApiProperty()
	name!: string;

	@ApiProperty()
	description?: string;
}
