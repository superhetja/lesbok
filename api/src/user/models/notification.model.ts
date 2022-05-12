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

@Table({
	tableName: 'notifications',
	timestamps: true,
})
export class Notifications extends Model {
	@Column({
		type: DataType.UUID,
		primaryKey: true,
		allowNull: false,
		defaultValue: DataType.UUIDV4,
	})
	id: string;

	@ForeignKey(() => User)
	user_id: string;

	@Column({
		type: DataType.STRING,
		allowNull: true,
	})
	expoPushToken: string;

	@CreatedAt
	created: Date;

	@UpdatedAt
	modified: Date;

	@BelongsTo(() => User)
	user: User;
}
