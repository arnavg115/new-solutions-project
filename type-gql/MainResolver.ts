import "reflect-metadata";
import { Arg, Int, Query, Resolver } from "type-graphql";
import { data } from "./config";
import { Editions } from "./Editions";

@Resolver()
export class MainResolver {
  @Query(() => String)
  hello(@Arg("text") text: string) {
    return text;
  }

  @Query(() => Editions)
  getOne(@Arg("num", () => Int) num: number): Editions {
    return data[num];
  }

  @Query(() => [Editions])
  getMany(): Editions[] {
    return data;
  }
}
