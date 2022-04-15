import { Group } from 'group/group.model';
import { Student } from 'Students/student.model';
import { Role } from 'role/role.model';
import { Column, DataType, HasMany, Model, Table } from 'sequelize-typescript';
import { UUIDV4 } from 'sequelize/types';

// to use this we need to inject it into the Sequelize.forRoot method in app.module.ts

@Table
export class User extends Model {
	@Column({
		type: DataType.UUID,
		primaryKey: true,
		allowNull: false,
		defaultValue: UUIDV4,
	})
	user_id: string;

	@Column
	firstName: string;

	@Column
	lastName: string;

	@Column({ defaultValue: true })
	isActive: boolean;

	@Column
	email: string;

	@Column
	SSN: string;

	@HasMany(() => Student)
	students: Student[];

	@HasMany(() => Group)
	groups: Group[];

	@HasMany(() => Role)
	roles: Role[];
}
