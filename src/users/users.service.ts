import { Injectable } from '@nestjs/common';
import { User } from './interfaces/user.interface';
import { predefinedUsers, predefinedGroups, predefinedRoles, modifiedRoles } from './constants/data';

@Injectable()
export class UsersService {
  private users: User[] = [...predefinedUsers];

  findAll(): User[] { return this.users; }

  findById(id: number): User | undefined {
    return this.users.find(u => u.id === id);
  }

  create(user: Partial<User>): User {
    const newUser: User = {
      id: this.users.length + 1,
      ...user
    } as User;
    this.users.push(newUser);
    return newUser;
  }

  update(id: number, updateData: Partial<User>): User | undefined {
    const user = this.findById(id);
    if (!user) return undefined;
    Object.assign(user, updateData);
    return user;
  }

  delete(id: number): boolean {
    const index = this.users.findIndex(u => u.id === id);
    if (index === -1) return false;
    this.users.splice(index, 1);
    return true;
  }

  findManagedByUserId(id: number): User[] {
    const user = this.findById(id);
    if (!user) return [];
    if (!user.roles.includes('ADMIN')) return [];
    const groups = user.groups;
    return this.users.filter(u => u.id !== id && u.groups.some(g => groups.includes(g)));
  }

  getRoles() { return predefinedRoles; }
  getGroups() { return predefinedGroups; }
  getModifiedRoles() { return modifiedRoles; }
}