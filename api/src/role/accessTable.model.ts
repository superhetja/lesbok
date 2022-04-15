/* eslint-disable import/no-cycle */
import {
	Column,
	DataType,
	ForeignKey,
	Model,
	Table,
} from 'sequelize-typescript';
import { User } from 'Users/user.model';
import { Group } from 'group/group.model';
import { Role } from './role.model';

@Table({
	tableName: 'accessTable',
	timestamps: false,
})
export class AccessTableModel extends Model {
	@ForeignKey(() => User)
	@Column({
		type: DataType.UUID,
		primaryKey: false,
		allowNull: false,
	})
	user_id: string;

	@ForeignKey(() => Group)
	@Column({
		type: DataType.UUID,
		allowNull: false,
	})
	group_id: string;

	@ForeignKey(() => Role)
	@Column({
		type: DataType.UUID,
		allowNull: false,
	})
	role_id: string;
}
