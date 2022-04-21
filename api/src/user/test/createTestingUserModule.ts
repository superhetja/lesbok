// eslint-disable-next-line import/no-extraneous-dependencies
import { Test } from '@nestjs/testing';
import { UserController } from '../user.controller';

export const CreateTestingUserModule = async () => {
	const userModule = await Test.createTestingModule({
		imports: [],
		controllers: [UserController],
		providers: [],
	});

	return { userModule };
};
