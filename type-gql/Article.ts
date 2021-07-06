import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class Article {
  @Field(() => String)
  //   @ts-ignore
  name: string;

  @Field(() => String)
  //   @ts-ignore
  desc: string;

  @Field(() => String)
  //   @ts-ignore
  href: string;
}
