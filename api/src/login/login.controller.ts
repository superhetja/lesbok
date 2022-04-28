import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { User, UserService } from 'user';
import { LoginInput } from './dto/login.dto';

interface LoginResponse {
	user: User;
	token: string;
}

@Controller('login')
@ApiTags('login')
export class LoginController {
	constructor(private readonly userService: UserService) {}

	@Post()
	async login(@Body() input: LoginInput): Promise<LoginResponse> {
		const user = await this.userService.findByNationalId(input.national_id);

		return { user, token: 'abx' };
	}
}
