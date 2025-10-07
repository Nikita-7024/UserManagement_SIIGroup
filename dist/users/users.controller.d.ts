import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    getAll(): import("./interfaces/user.interface").User[];
    getManaged(id: string): import("./interfaces/user.interface").User[];
    createUser(body: CreateUserDto): import("./interfaces/user.interface").User;
    updateUser(id: string, body: Partial<CreateUserDto>): import("./interfaces/user.interface").User;
    deleteUser(id: string): boolean;
}
