import { Controller, Get, Post, Patch, Delete, Param, Body, UseGuards, Headers } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { PermissionGuard } from './guards/permission.guard';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @UseGuards(PermissionGuard)
  @Get()
  getAll() { return this.usersService.findAll(); }

  @UseGuards(PermissionGuard)
  @Get('managed/:id')
  getManaged(@Param('id') id: string) { return this.usersService.findManagedByUserId(+id); }

  @UseGuards(PermissionGuard)
  @Post()
  createUser(@Body() body: CreateUserDto) { return this.usersService.create(body); }

  @UseGuards(PermissionGuard)
  @Patch(':id')
  updateUser(@Param('id') id: string, @Body() body: Partial<CreateUserDto>) {
    return this.usersService.update(+id, body);
  }

  @UseGuards(PermissionGuard)
  @Delete(':id')
  deleteUser(@Param('id') id: string) { return this.usersService.delete(+id); }
}