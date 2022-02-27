import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { RestrantsModule } from './restrants/restrants.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "postgres",
      host: "localhost",
      port: 5432,
      username:"nubereatsremote",
      password:"Asd1fgh2",
      database: "nuber-eats",
      autoLoadEntities: true,
      synchronize:true,
      logging:true
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver:ApolloDriver,
      autoSchemaFile:true
    }), 
    RestrantsModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
