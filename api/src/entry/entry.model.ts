/* eslint-disable import/no-cycle */
import { ApiProperty } from '@nestjs/swagger';
import {
	BelongsTo,
	Column,
	CreatedAt,
	DataType,
	ForeignKey,
	Model,
	Table,
	UpdatedAt,
} from 'sequelize-typescript';
import { Student } from '../student/student.model';
import { User } from '../user/models/user.model';
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
	@ApiProperty()
	id: string;

	@ForeignKey(() => Student)
	@Column({
		type: DataType.UUID,
		allowNull: false,
	})
	@ApiProperty()
	student_id: string;

	@ForeignKey(() => User)
	@Column({
		type: DataType.UUID,
		allowNull: false,
	})
	@ApiProperty()
	registered_by: string;

	@Column({
		type: DataType.STRING,
		allowNull: false,
	})
	@ApiProperty()
	page_from: string;

	@Column({
		type: DataType.STRING,
		allowNull: false,
	})
	@ApiProperty()
	page_to: string;

	@Column({
		type: DataType.DATEONLY,
		allowNull: false,
	})
	@ApiProperty()
	date_of_entry: Date;

	@Column({
		type: DataType.STRING,
		allowNull: true,
	})
	@ApiProperty()
	comment: string;

	@Column({
		type: DataType.TIME,
		allowNull: true,
	})
	@ApiProperty()
	time_spent;

	@ForeignKey(() => Book)
	@Column({
		type: DataType.UUID,
	})
	@ApiProperty()
	book_id: string;

	@BelongsTo(() => Book)
	book: Book;

	@CreatedAt
	@ApiProperty()
	created: Date;

	@UpdatedAt
	@ApiProperty()
	modified: Date;

	@BelongsTo(() => Student)
	student: Student;
}
