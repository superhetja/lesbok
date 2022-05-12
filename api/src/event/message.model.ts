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
import { User } from '../user/models/user.model';

@Table({
	tableName: 'notification',
	timestamps: true,
})
export class Message extends Model {
	@Column({
		type: DataType.UUID,
		primaryKey: true,
		allowNull: false,
		defaultValue: DataType.UUIDV4,
	})
	id: string;

	@ForeignKey(() => User)
	@Column({
		type: DataType.UUID,
		allowNull: false,
	})
	sender_id;

	@Column({
		type: DataType.STRING,
		allowNull: false,
	})
	subject!: string;

	@Column({
		type: DataType.STRING,
		allowNull: false,
	})
	message: string;

	@Column({
		type: DataType.BOOLEAN,
	})
	read: boolean;

	@CreatedAt
	created: Date;

	@UpdatedAt
	modified: Date;

	@BelongsTo(() => User)
	sender: User;
}
