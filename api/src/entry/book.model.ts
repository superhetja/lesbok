/* eslint-disable import/no-cycle */
import { Column, DataType, HasMany, Model, Table } from 'sequelize-typescript';
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
	id: string;

	@Column({
		type: DataType.STRING,
		allowNull: false,
	})
	name: string;

	@HasMany(() => Entry)
	entries: Entry[];
}
