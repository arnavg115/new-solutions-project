import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class Article {
  @Field(() => String)
  name: string;

  @Field(() => String)
  desc: string;

  @Field(() => String)
  href: string;
}
