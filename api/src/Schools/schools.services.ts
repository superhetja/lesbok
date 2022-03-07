import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Sequelize } from 'sequelize-typescript';
import { SchoolModel } from './school.model';

Injectable();
export class SchoolsService {
	constructor(
		@InjectModel(SchoolModel)
		private schoolModel: typeof SchoolModel,
		private sequlize: Sequelize
	) {}

	async findAll(): Promise<SchoolModel[]> {
		return this.schoolModel.findAll();
	}

	async findById(id: string): Promise<SchoolModel> {
		return this.schoolModel.findByPk(id);
	}
}
