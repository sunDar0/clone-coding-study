import { ArgsType, Field, InputType } from "@nestjs/graphql";
import { IsBoolean, isBoolean, IsString, Length, min } from "class-validator";

@ArgsType()
export class CreateRestrantsDto
{
  @Field(is => String)
  @IsString()
  @Length(3, 6)
  name : string;
  
  @Field(is => Boolean) 
  @IsBoolean()
  isVegan : boolean
  
  @Field(is => String) 
  @IsString()
  address : string;
  
  @Field(is => String) 
  @IsString()
  @Length(3, 6)
  owner : string;
}