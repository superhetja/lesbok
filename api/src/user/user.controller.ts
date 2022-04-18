import {
	Body,
	Controller,
	Get,
	NotFoundException,
	Param,
	Post,
	Put,
} from '@nestjs/common';
import { CreateUserDto, UpdateUserDto } from './dto';
import { User } from './models';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
	constructor(private readonly userService: UserService) {}

	@Get()
	async findAll(): Promise<User[]> {
		return this.userService.findAll();
	}

	@Post()
	async createUser(@Body() input: CreateUserDto): Promise<User> {
		return this.userService.create(input);
	}

	@Put(':id')
	async updateUser(
		@Param('id') id: string,
		@Body() input: UpdateUserDto
	): Promise<number> {
		const numberOfAffectedRows = await this.userService.update(id, input);

		if (numberOfAffectedRows === 0) {
			throw new NotFoundException(`User ${id} does not exist`);
		}

		return numberOfAffectedRows;
	}
}
