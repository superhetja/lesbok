import { GroupModel } from 'group/group.model';
import { Roles } from 'lib/enums';
import {
	Table,
	Model,
	ForeignKey,
	Column,
	DataType,
} from 'sequelize-typescript';
import { UserModel } from 'user/user.model';

@Table
export class Access extends Model {
	@ForeignKey(() => UserModel)
	@Column({
		type: DataType.UUID,
	})
	person_id: string;

	@ForeignKey(() => GroupModel)
	@Column({
		type: DataType.UUID,
	})
	group_id: string;

	@Column({ type: DataType.ENUM({ values: Object.keys(Roles) }) })
	role_id: Roles;
}
