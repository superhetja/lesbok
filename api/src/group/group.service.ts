import { BadRequestException, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateGroupDto } from './dto';
import { Group } from './group.model';

export class GroupService {
	constructor(
		@InjectModel(Group)
		private group: typeof Group
	) {}

	async findAll(): Promise<Group[]> {
		return this.group.findAll();
	}

	async findById(id: string): Promise<Group> {
		const group = this.group.findOne({
			where: { id },
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
}
