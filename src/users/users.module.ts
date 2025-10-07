import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { PermissionGuard } from './guards/permission.guard';
@Module({
  controllers: [UsersController],
  providers: [UsersService, PermissionGuard],
  exports: [UsersService]
})
export class UsersModule {}