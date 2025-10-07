"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const data_1 = require("./constants/data");
let UsersService = class UsersService {
    constructor() {
        this.users = [...data_1.predefinedUsers];
    }
    findAll() { return this.users; }
    findById(id) {
        return this.users.find(u => u.id === id);
    }
    create(user) {
        const newUser = {
            id: this.users.length + 1,
            ...user
        };
        this.users.push(newUser);
        return newUser;
    }
    update(id, updateData) {
        const user = this.findById(id);
        if (!user)
            return undefined;
        Object.assign(user, updateData);
        return user;
    }
    delete(id) {
        const index = this.users.findIndex(u => u.id === id);
        if (index === -1)
            return false;
        this.users.splice(index, 1);
        return true;
    }
    findManagedByUserId(id) {
        const user = this.findById(id);
        if (!user)
            return [];
        if (!user.roles.includes('ADMIN'))
            return [];
        const groups = user.groups;
        return this.users.filter(u => u.id !== id && u.groups.some(g => groups.includes(g)));
    }
    getRoles() { return data_1.predefinedRoles; }
    getGroups() { return data_1.predefinedGroups; }
    getModifiedRoles() { return data_1.modifiedRoles; }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)()
], UsersService);
