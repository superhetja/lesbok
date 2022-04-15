/* eslint-disable import/no-cycle */
import { Entry } from 'entry/entry.model';
import { Group } from 'group/group.model';
import {
	Column,
	CreatedAt,
	DataType,
	ForeignKey,
	HasMany,
	Model,
	Table,
	UpdatedAt,
} from 'sequelize-typescript';

@Table({
	tableName: 'entry',
	timestamps: true,
})
export class Student extends Model {
	@Column({
		type: DataType.UUID,
		primaryKey: true,
		allowNull: false,
		defaultValue: DataType.UUIDV4,
	})
	student_id: string;

	@Column
	student_name: string;

	@Column({
		type: DataType.STRING,
	})
	gender: string;

	@Column({
		type: DataType.DATE,
		allowNull: false,
	})
	birth_date: Date;

	@ForeignKey(() => Group)
	@Column({
		type: DataType.UUID,
		allowNull: false,
	})
	group_id: string;

	@CreatedAt
	created: Date;

	@UpdatedAt
	modified: Date;

	@HasMany(() => Entry)
	entries: Entry[];
}
