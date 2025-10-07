import { IsString, IsArray, ArrayNotEmpty, MaxLength } from 'class-validator';
import { predefinedGroups, predefinedRoles } from '../constants/data';

export class CreateUserDto {
  @IsString()
  @MaxLength(100)
  name: string;

  @IsArray()
  @ArrayNotEmpty()
  roles: string[];

  @IsArray()
  @ArrayNotEmpty()
  groups: string[];
}