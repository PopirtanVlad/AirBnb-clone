import {Injectable, UnauthorizedException} from "@nestjs/common";
import {UserService} from "../user/user.service";
import {User} from "../user/user.entity";

@Injectable()
export class AuthService {
    constructor(private userService: UserService) {}

    async signIn(username: string, pass: string): Promise<any> {
        const user = await this.userService.findByUsername(username)
        if ((await user)?.password != pass){
            throw new UnauthorizedException()
        }
        const { password, ...result } = user;
        return result
    }
}