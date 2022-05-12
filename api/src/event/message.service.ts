import { BadRequestException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Message } from './message.model';
import { CreateMessageDto } from './dto';

export class MessageService {
	constructor(
		@InjectModel(Message)
		private message: typeof Message
	) {}

	async create(input: CreateMessageDto): Promise<Message> {
		const entry = await this.message
			.create({
				...input,
			})
			.catch(() => {
				throw new BadRequestException('Cannot create message!');
			});

		return entry;
	}
}
