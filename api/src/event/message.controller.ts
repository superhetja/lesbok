/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/return-await */
import {
	Body,
	Controller,
	Get,
	NotFoundException,
	Param,
	Post,
	Put,
} from '@nestjs/common';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { CreateMessageDto } from './dto';
import { Message } from './message.model';
import { MessageService } from './message.service';

@Controller('messages')
@ApiTags('messages')
export default class MessageController {
	constructor(private readonly messageService: MessageService) {}

	@Post()
	@ApiCreatedResponse({
		type: Message,
		description: 'Creates a new entry',
	})
	async createMessage(
		@Body() createMessageInput: CreateMessageDto
	): Promise<Message> {
		return await this.messageService.create(createMessageInput);
	}
}
