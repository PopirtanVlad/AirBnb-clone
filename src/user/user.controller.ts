import {Body, Controller, Get, Post} from "@nestjs/common";
import {UserService} from "./user.service";

@Controller()
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Post()
    createUser(@Body() {username, password}: {username: string, password: string}){
        return this.userService.createUser(username, password)
    }

    @Get()
    getAllPolls() {
        return this.userService.getAllUsers();
    }
}