import { GroupModel } from 'group/group.model';
import { Gender } from 'lib/enums';
import {
	Table,
	Model,
	Column,
	DataType,
	CreatedAt,
	UpdatedAt,
	ForeignKey,
} from 'sequelize-typescript';

@Table({
	tableName: 'student',
	timestamps: true,
})
export class StudentModel extends Model {
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
	gender: Gender;

	@Column({
		type: DataType.STRING,
		allowNull: false,
		unique: true,
	})
	national_id!: string;

	@ForeignKey(() => GroupModel)
	@Column({
		type: DataType.UUID,
	})
	group_id: GroupModel;

	@CreatedAt
	created: Date;

	@UpdatedAt
	modified: Date;
}
