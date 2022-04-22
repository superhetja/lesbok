/* eslint-disable import/no-cycle */
import {
	BelongsTo,
	BelongsToMany,
	Column,
	CreatedAt,
	DataType,
	ForeignKey,
	HasMany,
	Model,
	Table,
	UpdatedAt,
} from 'sequelize-typescript';
import { Access, User } from 'user/models';
import { School } from '../school/school.model';
import { Student } from '../student/student.model';

@Table({
	tableName: 'group',
})
export class Group extends Model {
	@Column({
		type: DataType.UUID,
		primaryKey: true,
		allowNull: false,
		defaultValue: DataType.UUIDV4,
	})
	id: string;

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

	@CreatedAt
	created: Date;

	@UpdatedAt
	modified: Date;

	@BelongsTo(() => School)
	school: School;

	@HasMany(() => Student)
	students: Student[];

	@BelongsToMany(() => User, () => Access)
	users: User[];

	@HasMany(() => Access)
	access: Access[];
}
