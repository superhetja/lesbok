/* eslint-disable import/no-cycle */
import { ApiProperty } from '@nestjs/swagger';
import {
	Column,
	DataType,
	HasMany,
	Model,
	Table,
	CreatedAt,
	UpdatedAt,
} from 'sequelize-typescript';
import { Entry } from './entry.model';

@Table({
	tableName: 'book',
	timestamps: true,
})
export class Book extends Model {
	@Column({
		type: DataType.UUID,
		primaryKey: true,
		allowNull: false,
		defaultValue: DataType.UUIDV4,
	})
	@ApiProperty()
	id: string;

	@Column({
		type: DataType.STRING,
		allowNull: false,
	})
	@ApiProperty()
	name: string;

	@HasMany(() => Entry)
	@ApiProperty()
	entries: Entry[];

	@CreatedAt
	created: Date;

	@UpdatedAt
	modified: Date;
}
