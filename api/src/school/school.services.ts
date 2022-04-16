import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateSchoolDto, UpdateSchoolDto } from './dto';
import { School } from './school.model';

Injectable();
export class SchoolsService {
	constructor(
		@InjectModel(School)
		private schoolModel: typeof School
	) {}

	async findAll(): Promise<School[]> {
		return this.schoolModel.findAll();
	}

	async findById(id: string): Promise<School> {
		return this.schoolModel.findByPk(id);
	}

	async create(input: CreateSchoolDto): Promise<School> {
		const school = await this.schoolModel
			.create({
				name: input.name,
				active: true,
				phoneNumer: input.phoneNumer,
				email: input.email,
				location: input.location,
			})
			.catch(() => {
				throw new BadRequestException('Cannot create school');
			});

		return school;
	}

	async update(
		id: string,
		update: UpdateSchoolDto
	): Promise<{
		numberOfAffectedRows: number;
		updatedSchool: School;
	}> {
		const [numberOfAffectedRows, [updatedSchool]] =
			await this.schoolModel.update(update, {
				where: { id },
				returning: true,
			});
		return { numberOfAffectedRows, updatedSchool };
	}
}
