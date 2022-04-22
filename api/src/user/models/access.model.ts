/* eslint-disable import/no-cycle */
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
import { User } from './user.model';
import { Group } from '../../group/group.model';
import { Roles } from '../../lib/enums';

@Table({
	tableName: 'access_table',
	timestamps: false,
})
export class Access extends Model {
	@ForeignKey(() => User)
	@Column({
		type: DataType.UUID,
		primaryKey: false,
		allowNull: false,
	})
	user_id!: string;

	@ForeignKey(() => Group)
	@Column({
		type: DataType.UUID,
		allowNull: false,
	})
	group_id!: string;

	@Column({
		type: DataType.ENUM,
		allowNull: false,
		values: Object.values(Roles),
	})
	role!: Roles;

	@CreatedAt
	created: Date;

	@UpdatedAt
	modified: Date;

	@BelongsTo(() => User)
	user: User;

	@BelongsTo(() => Group)
	group: Group;
}
