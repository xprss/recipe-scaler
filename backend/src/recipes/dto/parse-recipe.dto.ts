import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class ParseRecipeDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(20000)
  text!: string;
}
