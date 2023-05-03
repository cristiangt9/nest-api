import {
  IsBoolean,
  IsOptional,
  IsString,
  IsUUID,
  MinLength,
} from 'class-validator';

export class UpdateTaskDto {
  @IsString()
  @IsUUID()
  @IsOptional()
  readonly id?: string;

  @IsString()
  @MinLength(15)
  @IsOptional()
  readonly description?: string;

  @IsBoolean()
  @IsOptional()
  readonly done?: boolean;
}
