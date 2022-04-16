/* eslint-disable import/no-cycle */
import {
	BelongsToMany,
	Column,
	DataType,
	ForeignKey,
	HasMany,
	Model,
	Table,
} from 'sequelize-typescript';
import { Access, User } from 'user/models';
import { School } from '../school/school.model';
import { Student } from '../student/student.model';

@Table({
	tableName: 'group',
	timestamps: false,
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

	@HasMany(() => Student)
	students: Student[];

	@BelongsToMany(() => User, () => Access)
	users: Array<User & { Access: Access }>;

	@HasMany(() => Access)
	access: Access[];
}
