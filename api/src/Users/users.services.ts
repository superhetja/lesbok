import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Sequelize } from 'sequelize-typescript';
import { User } from './user.model';

@Injectable()
export class UsersService {
	constructor(
		// can use this if we have registered model using for Feature
		@InjectModel(User)
		private userModel: typeof User,
		private sequelize: Sequelize
	) {}

	async findAll(): Promise<User[]> {
		return this.userModel.findAll();
	}

	getUser(): string {
		return 'Inside User';
	}

	async createMany() {
		try {
			await this.sequelize.transaction(async (t) => {
				const transactionHost = { transaction: t };

				await this.userModel.create(
					{ firstName: 'Abraham', lastName: 'Lincoln' },
					transactionHost
				);
				await this.userModel.create(
					{ firstName: 'John', lastName: 'Boothe' },
					transactionHost
				);
			});
		} catch (err) {
			// Transaction has been rolled back
			// err is whatever rejected the promise chain returned to the transaction callback
			console.log(err);
		}
	}

	findOne(id: string): Promise<User> {
		return this.userModel.findOne({
			where: {
				id,
			},
		});
	}

	async remove(id: string): Promise<void> {
		const user = await this.findOne(id);
		await user.destroy();
	}
}
