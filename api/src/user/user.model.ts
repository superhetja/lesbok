import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table({
	tableName: 'user',
	timestamps: true,
})
export class UserModel extends Model {
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
	nationalId!: string;

	@Column({
		type: DataType.STRING,
		allowNull: false,
	})
	email!: string;
}
