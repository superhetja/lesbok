/* eslint-disable import/no-cycle */
import {
	Column,
	CreatedAt,
	DataType,
	ForeignKey,
	HasOne,
	Model,
	Table,
	UpdatedAt,
} from 'sequelize-typescript';

import { User } from 'Users/user.model';
import { Book } from './book.model';

@Table({
	tableName: 'entry',
	timestamps: true,
})
export class Entry extends Model {
	@Column({
		type: DataType.UUID,
		primaryKey: true,
		allowNull: false,
		defaultValue: DataType.UUIDV4,
	})
	id: string;

	@Column({
		type: DataType.UUID,
		allowNull: false,
	})
	student_id: string;

	@HasOne(() => Book)
	@Column
	book_id: string;

	@ForeignKey(() => User)
	@Column({
		type: DataType.UUID,
		allowNull: false,
	})
	registered_by: string;

	@Column({
		type: DataType.STRING,
		allowNull: false,
	})
	page_from: string;

	@Column({
		type: DataType.STRING,
		allowNull: false,
	})
	page_to: string;

	@Column({
		type: DataType.DATEONLY,
		allowNull: false,
	})
	date_of_entry: Date;

	@Column({
		type: DataType.STRING,
		allowNull: true,
	})
	comment: string;

	@Column({
		type: DataType.TIME,
		allowNull: true,
	})
	time_spent;

	@CreatedAt
	created: Date;

	@UpdatedAt
	modified: Date;
}
