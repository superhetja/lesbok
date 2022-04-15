/* eslint-disable import/no-cycle */
import {
	Column,
	DataType,
	ForeignKey,
	HasMany,
	Model,
	Table,
} from 'sequelize-typescript';
import { UUIDV4 } from 'sequelize/types';

import { School } from 'Schools/school.model';
import { Student } from 'Students/student.model';

@Table({
	tableName: 'group',
	timestamps: false,
})
export class Group extends Model {
	@Column({
		type: DataType.UUID,
		primaryKey: true,
		allowNull: false,
		defaultValue: UUIDV4,
	})
	group_id: string;

	@Column
	name: string;

	@Column
	description: string;

	@ForeignKey(() => School)
	@Column({
		type: DataType.UUID,
		allowNull: false,
	})
	school_id: string;

	@HasMany(() => Student)
	students: Student[];
}
