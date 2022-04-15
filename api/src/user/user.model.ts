import {
	Column,
	CreatedAt,
	DataType,
	Model,
	Table,
	UpdatedAt,
} from 'sequelize-typescript';

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
}
