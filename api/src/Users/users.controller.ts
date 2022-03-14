import { Controller, Get, Post } from '@nestjs/common';
import { User } from './user.model';
import { UsersService } from './users.services';

@Controller()
export class UsersController {
	constructor(private readonly userService: UsersService) {}

	@Get('/user')
	getUser(): string {
		return this.userService.getUser();
	}

	@Get('/users')
	getUsers(): Promise<User[]> {
		return this.userService.findAll();
	}

	@Post('/createMany')
	createMany() {
		this.userService.createMany();
	}
}

export default UsersController;
