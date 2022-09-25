import { Collection } from "collect.js";

type CollectionWithoutGet = new <Item>(collection?: Object | unknown[] | undefined) => {
  [P in Exclude<keyof Collection<Item>, "get">]: Collection<unknown>[P];
};

const CollectionWithoutGet: CollectionWithoutGet = Collection;

export class QueryCollection<Item> extends CollectionWithoutGet<Item> {
  get(): Item[] {
    return this.all();
  }
}
