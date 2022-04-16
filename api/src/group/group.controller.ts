import { Controller, Get } from '@nestjs/common';
import { Group } from './group.model';
import { GroupService } from './group.service';

@Controller('groups')
export default class GroupController {
	constructor(private readonly groupService: GroupService) {}

	@Get()
	async findAll(): Promise<Group[]> {
		return this.groupService.findAll();
	}
}
