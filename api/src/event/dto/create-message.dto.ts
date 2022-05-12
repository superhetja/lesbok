export class CreateMessageDto {
	sender_id: string;

	subject: string;

	message: string;

	read: boolean;

	created: Date;

	modified: Date;
}
