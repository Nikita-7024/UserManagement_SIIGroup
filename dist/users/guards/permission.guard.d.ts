import { CanActivate, ExecutionContext } from '@nestjs/common';
export declare class PermissionGuard implements CanActivate {
    canActivate(context: ExecutionContext): boolean;
}
