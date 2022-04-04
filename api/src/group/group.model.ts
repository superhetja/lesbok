import { SchoolModel } from 'school/school.model';
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

@Table({
	tableName: 'group',
	timestamps: true,
})
export class GroupModel extends Model {
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
		type: DataType.STRING,
		allowNull: false,
	})
	description: string;

	@ForeignKey(() => SchoolModel)
	@Column({
		type: DataType.UUID,
	})
	school_id: string;

	@BelongsTo(() => SchoolModel)
	school: SchoolModel;

	@CreatedAt
	created: Date;

	@UpdatedAt
	modified: Date;
}
