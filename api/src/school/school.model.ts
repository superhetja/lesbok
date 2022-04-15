import { GroupModel } from 'group/group.model';
import {
	Table,
	Model,
	Column,
	DataType,
	CreatedAt,
	UpdatedAt,
	HasMany,
} from 'sequelize-typescript';

import { Group } from 'group/group.model';

@Table({
	tableName: 'school',
	timestamps: true,
})
export class School extends Model {
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
		type: DataType.BOOLEAN,
		allowNull: false,
	})
	active: boolean;

	@Column({
		type: DataType.STRING,
		allowNull: true,
	})
	phoneNumer: string;

	@Column({
		type: DataType.STRING,
		allowNull: true,
	})
	location: string;

	@CreatedAt
	created: Date;

	@UpdatedAt
	modified: Date;

	@Column({
		type: DataType.STRING,
		allowNull: true,
	})
	email: string;

	@HasMany(() => Group)
	groups: Group[];
}
