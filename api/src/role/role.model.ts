/* eslint-disable import/no-cycle */
import { Column, DataType, Model, Table } from 'sequelize-typescript';
import { UUIDV4 } from 'sequelize/types';

@Table({
	tableName: 'role',
	timestamps: false,
})
export class RoleModel extends Model {
	@Column({
		type: DataType.UUID,
		primaryKey: true,
		allowNull: false,
		defaultValue: UUIDV4,
	})
	id: string;

	@Column
	name: string;

	@Column
	description: string;
}
