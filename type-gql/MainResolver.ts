import Fuse from "fuse.js";
import "reflect-metadata";
import { Arg, Field, Int, ObjectType, Query, Resolver } from "type-graphql";

import { data } from "./config";
import { Editions } from "./Editions";

@Resolver()
export class MainResolver {
  @Query(() => String)
  hello(@Arg("text") text: string) {
    return text;
  }

  @Query(() => Editions)
  getOne(@Arg("index", () => Int) index: number): Editions {
    if (index + 1 > data.length) {
      throw new Error("404 Not found");
    }
    return data[index];
  }

  @Query(() => [Editions])
  getMany(): Editions[] {
    return data;
  }

  @Query(() => [Editions])
  getSearch(@Arg("query") query: string) {
    if (query === "") {
      return data;
    }
    const ret: any = [];
    const fuse = new Fuse(data, {
      keys: ["articles.name", "articles.desc"],
    });
    const res = fuse.search(query);
    res.forEach((x) => {
      ret.push(x.item);
    });

    return ret;
  }
}
