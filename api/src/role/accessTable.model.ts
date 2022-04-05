/* eslint-disable import/no-cycle */
import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table({
	tableName: 'accessTable',
	timestamps: false,
})
export class AccessTableModel extends Model {
	@Column({
		type: DataType.UUID,
		primaryKey: false,
		allowNull: false,
	})
	user_id: string;

	@Column({
		type: DataType.UUID,
		allowNull: false,
	})
	group_id: string;

	@Column({
		type: DataType.UUID,
		allowNull: false,
	})
	role_id: string;
}
