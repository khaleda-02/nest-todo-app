import {
  IsOptional,
  MinDate,
  IsDateString,
  IsNotEmpty,
  IsBoolean,
} from 'class-validator';
//Todo : make an enum for cater
export class CreateTodoDto {
  //! IsDate => don't use it
  @IsDateString()
  @MinDate(new Date())
  @IsOptional()
  deadline?: Date;

  @IsNotEmpty()
  catergory: string;

  @IsNotEmpty()
  title: string;

  @IsOptional()
  @IsNotEmpty()
  discription?: string;

  @IsOptional()
  @IsBoolean()
  isDone?: boolean;
}
