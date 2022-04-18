import { BadRequestException, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateUserDto, UpdateUserDto } from './dto';
import { Access, User } from './models';

export class UserService {
	constructor(
		@InjectModel(User)
		private user: typeof User
	) {}

	async findAll(): Promise<User[]> {
		return this.user.findAll();
	}

	async findById(id: string): Promise<User> {
		const user = this.user.findOne({
			where: { id },
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
					include: [{ model: Access, as: 'access' }],
				}
			)
			.catch(() => {
				throw new BadRequestException('Cannot create User');
			});
		return user;
	}

	async update(id: string, input: UpdateUserDto): Promise<number> {
		const [numberOfAffectedRows] = await this.user.update(input, {
			where: { id },
		});
		return numberOfAffectedRows;
	}
}
