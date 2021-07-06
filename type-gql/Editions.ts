import "reflect-metadata";
import { Field, Int, ObjectType } from "type-graphql";
import { Article } from "./Article";

@ObjectType()
export class Editions {
  @Field(() => Int)
  //   @ts-ignore
  num: number;

  @Field()
  //   @ts-ignore
  name: string;

  @Field(() => [Article])
  //   @ts-ignore
  articles: Article[];
}
