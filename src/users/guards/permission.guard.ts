import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users.service';

@Injectable()
export class PermissionGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const req = context.switchToHttp().getRequest();
    const userId = parseInt(req.headers['authorization']);
    if (!userId) throw new UnauthorizedException('Authorization header missing');
    req.userId = userId;
    return true; // simplified: all users allowed, can extend based on permissions
  }
}