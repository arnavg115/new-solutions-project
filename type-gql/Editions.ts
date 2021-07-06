import "reflect-metadata";
import { Field, Int, ObjectType } from "type-graphql";
import { Article } from "./Article";

@ObjectType()
export class Editions {
  @Field(() => Int)
  num: number;

  @Field()
  name: string;

  @Field(() => [Article])
  articles: Article[];
}
