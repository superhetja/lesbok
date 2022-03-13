import {
	Column,
	CreatedAt,
	DataType,
	ForeignKey,
	Model,
	Table,
	UpdatedAt,
} from 'sequelize-typescript';
import { BookModel } from './book.model';

@Table({
	tableName: 'entry',
	timestamps: true,
})
export class EntryModel extends Model {
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

	@ForeignKey(() => BookModel)
	@Column({
		type: DataType.UUID,
		allowNull: false,
	})
	book_id: string;

	@Column({
		type: DataType.UUID,
		allowNull: false,
	})
	registered_by: string;

	@Column({
		type: DataType.NUMBER,
		allowNull: false,
	})
	page_from: number;

	@Column({
		type: DataType.NUMBER,
		allowNull: false,
	})
	page_to: number;

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
