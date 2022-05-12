import { BadRequestException, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Sequelize } from 'sequelize-typescript';
import { Student } from 'student';
import { CreateGroupDto, UpdateGroupDto } from './dto';
import { Group } from './group.model';

export class GroupService {
	constructor(
		@InjectModel(Group)
		private group: typeof Group,
		private sequelize: Sequelize
	) {}

	async findAll(): Promise<Group[]> {
		return this.group.findAll();
	}

	async findById(id: string): Promise<Group> {
		const group = this.group.findOne({
			where: { id },
			include: [
				{
					model: Student,
					as: 'students',
				},
			],
		});
		if (!group) {
			throw new NotFoundException(`Group ${id} does not exist`);
		}
		return group;
	}

	async create(input: CreateGroupDto): Promise<Group> {
		const group = this.group
			.create({
				...input,
			})
			.catch(() => {
				throw new BadRequestException('Cannot create school');
			});

		return group;
	}

	async update(id: string, input: UpdateGroupDto): Promise<number> {
		const [numberOfAffectedRows] = await this.group.update(input, {
			where: { id },
		});

		return numberOfAffectedRows;
	}
}
