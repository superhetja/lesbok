/* eslint-disable import/no-cycle */
import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table({
	tableName: 'role',
	timestamps: false,
})
export class Role extends Model {
	@Column({
		type: DataType.UUID,
		primaryKey: true,
		allowNull: false,
		defaultValue: DataType.UUIDV4,
	})
	role_id: string;

	@Column
	name: string;

	@Column
	description: string;
}
