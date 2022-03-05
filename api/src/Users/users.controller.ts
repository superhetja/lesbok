import { Controller, Get, Post } from '@nestjs/common';
import { User } from 'src/Users/user.model';
import { UsersService } from 'src/Users/users.services';

@Controller()
export class UsersController {
	constructor(private readonly userService: UsersService) {}

	@Get('/user')
	getUser(): string {
		const a = '';
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
