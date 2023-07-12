import { ApiProperty } from '@nestjs/swagger';
import {
  IsOptional,
  MinDate,
  IsDateString,
  IsNotEmpty,
  IsDate,
  IsBoolean,
} from 'class-validator';
//Todo : make an enum for cater
export class CreateTodoDto {
  //! IsDate => don't use it
  @ApiProperty({ required: false })
  @IsDateString()
  @MinDate(new Date())
  @IsOptional()
  deadline?: Date;

  @ApiProperty()
  @IsNotEmpty()
  catergory: string;

  @ApiProperty()
  @IsNotEmpty()
  title: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsNotEmpty()
  discription?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsBoolean()
  isDone?: boolean;
}
