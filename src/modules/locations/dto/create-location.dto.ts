import { IsNotEmpty, IsString, IsObject, IsOptional } from 'class-validator';

export class CreateLocationDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  address?: string;

  @IsOptional()
  @IsObject()
  settings?: Record<string, any>;
}
