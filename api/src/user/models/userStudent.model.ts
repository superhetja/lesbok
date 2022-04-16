/* eslint-disable import/no-cycle */
import {
	Column,
	DataType,
	ForeignKey,
	Model,
	Table,
} from 'sequelize-typescript';
import { Student } from '../../student/student.model';
import { User } from './user.model';

@Table({
	tableName: 'user_student',
	timestamps: true,
})
export class UserStudent extends Model {
	@ForeignKey(() => User)
	@Column({
		type: DataType.UUID,
	})
	user_id: string;

	@ForeignKey(() => Student)
	@Column({
		type: DataType.UUID,
	})
	student_id: string;
}
