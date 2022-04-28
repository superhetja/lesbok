import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateGroupDto, UpdateGroupDto } from './dto';
import { Group } from './group.model';
import { GroupService } from './group.service';

@Controller('groups')
@ApiTags('groups')
export default class GroupController {
	constructor(private readonly groupService: GroupService) {}

	@Get()
	async findAll(): Promise<Group[]> {
		return this.groupService.findAll();
	}

	@Post()
	async create(@Body() input: CreateGroupDto): Promise<Group> {
		return this.groupService.create(input);
	}

	@Get(':id')
	async findGroupById(@Param('id') id: string): Promise<Group> {
		return this.groupService.findById(id);
	}

	@Put(':id')
	async updateGroup(
		@Param('id') id: string,
		@Body() input: UpdateGroupDto
	): Promise<number> {
		return this.groupService.update(id, input);
	}
}
