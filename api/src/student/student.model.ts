import { Entry } from 'entry/entry.model';
import { Group } from 'group/group.model';
import { Gender } from 'lib/enums';
import {
	Table,
	Model,
	Column,
	DataType,
	CreatedAt,
	UpdatedAt,
	ForeignKey,
	HasMany,
	BelongsToMany,
} from 'sequelize-typescript';
import { User } from 'user/models/user.model';
import { UserStudent } from 'user/models/userStudent.model';

@Table({
	tableName: 'student',
	timestamps: true,
})
export class Student extends Model {
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

	@ForeignKey(() => Group)
	@Column({
		type: DataType.UUID,
		allowNull: false,
	})
	group_id: string;

	@CreatedAt
	created: Date;

	@UpdatedAt
	modified: Date;

	@HasMany(() => Entry)
	entries: Entry[];

	@BelongsToMany(() => User, () => UserStudent)
	guardians: Array<User & { UserStudent: UserStudent }>;
}
