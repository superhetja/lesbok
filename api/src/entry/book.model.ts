import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table({
	tableName: 'book',
	timestamps: true,
})
export class BookModel extends Model {
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
}
