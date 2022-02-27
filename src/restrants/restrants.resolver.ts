import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { CreateRestrantsDto } from "./dtos/create-restrants.dto";
import { Restrants } from "./entities/restrants.entity";

@Resolver(of => Restrants)
export class RestrantsResolver {
  
  @Query(returns => [Restrants])
  restrants(@Args('veganOnly') veganOnly: boolean): Restrants[]
  {
    console.log(veganOnly);
    return [];
  }

  @Mutation(returns => Boolean)
  createRestrants(
    @Args() createRestrantsInput : CreateRestrantsDto
  ): boolean
  {
    console.log(createRestrantsInput);
    return true;
  }

}