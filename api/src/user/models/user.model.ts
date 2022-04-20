/* eslint-disable import/no-cycle */
import {
	BelongsToMany,
	Column,
	CreatedAt,
	DataType,
	HasMany,
	Model,
	Table,
	UpdatedAt,
} from 'sequelize-typescript';
import { Student } from 'student/student.model';
import { UserStudent } from './userStudent.model';
import { Entry } from '../../entry/entry.model';
import { Group } from '../../group/group.model';
import { Access } from './access.model';

@Table({
	tableName: 'user',
	timestamps: true,
})
export class User extends Model {
	@Column({
		type: DataType.UUID,
		primaryKey: true,
		allowNull: false,
		defaultValue: DataType.UUIDV4,
	})
	id: string;

	@Column({
		type: DataType.STRING,
		allowNull: false,
	})
	name: string;

	@Column({
		type: DataType.STRING,
		allowNull: false,
		unique: true,
	})
	national_id!: string;

	@Column({
		type: DataType.STRING,
		allowNull: false,
	})
	email!: string;

	@CreatedAt
	created: Date;

	@UpdatedAt
	modified: Date;

	@BelongsToMany(() => Student, () => UserStudent)
	children: Array<Student & { UserStudent: UserStudent }>;

	@HasMany(() => UserStudent)
	students: UserStudent[];

	@HasMany(() => Entry)
	entries: Entry[];

	@BelongsToMany(() => Group, () => Access)
	groups: Group[];

	@HasMany(() => Access)
	access: Access[];
}
