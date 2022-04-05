/* eslint-disable import/no-cycle */
import { Column, DataType, Model, Table } from 'sequelize-typescript';
import { UUIDV4 } from 'sequelize/types';

@Table({
	tableName: 'group',
	timestamps: false,
})
export class GroupModel extends Model {
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

	@Column({
		type: DataType.UUID,
		allowNull: false,
	})
	school_id: string;
}
