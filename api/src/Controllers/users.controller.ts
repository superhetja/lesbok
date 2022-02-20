import { Controller, Get, Post } from "@nestjs/common";
import { UsersService } from "src/Services/users.services";
import { User } from "src/Models/user.model";

@Controller()
export class UsersController {
    constructor(private readonly userService: UsersService) {}

    @Get('/user')
    getUser(): string {
        return this.userService.getUser();
    }

    @Get('/users')
    getUsers(): Promise<User []> {
        return this.userService.findAll();
    }

    @Post('/createMany')
    createMany() {
        this.userService.createMany();
    }

}