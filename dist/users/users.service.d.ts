import { User } from './interfaces/user.interface';
export declare class UsersService {
    private users;
    findAll(): User[];
    findById(id: number): User | undefined;
    create(user: Partial<User>): User;
    update(id: number, updateData: Partial<User>): User | undefined;
    delete(id: number): boolean;
    findManagedByUserId(id: number): User[];
    getRoles(): string[];
    getGroups(): string[];
    getModifiedRoles(): {
        name: string;
        code: string;
        permissions: string[];
    }[];
}
