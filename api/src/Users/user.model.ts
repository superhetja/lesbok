import { Column, Model, Table } from 'sequelize-typescript';

// to use this we need to inject it into the Sequelize.forRoot method in app.module.ts

@Table
export class User extends Model {
	@Column
	firstName: string;

	@Column
	lastName: string;

	@Column({ defaultValue: true })
	isActive: boolean;
}
