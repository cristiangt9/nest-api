import { IsBoolean, IsString, MinLength } from 'class-validator';

export class CreateTaskDto {
  @IsString()
  @MinLength(15)
  readonly description: string;

  @IsBoolean()
  readonly done: boolean;
}
