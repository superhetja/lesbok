import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Student, StudentService } from 'student';
import { CreateUserDto, UpdateUserDto } from './dto';
import { User } from './models';
import { UserService } from './user.service';

@Controller('users')
@ApiTags('users')
export class UserController {
	constructor(
		private readonly userService: UserService,
		private readonly studentService: StudentService
	) {}

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
	): Promise<User> {
		const children: Student[] = [];

		if (input.children) {
			input.children.forEach(async (student_id) => {
				children.push(await this.studentService.findById(student_id));
			});
		}
		const updatedUser = await this.userService.update(id, input, children);

		return updatedUser;
	}

	@Get(':id')
	async getUserById(@Param('id') id: string): Promise<User> {
		return this.userService.findById(id);
	}
}
