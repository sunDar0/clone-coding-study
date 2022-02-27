import { Module } from '@nestjs/common';
import { RestrantsResolver } from './restrants.resolver';

@Module({
  providers:[RestrantsResolver]
})
export class RestrantsModule {}
