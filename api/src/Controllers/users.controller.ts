import { Controller, Get, Post } from "@nestjs/common";
import { UsersService } from "src/Services/users.services";

@Controller()
export class UsersController {
    constructor(private readonly userService: UsersService) {}

    @Get('/user')
    getUser(): string {
        return this.userService.getUser();
    }

    @Post('/createMany')
    createMany() {
        this.userService.createMany();
    }

}