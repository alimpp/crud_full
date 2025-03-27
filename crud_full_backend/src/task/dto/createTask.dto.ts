import { IsBoolean, IsString, Length } from 'class-validator';

export class CreateTaskDto {
  @IsString()
  @Length(5, 100)
  title: string;
  @IsString()
  @Length(5, 200)
  description: string;
  @IsBoolean()
  status: boolean;
}
