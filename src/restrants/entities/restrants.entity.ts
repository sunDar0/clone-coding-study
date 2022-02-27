import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class Restrants
{
  @Field(is => String)
  name: string;

  @Field(is => Boolean)
  isVegan: boolean;

  @Field(is => String)
  address: string;

  @Field(is => String)
  owner: string;

} 