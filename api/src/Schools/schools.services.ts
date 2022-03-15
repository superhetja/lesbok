import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateSchoolDto, UpdateSchoolDto } from './dto';
import { SchoolModel } from './school.model';

Injectable();
export class SchoolsService {
	constructor(
		@InjectModel(SchoolModel)
		private schoolModel: typeof SchoolModel
	) {}

	async findAll(): Promise<SchoolModel[]> {
		return this.schoolModel.findAll();
	}

	async findById(id: string): Promise<SchoolModel> {
		return this.schoolModel.findByPk(id);
	}

	async create(input: CreateSchoolDto): Promise<SchoolModel> {
		const school = await this.schoolModel
			.create({
				name: input.name,
				active: true,
				phoneNumer: input.phone,
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
		updatedSchool: SchoolModel;
	}> {
		const [numberOfAffectedRows, [updatedSchool]] =
			await this.schoolModel.update(update, {
				where: { id },
				returning: true,
			});
		return { numberOfAffectedRows, updatedSchool };
	}
}
