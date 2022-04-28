import { BadRequestException, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Group } from 'group';
import { Student } from 'student';
import { CreateUserDto, UpdateUserDto } from './dto';
import { Access, User, UserStudent } from './models';

export class UserService {
	constructor(
		@InjectModel(User)
		private readonly user: typeof User,
		@InjectModel(UserStudent)
		private readonly userStudent: typeof UserStudent
	) {}

	async findAll(): Promise<User[]> {
		return this.user.findAll();
	}

	async findById(id: string): Promise<User> {
		const user = this.user.findOne({
			where: { id },
			include: [
				{ model: Access, as: 'access' },
				{ model: Student, as: 'children' },
			],
		});
		if (!user) {
			throw new NotFoundException(`User ${id} does not exist`);
		}
		return user;
	}

	async create(input: CreateUserDto): Promise<User> {
		const user = await this.user
			.create(
				{
					...input,
				},
				{
					include: [
						{ model: Access, as: 'access' },
						{ model: UserStudent, as: 'students' },
					],
				}
			)
			.catch(() => {
				throw new BadRequestException('Cannot create User');
			});
		return user;
	}

	async update(
		id: string,
		input: UpdateUserDto,
		children: Student[]
	): Promise<User> {
		const user = await this.user.findOne({ where: { id } });

		if (!user) {
			throw new NotFoundException(`User ${id} not found!`);
		}

		user.email = input.email ?? user.email;
		user.name = input.name ?? user.name;

		await user.addChildren(children);

		return user.save();
	}

	async findByNationalId(national_id: string) {
		const user = await this.user.findOne({
			where: { national_id },
			include: [
				{ model: Group, as: 'groups' },
				{ model: Student, as: 'children' },
			],
		});

		if (!user) {
			throw new NotFoundException(`User ${national_id} not found`);
		}

		return user;
	}
}
